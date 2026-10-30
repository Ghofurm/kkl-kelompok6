import Link from "next/link";
import { days } from "@/data/trip";

export function ItineraryMenu() {
  return (
    <section className="section itinerary" id="perjalanan" aria-labelledby="itinerary-title">
      <div className="wrap">
        <div className="section-head itinerary-head" data-reveal>
          <h2 id="itinerary-title" data-reveal-item style={{ "--i": 0 } as React.CSSProperties}>
            Rute lima hari
          </h2>
          <p className="section-support" data-reveal-item style={{ "--i": 1 } as React.CSSProperties}>
            Lima hari, lima lembar perjalanan. Pilih satu hari untuk membaca urutan pemberhentian,
            catatan singkat, dan tautan ke halaman destinasinya.
          </p>
        </div>

        <ol className="day-menu" data-reveal>
          {days.map((day, index) => (
            <li key={day.id} data-reveal-item style={{ "--i": index } as React.CSSProperties}>
              <Link
                className="day-card"
                href={`/perjalanan/hari-${day.id}/`}
                aria-label={`Hari ${day.id}, ${day.weekday}, ${day.date}: ${day.focus}. ${day.stops.length} pemberhentian, buka rangkuman.`}
              >
                <span className="day-card__stub" aria-hidden="true">
                  <span className="day-card__stub-number">Hari {day.id}</span>
                </span>
                <span className="day-card__body">
                  <span className="day-card__date">
                    {day.weekday}, {day.date}
                  </span>
                  <span className="day-card__focus">{day.focus}</span>
                  <span className="day-card__meta">
                    {day.stops.length} pemberhentian · Buka rangkuman
                  </span>
                </span>
                <span className="day-card__arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
