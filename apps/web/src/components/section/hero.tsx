"use client";

import { Check, ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative pt-12 pb-32 md:pt-20 md:pb-48 overflow-hidden min-h-[90vh] flex flex-col items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-90 object-cover w-full h-full"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1501862700950-18382cd41497?q=80&w=2400&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center 80%",
        }}
      />
      {/* Gradient overlay to fade bottom to white */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white to-transparent z-0" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 w-full flex flex-col items-center mt-8">
        
        {/* Baked to YC Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white shadow-sm text-[13px] font-medium text-[#2A2B2D]">
            <span>Baked to</span>
            <div className="flex items-center justify-center size-[18px] bg-[#F26522] rounded-[3px] text-white font-bold text-[10px]">
              Y
            </div>
            <span>Combinator</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] font-serif tracking-tight text-[#111111] leading-[1.05]">
            Autopilot for<br/>
            your Customer Support.<br/>
            Scale effortlessly
          </h1>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-16">
          <button className="px-8 py-4 rounded-2xl text-[16px] font-semibold bg-[#212121] text-white hover:bg-black transition-all shadow-[0_4px_14px_0_rgb(0,0,0,39%)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.23)]">
            Join to Waitlist
          </button>
        </div>

        {/* CRM Dashboard Mockup */}
        <div className="relative mx-auto w-full max-w-[700px] bg-white/90 backdrop-blur-md rounded-[32px] p-6 sm:p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white/50">
          {/* Header of Mockup */}
          <div className="flex items-center justify-between mb-8">
             <div className="flex items-center gap-3 bg-white px-3 py-2 rounded-2xl shadow-sm border border-black/5">
                <div className="size-8 rounded-full overflow-hidden shrink-0">
                   <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Avatar" className="size-full object-cover" />
                </div>
                <div>
                   <div className="text-[13px] font-bold text-[#111111] leading-tight">World of Diversity</div>
                   <div className="text-[11px] text-[#888888]">my space</div>
                </div>
             </div>
             <div className="flex items-center gap-2">
                <span className="text-[20px] text-[#A0A0A0] font-medium">Board:</span>
                <span className="text-[22px] font-semibold text-[#111111] flex items-center gap-2">CRM <ArrowDown className="size-4" /></span>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {/* Left Column Stats */}
             <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between text-[13px] text-[#A0A0A0] font-medium mb-3">
                     <span>New leads</span>
                     <span>23</span>
                  </div>
                  <div className="flex items-end gap-6">
                     <div>
                        <div className="text-4xl text-[#7DA154] font-semibold">12</div>
                        <div className="text-[10px] text-[#A0A0A0] mt-1">send request</div>
                     </div>
                     <div>
                        <div className="text-4xl text-[#222222] font-semibold">10</div>
                        <div className="text-[10px] text-[#A0A0A0] mt-1">in chat now</div>
                     </div>
                     <div>
                        <div className="text-4xl text-[#B95959] font-semibold">1</div>
                        <div className="text-[10px] text-[#B95959] mt-1">close chat</div>
                     </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-black/5">
                  <div className="flex items-center justify-between text-[13px] text-[#A0A0A0] font-medium mb-4">
                     <span>New clients</span>
                     <span>3</span>
                  </div>
                  <div className="text-[40px] text-[#7DA154] font-semibold leading-none">
                     23 251$
                  </div>
                </div>
             </div>

             {/* Right Column Chat Mockup */}
             <div className="bg-white rounded-3xl p-4 shadow-sm border border-black/5 flex flex-col gap-4 relative">
                {/* Avatars Stacked left side (decorative) */}
                <div className="absolute -left-[45px] top-4 flex flex-col gap-2">
                   <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80" alt="Avatar" className="size-8 rounded-full border-2 border-white object-cover" />
                   <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Avatar" className="size-8 rounded-full border-2 border-white object-cover" />
                   <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80" alt="Avatar" className="size-8 rounded-full border-2 border-white object-cover opacity-60" />
                   <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80" alt="Avatar" className="size-8 rounded-full border-2 border-white object-cover opacity-40" />
                </div>
                
                <div className="bg-[#F8F9F9] rounded-2xl p-4">
                   <div className="flex items-center justify-between mb-2">
                      <div className="text-[13px] font-semibold text-[#111]">Marcus <span className="text-[#A0A0A0] font-normal text-[11px] ml-1">#SH-24819</span></div>
                      <div className="size-4 rounded-full bg-black/10 flex items-center justify-center">
                         <div className="w-2 h-[1px] bg-white"></div>
                      </div>
                   </div>
                   <p className="text-[13px] text-[#555] leading-snug">Hey, I ordered yesterday. Where is it?</p>
                </div>

                <div className="flex justify-end">
                   <div className="bg-white border border-black/5 rounded-full px-3 py-1.5 text-[11px] text-[#777] shadow-sm inline-flex items-center gap-1.5">
                      <Check className="size-3" /> Order lookup
                   </div>
                </div>

                <div className="flex items-start gap-2 max-w-[85%]">
                   <div className="size-6 rounded-full overflow-hidden shrink-0 mt-1">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Avatar" className="size-full object-cover" />
                   </div>
                   <div className="bg-[#F8F9F9] rounded-2xl p-3 text-[13px] text-[#333]">
                      Found it <span className="bg-[#7DA154] text-white text-[10px] px-1 rounded-sm ml-1">✓</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

