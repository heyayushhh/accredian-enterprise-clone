import { Container } from "@/components/ui/Container";
import { BookOpen, Laptop, BarChart3 } from "lucide-react";

const steps = [
  {
    title: "Concept Mastery",
    description: "Deep dive into core principles and theoretical foundations led by industry experts.",
    icon: BookOpen,
  },
  {
    title: "Applied Learning",
    description: "Hands-on projects and real-world simulations to translate theory into practice.",
    icon: Laptop,
  },
  {
    title: "Tool & Tech Proficiency",
    description: "Mastering the specific software, frameworks, and technologies used in the industry.",
    icon: BarChart3,
  }
];

export function CATFramework() {
  return (
    <section className="bg-slate-50 dark:bg-[#0F172A] py-24 md:py-28 transition-colors duration-300">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white md:text-5xl">
            The <span className="text-blue-600 dark:text-blue-500">CAT Framework</span>
          </h2>
          <p className="mt-4 text-lg font-medium text-slate-500 dark:text-slate-400">
            Our structured approach to professional transformation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-px bg-slate-200 dark:bg-slate-800 z-0"></div>
              )}
              <div className="relative z-10 bg-white dark:bg-[#111827] rounded-3xl p-10 border border-slate-100 dark:border-gray-800 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-blue-900/20 mb-8 transition-transform group-hover:scale-110">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{step.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
