import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Why Us" },
  { to: "/courses", label: "Courses" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3" aria-label="You Academy home">
            <span className="grid place-items-center w-10 h-10 rounded-xl bg-primary text-primary-foreground font-display text-lg font-extrabold">Y</span>
            <span className="font-display font-extrabold text-lg text-foreground">{SITE.name}<span className="block text-[10px] uppercase tracking-[.18em] font-semibold text-muted-foreground">Learn · Grow · Achieve</span></span>
          </Link>
          <nav className="hidden md:flex items-center gap-7">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="font-medium text-muted-foreground hover:text-primary" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>
                {n.label}
              </Link>
            ))}
            <Link to="/contact" className="btn btn-primary !py-2">Enquire Now</Link>
          </nav>
          <button className="md:hidden p-2" aria-label="Menu" onClick={() => setOpen(!open)}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} /></svg>
          </button>
        </div>
        {open && (
          <nav className="md:hidden border-t px-4 py-3 flex flex-col gap-3 bg-background">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="font-medium py-1">{n.label}</Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-primary">Enquire Now</Link>
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-2">
          <div>
            <p className="font-display text-xl font-bold">{SITE.name}</p>
            <p className="mt-2 opacity-75">{SITE.tagline}</p>
          </div>
          <div className="md:text-right">
            <p className="font-semibold text-gold">Sample contact</p>
            <p className="mt-2 opacity-90">{SITE.samplePhone}</p>
            <p className="mt-1 text-xs opacity-60">Demo number only — replace before publishing.</p>
          </div>
        </div>
        <p className="text-center text-sm opacity-60 pb-6">© {new Date().getFullYear()} {SITE.name} · Sample website</p>
      </footer>
    </div>
  );
}

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="bg-hero text-primary-foreground rounded-2xl p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-6 justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Ready to take your next learning step?</h2>
          <p className="mt-2 opacity-85">Explore the sample courses or send a demo enquiry.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn btn-gold">Send an Enquiry</Link>
          <Link to="/courses" className="btn btn-outline">View Courses</Link>
        </div>
      </div>
    </section>
  );
}
