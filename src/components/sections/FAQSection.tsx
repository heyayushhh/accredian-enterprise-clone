"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { ChevronDown } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

type Category = {
  id: string;
  label: string;
  faqs: FAQ[];
};

const categories: Category[] = [
  {
    id: "course",
    label: "About the Course",
    faqs: [
      {
        question: "What types of corporate training programs do you offer?",
        answer:
          "We offer role-based programs across engineering, product, data, and business tracks, with flexible delivery formats for teams.",
      },
      {
        question: "How long are typical programs?",
        answer:
          "Most enterprise upskilling programs run 6–12 weeks depending on the track, depth, and cohort structure.",
      },
    ],
  },
  {
    id: "delivery",
    label: "About the Delivery",
    faqs: [
      {
        question: "Can we run cohort-based learning for teams?",
        answer:
          "Yes. We support cohort-based delivery, self-paced learning, or blended formats to match your team’s schedule.",
      },
      {
        question: "Do you provide reporting for enterprise admins?",
        answer:
          "Yes. Reporting can include learner progress, completion, assessments, and engagement signals based on your program setup.",
      },
    ],
  },
  {
    id: "misc",
    label: "Miscellaneous",
    faqs: [
      {
        question: "Is there dedicated support for enterprise clients?",
        answer:
          "Yes. Enterprise onboarding and support are included to help set up cohorts and keep learners unblocked.",
      },
      {
        question: "Can programs be customized for our organization?",
        answer:
          "Programs can be adapted to align with team roles and goals, and can include custom projects or assessments if needed.",
      },
    ],
  },
];

export function FAQSection() {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? "course");

  const activeCategory = useMemo(
    () => categories.find((c) => c.id === activeId) ?? categories[0],
    [activeId],
  );

  return (
    <section
      className="scroll-mt-24 bg-white dark:bg-[#0B1120] py-24 md:py-28 transition-colors duration-300"
      id="faqs"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Frequently <span className="text-blue-600 dark:text-blue-500">asked questions</span>
          </h2>
          <p className="mt-5 text-lg font-medium text-slate-500 dark:text-slate-400">
            Everything you need to know about our enterprise upskilling programs.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-2 sticky top-24">
              {categories.map((c) => {
                const isActive = c.id === activeId;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setActiveId(c.id)}
                    className={`h-12 rounded-xl px-5 text-left text-sm font-bold transition-all duration-200 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-blue-900/20"
                        : "bg-white dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 border border-transparent"
                    }`}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-4">
              {(activeCategory?.faqs ?? []).map((faq, idx) => (
                <Card
                  key={faq.question}
                  className="group/card overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#111827] p-0 shadow-sm transition-all duration-300 ease-in-out hover:border-blue-100 dark:hover:border-blue-900/50 hover:shadow-md"
                >
                  <details className="group p-6" open={idx === 0}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 outline-none">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white sm:text-lg transition-colors group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400">
                        {faq.question}
                      </h3>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 transition-all duration-300 group-open:rotate-180 group-hover/card:bg-blue-50 dark:group-hover/card:bg-blue-900/30 group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400">
                        <ChevronDown size={20} />
                      </div>
                    </summary>
                    <div className="mt-4 text-base font-medium leading-relaxed text-slate-500 dark:text-slate-400 animate-in fade-in slide-in-from-top-2 duration-300">
                      {faq.answer}
                    </div>
                  </details>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
