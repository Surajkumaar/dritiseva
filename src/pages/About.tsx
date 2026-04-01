import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useState } from "react";

const About = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onContactClick={() => setContactOpen(true)} />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#3399e0", minHeight: "360px" }}
      >
        {/* Left elderly illustration — Smaller on mobile */}
        <img
          src="/elderly_right.png"
          alt="Elderly hero illustration"
          className="absolute left-0 bottom-0 pointer-events-none select-none h-48 sm:h-[340px]"
          style={{ objectFit: "contain", objectPosition: "bottom left" }}
        />

        {/* Right elderly illustration — Smaller on mobile */}
        <img
          src="/elderly_left.png"
          alt="Elderly hero illustration"
          className="absolute right-0 bottom-0 pointer-events-none select-none h-48 sm:h-[340px]"
          style={{ objectFit: "contain", objectPosition: "bottom right" }}
        />

        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20" style={{ minHeight: "360px" }}>
          <p
            className="text-white leading-snug"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
              fontSize: "clamp(1.5rem, 4vw, 2.4rem)",
              maxWidth: "420px",
              lineHeight: 1.45,
            }}
          >
            Building a better<br />world for our elderly<br />loved ones
          </p>
        </div>
      </section>

      {/* ── Our Story ────────────────────────────────────────────── */}
      <section className="bg-white py-14 px-6">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row gap-12 items-start">

            {/* Left: Story text */}
            <div className="lg:w-1/2 space-y-4">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Our Story</h2>

              <p className="text-sm text-gray-600 leading-relaxed">
                Our story began with a simple idea – helping others. As humans, we are bound
                to help others and are always seeking 'Helper's High'. The warm glow of pro
                sociality certainly drives us in helping a fellow human being. So in 2019, when
                the world was at the highest gear and people were time constrained, we
                launched Dritiseva as a platform to seek and{" "}
                <span className="text-blue-500">provide help</span>.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                We saw people, especially in urban India struggling to complete tasks, look
                after their loved ones or care for their pets. Dritiseva was designed in such a
                way that anyone could request{" "}
                <span className="text-blue-500">help on our platform</span> to be taken up by
                our verified community members.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Dritiseva began helping people even throughout the raging covid-19 pandemic
                with various requests from medicine deliveries to vaccination assists. As we
                got more requests on our platform, we quickly realised that most of our
                requests were coming from the elderly or from people who wanted us to care
                for their senior family members.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Our team understood this problem quite well as we had senior parents who
                lived alone far away from us. We knew the issues seniors faced everyday and it
                motivated us immensely to use Dritiseva as a platform to{" "}
                <span className="text-blue-500">provide on-demand help</span> for our loved ones.
              </p>
            </div>

            {/* Right: Team illustration */}
            <div className="lg:w-1/2 flex justify-center items-center">
              <img
                src="/team_illustration.png"
                alt="Team collaboration"
                className="w-full max-w-sm object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote Banner ─────────────────────────────────────────── */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/team_photo.png')" }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(26,163,232,0.70)" }} />
        <blockquote
          className="relative z-10 text-white text-center max-w-2xl mx-auto leading-relaxed"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontStyle: "italic",
            fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)",
          }}
        >
          "To care for those who once cared for us is one of the highest callings — and we answer it every day."
        </blockquote>
      </section>

      <Footer />
      <WhatsAppButton />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
};

export default About;
