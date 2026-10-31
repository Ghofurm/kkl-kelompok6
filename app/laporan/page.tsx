import type { Metadata } from "next";
import Link from "next/link";
import { Motion } from "@/components/Motion";
import { site } from "@/data/trip";

export const metadata: Metadata = {
  title: "Laporan segera hadir",
  description: "Ringkasan laporan KKL sedang menunggu persetujuan dosen pembimbing.",
  robots: { index: false, follow: true },
};

export default function ReportPage() {
  return (
    <>
      <Motion />
      <section className="section report-soon" aria-labelledby="report-title">
        <div className="wrap report-soon__inner">
          <article className="report-soon__card" data-reveal>
            <h1 id="report-title" data-reveal-item style={{ "--i": 0 } as React.CSSProperties}>
              Laporan segera hadir.
            </h1>
            <p data-reveal-item style={{ "--i": 1 } as React.CSSProperties}>
              Ringkasan perjalanan sedang menunggu persetujuan dosen pembimbing. Setelah laporan
              final siap, halaman ini akan menjadi pintu unduhannya.
            </p>
            <p className="report-soon__meta" data-reveal-item style={{ "--i": 2 } as React.CSSProperties}>
              {site.group} · {site.programme}
              <br />
              {site.dates}
            </p>
            <Link className="btn btn--ink" href="/" data-reveal-item style={{ "--i": 3 } as React.CSSProperties}>
              Kembali ke jurnal
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
