"use client";
import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Photo {
  id: number;
  category: string;
  title: string;
  images: string[]; // Multiple images per activity
}

const GaleriFoto = () => {
  const [activeFilter, setActiveFilter] = useState<string>("SEMUA");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const photos: Photo[] = [
    {
      id: 1,
      category: "SD",
      title: "Jum'at Ibadah SDN Bontomaeru 2",
      images: [
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=800&fit=crop",
      ],
    },
    {
      id: 2,
      category: "SD",
      title: "Kegiatan Membaca di Taman",
      images: [
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=800&fit=crop",
      ],
    },
    {
      id: 3,
      category: "SD",
      title: "Belajar di Kelas",
      images: [
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=800&fit=crop",
      ],
    },
    {
      id: 4,
      category: "SD",
      title: "Kegiatan Pramuka",
      images: [
        "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=800&fit=crop",
      ],
    },
    {
      id: 5,
      category: "SMP",
      title: "Pawai Adat Nusantara",
      images: [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=800&fit=crop",
      ],
    },
    {
      id: 6,
      category: "TK",
      title: "Peralatan Modern",
      images: [
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=800&fit=crop",
      ],
    },
    {
      id: 7,
      category: "TK",
      title: "Kegiatan Fotografi",
      images: [
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=800&fit=crop",
      ],
    },
    {
      id: 8,
      category: "SMP",
      title: "Produk Kesehatan",
      images: [
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1505751104628-0d6beeef75da?w=800&h=800&fit=crop",
      ],
    },
    {
      id: 9,
      category: "TK",
      title: "Dekorasi Ruangan",
      images: [
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=800&fit=crop",
      ],
    },
    {
      id: 10,
      category: "SD",
      title: "Makanan Sehat",
      images: [
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=800&fit=crop",
      ],
    },
  ];

  const filters: string[] = ["SEMUA", "TK", "SD", "SMP"];

  const filteredPhotos: Photo[] =
    activeFilter === "SEMUA"
      ? photos
      : photos.filter((photo) => photo.category === activeFilter);

  const openModal = (photo: Photo, photoIndex: number) => {
    setSelectedPhoto(photo);
    setCurrentPhotoIndex(photoIndex);
    setCurrentImageIndex(0); // Start from first image
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    if (!selectedPhoto) return;

    if (currentImageIndex < selectedPhoto.images.length - 1) {
      // Next image in same activity
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      // Move to next activity
      const nextPhotoIndex = (currentPhotoIndex + 1) % filteredPhotos.length;
      setCurrentPhotoIndex(nextPhotoIndex);
      setSelectedPhoto(filteredPhotos[nextPhotoIndex]);
      setCurrentImageIndex(0);
    }
  };

  const handlePreviousImage = () => {
    if (!selectedPhoto) return;

    if (currentImageIndex > 0) {
      // Previous image in same activity
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      // Move to previous activity
      const prevPhotoIndex =
        (currentPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
      setCurrentPhotoIndex(prevPhotoIndex);
      setSelectedPhoto(filteredPhotos[prevPhotoIndex]);
      setCurrentImageIndex(filteredPhotos[prevPhotoIndex].images.length - 1);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;

      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        handlePreviousImage();
      } else if (e.key === "ArrowRight") {
        handleNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhoto, currentPhotoIndex, currentImageIndex, filteredPhotos]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedPhoto]);

  return (
    <div className="min-h-screen py-12 px-4 lg:mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          <span className="inline-block border-t-2 border-blue-400 pt-2 mr-4"></span>
          FOTO KEGIATAN SEKOLAHKU
          <span className="inline-block border-t-2 border-blue-400 pt-2 ml-4"></span>
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[#046DC2] text-white shadow rounded-full"
                  : "bg-white text-gray-700 hover:bg-gray-100 rounded-full"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openModal(photo, index)}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square h-64 w-full"
            >
              {/* Image */}
              <img
                src={photo.images[0]}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col items-center justify-center p-6">
                <h3 className="text-white text-xl font-bold text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 mb-3">
                  {photo.title}
                </h3>
                <button className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:text-white">
                  Lihat Foto
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 p-4"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50 bg-black bg-opacity-50 rounded-full p-2"
          >
            <X size={24} />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePreviousImage();
            }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-50 bg-black bg-opacity-50 rounded-full p-2"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNextImage();
            }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-50 bg-black bg-opacity-50 rounded-full p-2"
          >
            <ChevronRight size={40} />
          </button>

          {/* Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full flex flex-col items-center"
          >
            {/* Image */}
            <div className="relative w-full flex items-center justify-center mb-3">
              <img
                src={selectedPhoto.images[currentImageIndex]}
                alt={selectedPhoto.title}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Image Counter & Caption */}
            <div className="bg-white rounded-lg px-4 py-3 shadow-lg max-w-md w-full">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-500 font-medium">
                  {currentImageIndex + 1} / {selectedPhoto.images.length}
                </span>
                {selectedPhoto.images.length > 1 && (
                  <div className="flex gap-1">
                    {selectedPhoto.images.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${
                          idx === currentImageIndex
                            ? "bg-blue-500 w-4"
                            : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
              <h3 className="text-sm font-semibold text-gray-800 text-center">
                {selectedPhoto.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GaleriFoto;
