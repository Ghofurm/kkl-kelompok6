import { crew, site } from "@/data/trip";
import { getCrewPhotos } from "@/lib/crew-photos";

export function Crew() {
  const photos = getCrewPhotos();

  return (
    <section className="section crew" id="kru" aria-labelledby="crew-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="crew-title">Kru perjalanan</h2>
          <p className="section-support">
            Sepuluh orang, satu bus, satu buku catatan. Ini kartu perjalanan {site.group}.
          </p>
        </div>

        <ul className="crew-grid">
          {crew.map((member, index) => {
            const photo = photos[member.npm];

            return (
              <li className={`passport ${index % 2 === 1 ? "passport--alt" : ""}`} key={member.npm}>
                <div className="passport-photo">
                  {photo ? (
                    <img
                      src={photo}
                      alt={`Foto profil ${member.name}`}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span data-initials={member.initials} />
                  )}
                </div>

                <div className="passport-name">
                  <h3>{member.name}</h3>
                  <p>NPM {member.npm}</p>
                  <p className="passport-card-label">Paspor KKL · Grup 6</p>
                </div>

                <span className="passport-stamp" aria-hidden="true" data-stamp="BALI|2026" />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
