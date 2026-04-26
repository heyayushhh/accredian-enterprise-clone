import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { CourseSegmentation } from "@/components/sections/CourseSegmentation";
import { DomainExpertiseSection } from "@/components/sections/DomainExpertiseSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhoShouldJoin } from "@/components/sections/WhoShouldJoin";
import { CATFramework } from "@/components/sections/CATFramework";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-full bg-background transition-colors duration-300">
      <Navbar />
      <main>
        <HeroSection />
        <LogoCloud />
        <BenefitsSection />
        <DomainExpertiseSection />
        <CourseSegmentation />
        <WhoShouldJoin />
        <CATFramework />
        <PartnersSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
