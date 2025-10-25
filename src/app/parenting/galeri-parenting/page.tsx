"use client";
import GaleriFoto, { Photo } from "@/components/GaleriFoto";
import HeroSection from "@/components/HeroSection";

const GaleriParenting = () => {
  const parentingPhotos: Photo[] = [
    {
      id: 1,
      category: "Workshop",
      title: "Workshop Pola Asuh Anak Usia Dini",
      images: [
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=800&fit=crop",
      ],
    },
    {
      id: 2,
      category: "Seminar",
      title: "Seminar Komunikasi Efektif dengan Anak",
      images: [
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=800&fit=crop",
      ],
    },
    {
      id: 3,
      category: "Workshop",
      title: "Pelatihan Mengelola Emosi Anak",
      images: [
        "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=800&fit=crop",
      ],
    },
    {
      id: 4,
      category: "Talkshow",
      title: "Talkshow Parenting di Era Digital",
      images: [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop",
      ],
    },
    {
      id: 5,
      category: "Workshop",
      title: "Workshop Mendampingi Belajar Anak di Rumah",
      images: [
        "https://images.unsplash.com/photo-1503676382389-4809596d5290?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=800&fit=crop",
      ],
    },
    {
      id: 6,
      category: "Seminar",
      title: "Seminar Membangun Karakter Anak Sejak Dini",
      images: [
        "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop",
      ],
    },
    {
      id: 7,
      category: "Workshop",
      title: "Pelatihan Mengatasi Tantrum pada Anak",
      images: [
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=800&h=800&fit=crop",
      ],
    },
    {
      id: 8,
      category: "Talkshow",
      title: "Talkshow Pentingnya Quality Time Bersama Keluarga",
      images: [
        "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=800&fit=crop",
      ],
    },
    {
      id: 9,
      category: "Workshop",
      title: "Workshop Stimulasi Tumbuh Kembang Optimal",
      images: [
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=800&h=800&fit=crop",
      ],
    },
    {
      id: 10,
      category: "Seminar",
      title: "Seminar Memahami Gaya Belajar Anak",
      images: [
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=800&fit=crop",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Galeri Kegiatan Parenting"
        description="Dokumentasi kegiatan parenting yang diselenggarakan untuk membantu orang tua dalam mengasuh dan mendidik anak dengan lebih baik."
        imageSrc="/images/ilustrasi/parenting.png"
        imageAlt="Galeri Parenting"
      />

      <GaleriFoto
        photos={parentingPhotos}
        filters={["SEMUA", "Workshop", "Seminar", "Talkshow"]}
      />
    </div>
  );
};

export default GaleriParenting;
