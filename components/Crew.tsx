import { crew, site } from "@/data/trip";

export function Crew() {
  return (
    <section className="section crew" id="kru" aria-labelledby="crew-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="crew-title">Kru perjalanan</h2>
          <p className="section-support">
            Enam orang, satu bus, satu buku catatan. Ini kartu perjalanan {site.group}.
          </p>
        </div>

        <ul className="crew-grid">
          {crew.map((member, index) => (
            <li className={`passport ${index % 2 === 1 ? "passport--alt" : ""}`} key={member.nim}>
              <div className="passport-photo" aria-hidden="true">
                <span data-initials={member.initials} />
              </div>

              <div className="passport-name">
                <h3>{member.name}</h3>
                <p>NIM {member.nim}</p>
                <p className="passport-card-label">Paspor KKL · Grup 6</p>
              </div>

              <dl className="passport-fields">
                <div>
                  <dt>Peran</dt>
                  <dd>{member.role}</dd>
                </div>
                <div>
                  <dt>Kursi</dt>
                  <dd>{member.seat}</dd>
                </div>
              </dl>

              <span className="passport-stamp" aria-hidden="true" data-stamp="BALI|2026" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
