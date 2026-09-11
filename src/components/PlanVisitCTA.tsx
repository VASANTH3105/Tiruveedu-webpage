"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PlanVisitCTA() {
  return (
    <section id="plan" className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 mb-16">
      <div className="relative rounded-3xl overflow-hidden shadow-card border border-[#E7E2F2] min-h-[260px] sm:min-h-[300px] flex items-center group">
        
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage: `url('/assets/travelguide.png')`,
          }}
        />

        {/* Right-aligned White Gradient Overlay for Text Readability */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,0.6) 55%, rgba(255,255,255,0.95) 75%, #FFFFFF 100%)",
          }}
        />

        {/* Card Content Grid (Aligned to the Right End) */}
        <div className="relative z-10 w-full p-6 sm:p-10 md:p-12 flex items-center justify-end">
          
          {/* Text & Button Content Box (Pushed to the Right End) */}
          <div className="w-full md:w-1/2 lg:w-5/12 ml-auto flex flex-col items-start space-y-4 text-left">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#17152B] tracking-tight leading-tight">
              Plan Your Visit to Tiruvannamalai
            </h2>
            
            <p className="text-[#625F73] text-sm sm:text-base font-medium leading-relaxed">
              Discover itineraries, travel tips, best time to visit and more to make your journey seamless.
            </p>

            <div className="pt-2">
              <Link
                href="#travel-guide"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4935D4] via-[#6C3DF5] to-[#C084FC] hover:from-[#3C29C2] hover:to-[#B06DEF] text-white font-heading font-semibold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-purpleGlow hover:shadow-btnHover transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get Travel Guide</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
