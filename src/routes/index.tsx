import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, CTA } from "@/components/SiteLayout";
import { COURSES, SITE } from "@/lib/site";
import hero from "@/assets/classroom-projector.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "You Academy | Sample Learning Centre Website" },
      { name: "description", content: "A sample academy website with example courses, learning support, and an enquiry form." },
      { property: "og:title", content: "You Academy | Sample Learning Centre Website" },
      { property: "og:description", content: "Learn with clarity. Grow with confidence. Sample academy information for demonstration." },
    ],
  }),
  component: Index,
});

const HIGHLIGHTS = [
  { k: "Learn", t: "Clear explanations", d: "Example lessons that make new topics easier to follow." },
  { k: "Practise", t: "Guided support", d: "Build confidence by working through questions step by step." },
  { k: "Grow", t: "Study routines", d: "Explore helpful habits for steady learning and revision." },
];

function Index() {
  return (
    <SiteLayout>
      <section className="bg-hero text-primary-foreground overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block rounded-full bg-gold text-accent-foreground px-3 py-1 text-sm font-semibold">{SITE.tagline}</span>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05]">
              Learn with <span className="text-gold">confidence.</span>
            </h1>
            <p className="mt-5 text-lg opacity-90 max-w-md">
              Welcome to You Academy — a sample learning centre focused on clear lessons, helpful guidance, and steady progress.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-gold">Send a Sample Enquiry</Link>
              <Link to="/courses" className="btn btn-outline">Explore Courses</Link>
            </div>
            <p className="mt-6 text-sm opacity-75">Sample website content · Edit these details for your academy</p>
          </div>
          <img src={hero} alt="A teacher guiding students through a classroom lesson" width={1280} height={896} className="rounded-2xl shadow-card ring-4 ring-gold/40" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 -mt-8 relative grid sm:grid-cols-3 gap-4">
        {HIGHLIGHTS.map((item) => (
          <div key={item.t} className="bg-card rounded-xl p-6 shadow-card">
            <p className="font-display text-2xl font-extrabold text-primary">{item.k}</p>
            <p className="font-semibold mt-1">{item.t}</p>
            <p className="text-sm text-muted-foreground">{item.d}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="text-primary font-semibold">Example courses</p>
            <h2 className="text-3xl md:text-4xl font-bold">Find a path that fits.</h2>
          </div>
          <Link to="/courses" className="text-primary font-semibold">View all →</Link>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {COURSES.map((course, i) => (
            <Link key={course.code} to="/courses" className="bg-card border rounded-xl p-5 hover:shadow-card hover:border-primary transition block">
              <span className="font-display text-sm font-bold text-muted-foreground">0{i + 1}</span>
              <p className="font-display text-lg font-bold text-primary mt-1">{course.code}</p>
              <p className="text-sm mt-1">{course.title}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-primary font-semibold">A helpful place to learn</p>
            <h2 className="text-3xl md:text-4xl font-bold">Small steps can make a big difference.</h2>
            <p className="mt-4 text-muted-foreground">You Academy’s sample approach pairs clear explanations with guided practice and time to ask questions.</p>
            <Link to="/about" className="btn btn-primary mt-6">Discover the Approach</Link>
          </div>
          <ul className="grid gap-3">
            {["Understand new ideas", "Practise with guidance", "Build a study routine", "Ask questions openly", "Prepare at a steady pace", "Celebrate progress"].map((item, i) => (
              <li key={item} className="flex items-center gap-4 bg-card rounded-lg p-4">
                <span className="grid place-items-center h-9 w-9 rounded-full bg-primary text-primary-foreground font-bold">{i + 1}</span>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA />
    </SiteLayout>
  );
}
