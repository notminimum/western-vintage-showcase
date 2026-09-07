import { useEffect, useState } from "react";
import { Menu, X, Instagram, Music2, Mail } from "lucide-react";
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
    <nav className="flex flex-col gap-1">
      {links.map((l) => (
        <a
          key={l.id}
          href={`#${l.id}`}
          onClick={() => setOpen(false)}
          className={cn(
            "rounded-xl px-4 py-2.5 text-sm font-medium tracking-wide transition-colors",
            active === l.id
              ? "bg-gold text-ink"
              : "text-cream/70 hover:bg-cream/10 hover:text-cream",
          )}
        >
          {l.label}
        </a>
      ))}
    </nav>
  );

  return (
    <>
      {/* Mobile bar */}
      <header className="surface-ink sticky top-0 z-50 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:hidden">
        <a href="#home" className="min-w-0">
          <img src="/images/western-vintage-logo.png" alt="Western Vintage" width={768} height={768} className="size-10 rounded-full" />
        </a>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 rounded-lg border border-cream/20 p-2 text-cream"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </header>
      {open && (
        <div className="surface-ink reveal sticky top-[60px] z-40 px-4 pb-5 lg:hidden">{nav}</div>
      )}

      {/* Desktop sidebar */}
      <aside className="surface-ink fixed left-0 top-0 z-50 hidden h-screen w-64 flex-col justify-between px-5 py-8 lg:flex">
        <div>
          <a href="#home" className="block">
            <img
              src="/images/western-vintage-logo.png"
              alt="Western Vintage"
              width={768}
              height={768}
              className="size-28 rounded-full"
            />
          </a>
          <p className="mt-4 px-1 text-[11px] uppercase tracking-[0.22em] text-cream/50">
            Vintage Studio · GH
          </p>
          <div className="mt-8">{nav}</div>
        </div>
        <div className="space-y-4 px-1">
          <div className="flex gap-3 text-cream/60">
            <a
              href="https://www.instagram.com/western_vintage_?igsi=OWU5aWViOXkzb3Rw"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-gold"
            >
              <Instagram className="size-5" />
            </a>
            <a href="#contact" aria-label="TikTok" className="hover:text-gold">
              <Music2 className="size-5" />
            </a>
            <a href="mailto:hello@westernvintage.com" aria-label="Email" className="hover:text-gold">
              <Mail className="size-5" />
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
