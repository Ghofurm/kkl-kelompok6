import { site } from "@/data/trip";

export function DownloadCta() {
  return (
    <section className="section cta-section" id="laporan" aria-labelledby="cta-title">
      <div className="wrap cta-grid">
        <div className="cta-note">
          <p>
            Kalau kamu butuh versi yang bisa dibaca tanpa sinyal, kami sudah merangkum perjalanan ini
            dalam satu berkas.
          </p>
          <p className="cta-note__small">
            Lima hari, dua kunjungan industri, dan satu rute yang sama dengan peta di atas.
          </p>
        </div>

        <article className="reply-card">
          <h2 id="cta-title">Bawa pulang jurnalnya.</h2>
          <p>
            Unduh ringkasan perjalanan dalam format PDF. Cocok untuk dibaca di perjalanan atau
            dilampirkan ke laporan KKL.
          </p>
          <a className="btn btn--ink" href={site.reportUrl} download>
            Unduh laporan
          </a>
          <p className="reply-card__meta">PDF ringkasan · {site.group}</p>
        </article>
      </div>
    </section>
  );
}
