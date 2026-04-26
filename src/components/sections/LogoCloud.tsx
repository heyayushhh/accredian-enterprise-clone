import { Container } from "@/components/ui/Container";

const logos = [
  { name: "Reliance", path: "/Company logos/reliance.png" },
  { name: "HCL", path: "/Company logos/hcl-svgrepo-com.svg" },
  { name: "IBM", path: "/Company logos/ibm-svgrepo-com.svg" },
  { name: "CRF", path: "/Company logos/crF.png" },
  { name: "ADP", path: "/Company logos/adp.svg" },
  { name: "Bayer", path: "/Company logos/bayer.svg" },
];

export function LogoCloud() {
  return (
    <section aria-label="Trusted Logos" className="border-y border-gray-50 dark:border-gray-800 bg-white dark:bg-[#0B1120] py-12 overflow-hidden transition-colors duration-300">
      <div className="relative w-full">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white dark:from-[#0B1120] to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white dark:from-[#0B1120] to-transparent pointer-events-none"></div>
        
        {/* Marquee Track */}
        <div className="flex w-max animate-scrollX items-center whitespace-nowrap">
          {[...logos, ...logos, ...logos, ...logos].map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="mx-8 md:mx-12 group flex items-center justify-center transition-all duration-200"
            >
              <div className="h-12 md:h-14 w-32 md:w-40 flex items-center justify-center">
                <img
                  src={logo.path}
                  alt={logo.name}
                  className="max-h-full max-w-full object-contain opacity-70 dark:opacity-50 hover:opacity-100 dark:hover:opacity-100 transition-all duration-300 dark:invert dark:brightness-200"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
