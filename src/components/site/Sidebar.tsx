import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
    <nav aria-label="Primary navigation" className="flex flex-col lg:flex-row lg:items-center lg:gap-7">
      {links.map((l) => (
        <a
          key={l.id}
          href={`#${l.id}`}
          onClick={() => setOpen(false)}
          className={cn(
            "border-b px-1 py-3 text-xs font-semibold uppercase tracking-[0.12em] lg:border-b-2 lg:py-2",
            active === l.id
              ? "border-gold text-foreground"
              : "border-transparent text-muted-foreground",
          )}
        >
          {l.label}
        </a>
      ))}
    </nav>
  );

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background px-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-6">
          <a href="#home" className="min-w-0" aria-label="Western Vintage home">
            <img src={logo} alt="Western Vintage" width={1152} height={576} className="h-11 w-auto" />
          </a>
          <div className="hidden lg:block">{nav}</div>
          <Button
            variant="outlineInk"
            size="sm"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
            className="lg:hidden"
          >
            {open ? "Close" : "Menu"}
          </Button>
        </div>
      </header>
      {open && (
        <div id="mobile-navigation" className="sticky top-20 z-40 border-b border-border bg-background px-5 pb-4 lg:hidden">{nav}</div>
      )}
    </>
  );
}
