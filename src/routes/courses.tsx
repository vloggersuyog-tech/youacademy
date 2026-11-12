import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, CTA } from "@/components/SiteLayout";
import { COURSES } from "@/lib/site";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Sample Courses | You Academy" },
      { name: "description", content: "Explore example course categories and learning support at You Academy." },
      { property: "og:title", content: "Sample Courses | You Academy" },
      { property: "og:description", content: "Example course options for a sample learning centre website." },
    ],
  }),
  component: Courses,
});

function Courses() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-primary font-semibold">Example course catalogue</p>
        <h1 className="text-4xl md:text-5xl font-extrabold">Explore ways to learn and grow.</h1>
        <div className="mt-10 grid gap-5">
          {COURSES.map((c, i) => (
            <div key={c.code} className="bg-card border rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-5 hover:shadow-card transition">
              <span className="font-display text-5xl font-extrabold text-gold">0{i + 1}</span>
              <div className="flex-1">
                <h2 className="text-2xl font-bold">{c.title} <span className="text-primary">({c.code})</span></h2>
                <p className="text-muted-foreground mt-1">{c.desc}</p>
              </div>
              <Link to="/contact" className="btn btn-primary">Enquire Now</Link>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </SiteLayout>
  );
}
