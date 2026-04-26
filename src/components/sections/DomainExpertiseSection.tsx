import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import {
  Lightbulb,
  Brain,
  Users,
  BarChart,
  Settings,
  Globe,
  CreditCard,
} from "lucide-react";

const domains = [
  {
    title: "Product & Innovation Hub",
    description: "Building the next generation of products with agile methodologies.",
    icon: Lightbulb,
  },
  {
    title: "Gen-AI Mastery",
    description: "Harnessing large language models for enterprise-scale solutions.",
    icon: Brain,
    featured: true,
  },
  {
    title: "Leadership Elevation",
    description: "Developing strategic vision and team management excellence.",
    icon: Users,
  },
  {
    title: "Tech & Data Insights",
    description: "Transforming raw data into actionable business intelligence.",
    icon: BarChart,
  },
  {
    title: "Operations Excellence",
    description: "Streamlining processes for maximum efficiency and scale.",
    icon: Settings,
  },
  {
    title: "Digital Enterprise",
    description: "Modernizing core infrastructure for the digital-first era.",
    icon: Globe,
  },
  {
    title: "Fintech Innovation Lab",
    description: "Revolutionizing financial services with cutting-edge tech.",
    icon: CreditCard,
  },
];

export function DomainExpertiseSection() {
  return (
    <section id="expertise" className="bg-slate-50 dark:bg-[#0F172A] py-24 md:py-28 transition-colors duration-300">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Domain <span className="text-blue-600 dark:text-blue-500">Expertise</span>
          </h2>
          <p className="mt-5 text-lg font-medium text-slate-500 dark:text-slate-400">
            Specialized training programs across critical business functions and
            emerging technologies.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain) => (
            <Card
              key={domain.title}
              className={`group flex flex-col items-center rounded-2xl p-8 text-center transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-md ${
                domain.featured
                  ? "border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-900/10 shadow-sm ring-1 ring-blue-500/10 lg:scale-105"
                  : "border-gray-100 dark:border-gray-800 bg-white dark:bg-[#111827] shadow-sm"
              }`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <domain.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-extrabold text-slate-900 dark:text-white">
                {domain.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400 line-clamp-2">
                {domain.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
