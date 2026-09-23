"use client";

import { useEffect, useRef, useState } from "react";

export default function FibrasBackground({ className = "" }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const shouldPause = !isVisible || isScrolling;

  return (
    <div
      ref={ref}
      data-paused={shouldPause}
      className={`fibras absolute inset-0 z-0 pointer-events-none overflow-hidden ${className}`}
    >
      <svg viewBox="0 0 1440 620" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
        <path d="M-100,520 C320,520 480,120 1540,120" stroke="rgba(213,0,206,.6)" />
        <path className="pulso" d="M-100,520 C320,520 480,120 1540,120" stroke="#fff" />

        <path d="M-100,600 C280,600 420,240 1540,240" stroke="rgba(248,175,45,.6)" />
        <path className="pulso b" d="M-100,600 C280,600 420,240 1540,240" stroke="#fff" />

        <path d="M-100,440 C380,440 560,80 1540,80" stroke="rgba(213,0,206,.6)" />
        <path className="pulso c" d="M-100,440 C380,440 560,80 1540,80" stroke="#fff" />

        <path d="M-100,680 C240,680 380,360 1540,360" stroke="rgba(248,175,45,.6)" />
        <path className="pulso d" d="M-100,680 C240,680 380,360 1540,360" stroke="#fff" />
      </svg>
    </div>
  );
}
