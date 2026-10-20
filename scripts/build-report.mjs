import { writeFileSync, mkdirSync } from "node:fs";
import { days, destinations, crew, photos, site } from "../data/trip.ts";

const industry = destinations.filter((item) => item.category === "Kunjungan industri");

const coverPhotos = [
  { src: "/laporan/img/ulun.webp", alt: photos.ulunDanu.alt },
  { src: "/laporan/img/kuta.webp", alt: photos.kutaSunset.alt },
  { src: "/laporan/img/pandawa.webp", alt: photos.pandawa.alt },
];

const stopRow = (stop) => `
  <li>
    <span class="stop-name">${stop.name}</span>
    <span class="stop-kind">${stop.kind}</span>
    <span class="stop-note">${stop.note}</span>
  </li>`;

const dayBlock = (day) => `
  <section class="day">
    <div class="day-head">
      <span class="day-number">Hari ${day.id}</span>
      <span class="day-date">${day.weekday}, ${day.date}</span>
    </div>
    <h3>${day.focus}</h3>
    <p class="summary">${day.summary}</p>
    <ol>${day.stops.map(stopRow).join("")}</ol>
  </section>`;

const industryBlock = (item) => `
  <section class="industry">
    <p class="kicker">${item.category} · Hari ${item.day}</p>
    <h3>${item.name}</h3>
    <p>${item.lead}</p>
    <dl>
      ${item.notes.map((note) => `<div><dt>${note.label}</dt><dd>${note.text}</dd></div>`).join("")}
    </dl>
  </section>`;

const crewRows = crew
  .map(
    (member) =>
      `<tr><td>${member.name}</td><td>${member.nim}</td><td>${member.role}</td><td>${member.seat}</td></tr>`,
  )
  .join("");

const creditRows = Object.values(photos)
  .map(
    (photo) =>
      `<li>${photo.title}. Foto: ${photo.creator}, ${photo.license}, via Wikimedia Commons.</li>`,
  )
  .join("");

const html = `<!doctype html>
<html lang="id">
<head>
<meta charset="utf-8">
<title>Ringkasan Perjalanan KKL Kelompok 6</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Literata:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
<style>
  @page { size: A4; margin: 14mm 14mm 16mm; }
  * { box-sizing: border-box; }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { margin: 0; font-family: Literata, Georgia, serif; color: #18221e; background: #e9e2d0; font-size: 9.5pt; line-height: 1.5; }
  h1, h2, h3, p { margin: 0; }
  h1 { font-size: 38pt; line-height: 0.98; letter-spacing: -0.04em; font-weight: 500; }
  h2 { font-size: 22pt; line-height: 1.05; letter-spacing: -0.03em; font-weight: 500; margin-bottom: 5mm; }
  h3 { font-size: 12pt; line-height: 1.25; font-weight: 600; }
  p { max-width: 110mm; }
  .page { page-break-after: always; }
  .page:last-child { page-break-after: auto; }
  .cover { background: #121917; color: #e9e2d0; padding: 0; min-height: 267mm; }
  .cover-inner { padding: 18mm 16mm 12mm; }
  .stripe { height: 9mm; display: flex; margin-bottom: 18mm; }
  .stripe i { flex: 1; background: #e9e2d0; }
  .stripe i:nth-child(even) { background: #121917; }
  .cover .kicker { font-size: 10pt; color: #bfd1c7; }
  .cover h1 { max-width: 150mm; margin-top: 5mm; }
  .cover .lead { margin-top: 7mm; max-width: 130mm; font-size: 12pt; line-height: 1.45; color: #e9e2d0; }
  .cover .route { margin-top: 9mm; display: flex; align-items: center; gap: 2mm; font-size: 9pt; color: #bfd1c7; }
  .cover .route i { flex: 1; height: 1mm; background: #bfd1c7; }
  .cover .meta { display: flex; gap: 10mm; margin-top: 5mm; font-size: 9pt; color: #bfd1c7; }
  .cover-photos { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2mm; margin-top: 16mm; }
  .cover-photos img { width: 100%; height: 62mm; object-fit: cover; display: block; }
  .cover .credit { margin-top: 3mm; font-size: 7pt; color: #9aa9a0; }
  .masthead { display: flex; justify-content: space-between; border-bottom: 1px solid #18221e; padding-bottom: 2.5mm; margin-bottom: 8mm; font-size: 8pt; }
  .masthead strong { font-weight: 600; }
  .intro { font-size: 10pt; max-width: 155mm; margin-bottom: 7mm; }
  .day { page-break-inside: avoid; margin-bottom: 7mm; }
  .day-head { display: flex; gap: 4mm; align-items: baseline; border-top: 1px solid #18221e; padding-top: 2.5mm; }
  .day-number { font-weight: 600; font-size: 10pt; }
  .day-date { color: #5f6b62; font-size: 8.5pt; }
  .day h3 { margin-top: 1.5mm; }
  .summary { color: #38433c; font-size: 9pt; margin-top: 1.5mm; max-width: 165mm; }
  .day ol { list-style: none; padding: 0; margin: 3mm 0 0; }
  .day li { display: grid; grid-template-columns: 1fr 26mm; column-gap: 4mm; padding: 1.2mm 0; }
  .stop-name { font-weight: 600; font-size: 9pt; }
  .stop-kind { text-align: right; color: #5f6b62; font-size: 7.5pt; }
  .stop-note { grid-column: 1 / 3; color: #38433c; font-size: 8pt; margin-top: 0.2mm; }
  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 8mm; }
  .industry { page-break-inside: avoid; margin-bottom: 6mm; }
  .industry .kicker { color: #5f6b62; font-size: 8pt; }
  .industry h3 { margin-top: 1mm; }
  .industry p { margin-top: 1.5mm; font-size: 9pt; }
  .industry dl { margin: 2.5mm 0 0; }
  .industry dl div { padding: 1mm 0; }
  .industry dt { color: #5f6b62; font-size: 7.5pt; }
  .industry dd { margin: 0.2mm 0 0; font-size: 8.5pt; }
  table { width: 100%; border-collapse: collapse; font-size: 8.5pt; margin-top: 3mm; }
  th, td { text-align: left; padding: 1.6mm 2mm; vertical-align: top; }
  th { border-bottom: 1px solid #18221e; font-size: 7.5pt; color: #5f6b62; }
  tr:nth-child(even) td { background: rgba(24, 34, 30, 0.055); }
  .credits { margin-top: 8mm; font-size: 7pt; line-height: 1.45; color: #5f6b62; }
  .credits ul { margin: 2mm 0 0; padding-left: 4mm; }
  .signoff { margin-top: 10mm; font-size: 16pt; font-style: italic; }
  .note { font-size: 8pt; color: #5f6b62; margin-top: 2mm; }
  .footer { position: fixed; bottom: 4mm; left: 14mm; right: 14mm; display: flex; justify-content: space-between; font-size: 7pt; color: #5f6b62; }
</style>
</head>
<body>

<section class="page cover">
  <div class="cover-inner">
    <div class="stripe">${Array.from({ length: 26 }).map(() => "<i></i>").join("")}</div>
    <p class="kicker">Laporan ringkas · KKL Informatika UPGRIS 2026</p>
    <h1>Bali, lima hari, satu jurnal.</h1>
    <p class="lead">Catatan perjalanan Kuliah Kerja Lapangan Prodi Informatika Universitas PGRI Semarang, dari Semarang ke Bali, 18–22 Agustus 2026.</p>
    <div class="route"><span>Semarang</span><i></i><span>Ketapang</span><i></i><span>Gilimanuk</span><i></i><span>Denpasar</span></div>
    <div class="meta"><span>5 hari</span><span>2 kunjungan industri</span><span>${site.group}</span><span>23 pemberhentian</span></div>
    <div class="cover-photos">${coverPhotos.map((photo) => `<img src="${photo.src}" alt="${photo.alt}">`).join("")}</div>
    <p class="credit">Foto tempat: Wikimedia Commons. Bukan dokumentasi kegiatan kelompok.</p>
  </div>
</section>

<section class="page">
  <div class="masthead"><strong>${site.title}</strong><span>Jadwal perjalanan · 1 dari 2</span></div>
  <h2>Jadwal lima hari</h2>
  <p class="intro">Ringkasan urutan pemberhentian berdasarkan jadwal resmi. Realisasi di lapangan dapat menyesuaikan kondisi perjalanan.</p>
  ${days.slice(0, 2).map(dayBlock).join("")}
</section>

<section class="page">
  <div class="masthead"><strong>${site.title}</strong><span>Jadwal perjalanan · 2 dari 2</span></div>
  <h2>Jadwal lima hari</h2>
  ${days.slice(2, 4).map(dayBlock).join("")}
  ${dayBlock(days[4])}
</section>

<section class="page">
  <div class="masthead"><strong>${site.title}</strong><span>Kunjungan industri &amp; kru</span></div>
  <h2>Dua ruang belajar</h2>
  <div class="two-col">
    ${industry.map(industryBlock).join("")}
  </div>
  <h2 style="margin-top:12mm">Kru perjalanan</h2>
  <table>
    <thead><tr><th>Nama</th><th>NIM</th><th>Peran</th><th>Kursi</th></tr></thead>
    <tbody>${crewRows}</tbody>
  </table>
  <p class="credit" style="margin-top:4mm">Nama dan NIM pada tabel adalah data contoh yang perlu diganti dengan data anggota sebenarnya.</p>

</section>

<section class="page">
  <div class="masthead"><strong>${site.title}</strong><span>Sumber foto</span></div>
  <h2>Sumber foto</h2>
  <p class="intro">Semua foto di situs dan ringkasan ini adalah foto tempat dari Wikimedia Commons, bukan dokumentasi kegiatan kelompok. Foto kegiatan akan ditambahkan setelah arsip kelompok selesai dipilih.</p>
  <div class="credits">
    <ul>${creditRows}</ul>
  </div>
  <div class="cover-photos" style="margin-top:12mm">${coverPhotos.map((photo) => `<img src="${photo.src}" alt="${photo.alt}" style="height:36mm">`).join("")}</div>
  <p class="signoff">Sampai jumpa di perjalanan berikutnya.</p>
  <p class="note">${site.group} · ${site.programme} · ${site.dates}</p>
</section>

</body>
</html>`;

mkdirSync("public/laporan", { recursive: true });
writeFileSync("public/laporan/sumber.html", html);
console.log("Wrote public/laporan/sumber.html");
