import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

const Footer = () => (
  <footer style={{ backgroundColor: "#e8f0fe" }} className="text-gray-800">
    {/* Main footer grid */}
    <div className="container-max px-6 lg:px-8 py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Column 1: Logo + Description + Contact Us + Social + Address */}
        <div className="space-y-6">
          {/* Logo */}
          <div>
            <h2 className="text-3xl font-extrabold" style={{ color: "#1aa3e8" }}>
              Dritiseva<sup className="text-xs font-normal align-super">™</sup>
            </h2>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed max-w-xs">
              We've built the Dritiseva Platform with the sole intention of providing exceptional and reliable care for seniors.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+918069369999"
                  className="underline text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Customer Care: +91-806-936-9999
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919043943995"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-gray-700 hover:text-green-600 transition-colors"
                >
                  Dritiseva WhatsApp: +91-904-394-3995
                </a>
              </li>
              <li className="text-gray-700">
                Email:{" "}
                <a
                  href="mailto:team@dritiseva.com"
                  className="hover:text-blue-600 transition-colors"
                >
                  team@dritiseva.com
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-4 text-gray-800">
              <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter/X" className="hover:text-gray-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-red-600 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Address</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              338, 3rd A Main Road<br />
              HRBR Layout Bengaluru - 43
            </p>
          </div>
        </div>

        {/* Column 2: Cities Available */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Cities Available</h3>
          <ul className="space-y-3 text-sm">
            {[
              "Dritiseva Bengaluru",
              "Dritiseva Chennai",
              "Dritiseva Delhi",
              "Dritiseva Hyderabad",
              "Dritiseva Mumbai",
              "Dritiseva Pune",
              "Dritiseva Ahmedabad",
              "Dritiseva Lifestyle Home Chennai",
            ].map((city) => (
              <li key={city}>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {city}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Company</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                Market Place Agreement
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom copyright bar */}
    <div
      className="text-center text-sm py-4 border-t"
      style={{ borderColor: "#c8d8f0", color: "#555" }}
    >
      © 2025 Dritiseva Health Tech PVT. LTD.
    </div>
  </footer>
);

export default Footer;
