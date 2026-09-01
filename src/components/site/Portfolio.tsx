import { useMemo, useState } from "react";
import { categories, projects, reels, type Category } from "./data";
import { cn } from "@/lib/utils";

export function Portfolio() {
  const [filter, setFilter] = useState<Category>("All");
  const items = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="portfolio" className="scroll-mt-24 border-b border-border px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 border-b border-foreground pb-5 sm:flex sm:justify-between">
        <div className="min-w-0">
          <p className="section-label">Selected work</p>
          <h2 className="text-display mt-3 text-4xl sm:text-5xl">The Archive</h2>
        </div>
        <span className="shrink-0 text-sm text-muted-foreground">{items.length} items</span>
      </div>

      <div className="flex flex-wrap border-b border-border py-3">
        {categories.map((c) => (
          <Button
            key={c}
            variant="ghost"
            onClick={() => setFilter(c)}
            className={cn(
              "h-10 rounded-none border-b-2 px-4 text-xs font-semibold uppercase tracking-[0.1em]",
              filter === c
                ? "border-gold text-foreground"
                : "border-transparent text-muted-foreground",
            )}
          >
            {c}
          </Button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2">
        {items.map((p) => (
          <article
            key={p.id}
            className="border-b border-border pb-5"
          >
            <div className={cn("overflow-hidden bg-muted", p.tall ? "aspect-[4/5]" : "aspect-[4/3]") }>
              <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="mt-5 grid grid-cols-[1fr_auto] items-start gap-5">
              <h3 className="text-display text-xl sm:text-2xl">{p.title}</h3>
              <p className="text-right text-xs uppercase tracking-[0.1em] text-muted-foreground">{p.category}<br />{p.year}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-24 border-b border-foreground pb-5">
        <p className="section-label">Film</p>
        <h3 className="text-display mt-3 text-3xl">Motion Reels</h3>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {reels.map((r) => (
          <figure
            key={r.id}
            className="border-b border-border bg-ink"
          >
            <video
              src={r.url}
              controls
              playsInline
              preload="metadata"
              className="aspect-video w-full object-cover"
            />
            <figcaption className="px-1 py-4 text-sm text-cream/80">{r.title}</figcaption>
          </figure>
        ))}
      </div>
      </div>
    </section>
  );
}
