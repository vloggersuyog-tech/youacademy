import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { SiteLayout } from "@/components/SiteLayout";
import { COURSES, SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Sample Enquiry | You Academy" },
      { name: "description", content: "Send a sample enquiry to You Academy. This demo form is not connected to a real inbox." },
      { property: "og:title", content: "Contact You Academy" },
      { property: "og:description", content: "Try the sample academy enquiry form." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  student: z.string().trim().min(1, "Enter student name").max(100),
  parent: z.string().trim().max(100).optional(),
  mobile: z.string().trim().min(8, "Enter a contact number").max(18, "Check the contact number"),
  course: z.string().min(1, "Choose a course"),
  batch: z.string().max(50).optional(),
  message: z.string().trim().max(500).optional(),
});

const field = "w-full rounded-lg border bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-ring";

function Contact() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const r = schema.safeParse(data);
    if (!r.success) {
      setSuccess(false);
      return setError(r.error.issues[0]?.message ?? "Check the form");
    }
    setError("");
    setSuccess(true);
    e.currentTarget.reset();
  };

  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-4 py-14 grid lg:grid-cols-2 gap-10">
        <div>
          <p className="text-primary font-semibold">Sample admission enquiry</p>
          <h1 className="text-4xl md:text-5xl font-extrabold">Let's get you started.</h1>
          <p className="mt-3 text-muted-foreground">This demo form shows a typical enquiry flow. It does not send or save your information.</p>
          <form onSubmit={onSubmit} className="mt-8 grid gap-4">
            <input name="student" placeholder="Student name *" className={field} maxLength={100} required />
            <input name="parent" placeholder="Parent name" className={field} maxLength={100} />
            <input name="mobile" inputMode="tel" placeholder="Contact number *" className={field} maxLength={18} required />
            <select name="course" className={field} defaultValue="" required>
              <option value="" disabled>Class / Course *</option>
              {COURSES.map((c) => <option key={c.code} value={c.code}>{c.title}</option>)}
            </select>
            <select name="batch" className={field} defaultValue="">
              <option value="">Preferred time</option>
              <option>Morning</option><option>Afternoon</option><option>Evening</option>
            </select>
            <textarea name="message" rows={3} placeholder="Message" className={field} maxLength={500} />
            {error && <p className="text-destructive text-sm" role="alert">{error}</p>}
            {success && <p className="text-sm text-primary" role="status">Thanks! This is a demo form and your details were not sent or saved.</p>}
            <button className="btn btn-primary">Preview Enquiry</button>
          </form>
        </div>
        <div className="grid gap-5 content-start">
          <div className="bg-card border rounded-2xl p-6">
            <p className="text-sm text-muted-foreground">Sample contact number</p>
            <p className="font-display text-2xl font-bold text-primary mt-1">{SITE.samplePhone}</p>
            <p className="text-sm text-muted-foreground mt-2">This is a fictional placeholder, not a working number.</p>
          </div>
          <div className="bg-card border rounded-2xl p-6">
            <p className="text-sm text-muted-foreground">Demo note</p>
            <p className="font-medium mt-1">{SITE.sampleNotice}</p>
            <p className="text-sm text-muted-foreground mt-2">No address or map is included in this sample website.</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
