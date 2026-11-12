import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, CTA } from "@/components/SiteLayout";
import { PROBLEMS } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Why You Academy | Our Sample Learning Approach" },
      { name: "description", content: "Explore the sample learning approach and student support at You Academy." },
      { property: "og:title", content: "Why You Academy | Our Learning Approach" },
      { property: "og:description", content: "A sample approach built around clear explanations and guided practice." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="bg-hero text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-gold font-semibold">A sample learning centre</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2 max-w-3xl">Helping students make progress, one idea at a time.</h1>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14 grid md:grid-cols-2 gap-6">
        {PROBLEMS.map((p, i) => (
          <article key={p.title} className="bg-card border rounded-2xl p-6 shadow-card">
            <div className="flex items-center gap-3">
              <span className="grid place-items-center h-10 w-10 rounded-lg bg-primary text-primary-foreground font-display font-bold">{i + 1}</span>
              <h2 className="text-xl font-bold">{p.title}</h2>
            </div>
            <p className="mt-4 text-sm"><span className="font-semibold text-muted-foreground">A common challenge: </span>{p.problem}</p>
            <p className="mt-3 text-sm bg-secondary rounded-lg p-3"><span className="font-semibold text-primary">You Academy sample: </span>{p.solution}</p>
          </article>
        ))}
      </section>
      <CTA />
    </SiteLayout>
  );
}
