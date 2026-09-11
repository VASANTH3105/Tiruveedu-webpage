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
} from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
}

export default function CategoryGrid() {
  const categories: Category[] = [
    {
      id: "temples",
      name: "Temples",
      icon: <Landmark className="w-5 h-5" />,
      bgColor: "bg-purple-100/70",
      textColor: "text-purple-700",
    },
    {
      id: "hotels",
      name: "Hotels",
      icon: <Bed className="w-5 h-5" />,
      bgColor: "bg-indigo-100/70",
      textColor: "text-indigo-700",
    },
    {
      id: "restaurants",
      name: "Restaurants",
      icon: <Utensils className="w-5 h-5" />,
      bgColor: "bg-rose-100/70",
      textColor: "text-rose-700",
    },
    {
      id: "shopping",
      name: "Shopping",
      icon: <ShoppingBag className="w-5 h-5" />,
      bgColor: "bg-fuchsia-100/70",
      textColor: "text-fuchsia-700",
    },
    {
      id: "transport",
      name: "Transport",
      icon: <Car className="w-5 h-5" />,
      bgColor: "bg-emerald-100/70",
      textColor: "text-emerald-700",
    },
    {
      id: "tourist-spots",
      name: "Tourist Spots",
      icon: <Compass className="w-5 h-5" />,
      bgColor: "bg-teal-100/70",
      textColor: "text-teal-700",
    },
    {
      id: "events",
      name: "Events",
      icon: <Calendar className="w-5 h-5" />,
      bgColor: "bg-violet-100/70",
      textColor: "text-violet-700",
    },
    {
      id: "local-services",
      name: "Local Services",
      icon: <Grid className="w-5 h-5" />,
      bgColor: "bg-[#F5F1FF]",
      textColor: "text-[#4935D4]",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
      {categories.map((cat) => (
        <a
          key={cat.id}
          href={`#${cat.id}`}
          className="group flex flex-col items-center justify-center p-3.5 bg-white border border-[#E7E2F2] rounded-2xl shadow-xs hover:shadow-md hover:border-[#D8CCFF] transition-all transform hover:-translate-y-0.5"
        >
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center ${cat.bgColor} ${cat.textColor} mb-2 group-hover:scale-105 transition-transform`}
          >
            {cat.icon}
          </div>
          <span className="text-xs font-semibold text-[#17152B] text-center group-hover:text-[#4935D4] transition-colors">
            {cat.name}
          </span>
        </a>
      ))}
    </div>
  );
}
