import photo1 from "@/assets/photo_1.jpg.asset.json";
import photo2 from "@/assets/photo_2.jpg.asset.json";
import photo6 from "@/assets/photo_6.jpg.asset.json";
import photo7 from "@/assets/photo_7.jpg.asset.json";
import reel1 from "@/assets/reel_1.mp4.asset.json";
import reel2 from "@/assets/reel_2.mp4.asset.json";
import reel3 from "@/assets/reel_3.mp4.asset.json";

export type Category = "Photography" | "Branding" | "Products" | "Events";

export type Project = {
  id: string;
  title: string;
  category: Category;
  year: string;
  image: string;
  span: "tall" | "wide" | "normal";
};

export const projects: Project[] = [
  {
    id: "host",
    title: "Gala Host — Paint-Splash Set",
    category: "Photography",
    year: "2025",
    image: photo1.url,
    span: "tall",
  },
  {
    id: "crew",
    title: "The Thrift Crew Lineup",
    category: "Editorial",
    year: "2025",
    image: photo2.url,
    span: "wide",
  } as unknown as Project,
  {
    id: "denim",
    title: "Denim & Cowboy Boots",
    category: "Products",
    year: "2025",
    image: photo6.url,
    span: "tall",
  },
  {
    id: "arch",
    title: "Western Vintage Archway",
    category: "Branding",
    year: "2025",
    image: photo7.url,
    span: "normal",
  },
];

export const reels = [
  { id: "r1", title: "Gala Walkthrough", url: reel1.url },
  { id: "r2", title: "Stage & Sound", url: reel2.url },
  { id: "r3", title: "Street Style Cuts", url: reel3.url },
];

export const categories = ["All", "Photography", "Branding", "Products", "Editorial"] as const;

export const stats = [
  { label: "Years active", value: "6" },
  { label: "Projects shipped", value: "120+" },
  { label: "Brands styled", value: "45" },
  { label: "Pieces rehomed", value: "9.4k" },
];
