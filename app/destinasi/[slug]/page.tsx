import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FactoryDrawing, WorkshopDrawing } from "@/components/Drawings";
import { Motion } from "@/components/Motion";
import { destinations, gallery, photos } from "@/data/trip";

type Params = { slug: string };

// The order the journal is read in, not the order of the data file.
const pageOrder = [
  "pt-victoria-care",
  "penyeberangan-ketapang-gilimanuk",
  "joger-luwus",
  "ulun-danu-beratan",
  "balai-diklat-industri-denpasar",
  "pantai-kuta",
  "pantai-pandawa",
  "tari-kecak",
  "jimbaran",
];

export function generateStaticParams(): Params[] {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);
  if (!destination) return { title: "Halaman tidak ditemukan" };
  const image = destination.photo ? photos[destination.photo] : photos.ulunDanu;
  return {
    title: `${destination.name} · Hari ${destination.day}`,
    description: destination.lead,
    openGraph: {
      title: `${destination.name} · Bali Trip Journal`,
      description: destination.lead,
      images: [{ url: image.src, width: image.width, height: image.height, alt: image.alt }],
    },
  };
}

export default async function DestinationPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);
  if (!destination) notFound();

  const index = pageOrder.indexOf(destination.slug);
  const previousSlug = pageOrder[(index - 1 + pageOrder.length) % pageOrder.length];
  const nextSlug = pageOrder[(index + 1) % pageOrder.length];
  const previous = destinations.find((item) => item.slug === previousSlug) ?? destinations[0];
  const next = destinations.find((item) => item.slug === nextSlug) ?? destinations[0];
  const mainPhoto = destination.photo ? photos[destination.photo] : null;
  const dayPhotos = gallery
    .filter((item) => item.day === destination.day && item.photo !== destination.photo)
    .slice(0, 4)
    .map((item) => ({ ...item, source: photos[item.photo] }));

  return (
    <>
      <Motion />
      <article className="destination">
        <header className="dest-hero">
          <div className="wrap">
            <Link className="dest-back" href="/#perjalanan">
              Kembali ke rute
            </Link>

            <div className="dest-hero-grid">
              <div className="dest-intro" data-reveal>
                <h1 data-reveal-item style={{ "--i": 0 } as React.CSSProperties}>
                  {destination.shortName}
                </h1>
                {destination.shortName !== destination.name && (
                  <p className="dest-official" data-reveal-item style={{ "--i": 1 } as React.CSSProperties}>
                    {destination.name}
                  </p>
                )}
                <p className="dest-lead" data-reveal-item style={{ "--i": 1 } as React.CSSProperties}>
                  {destination.lead}
                </p>
                <dl className="dest-fields" data-reveal-item style={{ "--i": 2 } as React.CSSProperties}>
                  <div>
                    <dt>Hari</dt>
                    <dd>
                      {destination.day} · {destination.date}
                    </dd>
                  </div>
                  <div>
                    <dt>Lokasi</dt>
                    <dd>{destination.location}</dd>
                  </div>
                  <div>
                    <dt>Kategori</dt>
                    <dd>{destination.category}</dd>
                  </div>
                </dl>
              </div>

              <figure className="dest-plate" data-reveal>
                <div className="dest-plate__media" data-reveal-item style={{ "--i": 1 } as React.CSSProperties}>
                  {mainPhoto ? (
                    <img
                      src={mainPhoto.src}
                      width={mainPhoto.width}
                      height={mainPhoto.height}
                      alt={mainPhoto.alt}
                      fetchPriority="high"
                      decoding="async"
                    />
                  ) : destination.drawing === "factory" ? (
                    <FactoryDrawing />
                  ) : (
                    <WorkshopDrawing />
                  )}
                </div>
                <figcaption data-reveal-item style={{ "--i": 2 } as React.CSSProperties}>
                  {mainPhoto ? (
                    <>
                      Foto: {mainPhoto.creator}, {mainPhoto.license}, via Wikimedia Commons. Bukan
                      dokumentasi kelompok.
                    </>
                  ) : (
                    "Ilustrasi ruang yang kami kunjungi, digambar khusus untuk jurnal ini."
                  )}
                </figcaption>
              </figure>
            </div>
          </div>
        </header>

        <section className="section dest-story" aria-labelledby="story-title">
          <div className="wrap dest-story-grid">
            <div className="dest-prose" data-reveal>
              <h2 id="story-title" data-reveal-item style={{ "--i": 0 } as React.CSSProperties}>
                Catatan lapangan
              </h2>
              {destination.story.map((paragraph, paragraphIndex) => (
                <p
                  key={paragraph}
                  data-reveal-item
                  style={{ "--i": paragraphIndex + 1 } as React.CSSProperties}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <aside className="dest-notes" data-reveal aria-labelledby="notes-title">
              <h2 id="notes-title" data-reveal-item style={{ "--i": 0 } as React.CSSProperties}>
                Yang kami catat
              </h2>
              <dl>
                {destination.notes.map((note, noteIndex) => (
                  <div key={note.label} data-reveal-item style={{ "--i": noteIndex + 1 } as React.CSSProperties}>
                    <dt>{note.label}</dt>
                    <dd>{note.text}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        {dayPhotos.length > 0 && (
          <section className="section dest-gallery" aria-labelledby="dest-gallery-title">
            <div className="wrap">
              <div className="section-head" data-reveal>
                <h2 id="dest-gallery-title" data-reveal-item style={{ "--i": 0 } as React.CSSProperties}>
                  Foto dari hari itu
                </h2>
                <p className="section-support" data-reveal-item style={{ "--i": 1 } as React.CSSProperties}>
                  {destination.category === "Kunjungan industri"
                    ? "Tidak ada foto dari dalam area kunjungan. Foto di bawah adalah tempat lain yang kami lewati di hari yang sama."
                    : "Beberapa foto berasal dari pemberhentian lain di hari yang sama, bukan hanya dari tempat ini."}
                </p>
              </div>

              <div className="dest-gallery-grid" data-reveal>
                {dayPhotos.map((item, photoIndex) => (
                  <figure className="dest-photo" key={item.source.src} data-reveal-item style={{ "--i": photoIndex } as React.CSSProperties}>
                    <img
                      src={item.source.src}
                      width={item.source.width}
                      height={item.source.height}
                      alt={item.source.alt}
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption>
                      {item.place} · {item.date}. Foto: {item.source.creator}, {item.source.license},
                      via Wikimedia Commons.
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        <nav className="dest-pager wrap" aria-label="Halaman jurnal sebelumnya dan berikutnya">
          <Link className="pager-card" href={`/destinasi/${previous.slug}/`} data-reveal>
            <span>Sebelumnya</span>
            <strong>{previous.name}</strong>
            <span className="pager-day">
              Hari {previous.day} · {previous.date}
            </span>
          </Link>
          <Link className="pager-card pager-card--next" href={`/destinasi/${next.slug}/`} data-reveal>
            <span>Berikutnya</span>
            <strong>{next.name}</strong>
            <span className="pager-day">
              Hari {next.day} · {next.date}
            </span>
          </Link>
        </nav>
      </article>
    </>
  );
}
