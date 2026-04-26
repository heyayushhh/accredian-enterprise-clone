import { Container } from "@/components/ui/Container";

const partners = [
  { name: "Reliance", path: "/Company logos/reliance.png" },
  { name: "HCL", path: "/Company logos/hcl-svgrepo-com.svg" },
  { name: "IBM", path: "/Company logos/ibm-svgrepo-com.svg" },
  { name: "CRF", path: "/Company logos/crF.png" },
  { name: "ADP", path: "/Company logos/adp.svg" },
  { name: "Bayer", path: "/Company logos/bayer.svg" },
];

export function PartnersSection() {
  return (
    <section className="bg-white dark:bg-[#0B1120] py-24 md:py-28 transition-colors duration-300">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white md:text-5xl">
            Our <span className="text-blue-600 dark:text-blue-500">Proven Partnerships</span>
          </h2>
          <p className="mt-4 text-lg font-medium text-slate-500 dark:text-slate-400">
            Successful Collaborations With the Industry’s Best
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center p-4">
              <div className="h-16 w-32 md:h-20 md:w-40 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <img 
                  src={partner.path}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain opacity-80 dark:opacity-60 hover:opacity-100 transition-opacity dark:invert dark:brightness-200"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
