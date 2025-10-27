// lib/blogData.ts

// TypeScript interface untuk data blog
export interface BlogPost {
  id: number;
  slug: string;
  category: string;
  title: string;
  date: string;
  author: string;
  featuredImage: string;
  excerpt: string; // Ringkasan untuk card preview
  content: string;
  type: "blog" | "materi";
  downloadUrl?: string;
  downloadFileName?: string;
  tags?: string[];
}

// Data blog posts - SINGLE SOURCE OF TRUTH
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "mediasi-komunitas-orang-tua-peduli-sdn-mangasa-1",
    category: "Kegiatan Sekolah",
    title:
      "Mediasi Yang Dilakukan Oleh Komunitas Orang Tua Peduli Di SDN Mangasa 1",
    date: "13 Agustus 2023",
    author: "Tim RUKOKU",
    featuredImage:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&h=675&fit=crop",
    excerpt:
      "Komunitas Orang Tua Peduli melakukan kegiatan mediasi di SDN Mangasa 1 untuk memfasilitasi komunikasi yang lebih baik antara pihak sekolah, orang tua, dan siswa.",
    type: "blog",
    tags: ["mediasi", "sekolah", "komunikasi"],
    content: `
      <p>Pada hari Senin, 13 Agustus 2023, Komunitas Orang Tua Peduli melakukan kegiatan mediasi di SDN Mangasa 1, Kecamatan Somba Opu. Kegiatan ini bertujuan untuk memfasilitasi komunikasi yang lebih baik antara pihak sekolah, orang tua, dan siswa.</p>
      
      <h2>Latar Belakang Kegiatan</h2>
      <p>Mediasi ini dilakukan sebagai respon terhadap beberapa permasalahan yang muncul dalam lingkungan sekolah. Komunitas Orang Tua Peduli hadir sebagai jembatan komunikasi untuk mencari solusi terbaik bagi semua pihak yang terlibat.</p>
      
      <h2>Proses Mediasi</h2>
      <p>Proses mediasi berlangsung selama kurang lebih 3 jam dengan melibatkan berbagai pihak. Diskusi berjalan dengan kondusif dan menghasilkan beberapa kesepakatan penting untuk perbaikan ke depan.</p>
      
      <h2>Hasil dan Kesepakatan</h2>
      <ul>
        <li>Peningkatan komunikasi antara guru dan orang tua</li>
        <li>Pembentukan grup WhatsApp untuk koordinasi yang lebih baik</li>
        <li>Jadwal pertemuan rutin setiap bulan</li>
        <li>Komitmen bersama untuk menciptakan lingkungan belajar yang kondusif</li>
      </ul>
      
      <p>Kegiatan mediasi ini menjadi bukti bahwa kolaborasi antara sekolah dan orang tua sangat penting dalam mendukung pendidikan anak-anak kita.</p>
    `,
  },
  {
    id: 2,
    slug: "kepala-sdn-bontokamase-menjelaskan-pembentukan-orang-tua-peduli",
    category: "Sosialisasi",
    title:
      "Kepala SDN Bontokamase Menjelaskan Kepada Orang Tua Tentang Pembentukan Orang Tua Peduli Di Sekolahnya",
    date: "20 Juli 2023",
    author: "Kepala SDN Bontokamase",
    featuredImage:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=675&fit=crop",
    excerpt:
      "Sosialisasi pentingnya pembentukan Komunitas Orang Tua Peduli di lingkungan sekolah untuk memperkuat sinergi pendidikan.",
    type: "blog",
    tags: ["sosialisasi", "komunitas", "pendidikan"],
    content: `
      <p>Kepala Sekolah SDN Bontokamase mengadakan sosialisasi kepada para orang tua siswa mengenai pentingnya pembentukan Komunitas Orang Tua Peduli di lingkungan sekolah.</p>
      
      <h2>Pentingnya Peran Orang Tua</h2>
      <p>Dalam paparannya, Kepala Sekolah menekankan bahwa pendidikan anak tidak hanya tanggung jawab sekolah, tetapi juga memerlukan keterlibatan aktif dari orang tua. Komunitas Orang Tua Peduli diharapkan dapat menjadi wadah untuk memperkuat sinergi ini.</p>
      
      <blockquote>
        "Pendidikan adalah tanggung jawab bersama. Sekolah dan orang tua harus berjalan beriringan untuk menciptakan generasi yang berkualitas."
      </blockquote>
      
      <h2>Program yang Akan Dilaksanakan</h2>
      <p>Beberapa program yang direncanakan antara lain:</p>
      <ul>
        <li>Parenting class setiap bulan</li>
        <li>Kegiatan bakti sosial bersama</li>
        <li>Monitoring perkembangan anak secara berkala</li>
        <li>Forum komunikasi orang tua dan guru</li>
      </ul>
      
      <p>Antusiasme orang tua sangat tinggi dalam menyambut program ini, terbukti dari banyaknya pertanyaan dan saran yang disampaikan saat sesi diskusi.</p>
    `,
  },
  {
    id: 3,
    slug: "pemaparan-pembentukan-komunitas-orang-tua-peduli-sd-inpres-mangasa",
    category: "Sosialisasi",
    title:
      "Pemaparan Pembentukan Komunitas Orang Tua Peduli Di SD Inpres Mangasa Kepada Orang Tua Siswa",
    date: "22 Juli 2023",
    author: "Tim RUKOKU",
    featuredImage:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=675&fit=crop",
    excerpt:
      "SD Inpres Mangasa menerima pemaparan tentang pembentukan Komunitas Orang Tua Peduli dengan respon positif dari puluhan orang tua siswa.",
    type: "blog",
    tags: ["sosialisasi", "komunitas", "sd inpres"],
    content: `
      <p>SD Inpres Mangasa menjadi salah satu sekolah yang menerima pemaparan tentang pembentukan Komunitas Orang Tua Peduli. Kegiatan ini dihadiri oleh puluhan orang tua siswa yang antusias mengikuti dari awal hingga akhir.</p>
      
      <h2>Tujuan Pembentukan Komunitas</h2>
      <p>Tim RUKOKU menjelaskan bahwa tujuan utama pembentukan komunitas ini adalah untuk:</p>
      <ol>
        <li>Meningkatkan partisipasi orang tua dalam pendidikan anak</li>
        <li>Membangun komunikasi yang lebih baik dengan pihak sekolah</li>
        <li>Menciptakan lingkungan belajar yang supportif</li>
        <li>Berbagi pengalaman dan solusi dalam menghadapi tantangan parenting</li>
      </ol>
      
      <h2>Respon Positif dari Orang Tua</h2>
      <p>Ibu Siti, salah satu orang tua siswa kelas 3, menyampaikan apresiasinya: "Saya sangat mendukung program ini. Selama ini kami merasa kesulitan untuk berkomunikasi dan berbagi pengalaman dengan orang tua lainnya. Dengan adanya komunitas ini, kami berharap bisa saling mendukung."</p>
      
      <p>Kegiatan ditutup dengan pembentukan struktur pengurus sementara dan rencana pertemuan perdana yang akan diadakan minggu depan.</p>
    `,
  },
  {
    id: 4,
    slug: "workshop-parenting-komunikasi-efektif-anak",
    category: "Workshop",
    title: "Workshop Parenting: Membangun Komunikasi Efektif dengan Anak",
    date: "5 September 2023",
    author: "Dr. Sarah Wijaya - Psikolog Anak",
    featuredImage:
      "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=1200&h=675&fit=crop",
    excerpt:
      "Workshop parenting yang mengajarkan teknik komunikasi efektif antara orang tua dan anak untuk membangun hubungan yang lebih harmonis.",
    type: "materi",
    tags: ["workshop", "parenting", "komunikasi"],
    downloadUrl: "/files/workshop-komunikasi-efektif.pdf",
    downloadFileName: "Workshop-Komunikasi-Efektif-Dengan-Anak.pdf",
    content: `
      <p>Workshop parenting kali ini menghadirkan tema yang sangat penting: Membangun Komunikasi Efektif dengan Anak. Acara ini dihadiri oleh lebih dari 50 orang tua dari berbagai sekolah di Kabupaten Gowa.</p>
      
      <h2>Pentingnya Komunikasi Efektif</h2>
      <p>Dr. Sarah Wijaya, psikolog anak yang menjadi narasumber, menjelaskan bahwa komunikasi efektif adalah kunci dalam membangun hubungan yang sehat antara orang tua dan anak. Komunikasi yang baik dapat:</p>
      <ul>
        <li>Meningkatkan kepercayaan anak kepada orang tua</li>
        <li>Membantu anak mengekspresikan perasaan dengan baik</li>
        <li>Mengurangi konflik dalam keluarga</li>
        <li>Mendukung perkembangan emosional anak</li>
      </ul>
      
      <h2>Teknik-Teknik yang Diajarkan</h2>
      <p>Beberapa teknik komunikasi efektif yang dibagikan dalam workshop ini antara lain:</p>
      <ol>
        <li><strong>Active Listening</strong> - Mendengarkan dengan penuh perhatian tanpa menghakimi</li>
        <li><strong>Empati</strong> - Memahami perasaan anak dari sudut pandang mereka</li>
        <li><strong>Validasi Emosi</strong> - Mengakui dan menerima perasaan anak</li>
        <li><strong>Open-Ended Questions</strong> - Mengajukan pertanyaan terbuka untuk mendorong dialog</li>
      </ol>
      
      <h2>Testimoni Peserta</h2>
      <p>"Workshop ini sangat bermanfaat! Saya baru menyadari bahwa selama ini cara komunikasi saya dengan anak masih kurang tepat. Sekarang saya punya tools baru untuk berkomunikasi lebih baik," ujar Ibu Rina, salah satu peserta workshop.</p>
      
      <p>Materi lengkap workshop dapat diunduh di bawah ini untuk referensi lebih lanjut.</p>
    `,
  },
  {
    id: 5,
    slug: "gotong-royong-lingkungan-sekolah",
    category: "Kegiatan Sekolah",
    title:
      "Kegiatan Gotong Royong Membersihkan Lingkungan Sekolah Bersama Orang Tua",
    date: "15 September 2023",
    author: "Tim RUKOKU",
    featuredImage:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&h=675&fit=crop",
    excerpt:
      "Aksi bersih-bersih sekolah yang melibatkan orang tua, guru, dan siswa untuk menciptakan lingkungan belajar yang bersih dan nyaman.",
    type: "blog",
    tags: ["gotong royong", "lingkungan", "kebersihan"],
    content: `
      <p>Komunitas Orang Tua Peduli mengadakan kegiatan gotong royong membersihkan lingkungan sekolah yang melibatkan orang tua, guru, dan siswa. Kegiatan ini bertujuan untuk menciptakan lingkungan belajar yang bersih, nyaman, dan sehat.</p>
      
      <h2>Antusiasme yang Tinggi</h2>
      <p>Kegiatan gotong royong ini dihadiri oleh lebih dari 80 orang tua, 20 guru, dan 150 siswa. Semua peserta tampak antusias dan bersemangat dalam membersihkan area sekolah.</p>
      
      <h2>Area yang Dibersihkan</h2>
      <ul>
        <li>Ruang kelas dan koridor</li>
        <li>Halaman sekolah dan taman</li>
        <li>Lapangan olahraga</li>
        <li>Kamar mandi dan area sanitasi</li>
        <li>Perpustakaan dan ruang guru</li>
      </ul>
      
      <h2>Nilai-Nilai yang Ditanamkan</h2>
      <p>Kegiatan ini tidak hanya tentang membersihkan lingkungan, tetapi juga menanamkan nilai-nilai penting seperti:</p>
      <ul>
        <li>Kerja sama dan gotong royong</li>
        <li>Tanggung jawab terhadap lingkungan</li>
        <li>Kepedulian terhadap fasilitas bersama</li>
        <li>Kekompakan antara orang tua, guru, dan siswa</li>
      </ul>
      
      <p>Kepala Sekolah menyampaikan terima kasih kepada semua pihak yang telah berpartisipasi. "Ini adalah contoh nyata bagaimana kolaborasi yang baik antara sekolah dan orang tua dapat menciptakan lingkungan belajar yang lebih baik," ujarnya.</p>
    `,
  },
  {
    id: 6,
    slug: "sosialisasi-literasi-digital",
    category: "Sosialisasi",
    title: "Sosialisasi Program Literasi Digital untuk Orang Tua dan Siswa",
    date: "28 September 2023",
    author: "Tim RUKOKU",
    featuredImage:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=675&fit=crop",
    excerpt:
      "Program literasi digital untuk meningkatkan pemahaman orang tua dan siswa tentang penggunaan teknologi yang aman dan bijak.",
    type: "blog",
    tags: ["literasi digital", "teknologi", "internet"],
    content: `
      <p>Di era digital ini, literasi digital menjadi sangat penting bagi orang tua dan siswa. Komunitas Orang Tua Peduli mengadakan sosialisasi program literasi digital untuk meningkatkan pemahaman tentang penggunaan teknologi yang aman dan bijak.</p>
      
      <h2>Materi Sosialisasi</h2>
      <p>Sosialisasi ini membahas berbagai topik penting, antara lain:</p>
      <ul>
        <li>Bahaya media sosial bagi anak</li>
        <li>Cara mengawasi aktivitas online anak</li>
        <li>Mengidentifikasi konten negatif dan hoaks</li>
        <li>Etika berkomunikasi di dunia digital</li>
        <li>Penggunaan parental control</li>
      </ul>
      
      <h2>Statistik yang Mengkhawatirkan</h2>
      <p>Narasumber menyampaikan beberapa data yang cukup mengkhawatirkan:</p>
      <ul>
        <li>70% anak usia SD sudah memiliki akses ke smartphone</li>
        <li>45% orang tua tidak mengawasi aktivitas online anak</li>
        <li>60% anak pernah terpapar konten negatif</li>
      </ul>
      
      <h2>Tips untuk Orang Tua</h2>
      <ol>
        <li>Batasi waktu screen time anak</li>
        <li>Dampingi anak saat menggunakan gadget</li>
        <li>Ajarkan anak untuk berpikir kritis terhadap konten online</li>
        <li>Komunikasikan bahaya internet secara terbuka</li>
        <li>Gunakan aplikasi parental control</li>
      </ol>
      
      <p>Program literasi digital ini akan dilanjutkan dengan workshop praktis untuk orang tua dan siswa pada bulan depan.</p>
    `,
  },
];

// Helper functions
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostById(id: number): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter((post) => post.tags?.includes(tag));
}

export function getAllCategories(): string[] {
  const categories = blogPosts.map((post) => post.category);
  return Array.from(new Set(categories)); // Remove duplicates
}

export function getAllTags(): string[] {
  const allTags = blogPosts.flatMap((post) => post.tags || []);
  return Array.from(new Set(allTags)); // Remove duplicates
}

export function searchBlogPosts(query: string): BlogPost[] {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.tags?.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
}
