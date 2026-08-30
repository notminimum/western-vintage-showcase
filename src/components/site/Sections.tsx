import { Instagram, Music2, Mail, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import logo from "@/assets/logo.png";
import { services, stats } from "./data";
import photo2 from "@/assets/photo_2.jpg.asset.json";

export function Hero() {
  return (
    <section
      id="home"
      className="surface-ink relative scroll-mt-24 overflow-hidden rounded-b-[2.5rem] px-5 pb-16 pt-14 sm:px-8 lg:px-12 lg:pt-20"
    >
      <div
        aria-hidden
        className="absolute -right-24 -top-24 size-80 rounded-full bg-gold/20 blur-3xl"
      />
      <div className="relative max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
          Curated thrift · Styling · Culture
        </p>
        <img
          src={logo}
          alt="Western Vintage"
          width={1152}
          height={576}
          className="reveal mt-6 w-full max-w-xl"
        />
        <p className="mt-7 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg">
          A vintage studio out of Ghana rehoming rare pieces and building loud, tender looks — from
          gala runways to paint-splash sets and street-style archives.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="hero" size="lg">
            <a href="#portfolio">View Work</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-cream/25 bg-transparent text-cream hover:bg-cream hover:text-ink"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="grid grid-cols-2 gap-4 px-5 py-10 sm:px-8 lg:grid-cols-4 lg:px-12">
      {stats.map((s) => (
        <div
          key={s.label}
          className="card-lift rounded-2xl border border-border bg-card px-5 py-6 shadow-[var(--shadow-card)]"
        >
          <p className="text-display text-3xl text-gold-deep">{s.value}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
            {s.label}
          </p>
        </div>
      ))}
    </section>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 px-5 py-16 sm:px-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-12"
    >
      <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
        <img
          src={photo2.url}
          alt="The Western Vintage crew styled in thrifted looks"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-8 lg:mt-0">
        <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">The story</p>
        <h2 className="text-display mt-2 text-3xl sm:text-4xl">
          Second-hand, never second-best
        </h2>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          Western Vintage started as a single rack at a Sunday market and grew into a gala. We dig
          through bales for the pieces with a pulse — paint-splashed knits, cowboy boots, cropped
          workwear — then style them into looks that read as personal, not costume.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Every drop is documented: photographed, filmed and archived, so the clothes keep their
          story after they leave the rack.
        </p>
        <div className="mt-7 flex flex-wrap gap-2">
          {["Sourcing", "Styling", "Photography", "Events"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-gold/60 px-3 py-1 text-xs font-medium text-gold-deep"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 px-5 py-16 sm:px-8 lg:px-12">
      <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">What we do</p>
      <h2 className="text-display mt-2 text-3xl sm:text-4xl">Services</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="card-lift rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
          >
            <span className="text-display text-sm text-gold-deep">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-display mt-3 text-xl">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <section id="contact" className="scroll-mt-24 px-5 py-16 sm:px-8 lg:px-12">
      <div className="surface-ink rounded-[2rem] px-6 py-10 sm:px-10 lg:grid lg:grid-cols-[1fr_1.1fr] lg:gap-12">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Say hello</p>
          <h2 className="text-display mt-2 text-3xl text-cream sm:text-4xl">
            Book a rack, a shoot, or a whole gala
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-cream/65">
            Tell us what you're building. We reply within two working days.
          </p>
          <div className="mt-7 flex gap-3">
            <a
              href="https://www.instagram.com/western_vintage_?igsi=OWU5aWViOXkzb3Rw"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid size-10 place-items-center rounded-full border border-cream/20 text-cream/70 transition-colors hover:border-gold hover:text-gold"
            >
              <Instagram className="size-5" />
            </a>
            <a
              href="#contact"
              aria-label="TikTok"
              className="grid size-10 place-items-center rounded-full border border-cream/20 text-cream/70 transition-colors hover:border-gold hover:text-gold"
            >
              <Music2 className="size-5" />
            </a>
            <a
              href="mailto:hello@westernvintage.com"
              aria-label="Email"
              className="grid size-10 place-items-center rounded-full border border-cream/20 text-cream/70 transition-colors hover:border-gold hover:text-gold"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>
        <form
          className="mt-9 space-y-4 lg:mt-0"
          onSubmit={(e) => {
            e.preventDefault();
            setSending(true);
            setTimeout(() => {
              setSending(false);
              (e.target as HTMLFormElement).reset();
              toast.success("Message sent — we'll be in touch soon.");
            }, 600);
          }}
        >
          <Input
            required
            name="name"
            placeholder="Your name"
            className="h-12 rounded-xl border-cream/20 bg-cream/5 text-cream placeholder:text-cream/40"
          />
          <Input
            required
            type="email"
            name="email"
            placeholder="Email address"
            className="h-12 rounded-xl border-cream/20 bg-cream/5 text-cream placeholder:text-cream/40"
          />
          <Textarea
            required
            name="message"
            rows={5}
            placeholder="What do you have in mind?"
            className="rounded-xl border-cream/20 bg-cream/5 text-cream placeholder:text-cream/40"
          />
          <Button type="submit" variant="hero" size="lg" disabled={sending} className="w-full">
            <Send className="size-4" />
            {sending ? "Sending…" : "Send message"}
          </Button>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 border-t border-border px-5 py-10 sm:px-8 lg:px-12">
      <div className="min-w-0">
        <img
          src={logo}
          alt="Western Vintage"
          width={1152}
          height={576}
          loading="lazy"
          className="h-10 w-auto"
        />
        <p className="mt-3 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Western Vintage. All rights reserved.
        </p>
      </div>
      <div className="flex shrink-0 gap-3 text-muted-foreground">
        <a
          href="https://www.instagram.com/western_vintage_?igsi=OWU5aWViOXkzb3Rw"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="hover:text-gold-deep"
        >
          <Instagram className="size-5" />
        </a>
        <a href="#contact" aria-label="TikTok" className="hover:text-gold-deep">
          <Music2 className="size-5" />
        </a>
        <a href="mailto:hello@westernvintage.com" aria-label="Email" className="hover:text-gold-deep">
          <Mail className="size-5" />
        </a>
      </div>
    </footer>
  );
}
