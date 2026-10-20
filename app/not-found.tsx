import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="wrap not-found__inner">
        <h1>404. Halaman ini tidak ada di peta.</h1>
        <p>
          Mungkin tautannya berubah, atau halaman ini belum kami tulis. Kembali ke jurnal untuk
          melihat rute lima hari.
        </p>
        <Link className="btn" href="/">
          Kembali ke jurnal
        </Link>
      </div>
    </section>
  );
}
