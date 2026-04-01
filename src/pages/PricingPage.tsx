import { useParams, useNavigate } from "react-router-dom";
import { ShowerHead, Users, UserCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useState } from "react";

// ─── Pricing data per city ────────────────────────────────────────────────────

interface PriceEntry { amount: number; duration: string; }
interface CityPricing { hygiene: PriceEntry[]; basic: PriceEntry[]; personal: PriceEntry[]; }

const pricingByCity: Record<string, CityPricing> = {
  chennai:   { hygiene: [{ amount: 800,  duration: "2 Hours"  }], basic: [{ amount: 1250, duration: "24 Hours" }, { amount: 1500, duration: "24 Hours" }], personal: [{ amount: 1350, duration: "10 Hours" }, { amount: 1600, duration: "24 Hours" }] },
  bengaluru: { hygiene: [{ amount: 900,  duration: "2 Hours"  }], basic: [{ amount: 1350, duration: "24 Hours" }, { amount: 1600, duration: "24 Hours" }], personal: [{ amount: 1450, duration: "10 Hours" }, { amount: 1750, duration: "24 Hours" }] },
  hyderabad: { hygiene: [{ amount: 750,  duration: "2 Hours"  }], basic: [{ amount: 1200, duration: "24 Hours" }, { amount: 1450, duration: "24 Hours" }], personal: [{ amount: 1300, duration: "10 Hours" }, { amount: 1550, duration: "24 Hours" }] },
  mumbai:    { hygiene: [{ amount: 1000, duration: "2 Hours"  }], basic: [{ amount: 1500, duration: "24 Hours" }, { amount: 1800, duration: "24 Hours" }], personal: [{ amount: 1600, duration: "10 Hours" }, { amount: 1900, duration: "24 Hours" }] },
  delhi:     { hygiene: [{ amount: 850,  duration: "2 Hours"  }], basic: [{ amount: 1300, duration: "24 Hours" }, { amount: 1550, duration: "24 Hours" }], personal: [{ amount: 1400, duration: "10 Hours" }, { amount: 1650, duration: "24 Hours" }] },
  pune:      { hygiene: [{ amount: 800,  duration: "2 Hours"  }], basic: [{ amount: 1250, duration: "24 Hours" }, { amount: 1500, duration: "24 Hours" }], personal: [{ amount: 1350, duration: "10 Hours" }, { amount: 1600, duration: "24 Hours" }] },
};

// ─── Plan config ──────────────────────────────────────────────────────────────

interface Plan {
  key: keyof CityPricing;
  title: string;
  cardBg: string;
  priceBg: string;   // price band background
  checkColor: string;
  iconBg: string;
  Icon: LucideIcon;
  features: string[];
}

const plans: Plan[] = [
  {
    key: "hygiene",
    title: "Hygiene Services",
    cardBg: "#fce7f3",
    priceBg: "#f0a8d0",
    checkColor: "#d946ef",
    iconBg: "#d946ef",
    Icon: ShowerHead,
    features: ["Toileting Support","Diaper Changing","Bathing Assistance","Personal Grooming","Shaving","Nail Trimming"],
  },
  {
    key: "basic",
    title: "Basic Caregiving",
    cardBg: "#fef9c3",
    priceBg: "#fde68a",
    checkColor: "#ca8a04",
    iconBg: "#eab308",
    Icon: Users,
    features: ["Mobility Assistance","Daily Living Assistance","Meal Feeding","Medication Reminder","Elder's Room Housekeeping","Companionship"],
  },
  {
    key: "personal",
    title: "Personal Caregiving",
    cardBg: "#dcfce7",
    priceBg: "#86efac",
    checkColor: "#16a34a",
    iconBg: "#22c55e",
    Icon: UserCheck,
    features: ["Personal Hygiene and Grooming","Diaper Changer","Meal Feeding Assistance","Medication Reminder","Toileting Support","Elder's Room Housekeeping","Companionship"],
  },
];

const addOns = ["Cooking", "Light housekeeping", "Additional elder support", "Cloth washing"];

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

// ─── Page ─────────────────────────────────────────────────────────────────────

const PricingPage = () => {
  const { city = "chennai" } = useParams<{ city: string }>();
  const navigate = useNavigate();
  const [contactOpen, setContactOpen] = useState(false);

  const data = pricingByCity[city] ?? pricingByCity["chennai"];
  const displayCity = capitalize(city);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onContactClick={() => setContactOpen(true)} />

      <section className="py-10 px-6" style={{ backgroundColor: "#f0f4ff" }}>
        <div className="container-max max-w-3xl mx-auto">

          {/* Back */}
          <button onClick={() => navigate(-1)} className="text-sm text-blue-500 hover:underline mb-6 block">
            ← Back
          </button>

          {/* Page title */}
          <h1 className="text-xl font-bold text-gray-900 text-center mb-8">
            Cost of Elder Care Plan in {displayCity}
          </h1>

          {/* 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
            {plans.map((plan) => {
              const prices = data[plan.key];
              return (
                <div
                  key={plan.key}
                  className="rounded-2xl flex flex-col overflow-hidden shadow-sm"
                  style={{ backgroundColor: plan.cardBg }}
                >
                  {/* Body */}
                  <div className="flex-1 p-5">
                    {/* Icon circle */}
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center mb-3 shadow-sm"
                      style={{ backgroundColor: plan.iconBg }}
                    >
                      <plan.Icon size={20} color="#ffffff" strokeWidth={1.8} />
                    </div>

                    {/* Title */}
                    <h2 className="text-sm font-bold text-gray-900 mb-3">{plan.title}</h2>

                    {/* Features */}
                    <ul className="space-y-1">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-1.5 text-xs text-gray-700">
                          <span className="font-bold mt-0.5" style={{ color: plan.checkColor }}>✓</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price band */}
                  <div className="flex" style={{ backgroundColor: plan.priceBg }}>
                    {prices.map((p, i) => (
                      <div
                        key={i}
                        className={`flex-1 text-center py-3 ${i > 0 ? "border-l border-white/60" : ""}`}
                      >
                        <p className="text-lg font-extrabold text-gray-900">₹{p.amount}</p>
                        <p className="text-[11px] text-gray-700">{p.duration}</p>
                      </div>
                    ))}
                  </div>

                  {/* Request Care */}
                  <div className="px-5 pb-5 pt-3">
                    <a
                      href="https://wa.me/919043943995"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-2.5 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 transition-colors"
                    >
                      Request Care
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Add-Ons box */}
          <div className="rounded-2xl p-6" style={{ backgroundColor: "#dbeafe" }}>
            <h3 className="text-sm font-bold text-blue-700 mb-3">Additional Add-Ons</h3>
            <ul className="space-y-1.5 mb-4">
              {addOns.map((a) => (
                <li key={a} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 inline-block shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 flex items-start gap-1.5">
              <span className="text-blue-400 shrink-0 mt-0.5">ℹ</span>
              If any of the listed add-on services are included, additional charges will apply based on the service hours required.
            </p>
          </div>

        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
};

export default PricingPage;
