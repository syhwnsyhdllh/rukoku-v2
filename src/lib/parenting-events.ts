// lib/parenting-events.ts

export interface ParentingEvent {
  id: number;
  slug: string;
  image: string;
  title: string;
  date: string;
  time: string;
  price: string;
  isPaid: boolean; // NEW: true = berbayar, false = gratis
  speaker: string;
  position: string;
  // Detail page data
  startDate: string;
  startTime: string;
  endTime: string;
  location: string;
  locationUrl: string;
  organizer: string;
  posterImage: string;
  description: string;
  registrationUrl: string;
}

export const parentingEvents: ParentingEvent[] = [
  {
    id: 1,
    slug: "workshop-pola-asuh-anak-usia-dini",
    image: "/images/parenting/workshop1.jpg",
    title: "Workshop Pola Asuh Anak Usia Dini",
    date: "15 November - 20 November 2025",
    time: "09:00 - 12:00",
    price: "Rp 50.000",
    isPaid: true,
    speaker: "Dr. Budi Santoso",
    position: "Psikolog Anak",
    startDate: "2025-11-15",
    startTime: "09:00",
    endTime: "12:00",
    location: "Aula SD Negeri 1 Gowa",
    locationUrl: "https://maps.google.com/?q=SD+Negeri+1+Gowa",
    organizer: "Dinas Pendidikan Kab. Gowa",
    posterImage: "/images/parenting/workshop1.jpg",
    description:
      "Workshop ini membahas berbagai pola asuh yang efektif untuk anak usia dini (0-6 tahun). Peserta akan belajar tentang tahapan perkembangan anak, cara membangun bonding yang kuat, dan teknik komunikasi yang tepat sesuai usia anak. Materi juga mencakup cara mengatasi tantangan umum dalam pengasuhan anak usia dini seperti tantrum, pembentukan kebiasaan baik, dan stimulasi perkembangan kognitif serta motorik.",
    registrationUrl: "https://forms.google.com/parenting-workshop-1",
  },
  {
    id: 2,
    slug: "seminar-komunikasi-efektif-dengan-anak",
    image: "/images/parenting/seminar1.jpg",
    title: "Seminar Komunikasi Efektif dengan Anak",
    date: "20 November 2025",
    time: "13:00 - 16:00",
    price: "Gratis",
    isPaid: false,
    speaker: "Prof. Dr. Siti Aminah",
    position: "Pakar Komunikasi Keluarga",
    startDate: "2025-11-20",
    startTime: "13:00",
    endTime: "16:00",
    location: "Gedung Serba Guna Kab. Gowa",
    locationUrl: "https://maps.google.com/?q=Gedung+Serba+Guna+Gowa",
    organizer: "Dinas Pemberdayaan Perempuan dan Perlindungan Anak",
    posterImage: "/images/parenting/seminar1.jpg",
    description:
      "Seminar ini mengupas tuntas teknik komunikasi efektif antara orang tua dan anak. Materi meliputi active listening, cara memberikan pujian dan kritik konstruktif, membangun komunikasi dua arah, serta mengatasi kesenjangan komunikasi di berbagai tahap usia anak. Peserta akan mendapatkan panduan praktis untuk menciptakan komunikasi yang sehat dan harmonis dalam keluarga.",
    registrationUrl: "https://forms.google.com/parenting-seminar-1",
  },
  {
    id: 3,
    slug: "pelatihan-mengelola-emosi-anak",
    image: "/images/parenting/workshop2.jpg",
    title: "Pelatihan Mengelola Emosi Anak",
    date: "25 November 2025",
    time: "10:00 - 13:00",
    price: "Gratis",
    isPaid: false,
    speaker: "Dra. Rina Kusuma",
    position: "Konselor Keluarga",
    startDate: "2025-11-25",
    startTime: "10:00",
    endTime: "13:00",
    location: "Ruang Pertemuan Puskesmas Somba Opu",
    locationUrl: "https://maps.google.com/?q=Puskesmas+Somba+Opu+Gowa",
    organizer: "Dinas Kesehatan Kab. Gowa",
    posterImage: "/images/parenting/workshop2.jpg",
    description:
      "Pelatihan ini memberikan pemahaman mendalam tentang perkembangan emosi anak dan cara membantu anak mengelola emosinya dengan baik. Topik meliputi mengenali dan memvalidasi emosi anak, mengajarkan regulasi emosi, menangani kemarahan dan kekecewaan, serta membangun kecerdasan emosional anak sejak dini. Peserta akan dibekali dengan strategi praktis yang dapat langsung diterapkan di rumah.",
    registrationUrl: "https://forms.google.com/parenting-workshop-2",
  },
  {
    id: 4,
    slug: "talkshow-parenting-di-era-digital",
    image: "/images/parenting/talkshow1.jpg",
    title: "Talkshow Parenting di Era Digital",
    date: "1 Desember 2025",
    time: "14:00 - 17:00",
    price: "Gratis",
    isPaid: false,
    speaker: "Ahmad Fauzi, M.Psi",
    position: "Psikolog Klinis",
    startDate: "2025-12-01",
    startTime: "14:00",
    endTime: "17:00",
    location: "Auditorium SMAN 1 Sungguminasa",
    locationUrl: "https://maps.google.com/?q=SMAN+1+Sungguminasa",
    organizer: "Forum Orang Tua Gowa",
    posterImage: "/images/parenting/talkshow1.jpg",
    description:
      "Talkshow interaktif membahas tantangan pengasuhan anak di era digital. Topik meliputi pengelolaan screen time, dampak media sosial terhadap perkembangan anak, cyberbullying, digital parenting, dan cara mendampingi anak dalam penggunaan teknologi yang sehat. Acara ini juga akan membahas cara mengajarkan literasi digital kepada anak sejak dini.",
    registrationUrl: "https://forms.google.com/parenting-talkshow-1",
  },
  {
    id: 5,
    slug: "workshop-mendampingi-belajar-anak",
    image: "/images/parenting/workshop3.jpg",
    title: "Workshop Mendampingi Belajar Anak",
    date: "5 Desember 2025",
    time: "09:00 - 12:00",
    price: "Gratis",
    isPaid: false,
    speaker: "Dr. Lina Wati",
    position: "Pendidik & Praktisi Parenting",
    startDate: "2025-12-05",
    startTime: "09:00",
    endTime: "12:00",
    location: "SD Negeri 2 Sungguminasa",
    locationUrl: "https://maps.google.com/?q=SD+Negeri+2+Sungguminasa",
    organizer: "Dinas Pendidikan Kab. Gowa",
    posterImage: "/images/parenting/workshop3.jpg",
    description:
      "Workshop ini memberikan panduan praktis bagi orang tua dalam mendampingi proses belajar anak di rumah. Materi mencakup cara menciptakan lingkungan belajar yang kondusif, memahami gaya belajar anak, membantu anak mengerjakan PR tanpa ketergantungan, memotivasi anak belajar, serta mengatasi kesulitan belajar. Peserta akan mendapatkan tips dan trik yang dapat langsung diterapkan.",
    registrationUrl: "https://forms.google.com/parenting-workshop-3",
  },
  {
    id: 6,
    slug: "seminar-membangun-karakter-anak",
    image: "/images/parenting/seminar2.jpg",
    title: "Seminar Membangun Karakter Anak",
    date: "10 Desember 2025",
    time: "13:00 - 16:00",
    price: "Gratis",
    isPaid: false,
    speaker: "H. Muhammad Yusuf, S.Pd",
    position: "Kepala Sekolah & Motivator",
    startDate: "2025-12-10",
    startTime: "13:00",
    endTime: "16:00",
    location: "Masjid Agung Syekh Yusuf",
    locationUrl: "https://maps.google.com/?q=Masjid+Agung+Syekh+Yusuf+Gowa",
    organizer: "Kementerian Agama Kab. Gowa",
    posterImage: "/images/parenting/seminar2.jpg",
    description:
      "Seminar ini membahas pentingnya pembentukan karakter anak sejak dini dan cara-cara praktis membangun karakter positif. Topik meliputi nilai-nilai karakter penting (kejujuran, tanggung jawab, empati, dll), role model dalam keluarga, pendidikan akhlak, serta integrasi nilai-nilai agama dalam pengasuhan sehari-hari. Seminar juga akan membahas cara mengatasi pengaruh negatif dari lingkungan.",
    registrationUrl: "https://forms.google.com/parenting-seminar-2",
  },
  {
    id: 7,
    slug: "pelatihan-mengatasi-tantrum-pada-anak",
    image: "/images/parenting/workshop4.jpg",
    title: "Pelatihan Mengatasi Tantrum pada Anak",
    date: "15 Desember 2025",
    time: "10:00 - 13:00",
    price: "Gratis",
    isPaid: false,
    speaker: "Nurul Hidayah, M.Psi",
    position: "Child Development Specialist",
    startDate: "2025-12-15",
    startTime: "10:00",
    endTime: "13:00",
    location: "TK Negeri Pembina Gowa",
    locationUrl: "https://maps.google.com/?q=TK+Negeri+Pembina+Gowa",
    organizer: "Ikatan Guru TK/PAUD Gowa",
    posterImage: "/images/parenting/workshop4.jpg",
    description:
      "Pelatihan khusus untuk orang tua dalam memahami dan mengatasi tantrum pada anak. Materi meliputi penyebab tantrum, cara mencegah tantrum, teknik menenangkan anak saat tantrum, membedakan tantrum dengan masalah perilaku lain, serta strategi jangka panjang untuk mengajarkan anak mengekspresikan emosi dengan cara yang sehat. Peserta akan belajar melalui studi kasus dan simulasi.",
    registrationUrl: "https://forms.google.com/parenting-workshop-4",
  },
  {
    id: 8,
    slug: "talkshow-pentingnya-quality-time",
    image: "/images/parenting/talkshow2.jpg",
    title: "Talkshow Pentingnya Quality Time",
    date: "20 Desember 2025",
    time: "14:00 - 17:00",
    price: "Gratis",
    isPaid: false,
    speaker: "Drs. Bambang Widodo",
    position: "Family Counselor",
    startDate: "2025-12-20",
    startTime: "14:00",
    endTime: "17:00",
    location: "Balai Desa Romanglasa",
    locationUrl: "https://maps.google.com/?q=Balai+Desa+Romanglasa+Gowa",
    organizer: "Pemerintah Desa Romanglasa",
    posterImage: "/images/parenting/talkshow2.jpg",
    description:
      "Talkshow yang membahas pentingnya quality time dalam hubungan orang tua dan anak. Topik meliputi definisi quality time yang sebenarnya, ide aktivitas quality time sesuai usia anak, menyeimbangkan pekerjaan dan waktu keluarga, menciptakan tradisi keluarga, serta memaksimalkan momen-momen bersama anak meski dalam keterbatasan waktu. Acara ini akan dihadiri juga oleh beberapa keluarga inspiratif.",
    registrationUrl: "https://forms.google.com/parenting-talkshow-2",
  },
  {
    id: 9,
    slug: "workshop-stimulasi-tumbuh-kembang-anak",
    image: "/images/parenting/workshop5.jpg",
    title: "Workshop Stimulasi Tumbuh Kembang Anak",
    date: "28 Desember 2025",
    time: "09:00 - 12:00",
    price: "Gratis",
    isPaid: false,
    speaker: "dr. Ani Wijaya, Sp.A",
    position: "Dokter Spesialis Anak",
    startDate: "2025-12-28",
    startTime: "09:00",
    endTime: "12:00",
    location: "RSUD Syekh Yusuf Gowa",
    locationUrl: "https://maps.google.com/?q=RSUD+Syekh+Yusuf+Gowa",
    organizer: "RSUD Syekh Yusuf Gowa",
    posterImage: "/images/parenting/workshop5.jpg",
    description:
      "Workshop medis yang membahas stimulasi tumbuh kembang anak dari perspektif kesehatan. Materi mencakup milestone perkembangan anak 0-5 tahun, cara melakukan stimulasi motorik kasar dan halus, stimulasi kognitif dan bahasa, deteksi dini gangguan tumbuh kembang, serta pentingnya nutrisi dalam mendukung perkembangan optimal anak. Peserta akan mendapat panduan praktis stimulasi sesuai usia anak.",
    registrationUrl: "https://forms.google.com/parenting-workshop-5",
  },
];

// Helper function to get event by slug
export function getParentingEventBySlug(
  slug: string
): ParentingEvent | undefined {
  return parentingEvents.find((event) => event.slug === slug);
}

// Helper function to get all events
export function getAllParentingEvents(): ParentingEvent[] {
  return parentingEvents;
}

// Helper function to get event for list display (with slug for routing)
export function getParentingEventsForList() {
  return parentingEvents.map((event) => ({
    id: event.id,
    slug: event.slug,
    image: event.image,
    title: event.title,
    date: event.date,
    time: event.time,
    price: event.price,
    isPaid: event.isPaid, // Include isPaid for card display
    speaker: event.speaker,
    position: event.position,
  }));
}
