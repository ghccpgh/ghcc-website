import { type NextRequest, NextResponse } from "next/server";

const submissions = new Map<string, number[]>();
const RATE_LIMIT = 3;
const WINDOW_MS = 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = submissions.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < WINDOW_MS);
  if (recent.length >= RATE_LIMIT) return true;
  recent.push(now);
  submissions.set(ip, recent);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    if (!scriptUrl) {
      console.error("GOOGLE_SCRIPT_URL is not set");
      return NextResponse.json({ error: "Server misconfigured." }, { status: 500 });
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please wait a minute and try again." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { firstName, lastName, email, message, company } = body;

    // Honeypot to make bots fill hidden fields (company =) pretend success so they dont retry
    if (company) {
      return NextResponse.json({ success: true });
    }

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all fields." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (message.length > 500) {
      return NextResponse.json(
        { error: "Message is too long." },
        { status: 400 }
      );
    }

    // Forward to Google Apps Script
    const googleResponse = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({ firstName, lastName, email, message }),
    });

    if (!googleResponse.ok) {
      console.error("Google Script returned", googleResponse.status);
      return NextResponse.json(
        { error: "Could not submit your message. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}