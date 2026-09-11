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
      bgColor: "bg-amber-100/80",
      textColor: "text-amber-700",
    },
    {
      id: "hotels",
      name: "Hotels",
      icon: <Bed className="w-5 h-5" />,
      bgColor: "bg-blue-100/80",
      textColor: "text-blue-700",
    },
    {
      id: "restaurants",
      name: "Restaurants",
      icon: <Utensils className="w-5 h-5" />,
      bgColor: "bg-rose-100/80",
      textColor: "text-rose-700",
    },
    {
      id: "shopping",
      name: "Shopping",
      icon: <ShoppingBag className="w-5 h-5" />,
      bgColor: "bg-purple-100/80",
      textColor: "text-purple-700",
    },
    {
      id: "transport",
      name: "Transport",
      icon: <Car className="w-5 h-5" />,
      bgColor: "bg-emerald-100/80",
      textColor: "text-emerald-700",
    },
    {
      id: "tourist-spots",
      name: "Tourist Spots",
      icon: <Compass className="w-5 h-5" />,
      bgColor: "bg-teal-100/80",
      textColor: "text-teal-700",
    },
    {
      id: "events",
      name: "Events",
      icon: <Calendar className="w-5 h-5" />,
      bgColor: "bg-orange-100/80",
      textColor: "text-orange-700",
    },
    {
      id: "local-services",
      name: "Local Services",
      icon: <Grid className="w-5 h-5" />,
      bgColor: "bg-indigo-100/80",
      textColor: "text-indigo-700",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
      {categories.map((cat) => (
        <a
          key={cat.id}
          href={`#${cat.id}`}
          className="group flex flex-col items-center justify-center p-3.5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:border-slate-200 transition-all transform hover:-translate-y-0.5"
        >
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center ${cat.bgColor} ${cat.textColor} mb-2 group-hover:scale-105 transition-transform`}
          >
            {cat.icon}
          </div>
          <span className="text-xs font-semibold text-text-dark text-center group-hover:text-primary transition-colors">
            {cat.name}
          </span>
        </a>
      ))}
    </div>
  );
}
