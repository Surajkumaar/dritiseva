import {
  Accessibility,
  ShowerHead,
  Utensils,
  Scissors,
  Baby,
  Pill,
  Users,
  Bed,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface CareItem {
  label: string;
  bg: string;
  circleBg: string;
  Icon: LucideIcon;
}

const careItems: CareItem[] = [
  {
    label: "Mobility Assist",
    bg: "#f5d0fe",
    circleBg: "#d946ef",
    Icon: Accessibility,
  },
  {
    label: "Hygiene Care",
    bg: "#fef9c3",
    circleBg: "#eab308",
    Icon: ShowerHead,
  },
  {
    label: "Meals Feeding",
    bg: "#dcfce7",
    circleBg: "#22c55e",
    Icon: Utensils,
  },
  {
    label: "Daily Grooming",
    bg: "#dbeafe",
    circleBg: "#0ea5e9",
    Icon: Bed,
  },
  {
    label: "Toileting Assist",
    bg: "#dcfce7",
    circleBg: "#22c55e",
    Icon: Scissors,
  },
  {
    label: "Diaper Change",
    bg: "#dbeafe",
    circleBg: "#0ea5e9",
    Icon: Baby,
  },
  {
    label: "Medication\nReminder",
    bg: "#fce7f3",
    circleBg: "#a855f7",
    Icon: Pill,
  },
  {
    label: "Companionship",
    bg: "#fef9c3",
    circleBg: "#eab308",
    Icon: Users,
  },
];

const ServicesSection = () => (
  <section
    id="services"
    className="section-padding"
    style={{ backgroundColor: "#eef2fb" }}
  >
    <div className="container-max">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          What's Included In Our Care
        </h2>
        <p className="text-sm text-gray-500 mt-3 max-w-md mx-auto leading-relaxed">
          Our experienced caregivers are suitable for seniors who require
          assistance with their everyday living
        </p>
      </div>

      {/* 4×2 Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
        {careItems.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl flex flex-col items-center justify-center gap-4 py-10 px-4 hover:shadow-md transition-shadow duration-200 cursor-default"
            style={{ backgroundColor: item.bg }}
          >
            {/* Colored circle with lucide icon */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center shadow-sm"
              style={{ backgroundColor: item.circleBg }}
            >
              <item.Icon size={28} color="#ffffff" strokeWidth={1.8} />
            </div>

            {/* Label */}
            <p className="text-sm font-semibold text-gray-900 text-center whitespace-pre-line leading-snug">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
