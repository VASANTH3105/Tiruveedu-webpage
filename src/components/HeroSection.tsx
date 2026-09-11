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
    <section className="relative hero-gradient-bg pt-10 pb-20 lg:pt-16 lg:pb-28 overflow-hidden min-h-[640px] flex items-center">
      
      {/* Background Image Layer (Positioned on the Right Side) */}
      <div 
        className="absolute top-0 right-0 bottom-0 w-full lg:w-[65%] xl:w-[60%] bg-no-repeat bg-cover bg-right-top pointer-events-none"
        style={{
          backgroundImage: `url('/assets/heroimg.png')`,
        }}
      />

      {/* Left to Right Gradient Overlay Fading till 75% of Screen */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 30%, rgba(255, 255, 255, 0.95) 45%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0) 75%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl flex flex-col space-y-6 text-left">
          
          {/* Discover Pill Badge */}
          <div className="inline-flex items-center">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent-orangeLight border border-accent-orange/20 text-accent-orange font-heading font-semibold text-xs tracking-wide shadow-xs">
              <span>✦</span>
              <span>Discover</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-primary leading-[1.15]">
            Tiruvannamalai, <br />
            <span className="text-accent-red">all in one place.</span>
          </h1>

          {/* Subtext */}
          <p className="text-text-gray text-base sm:text-lg max-w-xl leading-relaxed font-normal">
            Temples, stays, food, travel and experiences — explore the spiritual heart of Tamil Nadu.
          </p>

          {/* Floating White Pill Search Bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="relative w-full max-w-xl bg-white p-2 sm:p-2.5 rounded-full shadow-lg shadow-primary/5 border border-slate-100 flex items-center gap-2 group transition-shadow hover:shadow-xl focus-within:ring-2 focus-within:ring-accent-orange/30"
          >
            <div className="pl-3 sm:pl-4 text-accent-orange flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for places, hotels, food..."
              className="w-full bg-transparent text-sm sm:text-base text-text-dark placeholder:text-text-muted focus:outline-none px-1 font-medium"
            />

            <button
              type="submit"
              className="flex items-center gap-1.5 bg-accent-orange hover:bg-accent-orange/90 text-white font-heading font-semibold text-sm px-6 py-3 rounded-full shadow-md shadow-accent-orange/20 hover:shadow-lg transition-all shrink-0"
            >
              <span>Search</span>
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Category Quick Links Grid */}
          <div className="pt-4 max-w-xl">
            <CategoryGrid />
          </div>

        </div>
      </div>
    </section>
  );
}
