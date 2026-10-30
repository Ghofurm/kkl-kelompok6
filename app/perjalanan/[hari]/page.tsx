import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Motion } from "@/components/Motion";
import { days, gallery, photos, site, type StopKind } from "@/data/trip";

type Params = { hari: string };

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

const dayPath = (id: number) => `/perjalanan/hari-${id}/`;

const findDay = (hari: string) => days.find((day) => `hari-${day.id}` === hari);

export function generateStaticParams(): Params[] {
  return days.map((day) => ({ hari: `hari-${day.id}` }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { hari } = await params;
  const day = findDay(hari);
  if (!day) return { title: "Halaman tidak ditemukan" };

  const dayPhoto = gallery.find((item) => item.day === day.id)?.photo;
  const image = dayPhoto ? photos[dayPhoto] : photos.ulunDanu;

  return {
    title: `Hari ${day.id} · ${day.weekday}, ${day.date}`,
    description: day.summary,
    openGraph: {
      title: `Hari ${day.id}: ${day.focus} · ${site.title}`,
      description: day.summary,
      images: [{ url: image.src, width: image.width, height: image.height, alt: image.alt }],
    },
  };
}

export default async function DayPage({ params }: { params: Promise<Params> }) {
  const { hari } = await params;
  const day = findDay(hari);
  if (!day) notFound();

  const dayIndex = days.findIndex((item) => item.id === day.id);
  const previous = days[(dayIndex - 1 + days.length) % days.length];
  const next = days[(dayIndex + 1) % days.length];
  const firstStop = day.stops[0]?.name;
  const lastStop = day.stops[day.stops.length - 1]?.name;

  return (
    <>
      <Motion />
      <article>
        <header className="dest-hero">
          <div className="wrap">
            <Link className="dest-back" href="/#perjalanan">
              Kembali ke menu hari
            </Link>

            <div className="dest-hero-grid">
              <div className="dest-intro" data-reveal>
                <h1 data-reveal-item style={{ "--i": 0 } as React.CSSProperties}>
                  Hari {day.id}
                </h1>
                <p className="dest-lead" data-reveal-item style={{ "--i": 1 } as React.CSSProperties}>
                  {`Rangkuman perjalanan ${day.weekday}, ${day.date}: ${day.focus}.`}
                </p>
                <dl className="dest-fields" data-reveal-item style={{ "--i": 2 } as React.CSSProperties}>
                  <div>
                    <dt>Tanggal</dt>
                    <dd>
                      {day.weekday}, {day.date}
                    </dd>
                  </div>
                  <div>
                    <dt>Rute</dt>
                    <dd>
                      {firstStop} → {lastStop}
                    </dd>
                  </div>
                  <div>
                    <dt>Berhenti</dt>
                    <dd>{day.stops.length} pemberhentian</dd>
                  </div>
                </dl>
              </div>

              <article className="manifest" data-reveal aria-labelledby="day-manifest-title">
                <div className="manifest-head">
                  <h2 id="day-manifest-title">Urutan pemberhentian</h2>
                  <span>
                    Hari {day.id} dari {days.length}
                  </span>
                </div>

                <p
                  className="day-summary"
                  data-reveal-item
                  style={{ "--i": 0 } as React.CSSProperties}
                >
                  {day.summary}
                </p>

                <ol className="stops">
                  {day.stops.map((stop, index) => (
                    <li
                      key={stop.name}
                      className="stop"
                      data-reveal-item
                      style={{ "--i": index + 1 } as React.CSSProperties}
                    >
                      <div className="stop-line">
                        {stop.destination ? (
                          <Link
                            className="stop-name stop-name--link"
                            href={`/destinasi/${stop.destination}/`}
                          >
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

                <div className="manifest-foot">
                  <span>{day.stops.length} pemberhentian</span>
                  <span>
                    {day.weekday}, {day.date}
                  </span>
                </div>
              </article>
            </div>
          </div>
        </header>

        <nav className="dest-pager wrap" aria-label="Hari sebelumnya dan berikutnya">
          <Link className="pager-card" href={dayPath(previous.id)} data-reveal>
            <span>Hari sebelumnya</span>
            <strong>Hari {previous.id}</strong>
            <span className="pager-day">{previous.focus}</span>
          </Link>
          <Link className="pager-card pager-card--next" href={dayPath(next.id)} data-reveal>
            <span>Hari berikutnya</span>
            <strong>Hari {next.id}</strong>
            <span className="pager-day">{next.focus}</span>
          </Link>
        </nav>
      </article>
    </>
  );
}
