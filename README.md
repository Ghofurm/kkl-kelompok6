# Bali Trip Journal

Situs laporan dan dokumentasi KKL Prodi Informatika UPGRIS ke Bali, 18–22 Agustus 2026. Dibuat dengan Next.js App Router, TypeScript, dan CSS tokens. Tidak ada backend; hasil build berupa situs statis.

## Jalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

```bash
npm run build
npm run preview
```

Karena `output: "export"` di `next.config.ts`, hasil build ada di `out/` dan bisa diunggah ke hosting statis mana pun. `npm run preview` menyajikan folder itu di `http://localhost:3001`. Di Vercel, cukup impor repositori ini; pengaturan build sudah terdeteksi otomatis.

## Mengedit konten

Semua konten perjalanan ada di satu berkas: `data/trip.ts`.

- `days` — jadwal lima hari dan semua pemberhentian.
- `destinations` — halaman detail destinasi (slug, cerita, catatan, foto/drawing).
- `crew` — nama, NIM, peran, dan kursi anggota.
- `gallery` — foto yang muncul di galeri dan di halaman detail.
- `photos` — sumber, ukuran, alt text, dan kredit setiap foto.
- `site` — judul, deskripsi, tautan PDF laporan, dan metadata kelompok.

Setelah mengubah data, halaman dan sitemap ikut berubah. Halaman per hari dibuat otomatis dari `days`; untuk menambah destinasi baru, tambahkan objek di `destinations` dan `generateStaticParams` akan membuat halamannya otomatis.

### Yang perlu diganti sebelum dipublikasikan

1. **Nama dan NIM anggota** di `crew` masih data contoh. Ganti dengan data sebenarnya.
2. **Teks cerita dan catatan lapangan** ditulis sebagai contoh dari jadwal. Ganti dengan pengalaman kelompok yang sebenarnya.
3. **PDF laporan** di `public/laporan/ringkasan-kkl-kelompok-6.pdf` adalah ringkasan yang dibuat dari data situs. Ganti dengan laporan resmi kelompok atau perbarui lewat `scripts/build-report.mjs`.
4. **Foto dokumentasi kelompok** belum ada. Foto saat ini adalah foto tempat dari Wikimedia Commons; kreditnya ada di footer dan di `assets/credits.json`. Ganti dengan foto kelompok jika sudah tersedia, lalu perbarui `photos` dan kredit.
5. **Ejaan nama tempat** seperti "Hotel Quest San Denpasar" dan "Karang Kurnia" perlu dicek ke jadwal resmi.
6. **URL produksi**: set `NEXT_PUBLIC_SITE_URL` (mis. `https://nama-situs.vercel.app`) agar metadata Open Graph, sitemap, dan robots memakai alamat yang benar.

## Foto

Foto tempat diunduh dari Wikimedia Commons dengan lisensi CC BY, CC BY-SA, atau CC0. Setiap foto dicatat di `assets/credits.json`; daftar kredit ditampilkan di footer situs. Foto-foto ini bukan dokumentasi kegiatan kelompok dan tidak boleh dipresentasikan sebagai foto kelompok.

Foto yang dipakai disimpan sebagai WebP di `public/images/` dan dimuat secara lazy, kecuali foto hero.

## Struktur

```
app/                 halaman utama, menu & detail hari, detail destinasi, 404, sitemap, robots
components/          bagian halaman dan komponen interaktif
data/trip.ts         seluruh konten perjalanan
public/images/       foto WebP
public/laporan/      PDF ringkasan
scripts/             pembuat PDF ringkasan
assets/credits.json  catatan sumber foto
```

## Catatan desain

Arah visual: halaman sebagai benda cetak perjalanan. Tiket, lembar manifest, berkas kunjungan, kartu paspor, dan kartu pos menjadi bahasa halaman. Palet hijau-hitam, tulang, dan jade; typeface Literata. Tema terang mengikuti nuansa "siang pantai"; tema gelap adalah "malam Bali". Alur perjalanan dibuka lewat menu Hari 1–5 di halaman utama, lalu setiap hari punya halaman rangkuman sendiri. Galeri punya filter dan lightbox.
