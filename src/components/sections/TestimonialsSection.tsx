import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Quote, Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Ananya Kapoor",
    role: "L&D Manager, Enterprise Tech",
    quote:
      "Clear program structure and measurable outcomes. The reporting helped us track adoption across teams.",
  },
  {
    name: "Rohit Mehta",
    role: "Engineering Lead",
    quote:
      "The hands-on projects aligned well with our roadmap, and learners stayed engaged through the cohort format.",
  },
  {
    name: "Sneha Iyer",
    role: "HRBP",
    quote:
      "Fast onboarding, great support, and a professional experience end-to-end. We scaled from 20 to 200 learners smoothly.",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 bg-slate-50 dark:bg-[#0F172A] py-24 md:py-28 transition-colors duration-300"
      aria-label="Testimonials"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Trusted by <span className="text-blue-600 dark:text-blue-500">innovative teams</span>
          </h2>
          <p className="mt-5 text-lg font-medium text-slate-500 dark:text-slate-400">
            See how companies are using our platform to transform their
            workforce and drive real business impact.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="group flex flex-col justify-between rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#111827] p-10 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:border-blue-100 dark:hover:border-blue-900/50"
            >
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        size={18}
                        fill="currentColor"
                        className="text-yellow-400"
                      />
                    ))}
                  </div>
                  <Quote size={32} className="text-blue-50 dark:text-blue-900/20 group-hover:text-blue-100 dark:group-hover:text-blue-900/40 transition-colors" />
                </div>
                <blockquote className="text-lg font-semibold leading-relaxed text-slate-900 dark:text-slate-200 italic">
                  “{t.quote}”
                </blockquote>
              </div>

              <div className="mt-10 flex items-center gap-4 border-t border-gray-50 dark:border-gray-800 pt-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-200 dark:shadow-blue-900/20">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900 dark:text-white">
                    {t.name}
                  </div>
                  <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {t.role}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
