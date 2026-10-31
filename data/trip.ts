export type PhotoKey =
  | "ulunDanu"
  | "kutaSunset"
  | "kutaBeach"
  | "pandawa"
  | "kecak"
  | "jimbaran"
  | "semarang"
  | "ketapang"
  | "joger"
  | "rice"
  | "gilimanuk"
  | "nusaDua"
  | "semarangPelni"
  | "semarangKampung"
  | "kutaJerman"
  | "ulunSide";

export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  creator: string;
  license: string;
  licenseUrl: string;
  page: string;
};

export const photos: Record<PhotoKey, Photo> = {
  ulunDanu: {
    src: "/images/ulun-danu.webp",
    width: 1600,
    height: 1200,
    alt: "Pura Ulun Danu Beratan berdiri di tepi Danau Beratan, dengan payung upacara bergaris hijau dan putih.",
    title: "Pura Ulun Danu Beratan",
    creator: "Susan.wibowo",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    page: "https://commons.wikimedia.org/wiki/File:Pura_Ulun_Danu_Beratan.jpg",
  },
  kutaSunset: {
    src: "/images/kuta-sunset.webp",
    width: 1600,
    height: 1069,
    alt: "Matahari terbenam di Pantai Kuta, lima perahu nelayan mengapung di garis cakrawala.",
    title: "Sunset, Kuta, Bali, Indonesia, 20220825 1755 0879",
    creator: "Jakub Hałun",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    page: "https://commons.wikimedia.org/wiki/File:Sunset,_Kuta,_Bali,_Indonesia,_20220825_1755_0879.jpg",
  },
  kutaBeach: {
    src: "/images/kuta-beach.webp",
    width: 1600,
    height: 1069,
    alt: "Seorang pengunjung berjalan di pantai Kuta yang berkilau, dengan perahu nelayan di laut dan langit pucat.",
    title: "Kuta Beach, Bali, 20220825 1706 0864",
    creator: "Jakub Hałun",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    page: "https://commons.wikimedia.org/wiki/File:Kuta_Beach,_Bali,_20220825_1706_0864.jpg",
  },
  pandawa: {
    src: "/images/pandawa.webp",
    width: 1600,
    height: 900,
    alt: "Jalan berkelok menuju Pantai Pandawa di antara tebing kapur, dengan tulisan Pantai Pandawa di tepi pantai.",
    title: "Pandawa Beach, Kuta Selatan - Bali",
    creator: "Herryz",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    page: "https://commons.wikimedia.org/wiki/File:Pandawa_Beach,_Kuta_Selatan_-_Bali.jpg",
  },
  kecak: {
    src: "/images/kecak.webp",
    width: 1600,
    height: 1067,
    alt: "Puluhan penari Kecak duduk melingkar dengan kain kotak hitam dan putih, seorang pemimpin berpakaian putih di tengah.",
    title: "Kecak Dance I Bali",
    creator: "Rocky.sysy",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    page: "https://commons.wikimedia.org/wiki/File:Kecak_Dance_I_Bali.jpg",
  },
  jimbaran: {
    src: "/images/jimbaran.webp",
    width: 1600,
    height: 1200,
    alt: "Meja makan berlampu di pasir Pantai Jimbaran saat senja, dengan laut dan kapal di kejauhan.",
    title: "Jimbaran beach at sunset",
    creator: "Akmaie Ajam",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    page: "https://commons.wikimedia.org/wiki/File:Jimbaran_beach_at_sunset.jpg",
  },
  semarang: {
    src: "/images/semarang-kota-lama.webp",
    width: 1600,
    height: 1070,
    alt: "Tiga pejalan kaki menyusuri trotoar Kota Lama Semarang di antara bangunan kolonial bercat putih.",
    title: "Kota Lama Semarang 1",
    creator: "Ivuvisual",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    page: "https://commons.wikimedia.org/wiki/File:Kota_Lama_Semarang_1.jpg",
  },
  ketapang: {
    src: "/images/ketapang.webp",
    width: 1600,
    height: 1069,
    alt: "Kapal feri bersandar di Pelabuhan Ketapang dengan latar gunung dan langit biru.",
    title: "Ketapang Ferry Port, East Java, 20220821 1054 9794",
    creator: "Jakub Hałun",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    page: "https://commons.wikimedia.org/wiki/File:Ketapang_Ferry_Port,_East_Java,_20220821_1054_9794.jpg",
  },
  joger: {
    src: "/images/joger.webp",
    width: 1600,
    height: 1200,
    alt: "Papan nama Joger Pabrik Kata-Kata di atas area parkir di Luwus.",
    title: "Joger Pabrik Kata-Kata",
    creator: "Midori",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    page: "https://commons.wikimedia.org/wiki/File:Joger_Pabrik_Kata-Kata.jpg",
  },
  rice: {
    src: "/images/rice-terraces.webp",
    width: 1600,
    height: 1067,
    alt: "Sawah bertingkat berwarna hijau di lereng bukit Bali, dengan beberapa gubuk dan pohon kelapa.",
    title: "Bali, Rice fields, Rice terraces in East Bali, Indonesia",
    creator: "Vyacheslav Argenberg",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    page: "https://commons.wikimedia.org/wiki/File:Bali,_Rice_fields,_Rice_terraces_in_East_Bali,_Indonesia.jpg",
  },
  gilimanuk: {
    src: "/images/gilimanuk.webp",
    width: 1600,
    height: 1054,
    alt: "Dermaga feri berwarna biru, merah, dan kuning di Pelabuhan Gilimanuk, dengan gapura candi bentar di belakang.",
    title: "Gilimanuk Bali Indonesia Gilimanuk-Harbour-Ferry-terminal-01",
    creator: "CEphoto, Uwe Aranas",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    page: "https://commons.wikimedia.org/wiki/File:Gilimanuk_Bali_Indonesia_Gilimanuk-Harbour-Ferry-terminal-01.jpg",
  },
  semarangPelni: {
    src: "/images/semarang-pelni.webp",
    width: 1400,
    height: 1400,
    alt: "Bangunan putih Pelni di Kota Lama Semarang, dengan lampu jalan bergaya kolonial dan trotoar batu.",
    title: "Pelni (ex-KPM) Building, Semarang Old Town",
    creator: "Afrogindahood",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    page: "https://commons.wikimedia.org/wiki/File:Pelni_(ex-KPM)_Building,_Semarang_Old_Town.jpg",
  },
  semarangKampung: {
    src: "/images/semarang-kampung.webp",
    width: 1600,
    height: 1262,
    alt: "Deretan bangunan kolonial dan rumah berlapis seng di tepi kanal Kota Lama Semarang, dengan pantulan di air.",
    title: "Old Town Semarang Indonesia 2",
    creator: "Philip Nalangan",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    page: "https://commons.wikimedia.org/wiki/File:Old_Town_Semarang_Indonesia_2.jpg",
  },
  kutaJerman: {
    src: "/images/kuta-jerman.webp",
    width: 1600,
    height: 1069,
    alt: "Pantai Jerman di Kuta dengan air tenang, perahu nelayan, dan bebatuan karang di tepi.",
    title: "Jerman Beach, Kuta, Bali, Indonesia, 20220825 1329 0831",
    creator: "Jakub Hałun",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    page: "https://commons.wikimedia.org/wiki/File:Jerman_Beach,_Kuta,_Bali,_Indonesia,_20220825_1329_0831.jpg",
  },
  ulunSide: {
    src: "/images/ulun-danu-side.webp",
    width: 1200,
    height: 1800,
    alt: "Bangunan pura dengan atap ilalang dan tangga batu di Ulun Danu Beratan, dengan payung upacara hitam-putih.",
    title: "020 Side Temple, Pura Ulun Danu Beratan, Bali",
    creator: "Anandajoti",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    page: "https://commons.wikimedia.org/wiki/File:020_Side_Temple,_Pura_Ulun_Danu_Beratan,_Bali,_photograph_by_Anandajoti_Bhikkhu.jpg",
  },
  nusaDua: {
    src: "/images/nusa-dua.webp",
    width: 1600,
    height: 1067,
    alt: "Siluet orang memancing di dermaga batu saat matahari terbenam di Nusa Dua, dengan pohon kelapa di sudut.",
    title: "Nusa Dua Bali",
    creator: "GdML",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    page: "https://commons.wikimedia.org/wiki/File:Nusa_Dua_Bali.jpg",
  },
};

export type StopKind =
  | "industri"
  | "budaya"
  | "pantai"
  | "perjalanan"
  | "kuliner"
  | "belanja"
  | "penginapan"
  | "kampus"
  | "pertunjukan";

export type Stop = {
  name: string;
  kind: StopKind;
  note: string;
  destination?: string;
};

export type Day = {
  id: number;
  weekday: string;
  date: string;
  focus: string;
  summary: string;
  stops: Stop[];
};

export const site = {
  title: "Bali Trip Journal",
  subtitle: "KKL Informatika UPGRIS 2026",
  group: "Kelompok 6",
  programme: "Prodi Informatika, Universitas PGRI Semarang",
  dates: "18–22 Agustus 2026",
  reportUrl: "/laporan/ringkasan-kkl-kelompok-6.pdf",
  description:
    "Jurnal lima hari Kuliah Kerja Lapangan Prodi Informatika UPGRIS dari Semarang ke Bali, 18–22 Agustus 2026.",
};

export const heroHeadline = {
  line1: "Bali, lima hari",
  line2: "satu jurnal.",
};

export const days: Day[] = [
  {
    id: 1,
    weekday: "Selasa",
    date: "18 Agustus 2026",
    focus: "Berangkat dari Semarang, masuk ke lantai produksi",
    summary:
      "Bus meninggalkan kampus pagi-pagi. Sebelum matahari turun, kami sudah berdiri di lantai produksi pabrik kosmetik, lalu kembali ke jalan menuju ujung timur Jawa.",
    stops: [
      {
        name: "Kampus 1 UPGRIS",
        kind: "kampus",
        note: "Titik kumpul, pembagian perlengkapan, dan doa bersama sebelum bus berangkat.",
      },
      {
        name: "PT Victoria Care Indonesia",
        kind: "industri",
        note: "Kunjungan industri pertama: manufaktur kosmetik dan perawatan tubuh di Semarang.",
        destination: "pt-victoria-care",
      },
      {
        name: "RM Titin, Caruban",
        kind: "kuliner",
        note: "Makan siang pertama di perjalanan, menu rumahan setelah beberapa jam di bus.",
      },
      {
        name: "RM Puritama",
        kind: "kuliner",
        note: "Makan malam sebelum rombongan bergerak ke pelabuhan.",
      },
      {
        name: "Pelabuhan Ketapang",
        kind: "perjalanan",
        note: "Antre masuk kapal feri untuk menyeberang ke Gilimanuk.",
        destination: "penyeberangan-ketapang-gilimanuk",
      },
    ],
  },
  {
    id: 2,
    weekday: "Rabu",
    date: "19 Agustus 2026",
    focus: "Menyeberang ke Bali, lalu naik ke pegunungan",
    summary:
      "Selat Bali kami lewati pagi hari. Setelah mendarat di Gilimanuk, rute berbelok ke utara: pabrik kata-kata, pura di tepi danau, lalu panggung pertunjukan di Nusa Dua.",
    stops: [
      {
        name: "Pelabuhan Gilimanuk",
        kind: "perjalanan",
        note: "Tiba di Bali dan berpindah zona waktu dari WIB ke WITA.",
        destination: "penyeberangan-ketapang-gilimanuk",
      },
      {
        name: "Hotel Made Bali",
        kind: "penginapan",
        note: "Singgah untuk sarapan dan berganti pakaian sebelum berangkat ke Bedugul.",
      },
      {
        name: "Joger Luwus",
        kind: "belanja",
        note: "Pabrik kata-kata, oleh-oleh khas Bali, dan tempat foto yang ramai.",
        destination: "joger-luwus",
      },
      {
        name: "Candi Kuning / Ulun Danu Beratan",
        kind: "budaya",
        note: "Pura di tepi Danau Beratan, Bedugul, dengan udara pegunungan yang dingin.",
        destination: "ulun-danu-beratan",
      },
      {
        name: "Dewata Oleh-oleh",
        kind: "belanja",
        note: "Singgah membeli kopi, camilan, dan kain sebelum turun ke Denpasar.",
      },
      {
        name: "Devdan Show, Nusa Dua",
        kind: "pertunjukan",
        note: "Pertunjukan seni Bali dalam satu panggung, dari tari tradisional sampai akrobat.",
      },
      {
        name: "Hotel Quest San Denpasar",
        kind: "penginapan",
        note: "Check-in, mandi, dan istirahat untuk hari terpadat besok.",
      },
    ],
  },
  {
    id: 3,
    weekday: "Kamis",
    date: "20 Agustus 2026",
    focus: "Produksi, pantai, dan api Kecak",
    summary:
      "Hari dengan pemberhentian terbanyak. Pagi di balai pelatihan industri, siang di dua pantai, malam di lingkaran Kecak dan meja makan di Jimbaran.",
    stops: [
      {
        name: "Balai Diklat Industri Denpasar",
        kind: "industri",
        note: "Kunjungan industri kedua: pelatihan keterampilan industri di Denpasar.",
        destination: "balai-diklat-industri-denpasar",
      },
      {
        name: "Krisna Oleh-oleh",
        kind: "belanja",
        note: "Singgah membeli oleh-oleh sebelum rute berbelok ke pantai selatan.",
      },
      {
        name: "Pantai Kuta",
        kind: "pantai",
        note: "Pasir panjang, ombak yang ramai, dan matahari yang mulai turun.",
        destination: "pantai-kuta",
      },
      {
        name: "Pantai Pandawa",
        kind: "pantai",
        note: "Pantai di balik tebing kapur, dengan deretan patung dan air yang lebih tenang.",
        destination: "pantai-pandawa",
      },
      {
        name: "Tari Kecak",
        kind: "pertunjukan",
        note: "Suara puluhan penari mengisi lingkaran, tanpa alat musik.",
        destination: "tari-kecak",
      },
      {
        name: "Cafe Tepi Pantai, Jimbaran",
        kind: "kuliner",
        note: "Makan malam di pasir, lalu malam keakraban kelompok.",
        destination: "jimbaran",
      },
    ],
  },
  {
    id: 4,
    weekday: "Jumat",
    date: "21 Agustus 2026",
    focus: "Oleh-oleh terakhir, lalu menyeberang pulang",
    summary:
      "Hari pulang. Kami mengisi tas dengan oleh-oleh, makan siang di jalur timur, lalu kembali menyeberang ke Jawa saat sore mulai turun.",
    stops: [
      {
        name: "Karang Kurnia Oleh-oleh",
        kind: "belanja",
        note: "Belanja terakhir: camilan, kopi, dan barang kecil untuk keluarga.",
      },
      {
        name: "RM Soka Indah",
        kind: "kuliner",
        note: "Makan siang dalam perjalanan menuju pelabuhan.",
      },
      {
        name: "Gilimanuk ke Ketapang",
        kind: "perjalanan",
        note: "Menyeberang kembali ke Jawa dan memundurkan jam satu jam.",
        destination: "penyeberangan-ketapang-gilimanuk",
      },
      {
        name: "Local Resto",
        kind: "kuliner",
        note: "Makan malam di jalur pulang sebelum bus kembali ke Semarang.",
      },
    ],
  },
  {
    id: 5,
    weekday: "Sabtu",
    date: "22 Agustus 2026",
    focus: "Kembali ke kampus",
    summary:
      "Bus tiba di Semarang. Barang diturunkan, oleh-oleh dibagi, dan lima hari perjalanan resmi ditutup.",
    stops: [
      {
        name: "Kampus UPGRIS",
        kind: "kampus",
        note: "Tiba kembali, menurunkan barang, dan menutup perjalanan.",
      },
    ],
  },
];

export type Drawing = "factory" | "workshop";

export type Destination = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  day: number;
  date: string;
  location: string;
  lead: string;
  story: string[];
  notes: { label: string; text: string }[];
  photo?: PhotoKey;
  drawing?: Drawing;
};

export const destinations: Destination[] = [
  {
    slug: "pt-victoria-care",
    name: "PT Victoria Care Indonesia",
    shortName: "Victoria Care",
    category: "Kunjungan industri",
    day: 1,
    date: "Selasa, 18 Agustus 2026",
    location: "Semarang, Jawa Tengah",
    lead: "Pabrik kosmetik dan perawatan tubuh di Semarang, tempat pertama kami melihat produksi skala besar dari dekat.",
    story: [
      "Kunjungan pertama jatuh di hari keberangkatan. Sebelum bus menuju timur, kami berhenti di kawasan industri Semarang untuk melihat bagaimana produk perawatan tubuh dibuat, dikemas, dan disiapkan untuk pasar.",
      "Kami berjalan melewati area produksi, melihat mesin pengisian, jalur pengemasan, dan ruang kendali mutu. Yang paling membekas bukan mesinnya, melainkan disiplin kecil: catatan suhu, kebersihan lini, dan cara setiap batch dilacak.",
      "Bagi kami yang belajar informatika, pabrik ini terasa seperti sistem informasi yang hidup. Data tidak berhenti di layar. Ia menentukan kapan mesin berhenti, produk mana yang lolos, dan kapan satu baris produksi harus dibersihkan.",
    ],
    notes: [
      { label: "Yang kami lihat", text: "Lini produksi kosmetik dan perawatan tubuh, dari pencampuran bahan sampai pengemasan." },
      { label: "Yang kami catat", text: "Pelacakan batch, kendali mutu, kebersihan ruang produksi, dan pembagian kerja antar lini." },
      { label: "Yang kami bawa pulang", text: "Data adalah bagian dari produk fisik. Tanpa pencatatan yang rapi, mutu tidak bisa dijamin." },
    ],
    drawing: "factory",
  },
  {
    slug: "balai-diklat-industri-denpasar",
    name: "Balai Diklat Industri Denpasar",
    shortName: "Balai Diklat",
    category: "Kunjungan industri",
    day: 3,
    date: "Kamis, 20 Agustus 2026",
    location: "Denpasar, Bali",
    lead: "Pusat pelatihan industri di Denpasar, tempat teori bertemu keterampilan dan orang yang siap bekerja.",
    story: [
      "Kunjungan kedua membawa kami ke balai pelatihan, bukan ke lantai pabrik. Di sini yang diproduksi adalah keterampilan: peserta dilatih untuk bekerja dengan alat, bahan, dan standar yang dipakai industri.",
      "Kami melihat ruang praktik dan mendengar penjelasan tentang program pelatihan yang disiapkan untuk kebutuhan dunia kerja. Ada bagian yang terasa akrab: instruktur, modul, penilaian, dan peserta yang harus lulus sebelum dianggap siap.",
      "Bagi kami, tempat ini mengingatkan bahwa teknologi tidak pernah berdiri sendiri. Ada orang yang harus dilatih, prosedur yang harus dipahami, dan keselamatan yang harus dijaga sebelum sebuah sistem bisa berjalan.",
    ],
    notes: [
      { label: "Fokus", text: "Pelatihan keterampilan industri yang menghubungkan peserta dengan kebutuhan dunia kerja." },
      { label: "Yang kami lihat", text: "Ruang praktik, peralatan, modul pelatihan, dan alur penilaian peserta." },
      { label: "Kaitan dengan informatika", text: "Sistem pelatihan juga butuh data peserta, jadwal, sertifikasi, dan umpan balik yang tercatat." },
    ],
    drawing: "workshop",
  },
  {
    slug: "joger-luwus",
    name: "Joger Luwus",
    shortName: "Joger",
    category: "Oleh-oleh & budaya populer",
    day: 2,
    date: "Rabu, 19 Agustus 2026",
    location: "Luwus, Tabanan, Bali",
    lead: "Pabrik kata-kata, begitu papan namanya. Tempat ini menjual kaos dan oleh-oleh, tetapi yang paling laku adalah kalimat.",
    story: [
      "Joger bukan toko suvenir biasa. Dari papan nama sampai label di dalam toko, hampir setiap permukaan dipakai untuk berbicara. Ada yang lucu, ada yang menohok, dan hampir semuanya mudah diingat.",
      "Kami berkeliling melihat rak kaos, gantungan kunci, dan barang kecil lain yang diberi kalimat. Antrean di kasir panjang, dan banyak pengunjung mengambil foto di depan papan nama.",
      "Bagi kami, Joger adalah pelajaran tentang bahasa sebagai identitas. Produknya bisa dibuat di mana saja, tetapi cara ia berbicara hanya bisa lahir dari tempat ini.",
    ],
    notes: [
      { label: "Yang dijual", text: "Kaos, oleh-oleh, dan barang kecil dengan kalimat khas Joger." },
      { label: "Yang kami catat", text: "Kemasan, papan nama, dan label dipakai sebagai media cerita, bukan hanya penanda barang." },
      { label: "Yang kami bawa pulang", text: "Copywriting yang jujur dan lucu bisa lebih kuat daripada desain yang rumit." },
    ],
    photo: "joger",
  },
  {
    slug: "ulun-danu-beratan",
    name: "Ulun Danu Beratan",
    shortName: "Ulun Danu",
    category: "Wisata budaya",
    day: 2,
    date: "Rabu, 19 Agustus 2026",
    location: "Bedugul, Tabanan, Bali",
    lead: "Pura di tepi Danau Beratan, dikelilingi bukit hijau dan udara yang jauh lebih dingin daripada pantai.",
    story: [
      "Setelah turun dari bus, kami langsung merasakan perbedaan udara. Bedugul berada di dataran tinggi, dan kabut sering turun menutupi danau. Pura Ulun Danu Beratan berdiri di tepi air, dengan meru bertingkat yang menjadi ikon uang lima puluh ribu rupiah.",
      "Kami berjalan mengelilingi area pura, melihat payung upacara, patung, dan taman yang dirawat rapi. Pengunjung datang dari banyak tempat, sebagian berdoa, sebagian berfoto. Menjaga jarak dan menghormati aturan pura menjadi bagian dari pengalaman itu.",
      "Yang kami bawa pulang bukan hanya foto. Ada cara masyarakat Bali menempatkan bangunan suci di antara air, gunung, dan kehidupan sehari-hari yang sulit dijelaskan lewat layar.",
    ],
    notes: [
      { label: "Lokasi", text: "Tepi Danau Beratan, Bedugul, Tabanan, Bali." },
      { label: "Yang kami lihat", text: "Meru bertingkat, payung upacara, taman, dan danau yang sering tertutup kabut." },
      { label: "Yang kami catat", text: "Tempat suci tetap hidup di tengah kunjungan wisata. Aturan dan etika bukan formalitas." },
    ],
    photo: "ulunDanu",
  },
  {
    slug: "pantai-kuta",
    name: "Pantai Kuta",
    shortName: "Kuta",
    category: "Pantai",
    day: 3,
    date: "Kamis, 20 Agustus 2026",
    location: "Badung, Bali",
    lead: "Pantai panjang di barat daya Bali, dengan ombak yang ramai dan matahari terbenam yang menjadi alasan orang bertahan sampai sore.",
    story: [
      "Kuta adalah pantai yang sudah lama menjadi wajah Bali di layar. Pasirnya panjang, ombaknya besar, dan deretan pedagang serta kursi pantai mengisi hampir setiap meter.",
      "Kami tiba menjelang sore. Sebagian dari kami masuk ke air, sebagian memilih berjalan di garis pantai, dan sebagian lagi duduk menunggu matahari turun. Suara ombak bercampur suara orang, musik, dan panggilan pedagang.",
      "Saat matahari mulai menyentuh cakrawala, semua orang bergerak ke arah yang sama. Untuk beberapa menit, pantai yang ramai itu menjadi tenang. Kami mengerti mengapa tempat ini tidak pernah benar-benar sepi.",
    ],
    notes: [
      { label: "Lokasi", text: "Kuta, Badung, Bali." },
      { label: "Yang kami lihat", text: "Garis pantai panjang, ombak, perahu nelayan, dan aktivitas wisata yang padat." },
      { label: "Yang kami catat", text: "Pariwisata menghidupkan banyak orang sekaligus memberi tekanan pada tempat yang sama." },
    ],
    photo: "kutaSunset",
  },
  {
    slug: "pantai-pandawa",
    name: "Pantai Pandawa",
    shortName: "Pandawa",
    category: "Pantai",
    day: 3,
    date: "Kamis, 20 Agustus 2026",
    location: "Kuta Selatan, Badung, Bali",
    lead: "Pantai di balik tebing kapur, dengan jalan berkelok, deretan patung, dan air yang lebih tenang daripada Kuta.",
    story: [
      "Jalan menuju Pandawa memotong tebing kapur. Di kiri dan kanan, dinding batu menjulang, dan dari kejauhan laut terlihat seperti garis biru di ujung terowongan.",
      "Setelah turun, kami menemukan pantai yang lebih lebar dan lebih tenang. Patung-patung tokoh Pandawa berdiri di sepanjang tebing, menjadi penanda tempat ini. Beberapa dari kami menyewa payung dan duduk di pasir, yang lain berjalan sampai ujung pantai.",
      "Pandawa menunjukkan sisi lain Bali selatan. Tidak hanya ombak dan sunset, tetapi juga pekerjaan besar untuk membuka akses ke pantai yang dulu sulit dijangkau. Infrastruktur mengubah cara orang melihat tempat.",
    ],
    notes: [
      { label: "Lokasi", text: "Kuta Selatan, Badung, Bali." },
      { label: "Yang kami lihat", text: "Tebing kapur, jalan berkelok, patung Pandawa, dan pantai berpasir putih." },
      { label: "Yang kami catat", text: "Akses dan infrastruktur menentukan seberapa besar sebuah tempat bisa dinikmati." },
    ],
    photo: "pandawa",
  },
  {
    slug: "tari-kecak",
    name: "Tari Kecak",
    shortName: "Kecak",
    category: "Pertunjukan",
    day: 3,
    date: "Kamis, 20 Agustus 2026",
    location: "Bali selatan",
    lead: "Puluhan penari duduk melingkar, tanpa alat musik. Suara mereka menjadi irama, dan malam menjadi panggung.",
    story: [
      "Kecak dimulai sebelum langit benar-benar gelap. Penari duduk melingkar, telanjang dada, dengan kain kotak hitam dan putih di pinggang. Di tengah lingkaran, api menyala dan seorang pemimpin membawa sesajen.",
      "Tidak ada gamelan. Yang mengisi udara adalah suara puluhan orang yang bersahutan, dari cak yang cepat sampai dengung panjang yang membuat bulu kuduk berdiri. Di luar lingkaran, penonton duduk di kursi dan menonton tanpa banyak bicara.",
      "Kami tidak perlu memahami seluruh cerita untuk merasakan tekanannya. Kecak adalah contoh kerja kolektif: satu orang bisa memimpin, tetapi suara hanya kuat kalau semua orang menjaga tempo.",
    ],
    notes: [
      { label: "Bentuk", text: "Tari dan drama tanpa alat musik, dengan suara penari sebagai irama." },
      { label: "Yang kami lihat", text: "Lingkaran penari, api di tengah panggung, dan pemimpin yang mengatur tempo." },
      { label: "Yang kami catat", text: "Koordinasi dan kepercayaan antar pemain menentukan seluruh pertunjukan." },
    ],
    photo: "kecak",
  },
  {
    slug: "jimbaran",
    name: "Jimbaran",
    shortName: "Jimbaran",
    category: "Makan malam & makrab",
    day: 3,
    date: "Kamis, 20 Agustus 2026",
    location: "Jimbaran, Badung, Bali",
    lead: "Meja makan di atas pasir, lampu kecil di sepanjang pantai, dan malam terakhir sebelum kami mulai berbalik arah pulang.",
    story: [
      "Setelah Kecak, kami menuju Jimbaran untuk makan malam. Meja-meja ditata di atas pasir, dengan lampu yang menyala saat langit berubah gelap. Bau ikan bakar dan suara ombak bercampur dengan percakapan.",
      "Malam itu juga menjadi malam keakraban kelompok. Setelah tiga hari bergerak dari satu tempat ke tempat lain, kami akhirnya punya waktu duduk lama, bercerita, dan menertawakan hal-hal yang terjadi di bus.",
      "Jimbaran bukan pemberhentian terakhir, tetapi terasa seperti penutup babak. Besok kami harus bangun pagi, membeli oleh-oleh, dan kembali menyeberang.",
    ],
    notes: [
      { label: "Lokasi", text: "Jimbaran, Badung, Bali." },
      { label: "Suasana", text: "Meja makan di pasir, lampu pantai, dan suara ombak yang menemani malam." },
      { label: "Yang kami catat", text: "Perjalanan tidak hanya soal tempat. Waktu bersama di antara tempat-tempat itu yang paling sering diingat." },
    ],
    photo: "jimbaran",
  },
  {
    slug: "penyeberangan-ketapang-gilimanuk",
    name: "Penyeberangan Ketapang–Gilimanuk",
    shortName: "Selat Bali",
    category: "Perjalanan",
    day: 1,
    date: "18–21 Agustus 2026",
    location: "Jawa Timur ke Bali",
    lead: "Sekitar satu jam di atas kapal feri, menyeberangi Selat Bali di antara dua pulau dan dua zona waktu.",
    story: [
      "Perjalanan darat dari Semarang ke Bali tidak selesai di ujung jalan. Bus harus masuk ke kapal feri, dan kami harus turun untuk menikmati dek selama penyeberangan.",
      "Di Pelabuhan Ketapang, truk, bus, dan sepeda motor mengantre masuk. Setelah kapal bergerak, angin laut langsung terasa. Dari dek, Pulau Jawa perlahan mengecil dan Bali muncul di depan.",
      "Penyeberangan hanya sekitar satu jam, tetapi cukup untuk mengubah suasana. Setelah berjam-jam duduk di bus, berdiri di dek dan melihat air terbuka terasa seperti awal liburan yang sebenarnya.",
    ],
    notes: [
      { label: "Rute", text: "Pelabuhan Ketapang, Banyuwangi, ke Pelabuhan Gilimanuk, Jembrana." },
      { label: "Moda", text: "Kapal feri penyeberangan bersama bus rombongan." },
      { label: "Yang kami catat", text: "Zona waktu berubah dari WIB ke WITA. Jam di ponsel ikut bergeser satu jam." },
    ],
    photo: "ketapang",
  },
];

export type CrewMember = {
  name: string;
  nim: string;
  initials: string;
};

export const crew: CrewMember[] = [
  { name: "Muchammad Abdul Ghofur", nim: "24670008", initials: "MAG" },
  { name: "Farel Ivalyanka Maulana", nim: "24670021", initials: "FIM" },
  { name: "Vahrik Cahyo Eko Priyanto", nim: "24670059", initials: "VCEP" },
  { name: "Nevri Amelia Putri", nim: "24670061", initials: "NAP" },
  { name: "Alvin Praditya Julistyar", nim: "24670070", initials: "APJ" },
  { name: "Naufal Hisyam Ramdani", nim: "24670081", initials: "NHR" },
  { name: "Juniari Nur Shofa", nim: "24670082", initials: "JNS" },
  { name: "Nabilla Annanta Syafi'ie", nim: "24670127", initials: "NAS" },
  { name: "Shaktar Marchiano Gyanendra", nim: "24670129", initials: "SMG" },
  { name: "Selvy Ana Safara", nim: "24670137", initials: "SAS" },
];

export const gallery = [
  { photo: "semarang" as PhotoKey, place: "Kota Lama, Semarang", day: 1, date: "18 Agustus" },
  { photo: "semarangPelni" as PhotoKey, place: "Jalan Kota Lama, Semarang", day: 1, date: "18 Agustus" },
  { photo: "semarangKampung" as PhotoKey, place: "Sudut Kota Lama, Semarang", day: 1, date: "18 Agustus" },
  { photo: "ketapang" as PhotoKey, place: "Pelabuhan Ketapang", day: 1, date: "18 Agustus" },
  { photo: "joger" as PhotoKey, place: "Joger, Luwus", day: 2, date: "19 Agustus" },
  { photo: "ulunDanu" as PhotoKey, place: "Ulun Danu Beratan", day: 2, date: "19 Agustus" },
  { photo: "ulunSide" as PhotoKey, place: "Sisi lain Ulun Danu", day: 2, date: "19 Agustus" },
  { photo: "rice" as PhotoKey, place: "Sawah bertingkat, Bali", day: 2, date: "19 Agustus" },
  { photo: "nusaDua" as PhotoKey, place: "Nusa Dua", day: 2, date: "19 Agustus" },
  { photo: "kutaBeach" as PhotoKey, place: "Pantai Kuta", day: 3, date: "20 Agustus" },
  { photo: "kutaSunset" as PhotoKey, place: "Kuta menjelang senja", day: 3, date: "20 Agustus" },
  { photo: "kutaJerman" as PhotoKey, place: "Pantai Jerman, Kuta", day: 3, date: "20 Agustus" },
  { photo: "pandawa" as PhotoKey, place: "Pantai Pandawa", day: 3, date: "20 Agustus" },
  { photo: "kecak" as PhotoKey, place: "Tari Kecak", day: 3, date: "20 Agustus" },
  { photo: "jimbaran" as PhotoKey, place: "Jimbaran", day: 3, date: "20 Agustus" },
  { photo: "gilimanuk" as PhotoKey, place: "Pelabuhan Gilimanuk", day: 4, date: "21 Agustus" },
];

export const stats = [
  { value: "5", caption: "hari perjalanan, dari Selasa sampai Sabtu" },
  { value: "2", caption: "kunjungan industri, inti akademik KKL" },
  { value: "23", caption: "pemberhentian, termasuk transit dan tempat makan" },
  { value: "10", caption: "anggota kelompok yang menulis jurnal ini" },
];

export const nav = [
  { label: "Perjalanan", href: "/#perjalanan" },
  { label: "Kunjungan", href: "/#kunjungan" },
  { label: "Galeri", href: "/#galeri" },
  { label: "Kru", href: "/#kru" },
];
