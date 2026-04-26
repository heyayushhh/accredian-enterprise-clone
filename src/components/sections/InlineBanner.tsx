import { Container } from "@/components/ui/Container";

export function InlineBanner() {
  return (
    <section className="bg-white py-24 md:py-28">
      <Container>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-10 shadow-xl shadow-blue-600/20 sm:px-12 sm:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.2),transparent)]"></div>
          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Ready to transform your team?
              </h2>
              <p className="max-w-2xl text-lg text-blue-50">
                Get expert guidance for your team’s success with programs
                tailored to your roles and goals.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex h-14 shrink-0 items-center justify-center rounded-xl bg-white px-8 text-base font-bold text-blue-600 shadow-sm transition-all hover:bg-blue-50 hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
