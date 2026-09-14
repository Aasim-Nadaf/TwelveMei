"use client";

import { ArrowDown, FileText, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative pt-12 pb-32 md:pt-20 md:pb-48 overflow-hidden min-h-[90vh] flex flex-col items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.85] object-cover w-full h-full"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2400&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Gradient overlay to fade bottom to white */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white to-transparent z-0" />
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-0" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 w-full flex flex-col items-center mt-8">
        
        {/* Trust Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white shadow-sm border border-black/5 text-[13px] font-medium text-[#2A2B2D]">
            <Sparkles className="size-3.5 text-[#7DA154]" />
            <span>Trusted by <strong>1.2M+</strong> Job Seekers globally</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] font-serif tracking-tight text-[#111111] leading-[1.05]">
            Beat the ATS.<br/>
            Land the interview.<br/>
            Get hired faster.
          </h1>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-16">
          <a href="#analyzer" className="px-8 py-4 rounded-2xl text-[16px] font-semibold bg-[#212121] text-white hover:bg-black transition-all shadow-[0_4px_14px_0_rgb(0,0,0,39%)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.23)]">
            Analyze Your Resume Now
          </a>
        </div>

        {/* ATS Dashboard Mockup */}
        <div className="relative mx-auto w-full max-w-[750px] bg-white/95 backdrop-blur-md rounded-[32px] p-6 sm:p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-white">
          {/* Header of Mockup */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
             <div className="flex items-center gap-3 bg-[#F8F9F9] px-3 py-2 rounded-2xl shadow-sm border border-black/5">
                <div className="size-10 rounded-[12px] bg-[#E5ECE0] text-[#7DA154] flex items-center justify-center shrink-0">
                   <FileText className="size-5" />
                </div>
                <div>
                   <div className="text-[14px] font-semibold text-[#111111] leading-tight">Alex_Morgan_Resume_v4.pdf</div>
                   <div className="text-[12px] text-[#888888]">Uploaded just now</div>
                </div>
             </div>
             <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-black/5 shadow-sm">
                <span className="text-[13px] text-[#A0A0A0] font-medium">Target Role:</span>
                <span className="text-[13px] font-semibold text-[#111111] flex items-center gap-2">Product Manager <ArrowDown className="size-3" /></span>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Left Column Stats */}
             <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between text-[13px] text-[#A0A0A0] font-medium mb-3">
                     <span>ATS Match Score</span>
                     <span className="text-[#7DA154]">Excellent</span>
                  </div>
                  <div className="flex items-end gap-6">
                     <div>
                        <div className="text-[56px] text-[#7DA154] font-semibold leading-none tracking-tighter">88<span className="text-3xl text-[#A0A0A0]">/100</span></div>
                     </div>
                  </div>
                  {/* Progress bar mock */}
                  <div className="w-full h-2 bg-zinc-100 rounded-full mt-4 overflow-hidden">
                     <div className="h-full bg-[#7DA154] w-[88%] rounded-full"></div>
                  </div>
                </div>

                <div className="pt-6 border-t border-black/5 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[12px] text-[#A0A0A0] font-medium mb-1">Keywords Found</div>
                    <div className="text-[28px] text-[#111111] font-semibold leading-none">24</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-[#A0A0A0] font-medium mb-1">Formatting Flaws</div>
                    <div className="text-[28px] text-[#B95959] font-semibold leading-none">2</div>
                  </div>
                </div>
             </div>

             {/* Right Column AI Rewrite Mockup */}
             <div className="bg-[#F8F9F9] rounded-[24px] p-5 border border-black/5 flex flex-col gap-4 relative shadow-inner">
                <div className="flex items-center gap-2 mb-1">
                   <Sparkles className="size-4 text-[#7DA154]" />
                   <span className="text-[13px] font-bold text-[#111111]">AI Bullet Rewrite</span>
                </div>
                
                {/* Original */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-black/5">
                   <div className="flex items-center gap-2 mb-2">
                      <div className="size-2 rounded-full bg-rose-400"></div>
                      <span className="text-[11px] font-semibold text-rose-500 uppercase tracking-wider">Weak Original</span>
                   </div>
                   <p className="text-[13px] text-[#888888] line-through decoration-rose-300">
                     Managed a team of 5 people and increased sales significantly last year.
                   </p>
                </div>

                <div className="flex justify-center -my-2 relative z-10">
                   <div className="bg-white border border-black/5 rounded-full p-1.5 shadow-sm text-[#7DA154]">
                      <ArrowDown className="size-4" />
                   </div>
                </div>

                {/* AI Suggestion */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#7DA154]/30 ring-1 ring-[#7DA154]/10 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-16 h-16 bg-[#7DA154]/10 rounded-bl-full pointer-events-none"></div>
                   <div className="flex items-center gap-2 mb-2 relative z-10">
                      <div className="size-2 rounded-full bg-[#7DA154]"></div>
                      <span className="text-[11px] font-semibold text-[#4A6430] uppercase tracking-wider">High-Impact Rewrite</span>
                   </div>
                   <p className="text-[13px] text-[#111111] relative z-10 leading-relaxed font-medium">
                     Directed a 5-person cross-functional team, driving a <span className="bg-[#E5ECE0] text-[#4A6430] px-1 rounded-sm">32% increase</span> in Q3 revenue through optimized workflows.
                   </p>
                </div>

             </div>
          </div>
        </div>
      </div>
    </section>
  );
}


