import { useEffect, useState } from "react";

const Preloader = ({ onFinish }: { onFinish: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(onFinish, 300);
          return 100;
        }
        return p + 4;
      });
    }, 40);
    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative w-16 h-16 mb-8">
        <div
          className="absolute inset-0 rounded-full border-2 border-muted"
        />
        <div
          className="absolute inset-0 rounded-full border-2 border-primary border-t-transparent"
          style={{ animation: "spin-slow 1s linear infinite" }}
        />
      </div>
      <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-100"
          style={{
            width: `${progress}%`,
            background: "var(--gradient-primary)",
          }}
        />
      </div>
    </div>
  );
};

export default Preloader;
