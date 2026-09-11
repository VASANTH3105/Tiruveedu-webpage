import React from "react";
import {
  Landmark,
  Bed,
  Utensils,
  ShoppingBag,
  Car,
  Compass,
  Calendar,
  Grid,
  ChevronRight,
} from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
  arrowBg: string;
  arrowColor: string;
}

export default function CategoryGrid() {
  const categories: Category[] = [
    {
      id: "temples",
      name: "Temples",
      icon: <Landmark className="w-5 h-5" />,
      bgColor: "bg-purple-100/80",
      textColor: "text-purple-700",
      arrowBg: "bg-purple-50",
      arrowColor: "text-purple-600",
    },
    {
      id: "hotels",
      name: "Hotels",
      icon: <Bed className="w-5 h-5" />,
      bgColor: "bg-sky-100/80",
      textColor: "text-sky-700",
      arrowBg: "bg-sky-50",
      arrowColor: "text-sky-600",
    },
    {
      id: "restaurants",
      name: "Restaurants",
      icon: <Utensils className="w-5 h-5" />,
      bgColor: "bg-rose-100/80",
      textColor: "text-rose-700",
      arrowBg: "bg-rose-50",
      arrowColor: "text-rose-600",
    },
    {
      id: "shopping",
      name: "Shopping",
      icon: <ShoppingBag className="w-5 h-5" />,
      bgColor: "bg-fuchsia-100/80",
      textColor: "text-fuchsia-700",
      arrowBg: "bg-fuchsia-50",
      arrowColor: "text-fuchsia-600",
    },
    {
      id: "transport",
      name: "Transport",
      icon: <Car className="w-5 h-5" />,
      bgColor: "bg-emerald-100/80",
      textColor: "text-emerald-700",
      arrowBg: "bg-emerald-50",
      arrowColor: "text-emerald-600",
    },
    {
      id: "tourist-spots",
      name: "Tourist Spots",
      icon: <Compass className="w-5 h-5" />,
      bgColor: "bg-teal-100/80",
      textColor: "text-teal-700",
      arrowBg: "bg-teal-50",
      arrowColor: "text-teal-600",
    },
    {
      id: "events",
      name: "Events",
      icon: <Calendar className="w-5 h-5" />,
      bgColor: "bg-orange-100/80",
      textColor: "text-orange-700",
      arrowBg: "bg-orange-50",
      arrowColor: "text-orange-600",
    },
    {
      id: "local-services",
      name: "Local Services",
      icon: <Grid className="w-5 h-5" />,
      bgColor: "bg-[#F5F1FF]",
      textColor: "text-[#4935D4]",
      arrowBg: "bg-[#F5F1FF]",
      arrowColor: "text-[#4935D4]",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-2">
      {categories.map((cat) => (
        <a
          key={cat.id}
          href={`#${cat.id}`}
          className="group bg-white border border-slate-100/90 rounded-2xl p-3.5 shadow-sm hover:shadow-md hover:border-[#D8CCFF] transition-all transform hover:-translate-y-0.5 flex flex-col justify-between h-[104px]"
        >
          {/* Top Row: Icon on Left, Chevron Arrow on Right */}
          <div className="flex items-center justify-between w-full">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${cat.bgColor} ${cat.textColor} group-hover:scale-105 transition-transform`}
            >
              {cat.icon}
            </div>

            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center ${cat.arrowBg} ${cat.arrowColor} group-hover:translate-x-0.5 transition-transform`}
            >
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </div>

          {/* Bottom Row: Category Name */}
          <div className="pt-2">
            <span className="text-xs sm:text-sm font-bold text-[#17152B] group-hover:text-[#4935D4] transition-colors tracking-tight">
              {cat.name}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
