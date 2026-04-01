import { ShowerHead, Users, UserCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Plan {
  id: string;
  title: string;
  bg: string;
  iconBg: string;
  Icon: LucideIcon;
  features: string[];
}

const plans: Plan[] = [
  {
    id: "hygiene",
    title: "Hygiene Services",
    bg: "#fce7f3",
    iconBg: "#d946ef",
    Icon: ShowerHead,
    features: [
      "Toileting Support",
      "Diaper Changing",
      "Bathing Assistance",
      "Personal Grooming",
      "Shaving",
      "Nail Trimming",
    ],
  },
  {
    id: "basic",
    title: "Basic Caregiving",
    bg: "#fef9c3",
    iconBg: "#eab308",
    Icon: Users,
    features: [
      "Mobility Assistance",
      "Daily Living Assistance",
      "Meal Feeding",
      "Medication Reminder",
      "Elder's Room Housekeeping",
      "Companionship",
    ],
  },
  {
    id: "personal",
    title: "Personal Caregiving",
    bg: "#dcfce7",
    iconBg: "#22c55e",
    Icon: UserCheck,
    features: [
      "Personal Hygiene and Grooming",
      "Diaper Changer",
      "Meal Feeding Assistance",
      "Medication Reminder",
      "Toileting Support",
      "Elder's Room Housekeeping",
      "Companionship",
    ],
  },
];

interface PricingSectionProps {
  onViewPrices?: () => void;
}

const PricingSection = ({ onViewPrices }: PricingSectionProps) => (
  <section id="other-services" className="section-padding bg-white">
    <div className="container-max">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Caregiving Charges For Seniors
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="rounded-2xl flex flex-col overflow-hidden"
            style={{ backgroundColor: plan.bg }}
          >
            {/* Card body */}
            <div className="flex-1 p-7">
              {/* Icon circle */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-5 shadow-sm"
                style={{ backgroundColor: plan.iconBg }}
              >
                <plan.Icon size={26} color="#ffffff" strokeWidth={1.8} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {plan.title}
              </h3>

              {/* Feature list */}
              <ul className="space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-gray-600 font-semibold mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* View Prices button */}
            <div className="p-6 pt-0">
              <button
                onClick={onViewPrices}
                className="block w-full text-center py-3 px-6 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 transition-colors duration-200"
              >
                View Prices
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
