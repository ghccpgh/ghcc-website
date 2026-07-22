import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook"

type WebhookPayload = {
 _type: string;
 slug?: { current?: string };
};

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_REVALIDATE_SECRET!,
    );
    
    if (!isValidSignature) {
        return new NextResponse("Invalid signature", {status: 401})
    }
    
    if (!body?._type) {
        return new NextResponse("Bad request", { status: 400})
    }
    
    // revalidate based on what document changed

    switch (body._type) {
      case "post":
        revalidatePath("/blog");
        if (body.slug?.current) {
          revalidatePath(`/blog/${body.slug.current}`);
        }
        break;
      case "announcement":
        revalidatePath("/announcements");
        break;
      case "boardMember":
        revalidatePath("/about/board");
        break;
      case "partner":
        revalidatePath("/about/partners");
        break;
      case "historyEntry":
        revalidatePath("/about/history");
        break;
      default:
        // For anything else, revalidate the homepage
        revalidatePath("/");
    }

    return NextResponse.json({ revalidated: true, type: body._type });
  } catch (err) {
    console.error("Revalidation error:", err);
    return new NextResponse("Error revalidating", { status: 500 });
  }
}