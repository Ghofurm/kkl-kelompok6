import { site } from "@/data/trip";

export function About() {
  return (
    <section className="section about" id="tentang" aria-labelledby="about-title">
      <div className="about-frame" data-reveal>
        <div className="letter-sheet">
          <div className="letter-head" data-reveal-item style={{ "--i": 0 } as React.CSSProperties}>
            <span className="letter-avatar" aria-hidden="true" data-initials="K6" />
            <span className="letter-stamp" aria-hidden="true" data-stamp="KKL|BALI|2026" />
          </div>

          <h2 id="about-title" data-reveal-item style={{ "--i": 1 } as React.CSSProperties}>
            Surat dari Semarang
          </h2>

          <div className="letter-body">
            <p data-reveal-item style={{ "--i": 2 } as React.CSSProperties}>
              Kami berangkat dari Kampus 1 UPGRIS pada Selasa pagi, 18 Agustus 2026. Lima hari, satu
              bus, dan satu tujuan yang sudah lama kami tulis di papan kelas: Bali.
            </p>
            <p data-reveal-item style={{ "--i": 3 } as React.CSSProperties}>
              Perjalanan ini bukan hanya soal tempat yang dikunjungi. Ada{" "}
              <mark>dua kunjungan industri</mark> yang menjadi inti KKL: PT Victoria Care Indonesia
              di Semarang dan Balai Diklat Industri Denpasar. Di sana kami melihat bagaimana
              pengetahuan informatika bertemu dengan lantai produksi, data, dan orang-orang yang
              bekerja di dalamnya.
            </p>
            <p data-reveal-item style={{ "--i": 4 } as React.CSSProperties}>
              Di antara kedua kunjungan itu, kami menyeberangi Selat Bali, berhenti di pura dan
              pantai, menonton Kecak, dan makan malam bersama di Jimbaran. Semua kami catat di sini,
              lengkap dengan peta, foto, dan hal-hal kecil yang tidak masuk ke laporan resmi.
            </p>
            <p data-reveal-item style={{ "--i": 5 } as React.CSSProperties}>
              Jurnal ini kami susun sebagai kenang-kenangan, sekaligus jawaban atas pertanyaan
              sederhana: apa yang kami bawa pulang dari Bali selain oleh-oleh?
            </p>
          </div>

          <div className="letter-sign" data-reveal-item style={{ "--i": 6 } as React.CSSProperties}>
            <p className="letter-sign-name">{site.group}</p>
            <p className="letter-sign-role">{site.programme}</p>
          </div>

          <div className="letter-tear" data-reveal-item style={{ "--i": 7 } as React.CSSProperties}>
            <span>{site.dates}</span>
            <span>Semarang → Bali</span>
            <span>23 pemberhentian</span>
          </div>
        </div>
      </div>
    </section>
  );
}
