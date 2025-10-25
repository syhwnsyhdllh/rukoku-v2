"use client";
import GaleriFoto, { Photo } from "@/components/GaleriFoto";
import HeroSection from "@/components/HeroSection";

const GaleriSekolah = () => {
  const schoolPhotos: Photo[] = [
    {
      id: 1,
      category: "SD",
      title: "Jum'at Ibadah SDN Bontomaeru 2",
      images: [
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=800&fit=crop",
      ],
    },
    {
      id: 2,
      category: "SD",
      title: "Kegiatan Membaca di Perpustakaan",
      images: [
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=800&fit=crop",
      ],
    },
    {
      id: 3,
      category: "SD",
      title: "Pembelajaran di Kelas",
      images: [
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=800&fit=crop",
      ],
    },
    {
      id: 4,
      category: "SD",
      title: "Kegiatan Pramuka Siswa SD",
      images: [
        "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&h=800&fit=crop",
      ],
    },
    {
      id: 5,
      category: "SMP",
      title: "Pawai Budaya Nusantara",
      images: [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=800&fit=crop",
      ],
    },
    {
      id: 6,
      category: "TK",
      title: "Bermain dan Belajar di Taman Kanak-kanak",
      images: [
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1560785496-3c9d27877182?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=800&fit=crop",
      ],
    },
    {
      id: 7,
      category: "TK",
      title: "Kegiatan Seni dan Kreativitas",
      images: [
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=800&fit=crop",
      ],
    },
    {
      id: 8,
      category: "SMP",
      title: "Praktikum Sains dan Teknologi",
      images: [
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1581093458791-9d42e3c4e3e8?w=800&h=800&fit=crop",
      ],
    },
    {
      id: 9,
      category: "TK",
      title: "Pengenalan Lingkungan Sekolah",
      images: [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=800&fit=crop",
      ],
    },
    {
      id: 10,
      category: "SD",
      title: "Olahraga dan Permainan Tradisional",
      images: [
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=800&fit=crop",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Galeri Sekolah"
        description="Dokumentasi kegiatan dan momen berharga dari berbagai jenjang pendidikan di sekolah kami."
        imageSrc="/images/ilustrasi/event.png"
        imageAlt="Galeri Sekolah"
      />

      <GaleriFoto
        photos={schoolPhotos}
        filters={["SEMUA", "TK", "SD", "SMP"]}
      />
    </div>
  );
};

export default GaleriSekolah;
