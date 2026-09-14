"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useScroll } from "@/components/section/use-scroll";
import { Grid, FileText, LayoutDashboard } from "lucide-react";
import { useAuth } from "@/context/auth-context";

export function Header() {
  const scrolled = useScroll(10);
  const { user } = useAuth();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 px-6 sm:px-10 py-6",
        scrolled ? "bg-white/50 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/#" className="flex items-center gap-2 group">
          <div className="grid grid-cols-2 gap-0.5">
             <div className="w-2.5 h-2.5 bg-[#1F2327] rounded-tl-[3px] rounded-bl-[3px] rounded-tr-[1px] rounded-br-[1px]" />
             <div className="w-2.5 h-2.5 bg-[#1F2327] rounded-tr-[3px] rounded-br-[3px] rounded-tl-[1px] rounded-bl-[1px]" />
             <div className="w-2.5 h-2.5 bg-[#1F2327] rounded-bl-[3px] rounded-br-[1px] rounded-tl-[1px] rounded-tr-[3px]" />
             <div className="w-2.5 h-2.5 bg-[#1F2327] rounded-br-[3px] rounded-bl-[1px] rounded-tr-[1px] rounded-tl-[3px]" />
          </div>
          <span className="font-sans font-semibold text-[#1F2327] text-[22px] tracking-tight">ResumeAI</span>
        </Link>

        {/* Center Floating Navigation Pill */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center bg-white p-1.5 rounded-[20px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] gap-1"
        >
          <Link
            href="/#"
            title="Home"
            className="p-2.5 rounded-[16px] text-[#58595B] hover:text-[#2A2B2D] hover:bg-zinc-50 transition-colors flex items-center justify-center"
          >
            <Grid className="size-[18px]" />
          </Link>
          <Link
            href="/#dashboard"
            title="Dashboard"
            className="p-2.5 rounded-[16px] text-[#58595B] hover:text-[#2A2B2D] hover:bg-zinc-50 transition-colors flex items-center justify-center"
          >
            <LayoutDashboard className="size-[18px]" />
          </Link>
          <Link
            href="/#analyzer"
            title="Analyze Resume"
            className="p-2.5 rounded-[16px] text-[#58595B] hover:text-[#2A2B2D] hover:bg-zinc-50 transition-colors flex items-center justify-center"
          >
            <FileText className="size-[18px]" />
          </Link>
        </nav>

        {/* Right Action */}
        <div className="flex items-center">
          {user ? (
            <Link
              href="/#dashboard"
              className="px-5 py-3 rounded-xl text-[15px] font-semibold bg-[#2A2B2D] text-white shadow-sm hover:bg-black transition-all"
            >
              My Dashboard
            </Link>
          ) : (
            <Link
              href="/signin"
              className="px-5 py-3 rounded-xl text-[15px] font-semibold bg-white text-[#2A2B2D] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:bg-zinc-50 transition-all"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}


