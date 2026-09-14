import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "@/components/ui/button";
import { Portal, PortalBackdrop } from "@/components/section/portal";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/context/auth-context";

const navLinks = [
  { label: "Home", href: "/#" },
  { label: "Dashboard", href: "/#dashboard" },
  { label: "Analyzer", href: "/#analyzer" },
];

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const { user } = useAuth();

  return (
    <div className="md:hidden">
      <Button
        aria-controls="mobile-menu"
        aria-expanded={open}
        aria-label="Toggle menu"
        className="md:hidden"
        onClick={() => setOpen(!open)}
        size="icon"
        variant="outline"
      >
        {open ? <X className="size-4" /> : <Menu className="size-4" />}
      </Button>
      {open && (
        <Portal className="top-14" id="mobile-menu">
          <PortalBackdrop />
          <div
            className={cn(
              "data-[slot=open]:zoom-in-97 ease-out data-[slot=open]:animate-in",
              "size-full p-4 bg-white",
            )}
            data-slot={open ? "open" : "closed"}
          >
            <div className="grid gap-y-2">
              {navLinks.map((link) => (
                <Button
                  className="justify-start"
                  key={link.label}
                  variant="ghost"
                  render={<Link href={link.href} onClick={() => setOpen(false)} />}
                  nativeButton={false}
                >
                  {link.label}
                </Button>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-2">
              {user ? (
                <Button
                  className="w-full bg-[#111111] text-white"
                  render={<Link href="/#dashboard" onClick={() => setOpen(false)} />}
                  nativeButton={false}
                >
                  My Dashboard
                </Button>
              ) : (
                <Button
                  className="w-full bg-[#111111] text-white"
                  render={<Link href="/signin" onClick={() => setOpen(false)} />}
                  nativeButton={false}
                >
                  Sign In
                </Button>
              )}
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
}

