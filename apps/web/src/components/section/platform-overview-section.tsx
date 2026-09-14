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
    <section id="features" className="py-24 sm:py-32 bg-zinc-900 text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        {/* Section Heading Row */}
        <div className="text-center mb-16">
          <h2 className="text-[2.5rem] sm:text-[3.5rem] font-serif text-white tracking-tight leading-tight">
            Seamless analysis.<br />
            Actionable insights.
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Interactive Accordion */}
          <div className="space-y-4">
            {items.map((item) => {
              const Icon = item.icon;
              const isExpanded = activeId === item.id;

              return (
                <div
                  key={item.id}
                  className={`rounded-[24px] transition-all duration-300 border ${
                    isExpanded
                      ? "bg-white/5 border-white/10 shadow-sm"
                      : "bg-transparent border-transparent hover:border-white/5"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveId(isExpanded ? "" : item.id)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`size-10 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                          isExpanded
                            ? "bg-white/10 shadow-sm text-[#E5ECE0]"
                            : "bg-white/5 text-white/40"
                        }`}
                      >
                        <Icon className="size-5" />
                      </div>
                      <span
                        className={`text-[17px] font-semibold transition-colors ${
                          isExpanded ? "text-white" : "text-white/60"
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="size-5 text-white/40" />
                    ) : (
                      <ChevronDown className="size-5 text-white/40" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-[14px] text-white/60 leading-relaxed pl-[3.5rem]">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Mockup */}
          <div className="relative">
            <div className="rounded-[32px] bg-white/5 border border-white/10 p-8 shadow-sm flex flex-col items-center justify-center min-h-[400px]">
               <div className="w-full max-w-[300px] space-y-4">
                  {/* Mockup blocks */}
                  <div className="h-16 bg-[#1A1A1A] rounded-2xl shadow-sm border border-white/5 flex items-center px-4 gap-3">
                     <div className="size-8 rounded-full bg-[#E5ECE0]/20" />
                     <div className="flex-1 space-y-2">
                        <div className="h-2 w-1/2 bg-[#E5ECE0]/40 rounded-full" />
                        <div className="h-2 w-1/3 bg-white/10 rounded-full" />
                     </div>
                  </div>
                  <div className="h-16 bg-[#1A1A1A] rounded-2xl shadow-sm border border-white/5 flex items-center px-4 gap-3 ml-6 opacity-80">
                     <div className="size-8 rounded-full bg-[#E5ECE0]/20" />
                     <div className="flex-1 space-y-2">
                        <div className="h-2 w-2/3 bg-[#E5ECE0]/40 rounded-full" />
                        <div className="h-2 w-1/4 bg-white/10 rounded-full" />
                     </div>
                  </div>
                  <div className="h-16 bg-[#7DA154] rounded-2xl shadow-[0_8px_20px_rgba(125,161,84,0.15)] flex items-center px-4 gap-3 -ml-4">
                     <div className="size-8 rounded-full bg-white/20" />
                     <div className="flex-1 space-y-2">
                        <div className="h-2 w-1/2 bg-white/40 rounded-full" />
                        <div className="h-2 w-3/4 bg-white/20 rounded-full" />
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
