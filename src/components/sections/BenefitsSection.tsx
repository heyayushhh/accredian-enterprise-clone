import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { 
  Layers, 
  LineChart, 
  Laptop, 
  Headphones, 
  UserCheck, 
  Award 
} from "lucide-react";

const benefits = [
  {
    title: "Role-based learning paths",
    description: "Tailor programs for engineering, product, data, and business teams.",
    icon: Layers,
  },
  {
    title: "Measurable outcomes",
    description: "Assessments and reporting to track progress, adoption, and impact.",
    icon: LineChart,
  },
  {
    title: "Hands-on projects",
    description: "Practical assignments that translate to real workplace wins.",
    icon: Laptop,
  },
  {
    title: "Dedicated support",
    description: "Enterprise onboarding and continuous learner support.",
    icon: Headphones,
  },
  {
    title: "Flexible delivery",
    description: "Self-paced, cohort-based, or blended formats for teams.",
    icon: UserCheck,
  },
  {
    title: "Industry-recognized certificates",
    description: "Credentialed completions that boost confidence and mobility.",
    icon: Award,
  },
];

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="scroll-mt-24 bg-white dark:bg-[#0B1120] py-24 md:py-28 transition-colors duration-300"
      aria-label="Features and benefits"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Enterprise-ready <span className="text-blue-600 dark:text-blue-500">benefits</span>
          </h2>
          <p className="mt-5 text-lg font-medium leading-relaxed text-slate-500 dark:text-slate-400">
            Everything you need to build a high-performing team. Our platform
            combines world-class content with powerful administrative tools.
          </p>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <Card
              key={benefit.title}
              className="group flex flex-col rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#111827] p-8 shadow-sm transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110">
                <benefit.icon className="h-6 w-6" />
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-slate-500 dark:text-slate-400">
                  {benefit.description}
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <a
                  href="#contact"
                  className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 dark:text-blue-400 transition-colors hover:text-blue-700 dark:hover:text-blue-300"
                >
                  Learn more
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 transition-transform group-hover/link:translate-x-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
