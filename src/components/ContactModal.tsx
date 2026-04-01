import { X } from "lucide-react";
import { useEffect } from "react";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactModal = ({ open, onClose }: ContactModalProps) => {
  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-[999] flex items-start justify-center pt-10 px-4"
      style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
      onClick={onClose}
    >
      {/* Modal card — stop propagation so clicks inside don't close */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        style={{
          animation: "popIn 0.22s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
          aria-label="Close"
        >
          <X size={18} className="text-gray-700" />
        </button>

        {/* Content */}
        <div className="p-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Help Desk</h2>

          {/* Address */}
          <div className="mb-5">
            <p className="text-sm font-bold text-gray-900 mb-1">Address</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              5C-338, 1st &amp; 2nd Floor, 3rd A Main Road, 5th Cross Rd,
              HRBR Layout 3rd Block, HRBR Layout, Kammanahalli, Bengaluru,
              Karnataka 560043
            </p>
          </div>

          {/* Phone */}
          <a
            href="tel:+918069369999"
            className="block text-sm text-gray-800 underline mb-2 hover:text-blue-600 transition-colors"
          >
            Customer Care: +91-806-936-9999
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919043943995"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-gray-800 underline mb-3 hover:text-green-600 transition-colors"
          >
            Dritiseva WhatsApp: +91-904-394-3995
          </a>

          {/* Email */}
          <p className="text-sm text-gray-700 mb-6">
            Email:{" "}
            <a href="mailto:team@dritiseva.com" className="hover:text-blue-600 transition-colors">
              team@dritiseva.com
            </a>
          </p>

          {/* Google Map embed */}
          <div className="rounded-xl overflow-hidden border border-gray-200">
            <iframe
              title="Dritiseva Help Desk Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1234567890!2d77.6408!3d13.0215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae173a4c3d2f25%3A0xa5e2e8ef6c1b1b3e!2sHRBR%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Keyframe animation */}
      <style>{`
        @keyframes popIn {
          0%   { opacity: 0; transform: scale(0.88) translateY(20px); }
          100% { opacity: 1; transform: scale(1)    translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ContactModal;
