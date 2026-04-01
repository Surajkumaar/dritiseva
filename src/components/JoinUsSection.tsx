import { ShieldCheck, BadgeCheck, BookOpen, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface TrustCard {
  title: string;
  desc: string;
  Icon: LucideIcon;
  iconBg: string;
  cardBg: string;
}

const trustCards: TrustCard[] = [
  {
    title: "Background Checked",
    desc: "We conduct thorough background checks on all our caregivers to ensure their suitability.",
    Icon: ShieldCheck,
    iconBg: "#d946ef",
    cardBg: "#fce7f3",
  },
  {
    title: "Verified Caregivers",
    desc: "We meticulously verify each caregiver's identity and qualifications.",
    Icon: BadgeCheck,
    iconBg: "#eab308",
    cardBg: "#fef9c3",
  },
  {
    title: "Trained and Oriented for Care",
    desc: "Our caregivers are equipped with the knowledge and skills needed to provide exceptional care.",
    Icon: BookOpen,
    iconBg: "#22c55e",
    cardBg: "#dcfce7",
  },
  {
    title: "Compassionate and Empathetic",
    desc: "Our caregivers are trained to provide proactive care based on your elder's unique requirements.",
    Icon: Heart,
    iconBg: "#0ea5e9",
    cardBg: "#dbeafe",
  },
];

const JoinUsSection = () => (
  <section
    id="join-us"
    className="section-padding"
    style={{ backgroundColor: "#eef2fb" }}
  >
    <div className="container-max">
      <div
        className="bg-white rounded-3xl p-8 lg:p-10 flex flex-col lg:flex-row gap-10 shadow-sm"
      >
        {/* Left: heading + description + avatar row */}
        <div className="lg:w-2/5 flex flex-col justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
              Why Families Trust Dritiseva Caregivers
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Our caregivers and nurses are trained to ensure your loved ones
              receive the best care possible.
            </p>
          </div>

          {/* Caregiver avatar stack */}
          <div className="flex items-center gap-1">
            {[
              "#d946ef", "#eab308", "#22c55e", "#0ea5e9", "#f97316",
            ].map((color, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow"
                style={{ backgroundColor: color, marginLeft: i > 0 ? "-8px" : "0" }}
              >
                {["S", "R", "P", "M", "A"][i]}
              </div>
            ))}
            {/* + button */}
            <div
              className="w-10 h-10 rounded-full border-2 border-blue-400 bg-white flex items-center justify-center text-blue-400 font-bold text-lg shadow"
              style={{ marginLeft: "-8px" }}
            >
              +
            </div>
          </div>
        </div>

        {/* Right: 2x2 feature cards */}
        <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {trustCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl p-5 flex flex-col gap-2"
              style={{ backgroundColor: card.cardBg }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center mb-1"
                style={{ backgroundColor: card.iconBg }}
              >
                <card.Icon size={18} color="#ffffff" strokeWidth={2} />
              </div>
              <h3 className="text-sm font-bold text-gray-900 leading-snug">
                {card.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default JoinUsSection;
