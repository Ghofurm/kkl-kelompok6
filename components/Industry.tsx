import Link from "next/link";
import { FactoryDrawing, WorkshopDrawing } from "@/components/Drawings";
import { destinations } from "@/data/trip";

export function Industry() {
  const visits = [
    destinations.find((item) => item.slug === "pt-victoria-care"),
    destinations.find((item) => item.slug === "balai-diklat-industri-denpasar"),
  ].filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <section className="section industry" id="kunjungan" aria-labelledby="industry-title">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <h2 id="industry-title" data-reveal-item style={{ "--i": 0 } as React.CSSProperties}>
            Kunjungan industri
          </h2>
          <p className="section-support" data-reveal-item style={{ "--i": 1 } as React.CSSProperties}>
            Dua tempat yang membuat perjalanan ini bukan hanya liburan: satu lantai produksi di
            Semarang, satu balai pelatihan di Denpasar.
          </p>
        </div>

        <div className="folders">
          {visits.map((visit, index) => (
            <article
              className={`folder ${index === 1 ? "folder--alt" : ""}`}
              key={visit.slug}
              data-reveal
            >
              <div className="folder-tab" aria-hidden="true" data-reveal-item style={{ "--i": 0 } as React.CSSProperties} />

              <div className="folder-body">
                <div className="drawing-stage" data-reveal-item style={{ "--i": 1 } as React.CSSProperties}>
                  {visit.drawing === "factory" ? <FactoryDrawing /> : <WorkshopDrawing />}
                </div>

                <div className="folder-content" data-reveal-item style={{ "--i": 2 } as React.CSSProperties}>
                  <h3>{visit.name}</h3>
                  <p className="folder-meta">
                    {visit.category} · Hari {visit.day}
                  </p>
                  <p className="folder-lead">{visit.lead}</p>

                  <dl className="folder-notes">
                    {visit.notes.map((note) => (
                      <div key={note.label}>
                        <dt>{note.label}</dt>
                        <dd>{note.text}</dd>
                      </div>
                    ))}
                  </dl>

                  <Link className="text-link" href={`/destinasi/${visit.slug}/`}>
                    Buka berkas
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
