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
      className="scroll-mt-24 border-b border-border px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-end">
        <div>
        <p className="section-label">Vintage fashion / music / culture</p>
        <img
          src={logo}
          alt="Western Vintage"
          width={1152}
          height={576}
          className="mt-8 w-full max-w-2xl"
        />
        </div>
        <div className="border-t border-foreground pt-6">
        <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          A vintage studio out of Ghana rehoming rare pieces and building considered looks, from
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
            className="bg-transparent"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
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
      className="scroll-mt-24 border-b border-border px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
      <div className="overflow-hidden">
        <img
          src={photo2.url}
          alt="The Western Vintage crew styled in thrifted looks"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-8 lg:mt-0">
        <p className="section-label">About us</p>
        <h2 className="text-display mt-3 text-3xl sm:text-4xl">Lifestyle and culture of the West</h2>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          Western Vintage is a youth-focused lifestyle and cultural experience celebrating vintage
          fashion, music, creativity, games, food and the unique culture of the Western Region.
        </p>
        <div className="mt-8 grid grid-cols-2 border-y border-border text-xs font-semibold uppercase tracking-[0.08em] sm:grid-cols-3">
          {["Vintage Fashion", "Music", "Creativity", "Games", "Food", "Culture"].map((t) => <span key={t} className="border-b border-border py-3 pr-3 last:border-b-0 sm:[&:nth-last-child(-n+3)]:border-b-0">{t}</span>)}
        </div>
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
    <section id="contact" className="scroll-mt-24 bg-ink px-5 py-20 text-cream sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1440px] lg:grid lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Say hello</p>
          <h2 className="text-display mt-2 text-3xl text-cream sm:text-4xl">
             Book a rack, a shoot, or a gala
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-cream/65">
            Tell us what you're building. We reply within two working days.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-[0.1em] text-cream/70">
            <a href="https://www.instagram.com/western_vintage_?igsi=OWU5aWViOXkzb3Rw" target="_blank" rel="noreferrer">Instagram</a>
            <a href="#contact">TikTok</a>
            <a href="mailto:hello@westernvintage.com">Email</a>
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
            className="h-12 rounded-none border-cream/30 bg-transparent text-cream placeholder:text-cream/40"
          />
          <Input
            required
            type="email"
            name="email"
            placeholder="Email address"
            className="h-12 rounded-none border-cream/30 bg-transparent text-cream placeholder:text-cream/40"
          />
          <Textarea
            required
            name="message"
            rows={5}
            placeholder="What do you have in mind?"
            className="rounded-none border-cream/30 bg-transparent text-cream placeholder:text-cream/40"
          />
          <Button type="submit" variant="hero" size="lg" disabled={sending} className="w-full">
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
      <div className="flex shrink-0 gap-5 text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        <a href="https://www.instagram.com/western_vintage_?igsi=OWU5aWViOXkzb3Rw" target="_blank" rel="noreferrer">Instagram</a>
        <a href="mailto:hello@westernvintage.com">Email</a>
      </div>
    </footer>
  );
}
