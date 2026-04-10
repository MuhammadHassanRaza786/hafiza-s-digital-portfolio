import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skills = [
  { name: "React.js / Next.js", level: 95 },
  { name: "JavaScript / TypeScript", level: 92 },
  { name: "Redux / Context API", level: 88 },
  { name: "Tailwind / MUI / Bootstrap", level: 90 },
  { name: "REST APIs / GraphQL", level: 85 },
  { name: "Node.js", level: 65 },
  { name: "Git / Agile", level: 90 },
];

const techBadges = [
  "React", "Next.js", "TypeScript", "JavaScript", "Redux", "GraphQL",
  "Tailwind CSS", "Material UI", "Node.js", "Git", "REST APIs", "Agile",
  "HTML5", "CSS3", "Webpack", "Vite", "PostgreSQL", "MongoDB",
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-wider uppercase">Skills</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Progress Bars */}
          <div className="space-y-6">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      background: "var(--gradient-primary)",
                      transitionDelay: `${i * 100 + 300}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Floating Badges */}
          <div
            className={`flex flex-wrap gap-3 content-start transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {techBadges.map((badge, i) => (
              <span
                key={badge}
                className="glass px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default hover:scale-105"
                style={{
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
