import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import logo from "@/assets/logo.png";
import photo2 from "@/assets/photo_2.jpg.asset.json";
import photo7 from "@/assets/photo_7.jpg.asset.json";

export function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-24 border-b border-border bg-background px-5 py-10 sm:px-8 lg:px-12 lg:py-16"
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-12">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-deep">Western Region, Ghana</p>
          <img src={logo} alt="Western Vintage" width={1152} height={576} className="mt-6 w-full max-w-xl" />
          <h1 className="text-display mt-8 max-w-xl text-3xl leading-tight sm:text-5xl">A cultural platform for vintage fashion and contemporary life.</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">Western Vintage brings together fashion, music, creativity, games, food and the culture of Ghana's Western Region.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="ink" size="lg"><a href="#portfolio">View our work</a></Button>
            <Button asChild variant="outlineInk" size="lg"><a href="#contact">Contact the team</a></Button>
          </div>
        </div>
        <img src={photo7.url} alt="Guest at the Western Vintage event entrance" width={900} height={1200} className="aspect-[4/5] w-full object-cover" />
      </div>
    </section>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-border px-5 py-14 sm:px-8 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 lg:px-12 lg:py-20"
    >
      <div className="overflow-hidden">
        <img
          src={photo2.url}
          alt="The Western Vintage crew styled in thrifted looks"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-8 lg:mt-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-deep">About us</p>
        <h2 className="text-display mt-3 text-3xl sm:text-5xl">Lifestyle and culture of the West</h2>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          Western Vintage is a youth-focused lifestyle and cultural experience celebrating vintage
          fashion, music, creativity, games, food and the unique culture of the Western Region.
        </p>
        <div className="mt-8 grid grid-cols-2 border-t border-border text-sm sm:grid-cols-3">
          {["Vintage Fashion", "Music", "Creativity", "Games", "Food", "Culture"].map((t, i) => (
            <span key={t} className={`border-b border-border py-3 ${i % 2 === 0 ? "pr-3" : "pl-3 sm:pl-0"}`}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <section id="contact" className="surface-ink scroll-mt-24 border-t border-cream/15 px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="lg:grid lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Say hello</p>
           <h2 className="text-display mt-3 text-3xl text-cream sm:text-5xl">
             Plan your next project with us
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-cream/65">
             Tell us what you are building. We reply within two working days.
          </p>
          <div className="mt-8 flex flex-wrap gap-5 text-xs font-semibold uppercase tracking-[0.14em] text-cream/70">
            <a
              href="https://www.instagram.com/western_vintage_?igsi=OWU5aWViOXkzb3Rw"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
               Instagram
            </a>
            <a
              href="#contact"
              aria-label="TikTok"
            >
               TikTok
            </a>
            <a
              href="mailto:hello@westernvintage.com"
              aria-label="Email"
            >
               Email
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
              toast.success("Message sent. We will be in touch soon.");
            }, 600);
          }}
        >
          <Input
            required
            name="name"
            placeholder="Your name"
            className="h-12 rounded-none border-cream/30 bg-transparent text-cream placeholder:text-cream/45"
          />
          <Input
            required
            type="email"
            name="email"
            placeholder="Email address"
            className="h-12 rounded-none border-cream/30 bg-transparent text-cream placeholder:text-cream/45"
          />
          <Textarea
            required
            name="message"
            rows={5}
            placeholder="What do you have in mind?"
            className="rounded-none border-cream/30 bg-transparent text-cream placeholder:text-cream/45"
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
    <footer className="grid gap-8 border-t border-border px-5 py-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:px-8 lg:px-12">
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
      <div className="flex shrink-0 flex-wrap gap-5 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
        <a href="https://www.instagram.com/western_vintage_?igsi=OWU5aWViOXkzb3Rw" target="_blank" rel="noreferrer">Instagram</a>
        <a href="/terms">Terms</a>
        <a href="/privacy">Privacy</a>
      </div>
    </footer>
  );
}
