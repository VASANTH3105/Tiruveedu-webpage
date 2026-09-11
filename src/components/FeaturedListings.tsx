"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, MapPin, Star, ArrowRight } from "lucide-react";

interface Listing {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  categoryBg: string;
  categoryColor: string;
  location: string;
  rating: number;
  reviewsCount: string;
  image: string;
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
      categoryBg: "bg-amber-100/90",
      categoryColor: "text-amber-800",
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
      categoryBg: "bg-emerald-100/90",
      categoryColor: "text-emerald-800",
      location: "Tiruvannamalai",
      rating: 4.6,
      reviewsCount: "320",
      image: "/assets/bike.png",
      isVehicleBg: true,
    },
    {
      id: "auto-service",
      title: "City Auto Service",
      subtitle: "Safe • Reliable • Local",
      category: "Transport",
      categoryBg: "bg-blue-100/90",
      categoryColor: "text-blue-800",
      location: "Tiruvannamalai",
      rating: 4.4,
      reviewsCount: "210",
      image: "/assets/rickshaw.png",
      isVehicleBg: true,
    },
    {
      id: "taxi-service",
      title: "Outstation Taxi Service",
      subtitle: "Comfortable & On-time",
      category: "Transport",
      categoryBg: "bg-orange-100/90",
      categoryColor: "text-orange-800",
      location: "Tiruvannamalai",
      rating: 4.9,
      reviewsCount: "450",
      image: "/assets/taxi.png",
      isVehicleBg: true,
    },
  ];

  return (
    <section id="featured-listings" className="py-12 sm:py-16 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-primary tracking-tight">
              Featured Listings
            </h2>
            <p className="text-text-gray text-sm sm:text-base mt-1 font-medium">
              Handpicked places to make your trip memorable.
            </p>
          </div>

          <Link
            href="#all-listings"
            className="inline-flex items-center gap-1.5 self-start sm:self-auto px-5 py-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-primary font-heading font-semibold text-xs sm:text-sm shadow-xs transition-colors"
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
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50 flex items-center justify-center p-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full ${
                    item.isVehicleBg
                      ? "object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                      : "object-cover transition-transform duration-500 group-hover:scale-105"
                  }`}
                  onError={(e) => {
                    // Fallback to hero image if remote template image fails
                    e.currentTarget.src = "/assets/heroimg.png";
                  }}
                />

                {/* Heart / Favorite Button Top-Right */}
                <button
                  onClick={() => toggleFavorite(item.id)}
                  aria-label="Save to favorites"
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs shadow-md flex items-center justify-center transition-colors hover:bg-white"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      favorites[item.id]
                        ? "fill-rose-500 text-rose-500"
                        : "text-slate-400 hover:text-slate-600"
                    }`}
                  />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  {/* Category Pill Tag */}
                  <div>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${item.categoryBg} ${item.categoryColor}`}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-heading font-bold text-base sm:text-lg text-primary leading-snug group-hover:text-accent-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-text-gray text-xs sm:text-sm font-normal line-clamp-1">
                    {item.subtitle}
                  </p>

                  {/* Location */}
                  <div className="flex items-center gap-1 text-text-gray text-xs font-medium pt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Rating & Arrow Button Footer Row */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1 font-semibold text-xs sm:text-sm text-text-dark">
                    <Star className="w-4 h-4 fill-accent-orange text-accent-orange" />
                    <span>{item.rating}</span>
                    <span className="text-text-muted font-normal">
                      ({item.reviewsCount})
                    </span>
                  </div>

                  <Link
                    href={`#listing-${item.id}`}
                    aria-label={`View details for ${item.title}`}
                    className="w-9 h-9 rounded-full bg-slate-100 hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-colors shadow-xs"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
