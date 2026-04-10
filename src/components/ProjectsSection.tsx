import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, Trophy, Bot, Brain } from "lucide-react";

const projects = [
  {
    title: "Headless E-Commerce Platform",
    tech: ["Next.js", "TypeScript", "GraphQL"],
    impact: ["+18% performance improvement", "Zero checkout failures during peak traffic"],
    featured: true,
    link: "https://squatwolf.com/",
  },
  {
    title: "Datalyzer — Real-time Dashboard",
    tech: ["React", "GraphQL", "APIs"],
    impact: ["30% faster alert response time", "35% faster page load speed", "28% reduced bundle size"],
    featured: true,
    link: "https://www.datalyzer.pk/",
  },
  {
    title: "BotX — AI Chatbot",
    tech: ["React", "Python", "OpenAI"],
    impact: ["🏆 Runner-up project", "Behavior-based AI responses", "Context-aware conversation"],
    featured: true,
    award: true,
    icon: Bot,
  },
  {
    title: "Qatari Avatar AI Model",
    tech: ["AI", "Real-time Audio", "Lip-sync"],
    impact: ["Domain-specific knowledge responses", "Real-time lip-syncing & audio", "Human-like AI communication"],
    featured: true,
    icon: Brain,
    subtitle: "Bank Alfalah Project",
  },
  {
    title: "Applicant Tracking System",
    tech: ["React", "Spring Boot", "PostgreSQL"],
    impact: ["Hiring workflow automation", "Candidate tracking system", "Multi-user collaboration"],
    featured: false,
  },
  {
    title: "LMS Platform",
    tech: ["React"],
    impact: ["Course management UI", "API-driven dynamic rendering"],
    featured: false,
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-wider uppercase">Projects</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl">
            A selection of projects where I delivered measurable impact through clean architecture and performance optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group glass rounded-xl overflow-hidden glow-card transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Gradient top bar */}
              <div className="h-1 w-full" style={{ background: "var(--gradient-primary)" }} />

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-xs text-muted-foreground mt-0.5">{project.subtitle}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-2 shrink-0 ml-2">
                    {project.icon && <project.icon size={16} className="text-accent" />}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {project.award && (
                  <div className="inline-flex items-center gap-1 text-xs font-medium text-accent bg-accent/10 rounded-full px-2.5 py-1 mb-3">
                    <Trophy size={12} />
                    Runner-up
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="space-y-1.5">
                  {project.impact.map((imp) => (
                    <li key={imp} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                      {imp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
