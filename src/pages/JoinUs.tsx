import {
  Briefcase, Timer, LayoutGrid,
  Users, ShieldCheck, Headphones, Play
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useState } from "react";

const cities = [
  "Chennai", "Bangalore", "Mumbai", "Delhi", "Hyderabad", "Pune", "Ahmedabad",
];

const benefits = [
  { Icon: Briefcase, title: "Steady Job Opportunities", desc: "Access to regular caregiver and nursing jobs in your city." },
  { Icon: Timer, title: "Timely Payments", desc: "Guaranteed & Transparent payout system with no delays." },
  { Icon: LayoutGrid, title: "Flexible Shifts", desc: "Choose from part-time, full-time, or live-in care roles." },
  { Icon: Users, title: "Fair Matching", desc: "Get matched with clients based on your skills, location, and preferences." },
  { Icon: ShieldCheck, title: "Reputation & Trust", desc: "Work with one of India's most trusted eldercare providers." },
  { Icon: Headphones, title: "24/7 Support Team", desc: "Dedicated care managers to assist you anytime." },
];

const steps = [
  { n: "1", title: "Apply & Create Your Profile", desc: "Apply & create a profile on our app with your details and skills to get started quickly." },
  { n: "2", title: "Verify & Get Approved", desc: "Our team checks your profile to ensure safety and trust for families." },
  { n: "3", title: "Get Matched & Start Working", desc: "Receive job opportunities that fit your skills — begin earning with ease." },
];

const JoinUs = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onContactClick={() => setContactOpen(true)} />

      {/* ── 1. Hero ──────────────────────────────────────────────── */}
      <section className="bg-white py-14 px-6">
        <div className="container-max flex flex-col lg:flex-row gap-10 items-center">
          {/* Left */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Apply for Caregiver<br />&amp; Nursing Jobs
            </h1>
            <div>
              <p className="text-blue-500 font-semibold mb-2">We are hiring</p>
              {["Nursing Attenders", "Experienced Caregivers", "Companionship Care Assistants"].map(r => (
                <p key={r} className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-1">
                  <span className="text-gray-700">✓</span> {r}
                </p>
              ))}
            </div>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://wa.me/91 89396 51621"
                target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition-colors"
              >
                WhatsApp Us
              </a>
              <a
                href="tel:+918069369999"
                className="px-6 py-3 rounded-full bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>

          {/* Right: photo with floating stat cards */}
          <div className="lg:w-1/2 relative flex justify-center mt-6 lg:mt-0">
            {/* Floating stat cards — Stacked or side-by-side on mobile */}
            <div className="absolute -top-6 left-0 right-0 flex justify-center gap-2 px-4 z-10 sm:left-4 sm:right-auto sm:justify-start sm:gap-3 sm:px-0">
              <div className="bg-white rounded-xl shadow-md px-3 py-2 text-center min-w-[100px] flex-1 sm:flex-none sm:px-4 sm:py-3 sm:min-w-[110px]">
                <div className="flex justify-center gap-0.5 text-yellow-400 text-[10px] mb-0.5 sm:text-sm sm:mb-1">★★★★★</div>
                <p className="text-xl font-extrabold text-gray-900 sm:text-2xl">4.8</p>
                <p className="text-[10px] text-gray-500 sm:text-xs">Overall Ratings</p>
              </div>
              <div className="bg-green-50 rounded-xl shadow-md px-3 py-2 text-center min-w-[100px] flex-1 sm:flex-none sm:px-4 sm:py-3 sm:min-w-[110px]">
                <p className="text-xl font-extrabold text-gray-900 sm:text-2xl">20,000 +</p>
                <p className="text-[10px] text-gray-500 sm:text-xs">Verified Caregivers</p>
              </div>
            </div>

            {/* Caregiver photo card */}
            <div className="rounded-3xl overflow-hidden mt-12 sm:mt-16" style={{ backgroundColor: "#dbeafe" }}>
              <img
                src="/caregiver_male.png"
                alt="Caregiver"
                className="w-64 h-72 sm:w-72 sm:h-80 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Salary Banner ─────────────────────────────────────── */}
      <section className="py-14 px-6" style={{ backgroundColor: "#dbeafe" }}>
        <div className="container-max flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Earn up to <span style={{ fontFamily: "sans-serif" }}>₹</span>24,000/month
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed max-w-md">
              No confusion. No delays. Just fair salary with clear payouts and timely payments every month.
            </p>
            <a
              href="https://wa.me/91 89396 51621"
              target="_blank" rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition-colors"
            >
              Apply Now
            </a>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img src="/nurse_money.png" alt="Nurse with salary" className="w-64 h-72 object-cover rounded-3xl" />
          </div>
        </div>
      </section>

      {/* ── 3. Video Section ─────────────────────────────────────── */}
      <section className="bg-white py-14 px-6">
        <div className="container-max text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
            Trusted Nurse Hiring &amp; Caregiver Jobs Near You
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
            Watch how caregivers and nurses grow with reliable pay, respectful workplaces, and real guidance every step of the way.
          </p>
          {/* Video thumbnail */}
          <div className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden cursor-pointer group">
            <img src="/nurse_care.png" alt="Nurse caring for elderly" className="w-full h-80 object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                <Play size={24} className="text-blue-500 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Direct Recruitment ────────────────────────────────── */}
      <section className="py-14 px-6" style={{ backgroundColor: "#eef2fb" }}>
        <div className="container-max text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
            Direct Recruitment for Nurses &amp; Patient Attendants
          </h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            With Dritiseva, you get more than just a job. Enjoy steady work, on-time payments, skill development, and a safe community that values your service.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map(({ Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 text-left shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-blue-500" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. How to Apply Steps ────────────────────────────────── */}
      <section className="bg-white py-14 px-6">
        <div className="container-max text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
            Apply Online, Get Verified, Start Care Jobs Faster
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto mb-12 leading-relaxed">
            Register, get matched, and start earning with trusted families—Dritiseva makes the process smooth, quick, and secure.
          </p>

          {/* Steps with connecting line */}
          <div className="relative flex flex-col sm:flex-row gap-6 max-w-3xl mx-auto">
            {/* Horizontal line for desktop */}
            <div className="hidden sm:block absolute top-5 left-[calc(16.66%)] right-[calc(16.66%)] h-0.5 bg-blue-300" />

            {steps.map(({ n, title, desc }) => (
              <div key={n} className="flex-1 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center text-lg mb-4 relative z-10">
                  {n}
                </div>
                <div className="bg-blue-50 rounded-2xl p-5 text-left w-full">
                  <h3 className="font-bold text-gray-900 mb-1 text-sm">{title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Job Vacancies ─────────────────────────────────────── */}
      <section className="py-14 px-6" style={{ backgroundColor: "#eef2fb" }}>
        <div className="container-max text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
            Staff Nurse, Home Nurse and Caregiver Job Vacancies
          </h2>
          <p className="text-sm text-gray-500 mb-10">We welcome all levels of caregivers and nursing professionals.</p>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto text-left">
            {[
              {
                Icon: Users,
                title: "Caregiver",
                desc: "Provides daily support with hygiene, meals, mobility, and personal care to ensure elders live comfortably and with dignity."
              },
              {
                Icon: Headphones,
                title: "Nursing Attender",
                desc: "Assists with both caregiving and basic medical tasks like vitals, medicine administration, and hospital support under doctor guidance."
              }
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-sm flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. City Links ────────────────────────────────────────── */}
      <section className="bg-white py-14 px-6">
        <div className="container-max text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-10">
            Care Opportunities Across India
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {cities.map((city) => (
              <a
                key={city}
                href="#"
                className="block px-5 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 text-left hover:border-blue-400 hover:text-blue-500 transition-colors"
              >
                Caregiver and Nursing Jobs in {city}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
};

export default JoinUs;
