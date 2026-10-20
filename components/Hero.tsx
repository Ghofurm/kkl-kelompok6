import Link from "next/link";
import { heroHeadline, photos, site } from "@/data/trip";

const imageStack = [
  { photo: photos.ulunDanu, position: "center 55%" },
  { photo: photos.kutaSunset, position: "center 55%" },
  { photo: photos.nusaDua, position: "center 60%" },
];

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid">
        <article className="ticket">
          <div className="ticket-stripe" aria-hidden="true">
            {Array.from({ length: 26 }).map((_, index) => (
              <span key={index} />
            ))}
          </div>

          <div className="ticket-main">
            <h1 id="hero-title" className="hero-title">
              <span className="line">
                <span className="line-inner">{heroHeadline.line1}</span>
              </span>
              <span className="line">
                <span className="line-inner">{heroHeadline.line2}</span>
              </span>
            </h1>

            <span className="ticket-stamp" aria-hidden="true">
              Jalur
              <br />
              darat
              <br />
              2026
            </span>

            <p className="hero-lead hero-load" style={{ "--d": "360ms" } as React.CSSProperties}>
              Jurnal Kuliah Kerja Lapangan Prodi Informatika UPGRIS, dari Semarang ke Bali, 18–22
              Agustus 2026.
            </p>

            <div className="hero-actions hero-load" style={{ "--d": "440ms" } as React.CSSProperties}>
              <a className="btn" href="#perjalanan">
                Mulai perjalanan
              </a>
              <a className="text-link" href="#galeri">
                Lihat galeri
              </a>
            </div>

            <div className="ticket-route" aria-hidden="true">
              <span>Semarang</span>
              <i />
              <span>Ketapang</span>
              <i />
              <span>Gilimanuk</span>
              <i />
              <span>Denpasar</span>
            </div>

            <div className="ticket-perforation" aria-hidden="true" />

            <dl className="ticket-stub hero-load" style={{ "--d": "520ms" } as React.CSSProperties}>
              <div>
                <dt>Dari</dt>
                <dd>Semarang</dd>
              </div>
              <div>
                <dt>Ke</dt>
                <dd>Denpasar</dd>
              </div>
              <div>
                <dt>Berangkat</dt>
                <dd>18 Agustus 2026</dd>
              </div>
              <div>
                <dt>Kembali</dt>
                <dd>22 Agustus 2026</dd>
              </div>
              <div>
                <dt>Rombongan</dt>
                <dd>{site.group}</dd>
              </div>
              <div>
                <dt>Moda</dt>
                <dd>Bus &amp; feri</dd>
              </div>
            </dl>

            <div className="ticket-foot hero-load" style={{ "--d": "600ms" } as React.CSSProperties}>
              <span>Lima hari</span>
              <span>Dua kunjungan industri</span>
              <span>Dua zona waktu</span>
            </div>
          </div>
        </article>

        <figure className="hero-plate">
          {imageStack.map((item, index) => (
            <img
              key={item.photo.src}
              className="hero-plate__image"
              style={{ "--slide": index, objectPosition: item.position } as React.CSSProperties}
              src={item.photo.src}
              width={item.photo.width}
              height={item.photo.height}
              alt={index === 0 ? item.photo.alt : ""}
              fetchPriority={index === 0 ? "high" : "auto"}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          ))}
          <figcaption className="hero-plate__caption">
            <span>Pura Ulun Danu Beratan, Pantai Kuta, Nusa Dua.</span>
            <span>Foto tempat oleh Wikimedia Commons, bukan foto kelompok.</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
