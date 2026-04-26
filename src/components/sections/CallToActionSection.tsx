import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

export function CallToActionSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-slate-50 py-24 md:py-28"
      aria-label="Call to action"
    >
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Talk to our team
              </h2>
              <p className="text-lg font-medium leading-relaxed text-slate-500">
                Share your details and we’ll help you choose the right program
                setup for your organization.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                {
                  title: "Enterprise support",
                  description: "Onboarding, reporting, and dedicated assistance for your cohorts.",
                },
                {
                  title: "Flexible formats",
                  description: "Choose cohort-based learning, self-paced, or blended delivery.",
                },
              ].map((item) => (
                <Card key={item.title} className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-md">
                  <div className="text-base font-extrabold text-slate-900">
                    {item.title}
                  </div>
                  <div className="mt-3 text-sm font-medium leading-relaxed text-slate-500">
                    {item.description}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-4 -top-4 h-full w-full rounded-3xl bg-blue-100/50"></div>
            <Card className="relative rounded-2xl border border-gray-100 bg-white p-8 shadow-xl transition-all duration-200">
              <div className="mb-8">
                <h3 className="text-xl font-extrabold text-slate-900">
                  Request a callback
                </h3>
                <p className="mt-2 text-sm font-medium text-slate-500">
                  Fill out the form below and an expert will reach out within 24 hours.
                </p>
              </div>
              <LeadCaptureForm />
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
