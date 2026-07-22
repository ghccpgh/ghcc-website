export interface TimelineItemData {
  year: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    caption?: string;
  };
}