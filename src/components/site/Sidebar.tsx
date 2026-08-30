import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const links = [
  { id: "home", label: "Home" },
  { id: "portfolio", label: "Portfolio" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const nav = (
    <nav className="flex flex-col">
      {links.map((l) => (
        <a
          key={l.id}
          href={`#${l.id}`}
          onClick={() => setOpen(false)}
          className={cn(
            "border-b border-cream/15 px-1 py-3 text-xs font-semibold uppercase tracking-[0.14em]",
            active === l.id
              ? "text-gold"
              : "text-cream/70",
          )}
        >
          {l.label}
        </a>
      ))}
    </nav>
  );

  return (
    <>
      <header className="surface-ink sticky top-0 z-50 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-cream/15 px-5 py-3 lg:hidden">
        <a href="#home" className="min-w-0">
          <img src={logo} alt="Western Vintage" width={1152} height={576} className="h-9 w-auto" />
        </a>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 shrink-0 place-items-center border border-cream/30 text-cream"
        >
          <span aria-hidden className="text-xl leading-none">{open ? "×" : "≡"}</span>
        </button>
      </header>
      {open && (
        <div className="surface-ink sticky top-[65px] z-40 px-5 pb-5 lg:hidden">{nav}</div>
      )}

      <aside className="surface-ink fixed left-0 top-0 z-50 hidden h-screen w-64 flex-col justify-between border-r border-cream/15 px-6 py-8 lg:flex">
        <div>
          <a href="#home" className="block">
            <img
              src={logo}
              alt="Western Vintage"
              width={1152}
              height={576}
              className="h-16 w-auto"
            />
          </a>
          <p className="mt-4 px-1 text-[11px] uppercase tracking-[0.22em] text-cream/50">
            Vintage Studio · GH
          </p>
          <div className="mt-8">{nav}</div>
        </div>
        <div className="space-y-4 px-1">
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-cream/60">
            <a
              href="https://www.instagram.com/western_vintage_?igsi=OWU5aWViOXkzb3Rw"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a href="#contact" aria-label="TikTok">
              TikTok
            </a>
            <a href="mailto:hello@westernvintage.com" aria-label="Email">
              Email
            </a>
          </div>
          <p className="text-[11px] leading-relaxed text-cream/40">
            © {new Date().getFullYear()} Western Vintage
          </p>
        </div>
      </aside>
    </>
  );
}
