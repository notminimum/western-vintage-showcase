import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [
    { title: "Terms of Use | Western Vintage" },
    { name: "description", content: "Terms governing use of the Western Vintage website." },
    { property: "og:title", content: "Terms of Use | Western Vintage" },
    { property: "og:description", content: "Terms governing use of the Western Vintage website." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: Terms,
});

function Terms() {
  return <main className="mx-auto min-h-screen max-w-3xl px-5 py-12 sm:px-8 sm:py-20">
    <Link to="/" className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-deep">Western Vintage</Link>
    <h1 className="text-display mt-10 text-4xl">Terms of Use</h1>
    <p className="mt-3 text-sm text-muted-foreground">Last updated 30 August 2026</p>
    <div className="mt-10 space-y-8 border-t border-border pt-8 leading-relaxed text-muted-foreground">
      <section><h2 className="text-display text-xl text-foreground">Website use</h2><p className="mt-3">This website presents the work, events and services of Western Vintage. You may browse and share links to its public pages for lawful, personal or professional purposes.</p></section>
      <section><h2 className="text-display text-xl text-foreground">Intellectual property</h2><p className="mt-3">The Western Vintage name, logo, photography, video and written content remain the property of Western Vintage or their respective owners. Written permission is required for commercial reuse.</p></section>
      <section><h2 className="text-display text-xl text-foreground">Enquiries</h2><p className="mt-3">Submitting an enquiry does not create a contract. Project scope, fees and delivery terms are confirmed separately in writing.</p></section>
      <section><h2 className="text-display text-xl text-foreground">Contact</h2><p className="mt-3">Questions about these terms may be sent to hello@westernvintage.com.</p></section>
    </div>
  </main>;
}