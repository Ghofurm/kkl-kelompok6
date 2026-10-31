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
- `crew` — nama, NPM, dan inisial anggota.
- `gallery` — foto dokumentasi kelompok dan foto arsip terbuka, lengkap dengan hari dan penempatannya.
- `photos` — sumber, ukuran, alt text, dan kredit setiap foto.
- `site` — judul, deskripsi, tautan PDF laporan, dan metadata kelompok.

Setelah mengubah data, halaman dan sitemap ikut berubah. Halaman per hari dibuat otomatis dari `days`; untuk menambah destinasi baru, tambahkan objek di `destinations` dan `generateStaticParams` akan membuat halamannya otomatis.

### Yang perlu diganti sebelum dipublikasikan

1. **Teks cerita dan catatan lapangan** ditulis sebagai contoh dari jadwal. Ganti dengan pengalaman kelompok yang sebenarnya.
2. **PDF laporan** di `public/laporan/ringkasan-kkl-kelompok-6.pdf` adalah ringkasan yang dibuat dari data situs. Ganti dengan laporan resmi kelompok atau perbarui lewat `scripts/build-report.mjs`. Selama laporan belum di-ACC, `site.reportUrl` diarahkan ke halaman `/laporan/`; setelah disetujui, kembalikan nilainya ke path PDF tersebut.
3. **Foto dokumentasi kelompok** sudah tersedia untuk sebagian hari di `public/images/dokumentasi/`. Foto tempat lain masih berasal dari Wikimedia Commons dan dicatat di `assets/credits.json`. Tambahkan foto kelompok untuk hari yang belum tercakup jika tersedia.
4. **Ejaan nama tempat** seperti "Hotel Quest San Denpasar" dan "Karang Kurnia" perlu dicek ke jadwal resmi.
5. **URL produksi**: set `NEXT_PUBLIC_SITE_URL` (mis. `https://nama-situs.vercel.app`) agar metadata Open Graph, sitemap, dan robots memakai alamat yang benar.

## Foto

Foto tempat diunduh dari Wikimedia Commons dengan lisensi CC BY, CC BY-SA, atau CC0. Setiap foto arsip terbuka dicatat di `assets/credits.json`; daftar kredit ditampilkan di footer situs. Foto-foto ini bukan dokumentasi kegiatan kelompok dan tidak boleh dipresentasikan sebagai foto kelompok.

Foto dokumentasi kelompok disimpan terpisah di `public/images/dokumentasi/` dan dipakai apa adanya tanpa crop atau resize. Kredit foto kelompok ditampilkan sebagai “Foto: Kelompok 6” di lightbox, sedangkan foto arsip terbuka tetap mencantumkan kreator dan lisensinya.

Foto tempat yang dipakai disimpan sebagai WebP di `public/images/` dan dimuat secara lazy, kecuali foto hero.

### Menambah foto galeri

Untuk foto dokumentasi kelompok, tambahkan berkas ke `public/images/dokumentasi/`, lalu tambahkan entri di `gallery` dengan `document: { src, width, height, alt }`. Untuk foto dari arsip terbuka, gunakan `photo` dengan key yang sudah ada di `photos`.

### Foto profil anggota

Foto profil disimpan terpisah di `public/images/crew/`. Beri nama file sesuai NPM anggota, misalnya `24670008.webp`. Format yang didukung: `.webp`, `.jpg`, `.jpeg`, `.png`, dan `.avif`.

Foto dibaca otomatis saat build. Anggota yang belum punya file foto tetap tampil dengan inisial, jadi menambah atau menghapus foto cukup dengan menaruh atau menghapus file di folder tersebut tanpa mengubah kode. Foto tidak perlu dipotong manual: bingkai kartu memakai rasio potret 9:16 (16:9 tegak), dan foto bentuk apa pun akan mengisi bingkai dengan `object-fit: cover`.

## Struktur

```
app/                  halaman utama, menu & detail hari, detail destinasi, 404, sitemap, robots
components/           bagian halaman dan komponen interaktif
data/trip.ts          seluruh konten perjalanan
lib/crew-photos.ts    pembaca otomatis foto profil anggota
public/images/        foto tempat WebP
public/images/crew/   foto profil anggota (nama file = NPM)
public/images/dokumentasi/  foto dokumentasi kelompok untuk galeri
public/laporan/       PDF ringkasan
scripts/              pembuat PDF ringkasan
assets/credits.json   catatan sumber foto
```

## Catatan desain

Arah visual: halaman sebagai benda cetak perjalanan. Tiket, lembar manifest, berkas kunjungan, kartu paspor, dan kartu pos menjadi bahasa halaman. Palet hijau-hitam, tulang, dan jade; typeface Literata. Tema terang mengikuti nuansa "siang pantai"; tema gelap adalah "malam Bali". Alur perjalanan dibuka lewat menu Hari 1–5 di halaman utama, lalu setiap hari punya halaman rangkuman sendiri. Galeri punya filter dan lightbox.
