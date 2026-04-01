import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface PricingModalProps {
  open: boolean;
  onClose: () => void;
}

const cities = ["Chennai", "Bengaluru", "Hyderabad", "Mumbai", "Delhi", "Pune"];

const PricingModal = ({ open, onClose }: PricingModalProps) => {
  const [selected, setSelected] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) { setSelected(null); return; }
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleCityClick = (city: string) => {
    setSelected(city);
    onClose();
    navigate(`/pricing/${city.toLowerCase()}`);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center px-4"
      style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm p-7"
        style={{ animation: "popIn 0.22s cubic-bezier(0.34,1.56,0.64,1) both" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X size={16} className="text-gray-600" />
        </button>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-900 text-center mb-5">
          Select Your City to View Charges
        </h2>

        {/* City list */}
        <div className="space-y-3">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => handleCityClick(city)}
              className={`w-full py-3 px-5 rounded-xl text-sm font-medium text-center transition-all duration-150 border ${
                selected === city
                  ? "border-blue-500 bg-white text-gray-900 shadow-sm"
                  : "border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 hover:border-blue-300"
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes popIn {
          0%   { opacity: 0; transform: scale(0.88) translateY(20px); }
          100% { opacity: 1; transform: scale(1)    translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default PricingModal;
