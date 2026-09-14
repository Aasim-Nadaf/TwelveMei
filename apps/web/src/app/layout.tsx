import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/context/auth-context";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Figtree, Newsreader } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "TwelveMei — Autopilot for your Customer Support",
  description:
    "Autopilot for your Customer Support. Scale effortlessly with TwelveMei.",
  openGraph: {
    title: "TwelveMei — Autopilot for your Customer Support",
    description:
      "Autopilot for your Customer Support. Scale effortlessly with TwelveMei.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", figtree.variable, newsreader.variable)}
    >
      <body className="min-h-full flex flex-col bg-[#F2F2F2]">
        <AuthProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
