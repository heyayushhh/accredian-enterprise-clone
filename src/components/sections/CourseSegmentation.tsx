import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { GraduationCap, Trophy, Briefcase } from "lucide-react";

const segments = [
  {
    title: "Foundation Tracks",
    description: "Core conceptual learning for those starting their journey in new domains.",
    icon: GraduationCap,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Advanced Specializations",
    description: "Deep-dive technical programs for practitioners aiming for mastery.",
    icon: Trophy,
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "Executive Leadership",
    description: "Strategic decision-making and digital transformation for senior leaders.",
    icon: Briefcase,
    color: "bg-slate-50 text-slate-600",
  }
];

export function CourseSegmentation() {
  return (
    <section id="course-segmentation" className="bg-white dark:bg-[#0B1120] py-24 md:py-28 transition-colors duration-300">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white md:text-5xl">
            Course <span className="text-blue-600 dark:text-blue-500">Segmentation</span>
          </h2>
          <p className="mt-4 text-lg font-medium text-slate-500 dark:text-slate-400">
            Tailored learning paths for every stage of professional growth
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {segments.map((segment, idx) => (
            <Card 
              key={idx}
              className="group rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#111827] p-10 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <div className={`h-16 w-16 rounded-2xl ${segment.color} dark:bg-opacity-20 flex items-center justify-center mb-8 transition-transform group-hover:scale-110`}>
                <segment.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{segment.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{segment.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
