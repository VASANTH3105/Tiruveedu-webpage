"use client";

import { useState } from "react";
import {
  Star,
  Moon,
  Calendar,
  CalendarCheck2,
  Landmark,
  Building,
  CloudSun,
  PlusCircle,
  TrendingUp,
  Quote,
  MoreHorizontal,
} from "lucide-react";

// Decorative "sparkle" doodle used next to the headline and on accent cards
function SparkleDoodle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 4 L14 14" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
      <path d="M2 16 L13 18" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 26 L15 20" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Soft decorative wave used behind the rating summary / CTA cards
function WaveDecoration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 100"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0 70 C 50 40, 90 90, 150 60 S 260 30, 300 55 L300 100 L0 100 Z"
        fill="#EDE7FF"
      />
      <path
        d="M0 85 C 60 60, 110 100, 170 75 S 260 55, 300 80 L300 100 L0 100 Z"
        fill="#F5F1FF"
      />
    </svg>
  );
}

export default function ReviewsAndInfoSection() {
  const reviews = [
    {
      id: "rev-1",
      stars: 5,
      text: "Tiruveedu act as all in one services for tourists who looks for stay, rentals vehicles etc.., especially in Tiruvannamalai town.",
      author: "Rajkumar R",
      source: "Google Review",
      avatarBg: "bg-[#C4B5FD]",
    },
    {
      id: "rev-2",
      stars: 5,
      text: "Good response",
      author: "Revathy Revathy",
      source: "Google Review",
      avatarBg: "bg-[#FBCFE8]",
    },
  ];

  const infoPills = [
    {
      id: "girivalam",
      icon: <Moon className="w-5 h-5 text-[#6C3DF5]" />,
      bgIcon: <Moon className="w-20 h-20 text-[#6C3DF5]" />,
      title: "Next Girivalam / Full Moon",
      detail: "26 Sept 2026",
      subtext: "15 days to go",
      bgClass: "bg-[#F5F1FF] border-[#D8CCFF] text-[#17152B]",
    },
    {
      id: "events",
      icon: <Calendar className="w-5 h-5 text-indigo-600" />,
      bgIcon: <CalendarCheck2 className="w-20 h-20 text-indigo-500" />,
      title: "Today's Events",
      detail: "1 event",
      subtext: "Happening today",
      bgClass: "bg-indigo-50/70 border-indigo-100 text-[#17152B]",
    },
    {
      id: "temple-timings",
      icon: <Landmark className="w-5 h-5 text-purple-600" />,
      bgIcon: <Landmark className="w-20 h-20 text-purple-500" />,
      title: "Arunachaleswarar Temple",
      detail: "5:00 AM – 9:30 PM",
      subtext: "Open everyday",
      bgClass: "bg-purple-50/70 border-purple-100 text-[#17152B]",
    },
    {
      id: "ashram-timings",
      icon: <Building className="w-5 h-5 text-fuchsia-600" />,
      bgIcon: <Building className="w-20 h-20 text-fuchsia-500" />,
      title: "Ramana Ashram",
      detail: "5:30 AM – 8:00 PM",
      subtext: "Closed 12 – 2 PM",
      bgClass: "bg-fuchsia-50/70 border-fuchsia-100 text-[#17152B]",
    },
    {
      id: "new-listings",
      icon: <PlusCircle className="w-5 h-5 text-emerald-600" />,
      bgIcon: <TrendingUp className="w-20 h-20 text-emerald-500" />,
      title: "New This Week",
      detail: "51 new listings",
      subtext: "Added in the last 7 days",
      bgClass: "bg-emerald-50/70 border-emerald-100 text-[#17152B]",
    },
    {
      id: "weather",
      icon: <CloudSun className="w-5 h-5 text-[#8B4DFF]" />,
      bgIcon: <CloudSun className="w-20 h-20 text-[#8B4DFF]" />,
      title: "Weather Now",
      detail: "33°C",
      subtext: "Overcast",
      bgClass: "bg-[#F5F1FF] border-[#D8CCFF] text-[#17152B]",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#FAF9FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* =========================================================================
            PART 1: WHAT PEOPLE ARE SAYING ABOUT TIRUVEEDU (REVIEWS)
            ========================================================================= */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-1.5 bg-white border border-[#E4DBFF] text-[#6C3DF5] text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm">
                <Star className="w-3.5 h-3.5 fill-[#6C3DF5] text-[#6C3DF5]" />
                Voices from our community
              </span>
            </div>

            <div className="relative inline-block">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#17152B] tracking-tight">
                What people are saying about{" "}
                <span className="relative inline-block text-[#6C3DF5]">
                  TiruVeedu
                  <svg
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                    className="absolute left-0 -bottom-2 w-full h-3"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 8 C 40 2, 80 2, 100 6 S 160 10, 198 4"
                      stroke="#8B5CF6"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>
              </h2>
              <SparkleDoodle className="absolute -top-3 -right-8 w-8 h-8 hidden sm:block" />
            </div>

            <p className="text-sm sm:text-base text-[#625F73] max-w-xl mx-auto font-normal">
              Real experiences from real people. Discover why travelers and
              locals love TiruVeedu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Card 1: Google Rating Score Summary */}
            <div className="relative overflow-hidden bg-white rounded-3xl p-6 border border-[#E7E2F2] shadow-sm flex flex-col items-center justify-center text-center space-y-2">
              <WaveDecoration className="absolute inset-x-0 bottom-0 w-full h-16 opacity-70" />

              {/* Google G Logo */}
              <div className="relative w-10 h-10 flex items-center justify-center">
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </div>

              <div className="relative font-heading font-extrabold text-3xl sm:text-4xl text-[#17152B]">
                5.0
              </div>

              <div className="relative flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#6C3DF5] text-[#6C3DF5]"
                  />
                ))}
              </div>

              <p className="relative text-xs text-[#625F73] font-medium pt-1">
                Based on 6 Google reviews
              </p>

              <div className="relative flex items-center -space-x-2 pt-2">
                {["from-[#C4B5FD] to-[#8B5CF6]", "from-[#FBCFE8] to-[#F472B6]", "from-[#A5B4FC] to-[#6366F1]", "from-[#FDE68A] to-[#F59E0B]"].map(
                  (grad, i) => (
                    <div
                      key={i}
                      className={`w-7 h-7 rounded-full border-2 border-white bg-gradient-to-br ${grad}`}
                    />
                  )
                )}
                <div className="w-7 h-7 rounded-full border-2 border-white bg-[#EDE9FE] text-[#6C3DF5] text-[10px] font-bold flex items-center justify-center">
                  +3
                </div>
              </div>
              <p className="relative text-[11px] text-[#625F73] font-medium">
                Trusted by travelers
              </p>
            </div>

            {/* Review Cards (Card 2 & Card 3) */}
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="relative bg-white rounded-3xl p-6 border border-[#E7E2F2] shadow-sm flex flex-col justify-between space-y-4"
              >
                <Quote className="absolute top-5 right-5 w-7 h-7 text-[#EDE9FE] fill-[#EDE9FE]" />

                <div className="space-y-3">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#6C3DF5] text-[#6C3DF5]"
                      />
                    ))}
                  </div>

                  <p className="text-[#17152B] text-sm sm:text-base font-normal leading-relaxed">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-8 h-8 rounded-full ${rev.avatarBg} text-[#3B2A8C] text-xs font-bold flex items-center justify-center shrink-0`}
                    >
                      {rev.author.charAt(0)}
                    </div>
                    <div className="text-left">
                      <div className="font-heading font-semibold text-xs sm:text-sm text-[#17152B]">
                        {rev.author}
                      </div>
                      <div className="text-[11px] text-[#625F73]">
                        {rev.source}
                      </div>
                    </div>
                  </div>
                  <MoreHorizontal className="w-4 h-4 text-[#B7B2C9] shrink-0" />
                </div>
              </div>
            ))}

            {/* Card 4: Leave a Review CTA Card */}
            <div className="relative overflow-hidden bg-white rounded-3xl p-6 border border-[#E7E2F2] shadow-sm flex flex-col items-center justify-center text-center space-y-3">
              <WaveDecoration className="absolute inset-x-0 bottom-0 w-full h-16 opacity-70" />
              <SparkleDoodle className="absolute top-4 right-4 w-7 h-7" />

              <div className="relative w-10 h-10 rounded-xl bg-white shadow-sm border border-[#E7E2F2] flex items-center justify-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </div>

              <h3 className="relative font-heading font-bold text-lg text-[#17152B]">
                Enjoying TiruVeedu?
              </h3>

              <p className="relative text-xs sm:text-sm text-[#625F73] max-w-xs font-normal">
                Leave us a Google review and support local!
              </p>

              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 bg-gradient-to-r from-[#4935D4] via-[#6C3DF5] to-[#C084FC] hover:from-[#3C29C2] hover:to-[#B06DEF] text-white font-heading font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-purpleGlow transition-all transform hover:-translate-y-0.5"
              >
                <span>Leave a Review</span>
                <span className="bg-white text-[#4935D4] rounded-full w-4 h-4 text-[10px] font-bold flex items-center justify-center">
                  G
                </span>
              </a>
            </div>

          </div>
        </div>

        {/* =========================================================================
            PART 2: QUICK INFO & HIGHLIGHTS PILLS GRID (6 INFO CARDS)
            ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {infoPills.map((pill) => (
            <div
              key={pill.id}
              className={`relative overflow-hidden rounded-2xl p-4 sm:p-5 border ${pill.bgClass} flex items-start gap-4 shadow-xs transition-all hover:shadow-md transform hover:-translate-y-0.5`}
            >
              {/* Decorative background icon */}
              <div className="absolute -bottom-4 -right-4 opacity-[0.08] pointer-events-none">
                {pill.bgIcon}
              </div>

              {/* Icon Circle Container */}
              <div className="relative w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center shrink-0 border border-[#E7E2F2]">
                {pill.icon}
              </div>

              {/* Text Info */}
              <div className="relative space-y-0.5">
                <div className="text-xs font-semibold text-[#625F73]">
                  {pill.title}
                </div>
                <div className="font-heading font-extrabold text-base sm:text-lg tracking-tight text-[#17152B]">
                  {pill.detail}
                </div>
                <div className="text-xs font-medium text-[#625F73]/80">
                  {pill.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
