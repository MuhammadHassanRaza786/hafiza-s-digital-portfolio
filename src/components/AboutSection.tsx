import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code2, Users, Zap, TrendingUp } from "lucide-react";

const highlights = [
  { icon: Code2, label: "3+ Years", desc: "Frontend Engineering" },
  { icon: Users, label: "5,000+", desc: "Users Served" },
  { icon: Zap, label: "18%+", desc: "Performance Gains" },
  { icon: TrendingUp, label: "Agile", desc: "Team Collaboration" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-wider uppercase">About Me</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
            Crafting Digital <span className="gradient-text">Experiences</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div
            className={`space-y-5 text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p>
              I'm a frontend-focused Software Engineer with <strong className="text-foreground">3+ years of experience</strong> building
              production-grade web applications. My expertise lies in creating scalable architectures
              and optimizing performance for real-world products.
            </p>
            <p>
              I've built platforms handling <strong className="text-foreground">5,000+ active users</strong> and
              delivered zero-downtime experiences during peak traffic events like Black Friday.
              My approach combines clean code with measurable impact.
            </p>
            <p>
              Working in cross-functional Agile teams, I focus on component-driven development,
              API integration, and delivering features that move business metrics.
            </p>
          </div>

          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {highlights.map((h) => (
              <div key={h.label} className="glass rounded-xl p-5 glow-card group">
                <h.icon className="text-primary mb-3 group-hover:scale-110 transition-transform" size={24} />
                <p className="font-heading text-2xl font-bold text-foreground">{h.label}</p>
                <p className="text-sm text-muted-foreground">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
