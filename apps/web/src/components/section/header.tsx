"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useScroll } from "@/components/section/use-scroll";
import {
  LayoutDashboard,
  Target,
  CreditCard,
  MessageSquare,
  Newspaper,
} from "lucide-react";
import { useAuth } from "@/context/auth-context";

export function Header() {
  const scrolled = useScroll(10);
  const { user } = useAuth();

  return (
    <header
      className={cn(
        "absolute top-0 z-50 w-full transition-all duration-300 px-6 sm:px-10 py-6",
        // scrolled ? "bg-white/50 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#hero" className="flex items-center gap-2 group">
          {/* <div className="w-2.5 h-2.5 bg-[#000000] rounded-tl-[3px] rounded-bl-[3px] rounded-tr-[1px] rounded-br-[1px]" />
            <div className="w-2.5 h-2.5 bg-[#ffffff] rounded-tr-[3px] rounded-br-[3px] rounded-tl-[1px] rounded-bl-[1px]" />
            <div className="w-2.5 h-2.5 bg-[#ffffff] rounded-bl-[3px] rounded-br-[1px] rounded-tl-[1px] rounded-tr-[3px]" />
            <div className="w-2.5 h-2.5 bg-[#000000] rounded-br-[3px] rounded-bl-[1px] rounded-tr-[1px] rounded-tl-[3px]" /> */}
          <img src="./file.svg" alt="logo" className="invert" />
          <span className="font-sans text-white text-[22px] tracking-tight font-semibold">
            TwelveMei
          </span>
        </Link>

        {/* Center Floating Navigation Pill */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center bg-white p-1.5 rounded-[20px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] gap-1"
        >
          <Link
            href="#analyzer"
            title="Resume Analyzer"
            className="p-2.5 rounded-[16px] text-white bg-[#087D9D] hover:bg-[#06657e] transition-colors flex items-center justify-center"
          >
            <LayoutDashboard className="size-[16px]" />
          </Link>
          <Link
            href="#features"
            title="Features"
            className="p-2.5 rounded-[16px] text-[#40351F]/70 hover:text-[#40351F] hover:bg-[#FFF0C4]/50 transition-colors flex items-center justify-center"
          >
            <Target className="size-[16px]" />
          </Link>
          <Link
            href="#pricing"
            title="Pricing"
            className="p-2.5 rounded-[16px] text-[#40351F]/70 hover:text-[#40351F] hover:bg-[#FFF0C4]/50 transition-colors flex items-center justify-center"
          >
            <CreditCard className="size-[16px]" />
          </Link>
          <Link
            href="#testimonials"
            title="Testimonials"
            className="p-2.5 rounded-[16px] text-[#40351F]/70 hover:text-[#40351F] hover:bg-[#FFF0C4]/50 transition-colors flex items-center justify-center"
          >
            <MessageSquare className="size-[16px]" />
          </Link>
          <Link
            href="#news"
            title="News & Updates"
            className="p-2.5 rounded-[16px] text-[#40351F]/70 hover:text-[#40351F] hover:bg-[#FFF0C4]/50 transition-colors flex items-center justify-center"
          >
            <Newspaper className="size-[16px]" />
          </Link>
        </nav>

        {/* Right Action */}
        <div className="flex items-center">
          <Link
            href="#pricing"
            className="px-5 py-3 rounded-xl text-[14px] font-semibold bg-[#ffffff] text-black  shadow-[0_2px_15px_-3px_rgba(8,125,157,0.3)] hover:bg-[#f0f0f0] transition-all"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
