import Link from "next/link";
import { site } from "@/data/trip";

export function DownloadCta() {
  return (
    <section className="section cta-section" id="laporan" aria-labelledby="cta-title">
      <div className="wrap cta-grid">
        <div className="cta-note">
          <p>
            Laporan final masih dalam proses persetujuan dosen pembimbing. Sementara itu, seluruh
            cerita perjalanan bisa dibaca langsung di jurnal ini.
          </p>
          <p className="cta-note__small">
            Lima hari, dua kunjungan industri, dan satu rute yang sama dengan halaman per hari.
          </p>
        </div>

        <article className="reply-card">
          <h2 id="cta-title">Bawa pulang jurnalnya.</h2>
          <p>
            PDF ringkasan sedang disiapkan. Setelah laporan disetujui, tautan unduhan akan aktif di
            halaman status laporan.
          </p>
          <Link className="btn btn--ink" href={site.reportUrl}>
            Lihat status laporan
          </Link>
          <p className="reply-card__meta">Laporan PDF · segera hadir</p>
        </article>
      </div>
    </section>
  );
}
