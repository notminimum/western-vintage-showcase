import { createFileRoute } from "@tanstack/react-router";
import { Sidebar } from "@/components/site/Sidebar";
import { Portfolio } from "@/components/site/Portfolio";
import { About, Contact, Footer, Hero } from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Western Vintage | Culture and Style Portfolio" },
      {
        name: "description",
        content:
          "Western Vintage is a Ghana-based vintage studio: rare sourced pieces, editorial styling, brand and set design, and event production. Browse the archive.",
      },
      { property: "og:title", content: "Western Vintage | Cultural Portfolio" },
      {
        property: "og:description",
        content:
          "Rare sourced pieces, editorial styling and gala production from a Ghana-based vintage studio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />
      <main className="lg:pl-64">
        <Hero />
        <Portfolio />
        <About />
        
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
