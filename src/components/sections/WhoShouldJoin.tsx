import { Container } from "@/components/ui/Container";

const blocks = [
  {
    title: "Tech Professionals",
    description: "Engineers, Architects, and Leads looking to master emerging technologies and stay ahead of the curve."
  },
  {
    title: "Non-Tech Professionals",
    description: "Business leaders and managers aiming to understand the impact of tech on their domains."
  },
  {
    title: "Emerging Professionals",
    description: "Fresh graduates and early-career individuals seeking to build a strong foundation in modern tech stacks."
  },
  {
    title: "Senior Professionals",
    description: "Executives and directors looking for strategic insights into digital transformation and leadership."
  }
];

export function WhoShouldJoin() {
  return (
    <section id="who-should-join" className="bg-[#2563EB] dark:bg-[#1D4ED8] py-24 md:py-28 transition-colors duration-300">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Who Should <span className="text-blue-100 dark:text-blue-200 underline decoration-blue-300/50 underline-offset-8">Join</span> Our Programs?
            </h2>
            <p className="mt-6 text-lg font-medium text-blue-50/80 dark:text-blue-100/80 leading-relaxed max-w-xl">
              Our curriculum is designed to cater to professionals across various stages of their careers, ensuring everyone finds value and growth.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {blocks.map((block, idx) => (
              <div 
                key={idx}
                className="bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-2xl p-8 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-3">{block.title}</h3>
                <p className="text-blue-50/70 dark:text-blue-100/70 text-sm leading-relaxed">{block.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
