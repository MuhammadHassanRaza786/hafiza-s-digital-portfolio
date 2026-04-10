import { useEffect, useState } from "react";
import { ArrowDown, Download, FolderOpen } from "lucide-react";

const typingTexts = [
  "React",
  "Next.js",
  "TypeScript",
  "Performance Optimization",
];

const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = typingTexts[currentTextIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(text.slice(0, displayText.length + 1));
        if (displayText.length === text.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(text.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((i) => (i + 1) % typingTexts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </div>
        </div>

        <h1
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="text-foreground">Hafiza Samara</span>
          <br />
          <span className="gradient-text">Mohsin</span>
        </h1>

        <p
          className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          Software Engineer | Frontend Specialist
        </p>

        <p
          className="text-lg text-muted-foreground/80 mb-4 animate-fade-up max-w-2xl mx-auto"
          style={{ animationDelay: "0.7s" }}
        >
          Building scalable, high-performance web experiences
        </p>

        <div
          className="h-8 mb-10 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <span className="text-primary font-mono text-lg">
            {displayText}
            <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse" />
          </span>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "1s" }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium text-primary-foreground transition-all duration-300 hover:scale-105"
            style={{ background: "var(--gradient-primary)" }}
          >
            <FolderOpen size={18} />
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium glass text-foreground hover:bg-secondary transition-all duration-300 hover:scale-105"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>

        <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
