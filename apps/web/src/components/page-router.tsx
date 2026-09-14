"use client";

import { useEffect, useState } from "react";
import { HeroSection } from "@/components/section/hero";
import { ResumeAnalyzer } from "@/components/resume/resume-analyzer";
import { PlatformOverviewSection } from "@/components/section/platform-overview-section";
import { BentoStatsSection } from "@/components/section/bento-stats-section";
import { FinoviaPricingSection } from "@/components/section/finovia-pricing-section";
import { FinoviaTestimonialsSection } from "@/components/section/finovia-testimonials-section";
import { FinoviaNewsSection } from "@/components/section/finovia-news-section";
import { ResumeDashboard } from "@/components/dashboard/resume-dashboard";

export function PageRouter() {
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    // Set initial hash
    setCurrentHash(window.location.hash);

    // Listen to hash changes
    const onHashChange = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo(0, 0); // scroll to top when changing page views
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  if (currentHash === "#dashboard") {
    return <ResumeDashboard />;
  }

  return (
    <>
      <HeroSection />
      <ResumeAnalyzer />
      <BentoStatsSection />
      <PlatformOverviewSection />
      <FinoviaPricingSection />
      <FinoviaTestimonialsSection />
      <FinoviaNewsSection />
    </>
  );
}
