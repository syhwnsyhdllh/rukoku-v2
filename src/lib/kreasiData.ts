interface MediaItem {
  type: "image" | "video";
  url: string;
  thumbnail?: string; // untuk video thumbnail
}

interface KreasiData {
  id: number;
  slug: string;
  title: string;
  school: string;
  author: string;
  class: string;
  date: string;
  thumbnail: string;
  media: MediaItem[];
  content: string;
}

export const kreasiData: Record<string, KreasiData> = {
  "daun-botto-botto-obat-luka-luar": {
    id: 1,
    slug: "daun-botto-botto-obat-luka-luar",
    title: "Daun Botto Botto obat Luka Luar",
    school: "SDN BONTOMAEKU 2",
    author: "Ayudia Shakila",
    class: "Kelas 5A",
    date: "7 Juli 2022",
    thumbnail:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    media: [
      {
        type: "video",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail:
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
      },
    ],
    content: `
      <p class="text-lg font-medium text-gray-700 mb-6">
        Penelitian ini bertujuan untuk mengetahui manfaat daun botto botto (Chromolaena odorata) 
        sebagai obat tradisional untuk luka luar. Daun botto botto telah lama digunakan oleh 
        masyarakat setempat sebagai pengobatan alternatif.
      </p>

      <h2>Latar Belakang</h2>
      <p>
        Daun botto botto merupakan tanaman yang mudah ditemukan di lingkungan sekitar. 
        Masyarakat turun-temurun menggunakan daun ini untuk mengobati luka karena 
        dipercaya memiliki kandungan antiseptik alami.
      </p>

      <h2>Metode Penelitian</h2>
      <p>Penelitian dilakukan dengan beberapa tahap:</p>
      <ol>
        <li>Pengumpulan daun botto botto segar dari lingkungan sekitar</li>
        <li>Pencucian dan penghalusan daun menggunakan tumbukan</li>
        <li>Pengujian pada luka ringan dengan pengawasan guru dan orang tua</li>
        <li>Observasi perkembangan penyembuhan selama 7 hari</li>
      </ol>

      <h2>Hasil Penelitian</h2>
      <p>
        Berdasarkan pengamatan selama satu minggu, luka yang diolesi ekstrak daun botto botto 
        menunjukkan proses penyembuhan yang lebih cepat dibandingkan dengan luka tanpa pengobatan. 
        Tidak ditemukan efek samping atau iritasi pada kulit.
      </p>

      <h3>Manfaat yang Ditemukan:</h3>
      <ul>
        <li>Menghentikan pendarahan ringan</li>
        <li>Mengurangi pembengkakan</li>
        <li>Mencegah infeksi pada luka</li>
        <li>Mempercepat regenerasi sel kulit</li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>
        Daun botto botto terbukti efektif sebagai obat tradisional untuk luka luar ringan. 
        Namun, untuk luka yang serius tetap disarankan untuk mendapatkan perawatan medis 
        profesional. Penelitian ini menunjukkan bahwa kearifan lokal dalam pengobatan 
        tradisional memiliki dasar ilmiah yang dapat dipertanggungjawabkan.
      </p>
    `,
  },

  "mengenal-warna-dan-bentuk-dasar": {
    id: 2,
    slug: "mengenal-warna-dan-bentuk-dasar",
    title: "Mengenal Warna dan Bentuk Dasar",
    school: "TK/PAUD BONTOBILA",
    author: "Dewi Sartika",
    class: "Kelompok B",
    date: "5 Juni 2023",
    thumbnail:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=800&fit=crop",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=800&fit=crop",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&q=80",
      },
      {
        type: "video",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail:
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      },
    ],
    content: `
      <p class="text-lg font-medium text-gray-700 mb-6">
        Proyek pembelajaran interaktif untuk membantu anak-anak usia dini mengenal 
        berbagai warna dan bentuk geometri dasar melalui permainan edukatif.
      </p>

      <h2>Tujuan Pembelajaran</h2>
      <p>
        Membantu anak-anak mengenal dan membedakan warna primer (merah, kuning, biru) 
        serta bentuk-bentuk dasar (lingkaran, segitiga, persegi, persegi panjang).
      </p>

      <h2>Metode yang Digunakan</h2>
      <ul>
        <li>Permainan menyortir objek berdasarkan warna</li>
        <li>Mencocokkan bentuk dengan pola</li>
        <li>Bernyanyi lagu tentang warna dan bentuk</li>
        <li>Membuat kolase dari kertas berwarna</li>
      </ul>

      <h2>Hasil</h2>
      <p>
        Anak-anak menunjukkan peningkatan kemampuan dalam mengenali warna dan bentuk. 
        Mereka juga lebih antusias dalam belajar karena metode yang menyenangkan.
      </p>
    `,
  },

  "eksperimen-kimia-sederhana": {
    id: 3,
    slug: "eksperimen-kimia-sederhana",
    title: "Eksperimen Kimia Sederhana",
    school: "SMP NEGERI BONTOBILA",
    author: "Ahmad Rizki",
    class: "Kelas 8B",
    date: "5 Juni 2023",
    thumbnail:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=800&fit=crop",
    media: [
      {
        type: "video",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail:
          "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=800&fit=crop",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80",
      },
    ],
    content: `
      <p class="text-lg font-medium text-gray-700 mb-6">
        Serangkaian eksperimen kimia sederhana menggunakan bahan-bahan yang ada di rumah 
        untuk memahami reaksi kimia dasar.
      </p>

      <h2>Eksperimen yang Dilakukan</h2>
      <h3>1. Reaksi Asam Basa</h3>
      <p>
        Menggunakan cuka (asam asetat) dan baking soda (natrium bikarbonat) untuk 
        mengamati reaksi yang menghasilkan gas karbon dioksida.
      </p>

      <h3>2. Indikator pH Alami</h3>
      <p>
        Membuat indikator pH dari kubis ungu untuk menguji tingkat keasaman berbagai 
        larutan rumah tangga.
      </p>

      <h2>Pembelajaran</h2>
      <p>
        Eksperimen ini membantu memahami konsep reaksi kimia, asam-basa, dan pH 
        dengan cara yang praktis dan mudah dipahami.
      </p>
    `,
  },

  "membuat-robot-dari-kardus-bekas": {
    id: 4,
    slug: "membuat-robot-dari-kardus-bekas",
    title: "Membuat Robot dari Kardus Bekas",
    school: "SD INPRES BONTOBILA",
    author: "Siti Nurhaliza",
    class: "Kelas 4A",
    date: "5 Juni 2023",
    thumbnail:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=800&fit=crop",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=800&fit=crop",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=800&q=80",
      },
      {
        type: "video",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail:
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
      },
    ],
    content: `
      <p class="text-lg font-medium text-gray-700 mb-6">
        Proyek kreatif membuat robot mainan dari kardus bekas dan barang-barang 
        daur ulang lainnya. Mengajarkan pentingnya kreativitas dan kepedulian lingkungan.
      </p>

      <h2>Bahan yang Digunakan</h2>
      <ul>
        <li>Kardus bekas berbagai ukuran</li>
        <li>Botol plastik bekas</li>
        <li>Tutup botol untuk roda</li>
        <li>Sedotan untuk lengan robot</li>
        <li>Cat dan spidol untuk dekorasi</li>
      </ul>

      <h2>Proses Pembuatan</h2>
      <p>
        Robot dibuat dengan menyusun kardus menjadi badan, kepala, dan kaki. 
        Lengan dibuat dari sedotan yang bisa digerakkan. Mata robot menggunakan 
        tutup botol yang diberi warna.
      </p>

      <h2>Manfaat</h2>
      <p>
        Proyek ini mengajarkan kreativitas, keterampilan motorik, dan kesadaran 
        akan pentingnya mendaur ulang sampah menjadi barang berguna.
      </p>
    `,
  },
  "daun-botto-botto-obat-luka-luar-dalam-dalam": {
    id: 5,
    slug: "daun-botto-botto-obat-luka-luar-dalam-dalam",
    title: "Daun Botto Botto obat Luka Luar dalam dalam",
    school: "SDN BONTOMAEKU 2",
    author: "Ayudia Shakila",
    class: "Kelas 5A",
    date: "7 Juli 2022",
    thumbnail:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    media: [
      {
        type: "video",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail:
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
      },
    ],
    content: `
      <p class="text-lg font-medium text-gray-700 mb-6">
        Penelitian ini bertujuan untuk mengetahui manfaat daun botto botto (Chromolaena odorata) 
        sebagai obat tradisional untuk luka luar. Daun botto botto telah lama digunakan oleh 
        masyarakat setempat sebagai pengobatan alternatif.
      </p>

      <h2>Latar Belakang</h2>
      <p>
        Daun botto botto merupakan tanaman yang mudah ditemukan di lingkungan sekitar. 
        Masyarakat turun-temurun menggunakan daun ini untuk mengobati luka karena 
        dipercaya memiliki kandungan antiseptik alami.
      </p>

      <h2>Metode Penelitian</h2>
      <p>Penelitian dilakukan dengan beberapa tahap:</p>
      <ol>
        <li>Pengumpulan daun botto botto segar dari lingkungan sekitar</li>
        <li>Pencucian dan penghalusan daun menggunakan tumbukan</li>
        <li>Pengujian pada luka ringan dengan pengawasan guru dan orang tua</li>
        <li>Observasi perkembangan penyembuhan selama 7 hari</li>
      </ol>

      <h2>Hasil Penelitian</h2>
      <p>
        Berdasarkan pengamatan selama satu minggu, luka yang diolesi ekstrak daun botto botto 
        menunjukkan proses penyembuhan yang lebih cepat dibandingkan dengan luka tanpa pengobatan. 
        Tidak ditemukan efek samping atau iritasi pada kulit.
      </p>

      <h3>Manfaat yang Ditemukan:</h3>
      <ul>
        <li>Menghentikan pendarahan ringan</li>
        <li>Mengurangi pembengkakan</li>
        <li>Mencegah infeksi pada luka</li>
        <li>Mempercepat regenerasi sel kulit</li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>
        Daun botto botto terbukti efektif sebagai obat tradisional untuk luka luar ringan. 
        Namun, untuk luka yang serius tetap disarankan untuk mendapatkan perawatan medis 
        profesional. Penelitian ini menunjukkan bahwa kearifan lokal dalam pengobatan 
        tradisional memiliki dasar ilmiah yang dapat dipertanggungjawabkan.
      </p>
    `,
  },
  "membuat-robot-dari-kardus-bekas-dan-baru": {
    id: 6,
    slug: "membuat-robot-dari-kardus-bekas-dan-baru",
    title: "Membuat Robot dari Kardus Bekas dan Baru",
    school: "SD INPRES BONTOBILA",
    author: "Siti Nurhaliza",
    class: "Kelas 4A",
    date: "5 Juni 2023",
    thumbnail:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=800&fit=crop",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=800&fit=crop",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=800&q=80",
      },
      {
        type: "video",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail:
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
      },
    ],
    content: `
      <p class="text-lg font-medium text-gray-700 mb-6">
        Proyek kreatif membuat robot mainan dari kardus bekas dan barang-barang 
        daur ulang lainnya. Mengajarkan pentingnya kreativitas dan kepedulian lingkungan.
      </p>

      <h2>Bahan yang Digunakan</h2>
      <ul>
        <li>Kardus bekas berbagai ukuran</li>
        <li>Botol plastik bekas</li>
        <li>Tutup botol untuk roda</li>
        <li>Sedotan untuk lengan robot</li>
        <li>Cat dan spidol untuk dekorasi</li>
      </ul>

      <h2>Proses Pembuatan</h2>
      <p>
        Robot dibuat dengan menyusun kardus menjadi badan, kepala, dan kaki. 
        Lengan dibuat dari sedotan yang bisa digerakkan. Mata robot menggunakan 
        tutup botol yang diberi warna.
      </p>

      <h2>Manfaat</h2>
      <p>
        Proyek ini mengajarkan kreativitas, keterampilan motorik, dan kesadaran 
        akan pentingnya mendaur ulang sampah menjadi barang berguna.
      </p>
    `,
  },
};

// Helper function untuk convert ke array
export const getKreasiList = () => {
  return Object.entries(kreasiData).map(([slug, data]) => ({
    ...data,
    slug,
  }));
};
