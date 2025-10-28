// lib/school-events.ts

export interface SchoolEvent {
  id: number;
  slug: string;
  image: string;
  title: string;
  date: string;
  time: string;
  price: string;
  isPaid: boolean; // true = berbayar, false = gratis
  school: string; // ✅ Nama sekolah penyelenggara
  // Detail page data
  startDate: string;
  endDate?: string; // Optional untuk multi-day event
  startTime: string;
  endTime: string;
  location: string;
  locationUrl: string;
  organizer: string; // ✅ Penyelenggara event
  posterImage: string;
  description: string;
  registrationUrl?: string;
  ticketUrl?: string;
}

export const schoolEvents: SchoolEvent[] = [
  {
    id: 1,
    slug: "english-speech-contest",
    image: "/images/school/event1.jpg",
    title: "English Speech Contest",
    date: "10 - 17 Juli 2023",
    time: "08:00 - 14:00",
    price: "Gratis",
    isPaid: false,
    school: "SMAN 1 Sungguminasa",
    startDate: "2023-07-10",
    startTime: "08:00",
    endTime: "14:00",
    location: "Aula SMAN 1 Sungguminasa",
    locationUrl: "https://maps.google.com/?q=SMAN+1+Sungguminasa",
    organizer: "Kejaksaan Negeri 2 & Dinas Pendidikan Kab. Gowa",
    posterImage: "/images/school/event1.jpg",
    description:
      "Lomba pidato bahasa Inggris untuk siswa SMA se-Kabupaten Gowa. Kompetisi ini bertujuan untuk meningkatkan kemampuan berbicara bahasa Inggris siswa dan memberikan wadah untuk menunjukkan bakat mereka. Peserta akan dinilai berdasarkan pronunciation, fluency, content, dan delivery. Hadiah menarik menanti para pemenang!",
    registrationUrl: "https://forms.google.com/school-event-1",
  },
  {
    id: 2,
    slug: "festival-seni-budaya-sekolah",
    image: "/images/school/event2.jpg",
    title: "Festival Seni & Budaya Sekolah",
    date: "15 Agustus 2023",
    time: "09:00 - 16:00",
    price: "Gratis",
    isPaid: false,
    school: "SD Negeri 1 Gowa",
    startDate: "2023-08-15",
    startTime: "09:00",
    endTime: "16:00",
    location: "Lapangan SD Negeri 1 Gowa",
    locationUrl: "https://maps.google.com/?q=SD+Negeri+1+Gowa",
    organizer: "SD Negeri 1 Gowa",
    posterImage: "/images/school/event2.jpg",
    description:
      "Festival seni dan budaya yang menampilkan berbagai pertunjukan dari siswa-siswi SD Negeri 1 Gowa. Acara ini meliputi tarian tradisional, musik daerah, drama, fashion show, dan pameran karya seni siswa. Terbuka untuk umum dan diharapkan dapat memperkenalkan kekayaan budaya lokal kepada generasi muda.",
    registrationUrl: "https://forms.google.com/school-event-2",
  },
  {
    id: 3,
    slug: "olimpiade-sains-nasional",
    image: "/images/school/event3.jpg",
    title: "Olimpiade Sains Nasional - Tingkat Kabupaten",
    date: "1 - 3 September 2023",
    time: "08:00 - 15:00",
    price: "Rp 50.000",
    isPaid: true,
    school: "SMAN 2 Sungguminasa",
    startDate: "2023-09-01",
    endDate: "2023-09-03",
    startTime: "08:00",
    endTime: "15:00",
    location: "SMAN 2 Sungguminasa",
    locationUrl: "https://maps.google.com/?q=SMAN+2+Sungguminasa",
    organizer: "Dinas Pendidikan Kab. Gowa",
    posterImage: "/images/school/event3.jpg",
    description:
      "Kompetisi sains tingkat kabupaten untuk siswa SMP dan SMA di Kabupaten Gowa. Bidang yang dilombakan meliputi Matematika, Fisika, Kimia, dan Biologi. Pemenang akan mewakili Kabupaten Gowa di tingkat provinsi. Peserta akan mengikuti ujian tertulis dan praktikum sesuai bidang masing-masing.",
    registrationUrl: "https://forms.google.com/school-event-3",
  },
  {
    id: 4,
    slug: "gebyar-pendidikan-anak-usia-dini",
    image: "/images/school/event4.jpg",
    title: "Gebyar Pendidikan Anak Usia Dini",
    date: "20 Oktober 2023",
    time: "08:00 - 12:00",
    price: "Gratis",
    isPaid: false,
    school: "TK Negeri Pembina Gowa",
    startDate: "2023-10-20",
    startTime: "08:00",
    endTime: "12:00",
    location: "TK Negeri Pembina Gowa",
    locationUrl: "https://maps.google.com/?q=TK+Negeri+Pembina+Gowa",
    organizer: "Dinas Pendidikan Kab. Gowa",
    posterImage: "/images/school/event4.jpg",
    description:
      "Acara tahunan yang menampilkan berbagai kegiatan dan lomba untuk anak usia dini. Meliputi lomba mewarnai, menyanyi, menari, dan fashion show untuk TK/PAUD se-Kabupaten Gowa. Acara ini juga menghadirkan edukasi parenting dan pameran APE (Alat Permainan Edukatif) untuk orang tua dan guru.",
    registrationUrl: "https://forms.google.com/school-event-4",
  },
  {
    id: 5,
    slug: "kompetisi-robotika-pelajar",
    image: "/images/school/event5.jpg",
    title: "Kompetisi Robotika Pelajar 2023",
    date: "5 November 2023",
    time: "09:00 - 17:00",
    price: "Rp 100.000",
    isPaid: true,
    school: "SMAN 1 Sungguminasa",
    startDate: "2023-11-05",
    startTime: "09:00",
    endTime: "17:00",
    location: "Aula SMAN 1 Sungguminasa",
    locationUrl: "https://maps.google.com/?q=SMAN+1+Sungguminasa",
    organizer: "SMAN 1 Sungguminasa & Komunitas Robotika Gowa",
    posterImage: "/images/school/event5.jpg",
    description:
      "Kompetisi robotika untuk pelajar SMP dan SMA dengan berbagai kategori: Line Follower, Sumo Robot, dan Soccer Robot. Peserta akan mendemonstrasikan kemampuan programming dan desain robot mereka. Acara ini bertujuan untuk meningkatkan minat siswa dalam bidang teknologi dan engineering.",
    registrationUrl: "https://forms.google.com/school-event-5",
  },
  {
    id: 6,
    slug: "porseni-tingkat-sd",
    image: "/images/school/event6.jpg",
    title: "Pekan Olahraga dan Seni (PORSENI) Tingkat SD",
    date: "10 - 15 Desember 2023",
    time: "08:00 - 16:00",
    price: "Gratis",
    isPaid: false,
    school: "SD Negeri 2 Sungguminasa",
    startDate: "2023-12-10",
    endDate: "2023-12-15",
    startTime: "08:00",
    endTime: "16:00",
    location: "SD Negeri 2 Sungguminasa & Lapangan Olahraga",
    locationUrl: "https://maps.google.com/?q=SD+Negeri+2+Sungguminasa",
    organizer: "Dinas Pendidikan Kab. Gowa",
    posterImage: "/images/school/event6.jpg",
    description:
      "PORSENI tingkat SD se-Kabupaten Gowa dengan berbagai cabang olahraga (futsal, bulu tangkis, atletik) dan seni (menyanyi, menari, melukis). Event ini bertujuan untuk mengembangkan bakat dan minat siswa dalam bidang olahraga dan seni sejak dini, serta mempererat persaudaraan antar sekolah.",
    registrationUrl: "https://forms.google.com/school-event-6",
  },
];

// Helper function to get event by slug
export function getSchoolEventBySlug(slug: string): SchoolEvent | undefined {
  return schoolEvents.find((event) => event.slug === slug);
}

// Helper function to get all events
export function getAllSchoolEvents(): SchoolEvent[] {
  return schoolEvents;
}

// Helper function to get event for list display (with slug for routing)
export function getSchoolEventsForList() {
  return schoolEvents.map((event) => ({
    id: event.id,
    slug: event.slug,
    image: event.image,
    title: event.title,
    date: event.date,
    time: event.time,
    price: event.price,
    isPaid: event.isPaid, // Include isPaid for card display
    school: event.school,
    organizer: event.organizer,
  }));
}
