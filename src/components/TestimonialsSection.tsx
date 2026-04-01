import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rajmohan",
    city: "Chennai",
    text: "Ms.Rekha helped to coordinate and get an attender at a very short notice. The caregiver was professional and caring.",
    color: "bg-card-yellow",
  },
  {
    name: "Peer Rabani",
    city: "Chennai",
    text: "The service was excellent. The caregiver was kind, experienced, and attentive to my dad's needs. Highly recommend!",
    color: "bg-card-pink",
  },
  {
    name: "Pushpa",
    city: "Chennai",
    text: "The agency was very helpful and prompt in providing a good caregiver to take care of my ailing husband. Very satisfied.",
    color: "bg-card-green",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-secondary/30">
    <div className="container-max text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12">Over 1000+ Heartfelt Reviews</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div key={r.name} className={`${r.color} rounded-2xl p-6 text-left relative`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-gold-star text-gold-star" />)}
              </div>
              <span className="text-3xl text-foreground/20 font-serif">"</span>
            </div>
            <p className="text-sm text-foreground/80 mb-4 line-clamp-4">{r.text}</p>
            <a href="#" className="text-sm font-semibold text-foreground hover:underline">Read more</a>
            <div className="mt-6 pt-4 border-t border-foreground/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-sm font-bold">
                {r.name[0]}
              </div>
              <div>
                <div className="font-semibold text-sm">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.city}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
