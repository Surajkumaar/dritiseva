import { useState, useRef } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const cities = [
  "Chennai", "Delhi", "Mumbai", "Bangalore", "Pune", "Ahmedabad", "Hyderabad",
];

const otherServices = [
  "Travel Assistant", "Post Operative Care", "Nurse for Injection At Home",
  "Wound Dressing At Home", "Dementia Care", "Long Term Nursing Care",
  "Hospital Attendant Services", "Nurse for IV Infusion At Home",
  "Short Term Nursing Care", "Critical Care Nursing At Home",
];

// Two-panel mega-menu data for "Services"
const serviceCategories = [
  {
    label: "Elder Care",
    subItems: [
      "Elder Care In Chennai",
      "Elder Care In Bengaluru",
      "Elder Care In Mumbai",
      "Elder Care In Delhi",
      "Elder Care in Hyderabad",
      "Elder Care in Ahmedabad",
      "Elder Care in Pune",
    ],
  },
  {
    label: "Home Nursing",
    subItems: [
      "Home Nursing In Chennai",
      "Home Nursing In Bengaluru",
      "Home Nursing In Mumbai",
      "Home Nursing In Delhi",
      "Home Nursing in Hyderabad",
      "Home Nursing in Ahmedabad",
      "Home Nursing in Pune",
    ],
  },
];

// ─── Types ────────────────────────────────────────────────────────────────────

type DropdownKey = "services" | "city" | "other-services" | null;

// ─── Navbar ───────────────────────────────────────────────────────────────────

interface NavbarProps {
  onContactClick?: () => void;
}

const Navbar = ({ onContactClick }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showDropdown = (key: DropdownKey) => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setActiveDropdown(key);
  };
  const hideDropdown = () => {
    hideTimer.current = setTimeout(() => setActiveDropdown(null), 140);
  };

  // ── Simple single-column dropdown (Select City / Other Services)
  const SimpleDropdown = ({
    label, items, dropKey,
  }: { label: string; items: string[]; dropKey: DropdownKey }) => (
    <div
      className="relative"
      onMouseEnter={() => showDropdown(dropKey)}
      onMouseLeave={hideDropdown}
    >
      <button
        className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
          activeDropdown === dropKey ? "text-blue-500" : "text-gray-800 hover:text-blue-500"
        }`}
      >
        {label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${activeDropdown === dropKey ? "rotate-180 text-blue-500" : ""}`}
        />
      </button>

      {activeDropdown === dropKey && (
        <div
          className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 z-50 py-2 min-w-[230px]"
          onMouseEnter={() => showDropdown(dropKey)}
          onMouseLeave={hideDropdown}
        >
          {items.map((item) => (
            <a
              key={item}
              href="#"
              className="block px-5 py-2.5 text-sm text-gray-700 hover:text-blue-500 hover:bg-blue-50 transition-colors duration-150"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );

  // ── Two-panel mega dropdown for "Services"
  const ServicesMegaMenu = () => (
    <div
      className="relative"
      onMouseEnter={() => showDropdown("services")}
      onMouseLeave={hideDropdown}
    >
      <button
        className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
          activeDropdown === "services" ? "text-blue-500" : "text-gray-800 hover:text-blue-500"
        }`}
      >
        Services
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180 text-blue-500" : ""}`}
        />
      </button>

      {activeDropdown === "services" && (
        <div
          className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 z-50 flex overflow-hidden w-fit"
          onMouseEnter={() => showDropdown("services")}
          onMouseLeave={hideDropdown}
        >
          {/* Left panel – categories */}
          <div className="min-w-[160px] border-r border-gray-100 py-2 whitespace-nowrap">
            {serviceCategories.map((cat, idx) => (
              <button
                key={cat.label}
                onMouseEnter={() => setHoveredCategory(idx)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`w-full text-left px-4 py-3 text-sm font-medium flex items-center justify-between gap-2 transition-all duration-150 border-l-2 ${
                  hoveredCategory === idx
                    ? "text-blue-500 bg-blue-50 border-blue-500"
                    : "text-gray-800 hover:text-blue-500 hover:bg-blue-50 border-transparent"
                }`}
              >
                <span>{cat.label}</span>
                <ChevronRight
                  size={14}
                  className={`shrink-0 transition-colors duration-150 ${
                    hoveredCategory === idx ? "text-blue-500" : "text-gray-400"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right panel – only visible when a category is hovered */}
          {hoveredCategory !== null && (
            <div
              className="min-w-[220px] py-2"
              onMouseEnter={() => setHoveredCategory(hoveredCategory)}
            >
              {serviceCategories[hoveredCategory].subItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-5 py-2.5 text-sm text-gray-700 hover:text-blue-500 hover:bg-blue-50 transition-colors duration-150 whitespace-nowrap"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-max flex items-center justify-between px-6 lg:px-8 h-16 lg:h-20">

        {/* Logo */}
        <a href="/" className="flex items-baseline gap-0.5 select-none">
          <span className="text-2xl lg:text-3xl font-extrabold leading-none" style={{ color: "#1aa3e8" }}>
            Dritiseva
          </span>
          <sup className="text-[10px] font-semibold" style={{ color: "#1aa3e8" }}>™</sup>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          <ServicesMegaMenu />
          <SimpleDropdown label="Select City" items={cities} dropKey="city" />
          <SimpleDropdown label="Other Services" items={otherServices} dropKey="other-services" />

          {[
            { label: "Join Us", href: "/join-us" },
            { label: "About Us", href: "/about" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-800 hover:text-blue-500 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onContactClick}
            className="text-sm font-medium text-gray-800 hover:text-blue-500 transition-colors duration-200"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-gray-800"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 pb-4">

          {/* Services accordion */}
          <div>
            <button
              className="flex items-center justify-between w-full py-3 text-sm font-medium text-gray-800"
              onClick={() => setMobileExpanded(mobileExpanded === "services" ? null : "services")}
            >
              Services
              <ChevronDown size={14} className={`transition-transform ${mobileExpanded === "services" ? "rotate-180" : ""}`} />
            </button>
            {mobileExpanded === "services" && (
              <div className="pl-3 pb-2 space-y-1">
                {serviceCategories.map((cat) => (
                  <div key={cat.label}>
                    <p className="py-1.5 text-sm font-semibold text-blue-500">{cat.label}</p>
                    {cat.subItems.map((sub) => (
                      <a key={sub} href="#" onClick={() => setOpen(false)} className="block py-1.5 pl-3 text-sm text-gray-600 hover:text-blue-500">
                        {sub}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Select City accordion */}
          <div>
            <button
              className="flex items-center justify-between w-full py-3 text-sm font-medium text-gray-800"
              onClick={() => setMobileExpanded(mobileExpanded === "city" ? null : "city")}
            >
              Select City
              <ChevronDown size={14} className={`transition-transform ${mobileExpanded === "city" ? "rotate-180" : ""}`} />
            </button>
            {mobileExpanded === "city" && (
              <div className="pl-4 pb-2 space-y-2">
                {cities.map((c) => (
                  <a key={c} href="#" onClick={() => setOpen(false)} className="block text-sm text-gray-600 hover:text-blue-500 py-1">{c}</a>
                ))}
              </div>
            )}
          </div>

          {/* Other Services accordion */}
          <div>
            <button
              className="flex items-center justify-between w-full py-3 text-sm font-medium text-gray-800"
              onClick={() => setMobileExpanded(mobileExpanded === "other-services" ? null : "other-services")}
            >
              Other Services
              <ChevronDown size={14} className={`transition-transform ${mobileExpanded === "other-services" ? "rotate-180" : ""}`} />
            </button>
            {mobileExpanded === "other-services" && (
              <div className="pl-4 pb-2 space-y-2">
                {otherServices.map((s) => (
                  <a key={s} href="#" onClick={() => setOpen(false)} className="block text-sm text-gray-600 hover:text-blue-500 py-1">{s}</a>
                ))}
              </div>
            )}
          </div>

          {[
            { label: "Join Us", href: "/join-us" },
            { label: "About Us", href: "/about" },
          ].map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-gray-800 hover:text-blue-500 transition-colors">
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { setOpen(false); onContactClick?.(); }}
            className="block w-full text-left py-3 text-sm font-medium text-gray-800 hover:text-blue-500 transition-colors"
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
