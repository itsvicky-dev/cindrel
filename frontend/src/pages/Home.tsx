import {
  HeroSection, FreeAutomationSection, TrustedSection, ServicesSection, UseCasesSection,
  ToolsSection, IndustriesSection, ProcessSection, ResultsSection,
  WhySection, CtaSection,
} from '@/components/sections/HomeSections'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedSection />
      <FreeAutomationSection />
      <ServicesSection />
      <UseCasesSection />
      <ToolsSection />
      <IndustriesSection />
      <ProcessSection />
      <ResultsSection />
      <WhySection />
      {/* <TestimonialsSection /> */}
      <CtaSection />
    </>
  )
}
