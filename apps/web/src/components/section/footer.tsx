const productLinks = [
  { label: "Platform", href: "#hero" },
  { label: "Features", href: "#features" },
  { label: "Analyzer", href: "#analyzer" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#news" },
] as const;

const resourceLinks = [
  { label: "Documentation", href: "#" },
  { label: "API Reference", href: "#" },
  { label: "Security", href: "#" },
  { label: "Guides", href: "#" },
] as const;

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Trust Center", href: "#" },
] as const;

export function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#ffffff] shadow-sm py-20 rounded-t-[40px] mt-4 sm:mt-6 lg:mt-8 overflow-hidden text-[#40351F]/70"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#40351F]/10">
          {/* Brand and Description */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <img src="./file.svg" alt="logo" />
              <span className="text-[18px] font-sans text-[#40351F] font-semibold tracking-tight">
                TwelveMei
              </span>
            </div>
            <p className="text-[14px] font-normal leading-relaxed max-w-[280px]">
              The intelligent ATS optimization platform that helps you land more
              interviews.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[12px] bg-white border border-[#40351F]/10 text-[11px] font-medium text-[#40351F]">
              <span className="size-1.5 rounded-full bg-[#087D9D]"></span>
              <span>All systems operational</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2">
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#40351F] mb-6">
              Product
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] hover:text-[#087D9D] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#40351F] mb-6">
              Resources
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] hover:text-[#087D9D] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-3">
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#40351F] mb-6">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] hover:text-[#087D9D] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px]">
          <p>© {new Date().getFullYear()} TwelveMei. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="#privacy"
              className="hover:text-[#087D9D] transition-colors"
            >
              Privacy
            </a>
            <span>•</span>
            <a href="#terms" className="hover:text-[#087D9D] transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
