import photo1 from "@/assets/photo_1.jpg.asset.json";
import photo2 from "@/assets/photo_2.jpg.asset.json";
import photo6 from "@/assets/photo_6.jpg.asset.json";
import photo7 from "@/assets/photo_7.jpg.asset.json";
import reel1 from "@/assets/reel_1.mp4.asset.json";
import reel2 from "@/assets/reel_2.mp4.asset.json";
import reel3 from "@/assets/reel_3.mp4.asset.json";

export const categories = ["All", "Photography", "Editorial"] as const;
export type Category = (typeof categories)[number];

export type Project = {
  id: string;
  title: string;
  category: Exclude<Category, "All">;
  year: string;
  image: string;
  tall?: boolean;
};

export const projects: Project[] = [
  {
    id: "host",
    title: "Gala Host: Paint-Splash Set",
    category: "Photography",
    year: "2025",
    image: photo1.url,
    tall: true,
  },
  {
    id: "crew",
    title: "The Thrift Crew Lineup",
    category: "Editorial",
    year: "2025",
    image: photo2.url,
  },
  {
    id: "denim",
    title: "Denim & Cowboy Boots",
    category: "Editorial",
    year: "2025",
    image: photo6.url,
    tall: true,
  },
  {
    id: "arch",
    title: "Western Vintage Archway",
    category: "Photography",
    year: "2025",
    image: photo7.url,
  },
];

export const reels = [
  { id: "r1", title: "Gala Walkthrough", url: reel1.url },
  { id: "r2", title: "Stage & Sound", url: reel2.url },
  { id: "r3", title: "Street Style Cuts", url: reel3.url },
];

export const stats = [
  { label: "Years active", value: "6" },
  { label: "Projects shipped", value: "120+" },
  { label: "Brands styled", value: "45" },
  { label: "Pieces rehomed", value: "9.4k" },
];

export const services = [
  {
    title: "Vintage Sourcing",
    copy: "Archive digs across markets and estates, curated into wearable, one-of-one racks.",
  },
  {
    title: "Editorial Styling",
    copy: "Full looks built for shoots, runways and gala stages, with silhouette considered first.",
  },
  {
    title: "Brand & Set Design",
    copy: "Signage, archways and identity systems that carry a retro-Americana feel.",
  },
  {
    title: "Event Production",
    copy: "Pop-ups and galas end to end: vendors, stage, sound, crowd flow, documentation.",
  },
];
