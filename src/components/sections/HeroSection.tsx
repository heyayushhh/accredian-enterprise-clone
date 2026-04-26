import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-white to-slate-50 dark:from-[#0B1120] dark:to-[#0F172A] pt-12 pb-24 md:pt-16 md:pb-28 transition-colors duration-300"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 dark:border-blue-900/30 bg-white dark:bg-blue-900/10 px-4 py-1.5 text-sm font-bold text-blue-600 dark:text-blue-400 shadow-sm ring-1 blue-500/5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600"></span>
              </span>
              Enterprise Upskilling
              <span className="h-1 w-1 rounded-full bg-blue-300 dark:bg-blue-700" />
              Built for Growth
            </div>

            <div className="space-y-6">
              <h1 className="text-balance text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-6xl lg:text-7xl leading-tight">
                Upgrade your <span className="text-blue-600 dark:text-blue-500">workforce skills</span> with <span className="text-blue-600 dark:text-blue-500">structured learning</span>
              </h1>
              <p className="max-w-xl text-lg font-medium leading-relaxed text-slate-500 dark:text-slate-400 sm:text-xl">
                A premium, enterprise-ready platform for professional growth and skill transformation.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 text-base font-bold text-white shadow-sm transition-all duration-200 ease-in-out hover:scale-105 hover:bg-blue-700 hover:shadow-md active:scale-95"
              >
                Talk to us
              </a>
              <a
                href="#benefits"
                className="inline-flex h-12 items-center justify-center rounded-full border-2 border-slate-200 dark:border-slate-800 bg-transparent px-8 text-base font-bold text-slate-700 dark:text-slate-200 shadow-sm transition-all duration-200 ease-in-out hover:scale-105 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-95"
              >
                Explore benefits
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 pt-4">
              {[
                { label: "Programs", value: "50+" },
                { label: "Avg rating", value: "4.8/5" },
                { label: "Support", value: "24/7" },
                { label: "Completion", value: "98%" },
              ].map((stat) => (
                <Card key={stat.label} className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#111827] p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                  <div className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative lg:ml-auto lg:w-full lg:max-w-lg">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-100/40 dark:bg-blue-900/20 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-slate-100/50 dark:bg-slate-900/20 blur-3xl"></div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-slate-900/5 dark:ring-white/10 transition-transform duration-500 hover:scale-[1.01]">
              <img
                src="/team-meeting.jpg"
                alt="Team working together"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105 dark:opacity-80"
              />
            </div>
            
            <div className="absolute -bottom-8 -left-8 hidden rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#111827] p-6 shadow-xl shadow-blue-900/5 sm:block transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800 bg-blue-100 dark:bg-blue-900/30 ring-1 ring-blue-500/10"></div>
                  ))}
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  Trusted by 10k+ <br />
                  <span className="font-medium text-slate-500 dark:text-slate-400 text-xs">Professionals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
