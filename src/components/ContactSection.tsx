import { useState } from "react";

const cities = ["Chennai", "Bangalore", "Hyderabad", "Mumbai", "Delhi"];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", city: "Chennai", notes: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will get back to you soon.");
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-max">
        <div className="bg-card-blue/50 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3">
            We've Made It Easy For You To Find The Right Care
          </h2>
          <p className="text-center text-muted-foreground mb-8 text-sm">
            Simply share your elderly loved one's care requirement and we shall find the right caregiver for you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-semibold mb-1 block">Your Name <span className="text-destructive">*</span></label>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Type your name" className="w-full px-4 py-3 rounded-lg bg-background border border-input text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="text-sm font-semibold mb-1 block">Phone Number <span className="text-destructive">*</span></label>
                <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Type your mobile number" className="w-full px-4 py-3 rounded-lg bg-background border border-input text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="text-sm font-semibold mb-1 block">Email</label>
                <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Type your email" className="w-full px-4 py-3 rounded-lg bg-background border border-input text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold mb-1 block">City <span className="text-destructive">*</span></label>
                <select required value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-input text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  {cities.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold mb-1 block">Notes</label>
                <input value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Type your requirements" className="w-full px-4 py-3 rounded-lg bg-background border border-input text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
            </div>
            <div className="text-center pt-2">
              <button type="submit" className="px-10 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                Request Call Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
