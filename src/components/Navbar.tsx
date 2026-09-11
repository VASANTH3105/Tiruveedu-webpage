"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/", active: true },
    { label: "Explore", href: "#explore" },
    { label: "Stay", href: "#stay" },
    { label: "Eat", href: "#eat" },
    { label: "Events", href: "#events" },
    { label: "Travel", href: "#travel" },
    { label: "About", href: "#about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Brand Logo Image */}
          <Link href="/" className="flex items-center group">
            <img
              src="/assets/brandlogo.png"
              alt="TiruVeedu Logo"
              className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  item.active
                    ? "text-primary font-bold bg-slate-100/70"
                    : "text-text-gray hover:text-primary hover:bg-slate-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Search Icon Button */}
            <button
              aria-label="Search"
              className="w-10 h-10 rounded-full bg-slate-100 text-text-gray hover:text-primary hover:bg-slate-200/80 flex items-center justify-center transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Orange CTA Pill Button */}
            <Link
              href="#plan"
              className="inline-flex items-center gap-2 bg-accent-orange hover:bg-accent-orange/90 text-white font-heading font-semibold text-sm px-5 py-2.5 rounded-full shadow-md shadow-accent-orange/20 hover:shadow-lg hover:shadow-accent-orange/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Plan Your Trip</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-text-gray hover:text-primary hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                item.active
                  ? "text-primary font-bold bg-slate-100"
                  : "text-text-gray hover:text-primary hover:bg-slate-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
