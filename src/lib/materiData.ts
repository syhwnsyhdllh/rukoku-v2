interface MateriData {
  id: number;
  category: string;
  title: string;
  date: string;
  author: string;
  featuredImage: string;
  downloadUrl: string;
  downloadFileName: string;
  content: string;
}

export const materiData: Record<string, MateriData> = {
  "pola-asuh-positif": {
    id: 1,
    category: "Materi Parenting",
    title: "Pola Asuh Positif untuk Anak",
    date: "10 November 2025",
    author: "Dr. Budi Santoso - Psikolog Anak",
    featuredImage:
      "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&h=600&fit=crop",
    downloadUrl: "/files/pola-asuh-positif.pdf",
    downloadFileName: "Pola-Asuh-Positif-Untuk-Anak.pdf",
    content: `
      <p class="text-lg font-medium text-gray-700 mb-6">
        Pola asuh positif adalah pendekatan pengasuhan yang berfokus pada membangun
        hubungan yang sehat antara orang tua dan anak melalui komunikasi yang efektif,
        penguatan positif, dan penetapan batasan yang jelas.
      </p>

      <h2>Prinsip-Prinsip Pola Asuh Positif</h2>
      <p>
        Pola asuh positif didasarkan pada beberapa prinsip fundamental yang membantu
        menciptakan lingkungan keluarga yang mendukung tumbuh kembang anak secara optimal.
      </p>

      <ul>
        <li><strong>Komunikasi terbuka dan jujur</strong> - Membangun kepercayaan dengan anak</li>
        <li><strong>Memberikan pujian dan penguatan positif</strong> - Menghargai usaha anak</li>
        <li><strong>Menetapkan batasan yang konsisten</strong> - Memberikan struktur yang jelas</li>
        <li><strong>Menghormati perasaan dan pendapat anak</strong> - Mendengarkan dengan empati</li>
        <li><strong>Menjadi role model yang baik</strong> - Anak belajar dari contoh orang tua</li>
      </ul>

      <h2>Manfaat Pola Asuh Positif</h2>
      <p>
        Penelitian menunjukkan bahwa pola asuh positif memberikan dampak jangka panjang
        yang signifikan terhadap perkembangan anak. Beberapa manfaat utamanya meliputi:
      </p>

      <ol>
        <li>Meningkatkan kepercayaan diri dan harga diri anak</li>
        <li>Membangun hubungan yang kuat antara orang tua dan anak</li>
        <li>Mengembangkan keterampilan sosial dan emosional yang sehat</li>
        <li>Mengurangi perilaku bermasalah dan meningkatkan kemampuan self-regulation</li>
        <li>Meningkatkan prestasi akademik dan motivasi belajar</li>
      </ol>

      <h2>Tips Praktis Menerapkan Pola Asuh Positif</h2>
      <p>
        Berikut adalah beberapa tips praktis yang dapat Anda terapkan dalam kehidupan
        sehari-hari:
      </p>

      <h3>1. Dengarkan dengan Aktif</h3>
      <p>
        Berikan perhatian penuh saat anak berbicara. Tatap mata, anggukkan kepala,
        dan berikan respons yang menunjukkan Anda benar-benar mendengarkan.
      </p>

      <h3>2. Berikan Pilihan</h3>
      <p>
        Memberi anak pilihan membantu mereka merasa dihargai dan mengembangkan
        kemampuan pengambilan keputusan. Misalnya: "Kamu mau mandi sekarang atau
        setelah makan malam?"
      </p>

      <h3>3. Fokus pada Solusi, Bukan Kesalahan</h3>
      <p>
        Ketika terjadi masalah, ajak anak untuk bersama-sama mencari solusi daripada
        fokus menyalahkan. Ini mengajarkan problem-solving dan tanggung jawab.
      </p>

      <h2>Kesimpulan</h2>
      <p>
        Pola asuh positif membutuhkan konsistensi, kesabaran, dan komitmen dari orang tua.
        Meskipun tidak selalu mudah, manfaat jangka panjangnya sangat berharga untuk
        perkembangan anak Anda. Download materi lengkap di bawah untuk panduan lebih detail!
      </p>
    `,
  },

  "komunikasi-efektif": {
    id: 2,
    category: "Materi Parenting",
    title: "Komunikasi Efektif dengan Anak",
    date: "15 November 2025",
    author: "Prof. Dr. Siti Aminah - Pakar Komunikasi Keluarga",
    featuredImage:
      "https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=800&h=600&fit=crop",
    downloadUrl: "/files/komunikasi-efektif.pdf",
    downloadFileName: "Komunikasi-Efektif-dengan-Anak.pdf",
    content: `
      <p class="text-lg font-medium text-gray-700 mb-6">
        Komunikasi adalah kunci dalam membangun hubungan yang kuat dengan anak.
        Pelajari teknik komunikasi efektif untuk memahami dan mendukung anak Anda.
      </p>

      <h2>Pentingnya Komunikasi Efektif</h2>
      <p>
        Komunikasi yang baik membantu anak merasa didengar, dipahami, dan dihargai.
        Ini adalah fondasi dari kepercayaan dan hubungan yang sehat antara orang tua dan anak.
      </p>

      <h2>Teknik Komunikasi Efektif</h2>
      <ul>
        <li><strong>Active Listening</strong> - Dengarkan tanpa menghakimi</li>
        <li><strong>Validasi Emosi</strong> - Akui dan hargai perasaan anak</li>
        <li><strong>Bahasa yang Tepat</strong> - Sesuaikan dengan usia anak</li>
        <li><strong>Beri Waktu</strong> - Biarkan anak mengekspresikan diri</li>
        <li><strong>Body Language</strong> - Perhatikan bahasa tubuh Anda</li>
      </ul>

      <h2>Hambatan Komunikasi</h2>
      <p>Kenali hambatan yang sering terjadi dalam komunikasi dengan anak:</p>
      <ol>
        <li>Terlalu cepat memberi solusi tanpa mendengarkan</li>
        <li>Membandingkan dengan anak lain</li>
        <li>Mengkritik atau menyalahkan</li>
        <li>Tidak memberikan perhatian penuh</li>
      </ol>

      <h3>Cara Mengatasi</h3>
      <p>
        Luangkan waktu khusus setiap hari untuk berbicara dengan anak tanpa distraksi.
        Tanyakan tentang hari mereka, dengarkan dengan sungguh-sungguh, dan tunjukkan
        bahwa Anda peduli dengan apa yang mereka rasakan.
      </p>
    `,
  },

  "mengelola-emosi-anak": {
    id: 3,
    category: "Materi Parenting",
    title: "Mengelola Emosi Anak dengan Bijak",
    date: "18 November 2025",
    author: "Dra. Rina Kusuma - Konselor Keluarga",
    featuredImage:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop",
    downloadUrl: "/files/mengelola-emosi.pdf",
    downloadFileName: "Mengelola-Emosi-Anak.pdf",
    content: `
      <p class="text-lg font-medium text-gray-700 mb-6">
        Mengajarkan anak mengelola emosi adalah salah satu keterampilan terpenting
        dalam perkembangan mereka untuk menjadi individu yang sehat secara emosional.
      </p>

      <h2>Memahami Emosi Anak</h2>
      <p>
        Setiap emosi adalah valid dan penting untuk diakui. Anak perlu belajar bahwa
        tidak ada emosi yang "salah", yang penting adalah bagaimana mereka mengekspresikan
        dan mengelola emosi tersebut.
      </p>

      <h2>Tahapan Regulasi Emosi</h2>
      <ul>
        <li>Mengenali emosi yang dirasakan</li>
        <li>Memahami penyebab emosi</li>
        <li>Mengekspresikan dengan cara yang sehat</li>
        <li>Mencari solusi atau cara menenangkan diri</li>
      </ul>

      <h2>Strategi Praktis</h2>
      <h3>1. Beri Nama pada Emosi</h3>
      <p>Bantu anak mengidentifikasi apa yang mereka rasakan: "Sepertinya kamu sedang kesal ya?"</p>

      <h3>2. Validasi Perasaan</h3>
      <p>Akui emosi mereka: "Itu wajar kok kalau kamu merasa sedih."</p>

      <h3>3. Ajarkan Teknik Menenangkan Diri</h3>
      <p>Napas dalam, menghitung, atau memeluk boneka favorit.</p>
    `,
  },

  "parenting-era-digital": {
    id: 4,
    category: "Materi Parenting",
    title: "Parenting di Era Digital",
    date: "22 November 2025",
    author: "Ahmad Fauzi, M.Psi - Psikolog Klinis",
    featuredImage:
      "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=800&h=600&fit=crop",
    downloadUrl: "/files/parenting-digital.pdf",
    downloadFileName: "Parenting-Era-Digital.pdf",
    content: `
      <p class="text-lg font-medium text-gray-700 mb-6">
        Era digital membawa tantangan baru dalam pengasuhan anak. Pelajari cara
        mendampingi anak dengan bijak di dunia yang serba terhubung ini.
      </p>

      <h2>Tantangan Parenting Digital</h2>
      <ul>
        <li>Screen time yang berlebihan</li>
        <li>Konten tidak sesuai usia</li>
        <li>Cyberbullying</li>
        <li>Kecanduan gadget</li>
        <li>Privacy dan keamanan online</li>
      </ul>

      <h2>Panduan Screen Time</h2>
      <p><strong>Usia 0-2 tahun:</strong> Hindari screen time kecuali video call</p>
      <p><strong>Usia 2-5 tahun:</strong> Maksimal 1 jam per hari dengan konten berkualitas</p>
      <p><strong>Usia 6+ tahun:</strong> Batasan konsisten sesuai kesepakatan keluarga</p>

      <h2>Tips Mendampingi Anak</h2>
      <ol>
        <li>Tetapkan aturan penggunaan gadget yang jelas</li>
        <li>Jadilah role model penggunaan teknologi yang sehat</li>
        <li>Diskusikan konten yang mereka akses</li>
        <li>Ciptakan zona bebas gadget (meja makan, kamar tidur)</li>
        <li>Ajarkan digital citizenship sejak dini</li>
      </ol>
    `,
  },

  "mendampingi-belajar": {
    id: 5,
    category: "Materi Parenting",
    title: "Mendampingi Anak Belajar di Rumah",
    date: "25 November 2025",
    author: "Dr. Lina Wati - Pendidik & Praktisi Parenting",
    featuredImage:
      "https://images.unsplash.com/photo-1503676676429-2485f881b4e5?w=800&h=600&fit=crop",
    downloadUrl: "/files/mendampingi-belajar.pdf",
    downloadFileName: "Mendampingi-Belajar-di-Rumah.pdf",
    content: `
      <p class="text-lg font-medium text-gray-700 mb-6">
        Peran orang tua sangat penting dalam mendukung proses belajar anak di rumah.
        Pelajari cara mendampingi yang efektif tanpa membuat anak stress.
      </p>

      <h2>Prinsip Mendampingi Belajar</h2>
      <ul>
        <li>Ciptakan lingkungan belajar yang nyaman</li>
        <li>Tetapkan rutinitas belajar yang konsisten</li>
        <li>Berikan dukungan, bukan tekanan</li>
        <li>Fokus pada proses, bukan hasil</li>
        <li>Hargai usaha, bukan hanya nilai</li>
      </ul>

      <h2>Menciptakan Ruang Belajar</h2>
      <p>
        Sediakan area khusus untuk belajar dengan pencahayaan yang baik, meja dan
        kursi yang nyaman, serta bebas dari distraksi.
      </p>

      <h2>Strategi Motivasi</h2>
      <h3>1. Kenali Gaya Belajar Anak</h3>
      <p>Visual, auditori, atau kinestetik - sesuaikan pendekatan dengan gaya belajar mereka.</p>

      <h3>2. Istirahat Teratur</h3>
      <p>Gunakan teknik Pomodoro: 25 menit belajar, 5 menit istirahat.</p>

      <h3>3. Berikan Pujian Spesifik</h3>
      <p>"Ibu lihat kamu sudah berusaha keras mengerjakan soal matematika ini!"</p>
    `,
  },

  "membangun-karakter": {
    id: 6,
    category: "Materi Parenting",
    title: "Membangun Karakter Anak Sejak Dini",
    date: "28 November 2025",
    author: "H. Muhammad Yusuf, S.Pd - Kepala Sekolah & Motivator",
    featuredImage:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
    downloadUrl: "/files/membangun-karakter.pdf",
    downloadFileName: "Membangun-Karakter-Anak.pdf",
    content: `
      <p class="text-lg font-medium text-gray-700 mb-6">
        Karakter yang kuat adalah fondasi kesuksesan anak di masa depan.
        Pelajari cara menanamkan nilai-nilai positif sejak usia dini.
      </p>

      <h2>Nilai-Nilai Penting</h2>
      <ul>
        <li><strong>Kejujuran</strong> - Berbicara dan bertindak jujur</li>
        <li><strong>Tanggung Jawab</strong> - Mengerjakan tugas dengan baik</li>
        <li><strong>Disiplin</strong> - Mengikuti aturan dan rutinitas</li>
        <li><strong>Empati</strong> - Peduli dengan perasaan orang lain</li>
        <li><strong>Kerja Keras</strong> - Berusaha mencapai tujuan</li>
      </ul>

      <h2>Cara Menanamkan Karakter</h2>
      <h3>1. Keteladanan</h3>
      <p>Anak belajar dari apa yang mereka lihat. Jadilah contoh yang baik.</p>

      <h3>2. Konsistensi</h3>
      <p>Terapkan nilai-nilai secara konsisten dalam kehidupan sehari-hari.</p>

      <h3>3. Cerita dan Dongeng</h3>
      <p>Gunakan cerita untuk mengajarkan nilai moral dengan cara yang menyenangkan.</p>

      <h3>4. Berikan Tanggung Jawab</h3>
      <p>Mulai dari hal sederhana: membereskan mainan, membantu pekerjaan rumah.</p>
    `,
  },

  "mengatasi-tantrum": {
    id: 7,
    category: "Materi Parenting",
    title: "Mengatasi Tantrum pada Anak",
    date: "1 Desember 2025",
    author: "Nurul Hidayah, M.Psi - Child Development Specialist",
    featuredImage:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop",
    downloadUrl: "/files/mengatasi-tantrum.pdf",
    downloadFileName: "Mengatasi-Tantrum-Anak.pdf",
    content: `
      <p class="text-lg font-medium text-gray-700 mb-6">
        Tantrum adalah bagian normal dari perkembangan anak. Pelajari cara
        menghadapinya dengan tenang dan efektif.
      </p>

      <h2>Memahami Tantrum</h2>
      <p>
        Tantrum terjadi karena anak belum memiliki kemampuan untuk mengatur emosi
        dan mengekspresikan kebutuhan mereka dengan kata-kata.
      </p>

      <h2>Penyebab Umum</h2>
      <ul>
        <li>Kelelahan atau lapar</li>
        <li>Frustasi karena tidak bisa melakukan sesuatu</li>
        <li>Ingin perhatian</li>
        <li>Perubahan rutinitas</li>
        <li>Overstimulasi</li>
      </ul>

      <h2>Strategi Menghadapi</h2>
      <h3>Saat Tantrum Terjadi</h3>
      <ol>
        <li>Tetap tenang dan jangan ikut emosi</li>
        <li>Pastikan anak aman</li>
        <li>Berikan ruang jika diperlukan</li>
        <li>Validasi emosi: "Ibu tahu kamu kesal"</li>
        <li>Tunggu hingga mereda baru bicara</li>
      </ol>

      <h3>Pencegahan</h3>
      <p>
        Jaga rutinitas tidur dan makan, berikan peringatan sebelum transisi,
        dan ajarkan anak cara mengekspresikan emosi dengan kata-kata.
      </p>
    `,
  },

  "quality-time": {
    id: 8,
    category: "Materi Parenting",
    title: "Pentingnya Quality Time Bersama Anak",
    date: "5 Desember 2025",
    author: "Drs. Bambang Widodo - Family Counselor",
    featuredImage:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=600&fit=crop",
    downloadUrl: "/files/quality-time.pdf",
    downloadFileName: "Quality-Time-Bersama-Anak.pdf",
    content: `
      <p class="text-lg font-medium text-gray-700 mb-6">
        Quality time bukan tentang kuantitas, tetapi kualitas interaksi dengan anak.
        Pelajari cara memaksimalkan waktu bersama yang bermakna.
      </p>

      <h2>Apa itu Quality Time?</h2>
      <p>
        Quality time adalah momen dimana Anda memberikan perhatian penuh kepada anak,
        tanpa distraksi gadget atau pikiran tentang pekerjaan.
      </p>

      <h2>Manfaat Quality Time</h2>
      <ul>
        <li>Memperkuat bonding orang tua-anak</li>
        <li>Meningkatkan rasa aman dan percaya diri anak</li>
        <li>Menciptakan kenangan indah</li>
        <li>Memahami dunia anak lebih baik</li>
        <li>Membangun komunikasi yang terbuka</li>
      </ul>

      <h2>Ide Quality Time</h2>
      <h3>Di Rumah</h3>
      <ul>
        <li>Memasak bersama</li>
        <li>Bermain board game</li>
        <li>Membaca buku sebelum tidur</li>
        <li>Berkebun di halaman</li>
      </ul>

      <h3>Di Luar Rumah</h3>
      <ul>
        <li>Jalan-jalan ke taman</li>
        <li>Piknik keluarga</li>
        <li>Bersepeda bersama</li>
        <li>Mengunjungi museum</li>
      </ul>

      <h2>Tips Maksimalkan Quality Time</h2>
      <p>
        Matikan notifikasi HP, biarkan anak memilih aktivitas, fokus pada prosesnya,
        dan tunjukkan antusiasme Anda dalam kegiatan bersama.
      </p>
    `,
  },

  "stimulasi-tumbuh-kembang": {
    id: 9,
    category: "Materi Parenting",
    title: "Stimulasi Tumbuh Kembang Anak Optimal",
    date: "8 Desember 2025",
    author: "dr. Ani Wijaya, Sp.A - Dokter Spesialis Anak",
    featuredImage:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&h=600&fit=crop",
    downloadUrl: "/files/stimulasi-tumbuh-kembang.pdf",
    downloadFileName: "Stimulasi-Tumbuh-Kembang-Anak.pdf",
    content: `
      <p class="text-lg font-medium text-gray-700 mb-6">
        Stimulasi yang tepat sejak dini sangat penting untuk mengoptimalkan
        perkembangan fisik, kognitif, dan sosial-emosional anak.
      </p>

      <h2>Area Perkembangan Anak</h2>
      <ul>
        <li><strong>Motorik Kasar</strong> - Gerakan besar tubuh</li>
        <li><strong>Motorik Halus</strong> - Gerakan tangan dan jari</li>
        <li><strong>Bahasa</strong> - Kemampuan berkomunikasi</li>
        <li><strong>Kognitif</strong> - Kemampuan berpikir dan belajar</li>
        <li><strong>Sosial-Emosional</strong> - Interaksi dan pengelolaan emosi</li>
      </ul>

      <h2>Stimulasi Sesuai Usia</h2>
      <h3>0-12 Bulan</h3>
      <p>Tummy time, bicara dengan bayi, perdengarkan musik, berikan mainan warna-warni.</p>

      <h3>1-3 Tahun</h3>
      <p>Bermain balok, menggambar, membaca buku, bermain peran sederhana.</p>

      <h3>3-5 Tahun</h3>
      <p>Puzzle, menghitung, mengenal huruf, bermain dengan teman sebaya.</p>

      <h2>Prinsip Stimulasi</h2>
      <ol>
        <li>Sesuaikan dengan usia dan kemampuan anak</li>
        <li>Buat menyenangkan, bukan paksaan</li>
        <li>Konsisten dan berulang</li>
        <li>Libatkan semua anggota keluarga</li>
        <li>Berikan pujian atas usaha mereka</li>
      </ol>
    `,
  },

  "membangun-kepercayaan-diri": {
    id: 10,
    category: "Materi Parenting",
    title: "Membangun Kepercayaan Diri Anak",
    date: "12 Desember 2025",
    author: "Dr. Budi Santoso - Psikolog Anak",
    featuredImage:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    downloadUrl: "/files/kepercayaan-diri.pdf",
    downloadFileName: "Membangun-Kepercayaan-Diri-Anak.pdf",
    content: `
      <p class="text-lg font-medium text-gray-700 mb-6">
        Kepercayaan diri adalah aset berharga yang akan membantu anak menghadapi
        tantangan hidup. Pelajari cara membangunnya sejak dini.
      </p>

      <h2>Tanda Anak Percaya Diri</h2>
      <ul>
        <li>Berani mencoba hal baru</li>
        <li>Tidak mudah menyerah saat gagal</li>
        <li>Mampu mengekspresikan pendapat</li>
        <li>Nyaman berinteraksi dengan orang lain</li>
        <li>Bangga dengan pencapaiannya</li>
      </ul>

      <h2>Cara Membangun</h2>
      <h3>1. Berikan Pujian yang Spesifik</h3>
      <p>Bukan "Kamu pintar", tapi "Ibu bangga kamu tidak menyerah mengerjakan puzzle ini!"</p>

      <h3>2. Biarkan Mereka Membuat Keputusan</h3>
      <p>Mulai dari hal kecil: memilih baju, snack, atau aktivitas weekend.</p>

      <h3>3. Ajarkan Growth Mindset</h3>
      <p>"Kamu belum bisa, TAPI dengan latihan kamu akan bisa!"</p>

      <h3>4. Berikan Tanggung Jawab</h3>
      <p>Tugas sederhana yang sesuai usia membangun rasa mampu.</p>

      <h3>5. Jadi Cheerleader Mereka</h3>
      <p>Dukung impian dan minat mereka, tunjukkan Anda percaya pada kemampuan mereka.</p>

      <h2>Yang Harus Dihindari</h2>
      <ul>
        <li>Membandingkan dengan anak lain</li>
        <li>Over-protective yang menghalangi eksplorasi</li>
        <li>Kritik yang merusak harga diri</li>
        <li>Ekspektasi yang terlalu tinggi</li>
      </ul>
    `,
  },
};

// Helper function untuk convert ke array jika diperlukan
export const getMateriList = () => {
  return Object.entries(materiData).map(([slug, data]) => ({
    slug,
    ...data,
  }));
};
