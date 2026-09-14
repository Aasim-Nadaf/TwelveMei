import { Header } from "@/components/section/header";
import { HeroSection } from "@/components/section/hero";
import { ResumeAnalyzer } from "@/components/resume/resume-analyzer";
import { PlatformOverviewSection } from "@/components/section/platform-overview-section";
import { BentoStatsSection } from "@/components/section/bento-stats-section";
import { FinoviaPricingSection } from "@/components/section/finovia-pricing-section";
import { FinoviaTestimonialsSection } from "@/components/section/finovia-testimonials-section";
import { FinoviaNewsSection } from "@/components/section/finovia-news-section";
import { Footer } from "@/components/section/footer";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-[#F2F2F2] p-4 sm:p-6 lg:p-8 flex flex-col font-sans selection:bg-[#E5ECE0] selection:text-[#111111]">
      <div className="relative flex-grow bg-white rounded-[40px] overflow-hidden flex flex-col shadow-sm border border-black/5">
        <Header />
        <main className="grow relative z-10">
          <HeroSection />
          <ResumeAnalyzer />
          <PlatformOverviewSection />
          <BentoStatsSection />
          <FinoviaPricingSection />
          <FinoviaTestimonialsSection />
          <FinoviaNewsSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

