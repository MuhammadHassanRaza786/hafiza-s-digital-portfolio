import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Disrupt.com (Squatwolf)",
    role: "Software Engineer",
    period: "Recent",
    points: [
      "Built headless e-commerce platform with Next.js & GraphQL",
      "Improved site performance by ~18% through code optimization",
      "Zero checkout issues maintained during Black Friday peak traffic",
    ],
  },
  {
    company: "Xloop Digital",
    role: "Frontend Developer",
    period: "Previous",
    points: [
      "Built real-time dashboards serving 5,000+ active users",
      "Improved API response performance by 20%",
      "Created reusable component library reducing dev time by 30%",
    ],
  },
  {
    company: "Pakistan Institute of Living and Learning",
    role: "Frontend Developer",
    period: "Earlier",
    points: [
      "Developed internal React applications for healthcare operations",
      "Contributed to healthcare tech research and digital tools",
    ],
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-wider uppercase">Experience</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
            Where I've <span className="gradient-text">Worked</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`relative pl-8 md:pl-20 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 -translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

                <div className="glass rounded-xl p-6 glow-card">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <Building2 size={18} className="text-primary" />
                    <h3 className="font-heading text-lg font-semibold text-foreground">{exp.company}</h3>
                    <span className="text-sm text-muted-foreground">• {exp.role}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
