"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/trip";

export function Stats() {
  return (
    <section className="section stats" id="angka" aria-labelledby="stats-title">
      <div className="wrap stats-grid" data-reveal>
        <div className="stats-intro">
          <h2 id="stats-title" data-reveal-item style={{ "--i": 0 } as React.CSSProperties}>
            Lima hari, dua ruang belajar.
          </h2>
          <p data-reveal-item style={{ "--i": 1 } as React.CSSProperties}>
            Angka ini dihitung dari jadwal perjalanan: hari, kunjungan industri, anggota, dan
            pemberhentian yang kami catat.
          </p>
        </div>

        <div className="stats-list">
          {stats.map((item, index) => (
            <div
              className="stat-row"
              key={item.caption}
              data-reveal-item
              style={{ "--i": index + 2 } as React.CSSProperties}
            >
              <Counter value={item.value} />
              <p>{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ value }: { value: string }) {
  const finalValue = Number(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const element = ref.current;
    if (!element) return;
    let frame = 0;
    setDisplay("0");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 900;
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(String(Math.round(finalValue * eased)));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [finalValue]);

  return (
    <span className="stat-value" ref={ref}>
      {display}
    </span>
  );
}
