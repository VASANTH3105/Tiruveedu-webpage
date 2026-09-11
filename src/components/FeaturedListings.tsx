"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  MapPin,
  Star,
  ArrowRight,
  ArrowLeft,
  Crown,
  Leaf,
  ShieldCheck,
  Zap,
  Clock,
  Users,
  Armchair,
  Globe,
  Landmark,
  Bike,
  Car,
} from "lucide-react";

interface FeatureTag {
  icon: React.ReactNode;
  label: string;
}

interface Listing {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  categoryIcon: React.ReactNode;
  location: string;
  rating: number;
  reviewsCount: string;
  image: string;
  isPopular?: boolean;
  featureTags?: FeatureTag[];
  isVehicleBg?: boolean;
}

export default function FeaturedListings() {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const listings: Listing[] = [
    {
      id: "temple-1",
      title: "Arunachaleswarar Temple",
      subtitle: "A spiritual landmark",
      category: "Temple",
      categoryIcon: <Landmark className="w-3.5 h-3.5 text-[#6C3DF5]" />,
      location: "Tiruvannamalai",
      rating: 4.8,
      reviewsCount: "1.2k",
      image: "https://chatgpt.com/s/m_6aa39ff378148191a3f4ba480b68015a",
    },
    {
      id: "bike-rental",
      title: "EV Bike Rentals",
      subtitle: "Explore with freedom",
      category: "Transport",
      categoryIcon: <Bike className="w-3.5 h-3.5 text-[#6C3DF5]" />,
      location: "Tiruvannamalai",
      rating: 4.6,
      reviewsCount: "320",
      image: "/assets/bike.png",
      isVehicleBg: true,
      featureTags: [
        { icon: <Leaf className="w-3 h-3 text-emerald-600" />, label: "Eco Friendly" },
        { icon: <ShieldCheck className="w-3 h-3 text-sky-600" />, label: "Well Maintained" },
        { icon: <Zap className="w-3 h-3 text-amber-500" />, label: "Instant Booking" },
      ],
    },
    {
      id: "auto-service",
      title: "City Auto Service",
      subtitle: "Safe • Reliable • Local",
      category: "Transport",
      categoryIcon: <Car className="w-3.5 h-3.5 text-[#6C3DF5]" />,
      location: "Tiruvannamalai",
      rating: 4.4,
      reviewsCount: "210",
      image: "/assets/rickshaw.png",
      isPopular: true,
      isVehicleBg: true,
      featureTags: [
        { icon: <ShieldCheck className="w-3 h-3 text-[#6C3DF5]" />, label: "Verified Drivers" },
        { icon: <Clock className="w-3 h-3 text-[#6C3DF5]" />, label: "On-time Service" },
        { icon: <Users className="w-3 h-3 text-[#6C3DF5]" />, label: "Local Experts" },
      ],
    },
    {
      id: "taxi-service",
      title: "Outstation Taxi Service",
      subtitle: "Comfortable & On-time",
      category: "Transport",
      categoryIcon: <Car className="w-3.5 h-3.5 text-[#6C3DF5]" />,
      location: "Tiruvannamalai",
      rating: 4.9,
      reviewsCount: "450",
      image: "/assets/taxi.png",
      isVehicleBg: true,
      featureTags: [
        { icon: <Armchair className="w-3 h-3 text-purple-600" />, label: "Comfortable Rides" },
        { icon: <ShieldCheck className="w-3 h-3 text-purple-600" />, label: "Safe & Secure" },
        { icon: <Globe className="w-3 h-3 text-purple-600" />, label: "All Destinations" },
      ],
    },
  ];

  return (
    <section id="featured-listings" className="relative py-16 sm:py-24 bg-[#FAF9FF] overflow-hidden">
      
      {/* Background Decorative Ambient Curve / Wave Flourish */}
      <div className="absolute -top-24 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#6C3DF5]/10 via-[#C084FC]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="block font-heading font-extrabold text-xs tracking-widest uppercase text-[#6C3DF5] mb-1">
              Explore
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#17152B] tracking-tight">
              Featured <span className="text-[#6C3DF5]">Listings</span>
            </h2>
            <p className="text-[#625F73] text-sm sm:text-base mt-1.5 font-medium">
              Handpicked places to make your trip memorable.
            </p>
          </div>

          <Link
            href="#all-listings"
            className="inline-flex items-center gap-2 self-start sm:self-auto px-6 py-2.5 rounded-full border border-[#D8CCFF] bg-[#F5F1FF] hover:bg-[#EBE3FF] text-[#4935D4] font-heading font-semibold text-xs sm:text-sm shadow-xs transition-all transform hover:-translate-y-0.5"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {listings.map((item) => (
            <div
              key={item.id}
              className={`group relative bg-white rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                item.isPopular
                  ? "border-2 border-[#6C3DF5] shadow-purpleGlow ring-2 ring-[#6C3DF5]/20 scale-[1.02]"
                  : "border border-[#E7E2F2] shadow-sm hover:shadow-card hover:border-[#D8CCFF]"
              }`}
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F8FAF6]/60 flex items-center justify-center p-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full ${
                    item.isVehicleBg
                      ? "object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                      : "object-cover transition-transform duration-500 group-hover:scale-105"
                  }`}
                  onError={(e) => {
                    e.currentTarget.src = "/assets/heroimg.png";
                  }}
                />

                {/* Most Popular Top Left Badge Overlay */}
                {item.isPopular && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-[#4935D4] to-[#6C3DF5] text-white text-[11px] font-heading font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Crown className="w-3.5 h-3.5 fill-white text-white" />
                    <span>Most Popular</span>
                  </div>
                )}

                {/* Heart / Favorite Button Top-Right Overlay */}
                <button
                  onClick={() => toggleFavorite(item.id)}
                  aria-label="Save to favorites"
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/95 backdrop-blur-xs shadow-md border border-[#E7E2F2] flex items-center justify-center transition-all hover:scale-110"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      favorites[item.id]
                        ? "fill-rose-500 text-rose-500"
                        : "text-[#625F73] hover:text-[#6C3DF5]"
                    }`}
                  />
                </button>

                {/* Location Overlay for Temple Card 1 */}
                {!item.isVehicleBg && (
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#C084FC]" />
                    <span>{item.location}</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  {/* Category Pill Tag */}
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F5F1FF] border border-[#D8CCFF] text-[#6C3DF5]">
                      {item.categoryIcon}
                      <span>{item.category}</span>
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#17152B] leading-snug group-hover:text-[#6C3DF5] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#625F73] text-xs sm:text-sm font-normal line-clamp-1">
                    {item.subtitle}
                  </p>

                  {/* Feature Tags Row (For Transport / Rentals) */}
                  {item.featureTags && item.featureTags.length > 0 && (
                    <div className="grid grid-cols-3 gap-1.5 pt-2">
                      {item.featureTags.map((tag, idx) => (
                        <div
                          key={idx}
                          className="bg-[#F5F1FF]/80 border border-[#E7E2F2] rounded-xl p-1.5 flex flex-col items-center justify-center text-center space-y-0.5"
                        >
                          <div>{tag.icon}</div>
                          <span className="text-[10px] font-semibold text-[#17152B] leading-tight line-clamp-1">
                            {tag.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Location for Vehicle Cards */}
                  {item.isVehicleBg && (
                    <div className="flex items-center gap-1 text-[#625F73] text-xs font-medium pt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#6C3DF5]" />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>

                {/* Rating & Arrow Button Footer Row */}
                <div className="pt-3 border-t border-[#E7E2F2] flex items-center justify-between">
                  <div className="flex items-center gap-1 font-semibold text-xs sm:text-sm text-[#17152B]">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold">{item.rating}</span>
                    <span className="text-[#625F73] font-normal">
                      ({item.reviewsCount})
                    </span>
                  </div>

                  <Link
                    href={`#listing-${item.id}`}
                    aria-label={`View details for ${item.title}`}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-xs ${
                      item.isPopular
                        ? "bg-gradient-to-r from-[#4935D4] to-[#6C3DF5] text-white shadow-purpleGlow hover:scale-105"
                        : "bg-[#F5F1FF] text-[#6C3DF5] border border-[#D8CCFF] hover:bg-[#6C3DF5] hover:text-white"
                    }`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Dots & Controls Row */}
        <div className="flex items-center justify-between pt-4">
          {/* Left: Indicator Dots */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-2 rounded-full bg-[#6C3DF5]" />
            <div className="w-2 h-2 rounded-full bg-slate-200 hover:bg-[#D8CCFF] transition-colors cursor-pointer" />
            <div className="w-2 h-2 rounded-full bg-slate-200 hover:bg-[#D8CCFF] transition-colors cursor-pointer" />
          </div>

          {/* Right: Circular Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Previous listings"
              className="w-10 h-10 rounded-full bg-white border border-[#E7E2F2] text-[#625F73] hover:text-[#4935D4] hover:border-[#D8CCFF] shadow-xs flex items-center justify-center transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              aria-label="Next listings"
              className="w-10 h-10 rounded-full bg-[#F5F1FF] border border-[#D8CCFF] text-[#6C3DF5] hover:bg-[#6C3DF5] hover:text-white shadow-xs flex items-center justify-center transition-all"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
