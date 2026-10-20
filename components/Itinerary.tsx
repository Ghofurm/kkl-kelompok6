"use client";

import Link from "next/link";
import { useState } from "react";
import { days, type StopKind } from "@/data/trip";

const kindLabel: Record<StopKind, string> = {
  industri: "Kunjungan industri",
  budaya: "Wisata budaya",
  pantai: "Pantai",
  perjalanan: "Perjalanan",
  kuliner: "Makan",
  belanja: "Oleh-oleh",
  penginapan: "Menginap",
  kampus: "Kampus",
  pertunjukan: "Pertunjukan",
};

type MapStop = {
  name: string;
  x: number;
  y: number;
  days: number[];
  side: "right" | "left";
  minor?: boolean;
};

const mapStops: MapStop[] = [
  { name: "Semarang", x: 170, y: 90, days: [1, 5], side: "right" },
  { name: "Caruban", x: 270, y: 220, days: [1, 5], side: "right", minor: true },
  { name: "Ketapang", x: 370, y: 380, days: [1, 4, 5], side: "right" },
  { name: "Gilimanuk", x: 390, y: 470, days: [2, 4], side: "left" },
  { name: "Bedugul", x: 420, y: 510, days: [2], side: "right", minor: true },
  { name: "Denpasar", x: 440, y: 550, days: [2, 3, 4], side: "left" },
  { name: "Nusa Dua", x: 480, y: 600, days: [2], side: "left", minor: true },
  { name: "Kuta", x: 395, y: 595, days: [3], side: "left", minor: true },
  { name: "Pandawa", x: 430, y: 635, days: [3], side: "right" },
  { name: "Jimbaran", x: 360, y: 640, days: [3], side: "right" },
];

const dayRoutes: Record<number, [number, number][]> = {
  1: [
    [170, 90],
    [270, 220],
    [370, 380],
  ],
  2: [
    [370, 380],
    [390, 470],
    [420, 510],
    [440, 550],
    [480, 600],
  ],
  3: [
    [440, 550],
    [395, 595],
    [430, 635],
    [360, 640],
  ],
  4: [
    [360, 640],
    [440, 550],
    [390, 470],
    [370, 380],
  ],
  5: [
    [370, 380],
    [270, 220],
    [170, 90],
  ],
};

const polyline = (points: [number, number][]) => points.map(([x, y]) => `${x},${y}`).join(" ");

export function Itinerary() {
  const [activeDay, setActiveDay] = useState(1);
  const active = days.find((day) => day.id === activeDay) ?? days[0];

  return (
    <section className="section itinerary" id="perjalanan" aria-labelledby="itinerary-title">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <h2 id="itinerary-title" data-reveal-item style={{ "--i": 0 } as React.CSSProperties}>
            Rute lima hari
          </h2>
          <p className="section-support" data-reveal-item style={{ "--i": 1 } as React.CSSProperties}>
            Peta ini mengikuti urutan pemberhentian resmi. Pilih satu hari untuk melihat jalurnya.
          </p>
        </div>

        <div className="itinerary-grid">
          <aside className="map-panel" aria-label="Peta perjalanan" data-reveal>
            <div className="map-tabs" role="group" aria-label="Pilih hari perjalanan">
              {days.map((day) => (
                <button
                  key={day.id}
                  type="button"
                  className={day.id === activeDay ? "is-active" : ""}
                  aria-pressed={day.id === activeDay}
                  onClick={() => {
                    setActiveDay(day.id);
                    if (window.matchMedia("(max-width: 980px)").matches) {
                      const target = document.getElementById(`hari-${day.id}`);
                      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                      target?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
                    }
                  }}
                >
                  Hari {day.id}
                </button>
              ))}
            </div>

            <div className="map-canvas">
              <svg
                className="route-map"
                viewBox="0 0 520 680"
                role="img"
                aria-label={`Rute Hari ${active.id}: ${active.stops.map((stop) => stop.name).join(", ")}`}
              >
                <path
                  className="map-land"
                  d="M35 105 C85 65 140 55 195 65 C245 74 270 100 305 135 C335 165 360 200 375 245 C388 285 400 330 392 370 C386 400 365 405 345 388 C325 370 315 345 295 325 C275 305 255 290 235 270 C215 250 190 235 165 220 C135 200 105 180 75 160 C45 140 25 125 35 105 Z"
                />
                <path
                  className="map-land"
                  d="M400 470 C420 455 448 465 462 490 C476 516 470 548 460 575 C450 602 432 625 414 638 C396 650 378 642 372 620 C366 598 378 575 386 552 C394 528 390 500 400 470 Z"
                />

                <g className="map-decor" aria-hidden="true">
                  <text x="112" y="292" transform="rotate(-58 112 292)" className="map-island-label">
                    Pulau Jawa
                  </text>
                  <text x="440" y="455" className="map-island-label">
                    Bali
                  </text>
                  <text x="296" y="430" className="map-sea-label">
                    Selat Bali
                  </text>
                  <path d="M50 72 L62 40 L74 72 Z" className="map-compass" />
                  <text x="56" y="90" className="map-compass-label">
                    U
                  </text>
                </g>

                <g className="map-ferry" aria-hidden="true">
                  <path
                    d="M370 380 Q380 425 390 470"
                    className={`map-ferry-line ${activeDay === 2 || activeDay === 4 ? "is-active" : ""}`}
                  />
                </g>

                {days
                  .filter((day) => day.id !== activeDay)
                  .map((day) => (
                    <polyline
                      key={day.id}
                      points={polyline(dayRoutes[day.id])}
                      className="map-route map-route--idle"
                    />
                  ))}
                <polyline
                  key={`active-${activeDay}`}
                  points={polyline(dayRoutes[activeDay])}
                  className="map-route map-route--active"
                  pathLength={1}
                />
              </svg>

              {mapStops.map((stop) => {
                const isActive = stop.days.includes(activeDay);
                return (
                  <span
                    key={stop.name}
                    className={`map-stop map-stop--${stop.side} ${isActive ? "is-active" : ""} ${
                      stop.minor ? "is-minor" : ""
                    }`}
                    style={{ left: `${(stop.x / 520) * 100}%`, top: `${(stop.y / 680) * 100}%` }}
                    aria-hidden="true"
                  >
                    <span className="map-stop__dot" />
                    <span className="map-stop__label">{stop.name}</span>
                  </span>
                );
              })}
            </div>

            <div className="map-caption" aria-live="polite">
              <p className="map-caption__day">
                Hari {active.id} · {active.weekday}, {active.date}
              </p>
              <p>{active.focus}</p>
              <p className="map-caption__count">{active.stops.length} pemberhentian</p>
            </div>
          </aside>

          <div className="manifest" data-reveal>
            {days.map((day, dayIndex) => (
              <article
                key={day.id}
                className={`day-group ${day.id === activeDay ? "is-active" : ""}`}
                id={`hari-${day.id}`}
              >
                <header className="day-head" data-reveal-item style={{ "--i": dayIndex + 1 } as React.CSSProperties}>
                  <div className="day-title-row">
                    <h3>Hari {day.id}</h3>
                    <p>
                      {day.weekday}, {day.date}
                    </p>
                  </div>
                  <p className="day-focus">{day.focus}</p>
                  <p className="day-summary">{day.summary}</p>
                </header>

                <ol className="stops">
                  {day.stops.map((stop) => (
                    <li key={stop.name} className="stop">
                      <div className="stop-line">
                        {stop.destination ? (
                          <Link className="stop-name stop-name--link" href={`/destinasi/${stop.destination}/`}>
                            {stop.name}
                          </Link>
                        ) : (
                          <span className="stop-name">{stop.name}</span>
                        )}
                        <span className="stop-leader" aria-hidden="true" />
                        <span className="stop-kind">{kindLabel[stop.kind]}</span>
                      </div>
                      <p className="stop-note">{stop.note}</p>
                    </li>
                  ))}
                </ol>
              </article>
            ))}

            <div className="manifest-foot">
              <span>23 pemberhentian</span>
              <span>Semarang → Bali → Semarang</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
