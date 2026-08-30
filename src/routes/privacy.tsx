import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [
    { title: "Privacy Policy | Western Vintage" },
    { name: "description", content: "How Western Vintage handles information submitted through this website." },
    { property: "og:title", content: "Privacy Policy | Western Vintage" },
    { property: "og:description", content: "How Western Vintage handles information submitted through this website." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: Privacy,
});

function Privacy() {
  return <main className="mx-auto min-h-screen max-w-3xl px-5 py-12 sm:px-8 sm:py-20">
    <Link to="/" className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-deep">Western Vintage</Link>
    <h1 className="text-display mt-10 text-4xl">Privacy Policy</h1>
    <p className="mt-3 text-sm text-muted-foreground">Last updated 30 August 2026</p>
    <div className="mt-10 space-y-8 border-t border-border pt-8 leading-relaxed text-muted-foreground">
      <section><h2 className="text-display text-xl text-foreground">Information you provide</h2><p className="mt-3">When you contact us, you may provide your name, email address and details about your enquiry. We use this information only to respond and manage the resulting conversation.</p></section>
      <section><h2 className="text-display text-xl text-foreground">Sharing and retention</h2><p className="mt-3">We do not sell personal information. We retain enquiry details only as long as reasonably needed for communication, records and legal obligations.</p></section>
      <section><h2 className="text-display text-xl text-foreground">Your choices</h2><p className="mt-3">You may ask us to correct or delete personal information associated with an enquiry, subject to any records we are legally required to retain.</p></section>
      <section><h2 className="text-display text-xl text-foreground">Contact</h2><p className="mt-3">Privacy questions may be sent to hello@westernvintage.com.</p></section>
    </div>
  </main>;
}