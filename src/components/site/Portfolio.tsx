import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { categories, projects, reels, type Category } from "./data";
import { cn } from "@/lib/utils";

export function Portfolio() {
  const [filter, setFilter] = useState<Category>("All");
  const items = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="portfolio" className="scroll-mt-24 px-5 py-16 sm:px-8 lg:px-12">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:flex sm:justify-between">
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Selected work
          </p>
          <h2 className="text-display mt-2 text-3xl sm:text-4xl">The Archive</h2>
        </div>
        <span className="shrink-0 text-sm text-muted-foreground">{items.length} items</span>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-all",
              filter === c
                ? "border-transparent bg-ink text-cream"
                : "border-border bg-card text-foreground hover:border-gold hover:text-gold-deep",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((p, i) => (
          <article
            key={p.id}
            style={{ animationDelay: `${i * 70}ms` }}
            className={cn(
              "reveal card-lift group relative overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-card)]",
              p.tall ? "row-span-2" : "row-span-1",
            )}
          >
            <img
              src={p.image}
              alt={p.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <span className="inline-block rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink">
                {p.category}
              </span>
              <h3 className="text-display mt-3 text-lg text-cream">{p.title}</h3>
              <p className="mt-1 text-xs text-cream/60">{p.year}</p>
            </div>
            <span className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-cream/90 text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <ArrowUpRight className="size-4" />
            </span>
          </article>
        ))}
      </div>

      <h3 className="text-display mt-16 text-2xl">Motion Reels</h3>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {reels.map((r) => (
          <figure
            key={r.id}
            className="card-lift overflow-hidden rounded-3xl bg-ink shadow-[var(--shadow-card)]"
          >
            <video
              src={r.url}
              controls
              playsInline
              preload="metadata"
              className="aspect-[9/16] w-full object-cover sm:aspect-video"
            />
            <figcaption className="px-4 py-3 text-sm text-cream/80">{r.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
