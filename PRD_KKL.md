# PRD — Website Laporan KKL "Bali Trip Journal"

> Dokumen ini adalah panduan tingkat tinggi untuk AI agent. Detail teknis kecil (nama komponen, struktur folder, warna persis, dsb.) **diserahkan ke keputusan agent**, selama tetap sejalan dengan tujuan dan prinsip di bawah.

---

## 1. Ringkasan

Website laporan dan dokumentasi perjalanan **Kuliah Kerja Lapangan (KKL) Prodi Teknik Informatika UPGRIS ke Bali**. Website ini bukan sekadar daftar foto dan teks, tapi **buku harian perjalanan digital** yang terasa seperti membuka album liburan: hangat, penuh warna, interaktif, dan seru dijelajahi.

**Referensi (hanya untuk isi/struktur konten):** https://kkl-two.vercel.app/
Referensi tersebut dinilai terlalu simpel dan flat. Ambil **struktur kontennya saja** (hero, tentang, daftar kunjungan per tanggal, detail tempat, anggota, tombol unduh laporan), lalu **tingkatkan total tampilan dan pengalamannya**. Jadwal dan destinasi yang berlaku adalah **jadwal resmi KKL 18–22 Agustus 2026** (lihat Bagian 6), bukan jadwal website referensi.

## 2. Tujuan

1. Memenuhi tugas KKL: mendokumentasikan kegiatan, pengalaman, dan ilmu yang didapat.
2. Memberi kesan pertama yang "wow" kepada dosen dan pembaca.
3. Menunjukkan kemampuan frontend mahasiswa Informatika lewat desain dan interaksi yang matang.
4. Gratis dan mudah di-deploy (Vercel).

## 3. Target Pengguna

- Dosen pembimbing / penilai
- Teman sekelas dan mahasiswa lain
- Pengunjung umum (sering dibuka lewat **HP**, jadi mobile-first)

## 4. Konsep & Nuansa Desain

**Tema: "Vacation / Travel Journal".** Bayangkan kombinasi boarding pass, kartu pos, foto polaroid, dan peta petualangan.

**Kesan yang dicari:**
- Cerah, tropis, hangat (nuansa Bali: laut, sunset, pura, daun tropis)
- Playful tapi tetap rapi dan terbaca
- Terasa seperti *bercerita*, bukan sekadar dokumen

**Ide elemen visual (agent bebas memilih dan mengkombinasikan):**
- Hero bergaya **boarding pass / tiket pesawat** Semarang → Bali
- Foto bergaya **polaroid** dan **kartu pos**, sedikit miring dan bertumpuk
- **Peta / jalur perjalanan** yang tergambar saat di-scroll
- Tekstur kertas, stiker, stamp/cap paspor, ilustrasi tropis (SVG ringan)
- Gradien langit sunset, gelombang laut sebagai pemisah antar-section
- Tipografi ekspresif (kombinasi font display yang berkarakter + font body yang bersih)

**Hindari:** tampilan template generik, layout kotak-kotak datar, dan warna default.

## 5. Struktur Halaman & Fitur

### A. Halaman Utama (satu halaman, scroll storytelling)

| Section | Isi & Gambaran |
|---|---|
| **Hero** | Judul besar + tema liburan, info **18–22 Agustus 2026**, rute Semarang → Bali, gaya boarding pass, animasi masuk yang memikat, tombol "Mulai Perjalanan" |
| **Tentang Perjalanan** | Penjelasan singkat KKL, tujuan, dan ringkasan angka (jumlah hari, jumlah destinasi, jumlah peserta) dengan animasi hitung |
| **Itinerary / Timeline** | Perjalanan dibagi **5 hari** (Day 1–5), tiap hari berisi daftar pemberhentian dalam bentuk kartu. Dilengkapi jalur peta Jawa → Bali (termasuk penyeberangan Ketapang–Gilimanuk) yang "tergambar" saat scroll |
| **Highlight Kunjungan Industri** | Bagian khusus **PT Victoria Care Indonesia** dan **Balai Diklat Industri Denpasar** agar nilai akademiknya menonjol, bukan hanya wisata |
| **Galeri** | Kumpulan foto bergaya polaroid, bisa difilter per destinasi/hari, dan dibuka dalam lightbox |
| **Crew / Anggota** | Anggota ditampilkan seperti **kartu paspor / ID traveler** (foto, nama, NIM) |
| **Unduh Laporan** | Call-to-action jelas menuju file laporan (link eksternal) |
| **Footer** | Kredit kelompok, UPGRIS, penutup bernuansa "sampai jumpa di perjalanan berikutnya" |

### B. Halaman Detail Destinasi

Satu halaman untuk tiap destinasi utama (terutama kunjungan industri dan wisata unggulan; pemberhentian kecil seperti rumah makan cukup tampil di timeline), berisi:
- Foto utama besar + judul + tanggal/hari
- Cerita singkat dan kesan/pembelajaran
- Galeri foto khusus destinasi
- Navigasi "destinasi sebelumnya / berikutnya" agar terasa seperti membalik halaman jurnal

### C. Fitur Pendukung

- **Navigasi** yang ringan dan konsisten (mobile friendly)
- **Mode terang/gelap** bertema "siang pantai" dan "malam Bali" *(nilai tambah, opsional)*
- **Animasi scroll** yang halus dan tidak mengganggu performa
- **Musik/ambience latar** dengan tombol on/off, default mati *(opsional)*
- **Preload / intro screen** singkat bertema pesawat atau koper *(opsional)*

## 6. Konten

### Jadwal Perjalanan (sumber utama: jadwal resmi UPGRI Tour & Travel)

**KKL Bali Prodi Informatika — 18–22 Agustus 2026** (5 hari, melintasi dua zona waktu: WIB dan WITA)

| Hari | Tanggal | Fokus | Pemberhentian Utama |
|---|---|---|---|
| **Day 1** | Selasa, 18 Agustus | Berangkat dari Semarang & kunjungan industri | Kampus 1 UPGRIS, **PT Victoria Care Indonesia**, RM Titin (Caruban), RM Puritama, Pelabuhan Ketapang |
| **Day 2** | Rabu, 19 Agustus | Menyeberang ke Bali & wisata budaya | Pelabuhan Gilimanuk, Hotel Made Bali, **Joger Luwus**, **Candi Kuning / Ulun Danu Beratan**, Dewata Oleh-oleh, **Devdan Show (Nusa Dua)**, Hotel Quest San Denpasar |
| **Day 3** | Kamis, 20 Agustus | Kunjungan industri & pantai (hari terpadat) | **Balai Diklat Industri Denpasar**, Krisna Oleh-oleh, **Pantai Kuta**, **Pantai Pandawa**, **Tari Kecak**, Cafe "Tepi Pantai" Jimbaran (dinner + makrab) |
| **Day 4** | Jumat, 21 Agustus | Belanja & perjalanan pulang | Karang Kurnia Oleh-oleh, RM Soka Indah, Gilimanuk → Ketapang, Local Resto |
| **Day 5** | Sabtu, 22 Agustus | Tiba kembali | Kampus UPGRIS |

**Catatan konten:**
- **Dua kunjungan industri** (PT Victoria Care Indonesia dan Balai Diklat Industri Denpasar) adalah inti akademik KKL; beri porsi cerita dan tampilan yang lebih menonjol dibanding destinasi wisata.
- **Hari 1 dan Hari 4 didominasi perjalanan darat dan penyeberangan**; manfaatkan sebagai bagian cerita "road trip" (jalur peta, tempat makan, momen di bus/kapal), bukan dianggap kosong.
- **Momen spesial** yang layak dapat treatment visual sendiri: Devdan Show, Tari Kecak di Pandawa, dan makrab di Jimbaran.
- Tiap hari boleh punya **tema/warna sendiri** (misalnya Day 2 = hijau pegunungan & pura, Day 3 = biru pantai → oranye sunset, Day 4–5 = nuansa pulang).
- Jadwal resmi disebut dapat berubah sesuai kondisi lapangan, jadi **realisasi akhir (tempat, jam, urutan) disesuaikan oleh tim berdasarkan kejadian sebenarnya**. Beberapa penulisan nama di jadwal kemungkinan typo (misalnya "Hotel Quest San" dan "Karang Kurnia"), jadi pastikan ejaan nama tempat sebelum dipakai di website.
- **Data anggota (nama, NIM, foto), foto dokumentasi, dan teks cerita diisi sendiri oleh kelompok.** Jangan menyalin aset dari website referensi.
- Semua konten disimpan sebagai **data terpisah (JSON/TS)** agar mudah diedit tanpa menyentuh tampilan.
- Foto harus dioptimasi (ukuran ringan, lazy loading).

## 7. Rekomendasi Tech Stack

**Pilihan utama: Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion**

Alasan:
- Deploy ke **Vercel gratis** paling mulus (dibuat oleh tim yang sama)
- Cocok untuk **frontend murni**; bisa dibuat statis (static export) tanpa server
- Routing halaman detail destinasi mudah
- Tailwind mempercepat styling; Framer Motion untuk animasi yang halus
- Dokumentasi dan contoh sangat banyak, sehingga AI agent mudah dan jarang salah

**Pendukung (opsional, pilih seperlunya):**
- Lenis (smooth scroll)
- GSAP / ScrollTrigger (jika butuh animasi scroll yang lebih kompleks)
- Lightbox ringan untuk galeri
- Font dari Google Fonts (via `next/font`)

**Backend:** tidak ada. Jika perlu fitur kecil (misal buku tamu atau form kesan-pesan), gunakan layanan pihak ketiga yang gratis dan simpel (misalnya Formspree atau Google Form yang di-embed). Fitur ini opsional.

## 8. Persyaratan Non-Fungsional

- **Mobile-first & responsif** di semua ukuran layar
- **Performa baik**: gambar dioptimasi, animasi tidak berat di HP kelas menengah
- **Aksesibilitas dasar**: kontras cukup, alt text pada foto, hormati pengaturan "reduce motion"
- **SEO dasar**: judul, deskripsi, dan gambar preview saat dibagikan (Open Graph)
- **Gratis sepenuhnya**: hosting Vercel (free tier), tanpa layanan berbayar

## 9. Tahapan Pengerjaan (Saran Urutan)

1. **Fondasi** — setup project, tema warna & font, struktur data konten
2. **Halaman utama** — hero, tentang, timeline/itinerary
3. **Halaman detail destinasi** — template satu halaman yang dipakai semua destinasi
4. **Galeri & anggota** — polaroid gallery, lightbox, kartu crew
5. **Polesan** — animasi, transisi antar-halaman, mode gelap, elemen opsional
6. **Optimasi & deploy** — cek performa mobile, SEO dasar, deploy ke Vercel

## 10. Kriteria Berhasil

- Pengunjung langsung merasakan nuansa **liburan/travel journal** dalam beberapa detik pertama
- Tampilan jelas **berbeda dan jauh lebih berkesan** dari website referensi
- Semua destinasi dapat dibuka dan dibaca dengan nyaman di HP
- Menambah/mengubah destinasi cukup dengan mengedit file data
- Berhasil online di Vercel tanpa biaya

## 11. Di Luar Cakupan

- Sistem login / akun pengguna
- Database dan backend kompleks
- CMS atau panel admin
