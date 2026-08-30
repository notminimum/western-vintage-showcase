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
    <section id="portfolio" className="scroll-mt-24 border-t border-border px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 border-b border-foreground pb-5 sm:flex sm:justify-between">
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Selected work
          </p>
          <h2 className="text-display mt-2 text-3xl sm:text-5xl">The Archive</h2>
        </div>
        <span className="shrink-0 text-sm text-muted-foreground">{items.length} items</span>
      </div>

      <div className="flex flex-wrap border-b border-border">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={cn(
              "border-b-2 px-4 py-4 text-xs font-semibold uppercase tracking-[0.12em]",
              filter === c
                ? "border-gold-deep text-foreground"
                : "border-transparent text-muted-foreground",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
        {items.map((p) => (
          <article
            key={p.id}
            className="border-b border-border pb-5"
          >
            <div className={cn("overflow-hidden bg-muted", p.tall ? "aspect-[4/5]" : "aspect-[4/3]")}>
              <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="mt-4 grid grid-cols-[minmax(0,1fr)_auto] gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-deep">{p.category}</p>
                <h3 className="text-display mt-2 text-lg">{p.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground">{p.year}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 flex items-end justify-between border-b border-foreground pb-4">
        <h3 className="text-display text-2xl">Motion Reels</h3>
        <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Field recordings</span>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {reels.map((r) => (
          <figure
            key={r.id}
            className="border-b border-border pb-4"
          >
            <video
              src={r.url}
              controls
              playsInline
              preload="metadata"
              className="aspect-[9/16] w-full object-cover sm:aspect-video"
            />
            <figcaption className="pt-3 text-sm font-semibold">{r.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
