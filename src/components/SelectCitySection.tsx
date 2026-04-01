import { MapPin } from "lucide-react";

const cities = [
  "Chennai", "Bangalore", "Hyderabad", "Mumbai", "Delhi",
  "Kolkata", "Pune", "Coimbatore", "Madurai", "Trichy",
];

const SelectCitySection = () => (
  <section id="city" className="section-padding bg-background">
    <div className="container-max text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">Select Your City</h2>
      <p className="text-muted-foreground mb-10 text-sm">We provide home care services across major cities in India</p>
      <div className="flex flex-wrap justify-center gap-3">
        {cities.map((city) => (
          <button key={city} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-input bg-background text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
            <MapPin size={14} /> {city}
          </button>
        ))}
      </div>
    </div>
  </section>
);

export default SelectCitySection;
