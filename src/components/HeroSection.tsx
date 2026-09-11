"use client";

import { useState } from "react";
import { MapPin, Search } from "lucide-react";
import CategoryGrid from "./CategoryGrid";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
    }
  };

  return (
    <section className="relative bg-[#FAF9FF] pt-10 pb-20 lg:pt-16 lg:pb-28 overflow-hidden min-h-[640px] flex items-center">
      
      {/* Background Image Layer (Positioned on the Right Side) */}
      <div 
        className="absolute top-0 right-0 bottom-0 w-full lg:w-[65%] xl:w-[60%] bg-no-repeat bg-cover bg-right-top pointer-events-none opacity-90"
        style={{
          backgroundImage: `url('/assets/heroimg.png')`,
        }}
      />

      {/* Soft Ambient Purple Glow in Background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-tr from-[#6C3DF5]/15 via-[#C084FC]/10 to-transparent blur-3xl pointer-events-none" />

      {/* Left to Right Gradient Overlay Fading till 75% of Screen */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "linear-gradient(90deg, #FAF9FF 0%, #FAF9FF 32%, rgba(250, 249, 255, 0.95) 48%, rgba(250, 249, 255, 0.5) 62%, rgba(250, 249, 255, 0) 75%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl flex flex-col space-y-6 text-left">
          
          {/* Everything in Pill Badge */}
          <div className="inline-flex items-center">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#F5F1FF] border border-[#D8CCFF] text-[#4935D4] font-heading font-semibold text-xs tracking-wide shadow-xs">
              <span className="text-[#8B4DFF]">✦</span>
              <span>Everything in</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#17152B] leading-[1.1]">
            Tiruvannamalai,<br />
            <span className="bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent relative">
              all in one place.
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3B82F6]/30 via-[#6366F1]/40 to-[#8B5CF6]/30 rounded-full" />
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-[#625F73] text-base sm:text-lg max-w-xl leading-relaxed font-normal">
            Find places to stay, restaurants, local services, transport and more. Contact properties and providers directly. No hidden fees or commissions.
          </p>

          {/* Floating White Pill Search Bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="relative w-full max-w-xl bg-white p-2 sm:p-2.5 rounded-full shadow-xl shadow-purple-900/5 border border-slate-100 flex items-center gap-2 group transition-all hover:shadow-2xl focus-within:ring-2 focus-within:ring-[#6C3DF5]/30"
          >
            <div className="pl-3 sm:pl-4 text-[#6C3DF5] flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for places, hotels, food..."
              className="w-full bg-transparent text-sm sm:text-base text-[#17152B] placeholder:text-slate-400 focus:outline-none px-1 font-medium"
            />

            <button
              type="submit"
              className="flex items-center gap-2 bg-gradient-to-r from-[#4935D4] via-[#6C3DF5] to-[#8B4DFF] hover:from-[#3C29C2] hover:to-[#B06DEF] text-white font-heading font-semibold text-sm px-6 py-3 rounded-full shadow-purpleGlow hover:shadow-btnHover transition-all shrink-0"
            >
              <Search className="w-4 h-4" />
              <span>Search</span>
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Category Quick Links Grid */}
          <div className="pt-2 max-w-xl">
            <CategoryGrid />
          </div>

          {/* Bottom Hero Tagline Row */}
          <div className="flex items-center gap-2 pt-2 text-[#625F73] text-xs font-semibold tracking-wide">
            <svg className="w-4 h-4 text-[#8B4DFF] fill-current" viewBox="0 0 24 24">
              <path d="M14 6l-3.8 5.7 1.8 2.7H5l7-11 7 11h-3.2L14 6zM3 20l5-7 3.5 4.9L10 20H3zm18 0h-7l3-4.2 4 4.2z" />
            </svg>
            <span>Discover</span>
            <span className="text-[#C084FC]">•</span>
            <span>Explore</span>
            <span className="text-[#C084FC]">•</span>
            <span>Experience</span>
          </div>

        </div>
      </div>
    </section>
  );
}
