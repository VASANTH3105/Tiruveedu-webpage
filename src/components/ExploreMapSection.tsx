"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Landmark,
  Bed,
  Utensils,
  Compass,
  Car,
  Plus,
  Minus,
  ArrowRight,
} from "lucide-react";

export default function ExploreMapSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterItems = [
    { id: "all", label: "All", icon: <MapPin className="w-4 h-4 text-[#4935D4]" /> },
    { id: "temples", label: "Temples", icon: <Landmark className="w-4 h-4 text-purple-700" /> },
    { id: "hotels", label: "Hotels", icon: <Bed className="w-4 h-4 text-indigo-700" /> },
    { id: "food", label: "Food", icon: <Utensils className="w-4 h-4 text-rose-600" /> },
    { id: "tourist-spots", label: "Tourist Spots", icon: <Compass className="w-4 h-4 text-teal-600" /> },
    { id: "transport", label: "Transport", icon: <Car className="w-4 h-4 text-emerald-600" /> },
  ];

  return (
    <section id="explore-map" className="py-14 sm:py-20 bg-[#FAF9FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#17152B] tracking-tight">
              Explore Tiruvannamalai
            </h2>
            <p className="text-[#625F73] text-sm sm:text-base mt-1 font-medium">
              Find popular places, hotels, food spots and more on the map.
            </p>
          </div>

          <Link
            href="#full-map"
            className="inline-flex items-center gap-1.5 self-start sm:self-auto px-5 py-2.5 rounded-xl border border-[#D8CCFF] bg-[#F5F1FF] hover:bg-[#EBE3FF] text-[#4935D4] font-heading font-semibold text-xs sm:text-sm shadow-xs transition-all transform hover:-translate-y-0.5"
          >
            <span>View Full Map</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Map Interactive Frame Container */}
        <div className="relative rounded-3xl overflow-hidden border border-[#E7E2F2] shadow-card bg-white min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] flex items-center justify-center">
          
          {/* Main Map Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/assets/mapview.png')`,
            }}
          />

          {/* Left Floating Category Filter Sidebar Card */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2 sm:p-3 shadow-lg border border-[#E7E2F2] flex flex-col space-y-1 w-44 sm:w-52">
            {filterItems.map((item) => {
              const isActive = activeFilter === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveFilter(item.id)}
                  className={`flex items-center gap-3 px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all text-left ${
                    isActive
                      ? "bg-[#F5F1FF] text-[#4935D4] border border-[#D8CCFF] shadow-xs"
                      : "text-[#17152B] hover:bg-[#F5F1FF]/60"
                  }`}
                >
                  <div className="shrink-0">{item.icon}</div>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Bottom Right Floating Zoom Control Box */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 bg-white/95 backdrop-blur-md rounded-xl p-1.5 shadow-lg border border-[#E7E2F2] flex flex-col space-y-1">
            <button
              aria-label="Zoom in"
              onClick={() => alert("Map Zoomed In")}
              className="w-10 h-10 rounded-lg hover:bg-[#F5F1FF] text-[#4935D4] flex items-center justify-center font-bold transition-colors"
            >
              <Plus className="w-5 h-5" />
            </button>
            <div className="h-px bg-[#E7E2F2] w-3/4 mx-auto" />
            <button
              aria-label="Zoom out"
              onClick={() => alert("Map Zoomed Out")}
              className="w-10 h-10 rounded-lg hover:bg-[#F5F1FF] text-[#4935D4] flex items-center justify-center font-bold transition-colors"
            >
              <Minus className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
