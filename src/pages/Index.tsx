import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import JoinUsSection from "@/components/JoinUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

import ContactModal from "@/components/ContactModal";
import PricingModal from "@/components/PricingModal";
import WhyUsSection from "@/components/WhyUsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onContactClick={() => setContactOpen(true)} />
      <HeroSection />
      <ServicesSection />
      <PricingSection onViewPrices={() => setPricingOpen(true)} />
      <WhyUsSection />
      <JoinUsSection />
      <TestimonialsSection />

      <Footer />
      <WhatsAppButton />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <PricingModal open={pricingOpen} onClose={() => setPricingOpen(false)} />
    </div>
  );
};

export default Index;
