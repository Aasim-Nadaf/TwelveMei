"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  FileText,
  Activity,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

interface AccordionItem {
  id: string;
  title: string;
  icon: typeof FileText;
  description: string;
}

const items: AccordionItem[] = [
  {
    id: "ats-scoring",
    title: "Real-Time ATS Scoring",
    icon: TrendingUp,
    description:
      "Upload your resume and instantly see how it ranks against modern Applicant Tracking Systems.",
  },
  {
    id: "keyword-gap",
    title: "Keyword Gap Analysis",
    icon: FileText,
    description:
      "Automatically detect missing keywords from your target job description to improve matching.",
  },
  {
    id: "ai-rewrites",
    title: "AI-Powered Rewrites",
    icon: Activity,
    description:
      "Transform weak bullet points into high-impact, quantified achievements using AI.",
  },
  {
    id: "role-matching",
    title: "Target Role Matching",
    icon: ShieldCheck,
    description:
      "Compare your experience securely against senior, mid-level, or entry-level industry benchmarks.",
  },
];

export function PlatformOverviewSection() {
  const [activeId, setActiveId] = useState<string>("keyword-gap");

  return (
    <section
      id="features"
      className="py-24 sm:py-32 bg-[#FFF0C4] text-[#40351F] border-t border-[#40351F]/10"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Heading */}
        <div className="mb-20">
          <h2 className="text-[3rem] sm:text-[4.5rem] font-serif text-[#40351F] tracking-tight leading-[1.1] max-w-3xl">
            Smarter analysis.
            <br />
            Unfair advantage.
          </h2>
        </div>

        {/* Minimal Interactive List */}
        <div className="flex flex-col border-t border-[#40351F]/20">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group border-b border-[#40351F]/20 py-8 lg:py-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6 cursor-pointer hover:bg-white/40 transition-all px-4 lg:px-8"
              >
                <div className="flex items-center gap-6 lg:gap-10 lg:w-1/2">
                  <span className="text-[#40351F]/20 font-sans font-medium text-2xl lg:text-3xl">
                    0{index + 1}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#40351F] group-hover:text-[#087D9D] transition-colors tracking-tight">
                    {item.title}
                  </h3>
                </div>

                <div className="lg:w-1/2 flex items-center justify-between pl-14 lg:pl-0">
                  <p className="text-base lg:text-lg text-[#40351F]/70 max-w-md hidden lg:block opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                    {item.description}
                  </p>

                  {/* Mobile description fallback */}
                  <p className="text-base text-[#40351F]/70 lg:hidden max-w-sm">
                    {item.description}
                  </p>

                  <div className="hidden lg:flex size-14 rounded-full border border-[#40351F]/10 items-center justify-center group-hover:bg-[#087D9D] group-hover:border-[#087D9D] group-hover:text-white transition-all text-[#40351F]/40 shadow-sm group-hover:shadow-[0_10px_20px_rgba(8,125,157,0.2)]">
                    <Icon className="size-6" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
