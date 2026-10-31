import Link from "next/link";
import { photos, site } from "@/data/trip";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-frame">
        <svg className="postcard-scallop" viewBox="0 0 1200 32" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 32 L0 16 A50 16 0 0 0 100 16 A50 16 0 0 0 200 16 A50 16 0 0 0 300 16 A50 16 0 0 0 400 16 A50 16 0 0 0 500 16 A50 16 0 0 0 600 16 A50 16 0 0 0 700 16 A50 16 0 0 0 800 16 A50 16 0 0 0 900 16 A50 16 0 0 0 1000 16 A50 16 0 0 0 1100 16 A50 16 0 0 0 1200 16 L1200 32 Z" />
        </svg>

        <div className="postcard">
          <div className="postcard-main">
            <div className="postcard-message">
              <p className="postcard-signoff">Sampai jumpa lagi.</p>
              <p>
                Terima kasih sudah membaca jurnal kami. Lima hari di Bali terasa singkat, tetapi
                catatan, foto, dan ceritanya masih tinggal di sini.
              </p>
              <p className="postcard-credit">
                {site.group} · {site.programme}
                <br />
                {site.dates}
              </p>
            </div>

            <div className="postcard-address">
              <div className="postcard-stamp" aria-hidden="true">
                <img
                  src={photos.ulunDanu.src}
                  width={photos.ulunDanu.width}
                  height={photos.ulunDanu.height}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <address>
                <a href="https://upgris.ac.id" target="_blank" rel="noreferrer">
                  Universitas PGRI Semarang
                </a>
                <span>Fakultas Teknik, Prodi Informatika</span>
                <span>Jl. Sidodadi Timur No. 24, Semarang</span>
                <Link href="/#tentang">Tentang jurnal ini</Link>
              </address>
            </div>
          </div>

          <p className="postcard-imprint">
            © 2026 {site.group}, {site.programme}. Situs ini dibuat sebagai dokumentasi KKL.
          </p>
        </div>

        <details className="photo-credits">
          <summary>Sumber foto &amp; lisensi</summary>
          <ul>
            {Object.entries(photos).map(([key, photo]) => (
              <li key={key}>
                <a href={photo.page} target="_blank" rel="noreferrer">
                  {photo.title}
                </a>{" "}
                oleh {photo.creator}, {photo.license}, via Wikimedia Commons.{" "}
                <a href={photo.licenseUrl} target="_blank" rel="noreferrer">
                  Lisensi
                </a>
              </li>
            ))}
          </ul>
          <p>
            Foto di atas adalah foto tempat dari arsip terbuka, bukan dokumentasi kelompok. Foto
            dokumentasi Kelompok 6 ditampilkan di galeri.
          </p>
        </details>
      </div>
    </footer>
  );
}
