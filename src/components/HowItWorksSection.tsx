import { ClipboardList, Search, FileText, Activity } from "lucide-react";

const steps = [
  {
    title: "Create your elder's profile",
    desc: "Help us understand your elderly loved ones by updating a few details on the Dritiseva app.",
    icon: ClipboardList,
    color: "bg-card-yellow",
  },
  {
    title: "Find the right care service",
    desc: "Discover a wide range of services and care providers tailored to your senior's specific needs.",
    icon: Search,
    color: "bg-card-yellow",
  },
  {
    title: "Your Care summary",
    desc: "View detailed care summaries, payment information, and caregiver attendance records.",
    icon: FileText,
    color: "bg-card-yellow",
  },
  {
    title: "View Live Care Insights",
    desc: "Keep track of daily tasks performed by caregivers and basic health vitals.",
    icon: Activity,
    color: "bg-card-pink",
  },
];

const HowItWorksSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container-max text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12">Your Dedicated Dritiseva Elder Care App</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s) => (
          <div key={s.title} className={`${s.color} rounded-2xl p-6 text-left`}>
            <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base">{s.title}</h3>
              <s.icon size={28} className="text-primary shrink-0" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
