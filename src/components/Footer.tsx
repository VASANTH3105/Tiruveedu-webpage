"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Explore", href: "#explore" },
    { label: "Events", href: "#events" },
    { label: "Travel Guide", href: "#travel" },
    { label: "About Us", href: "#about" },
  ];

  const supportLinks = [
    { label: "Help Center", href: "#help" },
    { label: "Contact Us", href: "#contact" },
    { label: "List Your Business", href: "#list-business" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
  ];

  return (
    <footer className="relative bg-white text-text-dark overflow-hidden mt-auto border-t border-slate-200/80">
      
      {/* Background Illustration Image Layer */}
      <div 
        className="absolute inset-0 pointer-events-none bg-no-repeat bg-right-bottom bg-contain opacity-40 md:opacity-75"
        style={{
          backgroundImage: `url('/assets/footerImage.png')`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-200/60">
          
          {/* Column 1: Brand & Tagline & Socials (5 cols desktop) */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M14 6l-3.8 5.7 1.8 2.7H5l7-11 7 11h-3.2L14 6zM3 20l5-7 3.5 4.9L10 20H3zm18 0h-7l3-4.2 4 4.2z" />
                </svg>
              </div>
              <span className="font-heading font-extrabold text-2xl tracking-tight text-primary">
                Tiru<span className="text-primary">Veedu</span>
              </span>
            </Link>

            <p className="text-text-gray text-sm max-w-sm leading-relaxed font-normal">
              Your companion for exploring Tiruvannamalai. Temples, stays, food, travel and more — all in one place.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-2.5 pt-1">
              {[
                { icon: <Facebook className="w-4 h-4" />, href: "#facebook", label: "Facebook" },
                { icon: <Instagram className="w-4 h-4" />, href: "#instagram", label: "Instagram" },
                { icon: <Youtube className="w-4 h-4" />, href: "#youtube", label: "YouTube" },
                { icon: <Twitter className="w-4 h-4" />, href: "#twitter", label: "X" },
                { icon: <Linkedin className="w-4 h-4" />, href: "#linkedin", label: "LinkedIn" },
              ].map((soc) => (
                <a
                  key={soc.label}
                  href={soc.href}
                  aria-label={soc.label}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-accent-orange text-text-gray hover:text-white flex items-center justify-center transition-colors shadow-xs"
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-heading font-bold text-sm tracking-wider text-primary">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-gray hover:text-accent-orange transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support (2 cols desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-heading font-bold text-sm tracking-wider text-primary">
              Support
            </h3>
            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-gray hover:text-accent-orange transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal (3 cols desktop) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading font-bold text-sm tracking-wider text-primary">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-gray hover:text-accent-orange transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright Line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© 2024 TiruVeedu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
