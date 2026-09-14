"use client";

import {
  Sparkles,
  MessageCircle,
  User,
  CheckCircle2,
  Search,
  FileText,
} from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-32 md:pt-40 md:pb-48 overflow-hidden min-h-[90vh] flex flex-col items-center bg-[#FFF0C4]/20"
    >
      {/* Background Image - Full height of the section, behind the transparent navbar */}
      <div
        className="absolute inset-0 z-0 object-cover w-full h-full opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2400&auto=format&fit=crop')", // Minimal abstract paper/light
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-0" />

      {/* Gradient to blend the bottom with the next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FFF0C4] to-transparent z-0" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 w-full flex flex-col items-center mt-8">
        {/* Trust Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-[#40351F]/10 text-[12px] font-bold text-[#40351F]">
            <span className="flex size-4 items-center justify-center rounded-full bg-[#FFF0C4] text-[#D98A12]">
              <Sparkles className="size-2.5" />
            </span>
            <span>Intelligent Resume Optimization</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-[3.5rem] sm:text-[4.5rem] md:text-[5rem] font-serif tracking-tight text-[#40351F] leading-[1.05]">
            Outsmart the ATS.
            <br />
            Land more interviews.
            <br />
            <span className="text-[#087D9D]">Effortlessly.</span>
          </h1>
        </div>

        {/* Sub headline */}
        <p className="text-center text-[#40351F]/70 text-[18px] max-w-2xl mx-auto mb-12">
          Stop guessing why your resume gets rejected. Get instant keyword gap
          analysis, AI-powered bullet point rewrites, and precise ATS scoring.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mb-24">
          <a
            href="#analyzer"
            className="px-8 py-4 rounded-full text-[15px] font-bold bg-[#087D9D] hover:bg-[#06657e] text-white transition-all shadow-[0_10px_20px_rgba(8,125,157,0.2)]"
          >
            Analyze Resume Free
          </a>
        </div>

        {/* Resume Analyzer Mockup */}
        <div className="relative mx-auto w-full max-w-[850px] bg-white/90 backdrop-blur-md rounded-[32px] p-6 sm:p-8 shadow-[0_30px_80px_-20px_rgba(64,53,31,0.15)] border border-white">
          <div className="flex flex-col sm:flex-row gap-8">
            {/* Left Stats Panel */}
            <div className="w-full sm:w-1/3 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="size-10 flex items-center justify-center rounded-full bg-[#FFF0C4] text-[#D98A12]">
                  <Sparkles className="size-5" />
                </div>
                <div>
                  <div className="text-[14px] font-bold text-[#40351F] leading-tight">
                    Analysis Complete
                  </div>
                  <div className="text-[12px] text-[#40351F]/60">
                    Target: Software Engineer
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-[11px] text-[#40351F]/50 font-bold mb-1 uppercase tracking-wider">
                    <span>ATS Match</span>
                    <span className="text-[#087D9D]">High</span>
                  </div>
                  <div className="flex items-end gap-4 mt-2">
                    <div>
                      <div className="text-[42px] text-[#087D9D] font-serif leading-none tracking-tight">
                        86
                        <span className="text-[20px] text-[#087D9D]/60">%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#40351F]/10">
                  <div className="flex justify-between text-[11px] text-[#40351F]/50 font-bold mb-3 uppercase tracking-wider">
                    <span>Missing Keywords</span>
                    <span className="text-[#D98A12]">4 Found</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-1.5 bg-[#FFF0C4] rounded-md text-[10px] font-bold text-[#40351F]/70">
                      React
                    </span>
                    <span className="px-2 py-1.5 bg-[#FFF0C4] rounded-md text-[10px] font-bold text-[#40351F]/70">
                      TypeScript
                    </span>
                    <span className="px-2 py-1.5 bg-[#FFF0C4] rounded-md text-[10px] font-bold text-[#40351F]/70">
                      AWS
                    </span>
                    <span className="px-2 py-1.5 bg-[#FFF0C4] rounded-md text-[10px] font-bold text-[#40351F]/70">
                      Docker
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Document Panel */}
            <div className="w-full sm:w-2/3 flex gap-4">
              {/* Document View */}
              <div className="flex-grow bg-[#FFF0C4]/30 rounded-[24px] p-6 shadow-sm border border-[#40351F]/10 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-[16px] font-bold text-[#40351F] flex items-center gap-2">
                    <FileText className="size-4 text-[#40351F]/40" />
                    Resume Optimization
                  </div>
                  <span className="text-[#D98A12]">✦</span>
                </div>

                {/* AI Suggestion Box */}
                <div className="bg-white rounded-[20px] p-5 flex flex-col gap-4 shadow-sm border border-[#40351F]/5">
                  <div className="flex items-center justify-between">
                    <div className="text-[12px] font-bold text-[#087D9D] flex items-center gap-2">
                      <Sparkles className="size-3.5" />
                      AI Rewrite Suggestion
                    </div>
                    <CheckCircle2 className="size-4 text-[#087D9D]" />
                  </div>

                  <div className="text-[13px] text-[#40351F]/40 line-through">
                    Responsible for building new features for the main
                    application and fixing bugs.
                  </div>

                  <div className="text-[14px] text-[#40351F] font-medium leading-relaxed border-l-2 border-[#087D9D] pl-4">
                    Spearheaded the development of 3 core features using React
                    and TypeScript, improving user retention by 15% and
                    resolving 40+ critical bugs.
                  </div>

                  <div className="flex justify-end mt-2">
                    <div className="flex items-center gap-1.5 text-[12px] font-bold text-[#40351F] bg-[#FFF0C4] px-4 py-2 rounded-full cursor-pointer hover:bg-[#FFF0C4]/80 transition">
                      <span>Apply Change</span>
                      <CheckCircle2 className="size-3.5 text-[#087D9D]" />
                    </div>
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
