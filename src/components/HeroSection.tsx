import heroNurse from "@/assets/hero-nurse.png";
import { Phone, MessageCircle, Star, Users, Zap, Shield, RefreshCw } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Best Home{" "}
              <span className="text-primary">Care and Patient Care</span>{" "}
              Services in Chennai
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Hire trained and skilled nurses and caretakers for the elderly and bedridden patients at home
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="https://wa.me/919999999999" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-whatsapp text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                <MessageCircle size={20} /> WhatsApp Us
              </a>
              <a href="tel:+919999999999" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                <Phone size={20} /> Call Us
              </a>
            </div>
          </div>

          {/* Right content */}
          <div className="relative">
            <div className="grid grid-cols-5 gap-4 items-start">
              {/* Nurse image */}
              <div className="col-span-3 bg-card-blue rounded-2xl p-4 flex items-end justify-center">
                <img src={heroNurse} alt="Professional caregiver from Dritiseva" width={400} height={500} className="w-full max-w-xs object-contain" />
              </div>

              {/* Stats cards */}
              <div className="col-span-2 space-y-4">
                <div className="bg-card-yellow rounded-2xl p-5 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">G</div>
                  <div className="flex justify-center gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-gold-star text-gold-star" />)}
                  </div>
                  <span className="text-2xl font-bold">4.8</span> <span className="text-muted-foreground text-sm">Ratings</span>
                </div>

                <div className="bg-card-green rounded-2xl p-5 text-center">
                  <div className="flex justify-center -space-x-2 mb-2">
                    <Users size={20} className="text-primary" />
                  </div>
                  <div className="text-2xl font-bold">20,000+</div>
                  <div className="text-sm text-muted-foreground">Verified Caregivers</div>
                </div>
              </div>
            </div>

            {/* Feature badges */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="flex items-center gap-3 bg-card-pink rounded-xl p-3">
                <Zap size={20} className="text-primary shrink-0" />
                <span className="text-sm font-medium">Quick Deployment</span>
              </div>
              <div className="flex items-center gap-3 bg-card-blue rounded-xl p-3">
                <MessageCircle size={20} className="text-primary shrink-0" />
                <span className="text-sm font-medium">Live Chat</span>
              </div>
              <div className="flex items-center gap-3 bg-card-yellow rounded-xl p-3">
                <Shield size={20} className="text-primary shrink-0" />
                <span className="text-sm font-medium">Certified Caregivers</span>
              </div>
              <div className="flex items-center gap-3 bg-card-green rounded-xl p-3">
                <RefreshCw size={20} className="text-primary shrink-0" />
                <span className="text-sm font-medium">Free Replacement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
