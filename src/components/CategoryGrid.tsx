import React from "react";
import { ChevronRight } from "lucide-react";

interface Category {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  decorative: string;
  cardGradient: string;
  borderColor: string;
  iconTile: string;
  arrowBg: string;
  arrowColor: string;
}

export default function CategoryGrid() {
  const categories: Category[] = [
    {
      id: "temples",
      name: "Temples",
      subtitle: "Spiritual places",
      icon: "🛕",
      decorative: "🏯",
      cardGradient: "from-purple-100/70 via-white to-purple-50/40",
      borderColor: "border-purple-100/80",
      iconTile: "from-purple-200 to-purple-100",
      arrowBg: "bg-white/80",
      arrowColor: "text-purple-600",
    },
    {
      id: "hotels",
      name: "Hotels",
      subtitle: "Stay your way",
      icon: "🏨",
      decorative: "🏢",
      cardGradient: "from-sky-100/70 via-white to-blue-50/40",
      borderColor: "border-sky-100/80",
      iconTile: "from-sky-200 to-blue-100",
      arrowBg: "bg-white/80",
      arrowColor: "text-blue-600",
    },
    {
      id: "restaurants",
      name: "Restaurants",
      subtitle: "Local & tasty",
      icon: "🍴",
      decorative: "🍽️",
      cardGradient: "from-rose-100/70 via-white to-red-50/40",
      borderColor: "border-rose-100/80",
      iconTile: "from-rose-200 to-red-100",
      arrowBg: "bg-white/80",
      arrowColor: "text-red-500",
    },
    {
      id: "shopping",
      name: "Shopping",
      subtitle: "Shop local",
      icon: "👜",
      decorative: "🛍️",
      cardGradient: "from-pink-100/70 via-white to-fuchsia-50/40",
      borderColor: "border-pink-100/80",
      iconTile: "from-pink-200 to-fuchsia-100",
      arrowBg: "bg-white/80",
      arrowColor: "text-pink-600",
    },
    // {
    //   id: "transport",
    //   name: "Transport",
    //   subtitle: "Get around easily",
    //   icon: "🚗",
    //   decorative: "🛣️",
    //   cardGradient: "from-emerald-100/70 via-white to-green-50/40",
    //   borderColor: "border-emerald-100/80",
    //   iconTile: "from-emerald-200 to-green-100",
    //   arrowBg: "bg-white/80",
    //   arrowColor: "text-emerald-600",
    // },
    // {
    //   id: "tourist-spots",
    //   name: "Tourist Spots",
    //   subtitle: "Explore more",
    //   icon: "🧭",
    //   decorative: "⛰️",
    //   cardGradient: "from-teal-100/70 via-white to-cyan-50/40",
    //   borderColor: "border-teal-100/80",
    //   iconTile: "from-teal-200 to-cyan-100",
    //   arrowBg: "bg-white/80",
    //   arrowColor: "text-teal-600",
    // },
    // {
    //   id: "events",
    //   name: "Events",
    //   subtitle: "Never miss out",
    //   icon: "📅",
    //   decorative: "🎆",
    //   cardGradient: "from-orange-100/70 via-white to-amber-50/40",
    //   borderColor: "border-orange-100/80",
    //   iconTile: "from-orange-200 to-amber-100",
    //   arrowBg: "bg-white/80",
    //   arrowColor: "text-orange-600",
    // },
    // {
    //   id: "local-services",
    //   name: "Local Services",
    //   subtitle: "Daily essentials",
    //   icon: "🔧",
    //   decorative: "⚙️",
    //   cardGradient: "from-violet-100/70 via-white to-indigo-50/40",
    //   borderColor: "border-violet-100/80",
    //   iconTile: "from-violet-200 to-indigo-100",
    //   arrowBg: "bg-white/80",
    //   arrowColor: "text-violet-600",
    // },
  ];


  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5 pt-2">
      {categories.map((cat) => (
        <a
          key={cat.id}
          href={`#${cat.id}`}
          className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 border ${cat.borderColor} bg-gradient-to-br ${cat.cardGradient} shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 flex flex-col justify-between min-h-[128px] sm:min-h-[150px]`}
        >
          {/* Oversized decorative emoji bleeding off the bottom-right corner */}
          <span
            className="absolute -bottom-3 -right-2 text-5xl sm:text-6xl opacity-25 select-none pointer-events-none rotate-6 leading-none"
            aria-hidden="true"
          >
            {cat.decorative}
          </span>

          {/* Top Row: Icon Tile on Left, Arrow Circle on Right */}
          <div className="relative flex items-center justify-between w-full">
            {/* <div
              className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl bg-gradient-to-br ${cat.iconTile} shadow-sm group-hover:scale-105 transition-transform`}
            >
              <span aria-hidden="true">{cat.icon}</span>
            </div> */}

            <div
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${cat.arrowBg} ${cat.arrowColor} shadow-sm group-hover:translate-x-0.5 transition-transform`}
            >
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </div>

          {/* Bottom: Category Name + Subtitle */}
          <div className="relative pt-3">
            <div className="text-sm sm:text-base font-extrabold text-[#17152B] tracking-tight">
              {cat.name}
            </div>
            <div className="text-[11px] sm:text-xs text-[#625F73] font-medium pt-0.5">
              {cat.subtitle}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
