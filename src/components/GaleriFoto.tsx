"use client";
import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Photo {
  id: number;
  category: string;
  title: string;
  images: string[];
}

interface GaleriFotoProps {
  photos: Photo[];
  filters: string[];
  defaultFilter?: string;
}

const GaleriFoto = ({
  photos,
  filters,
  defaultFilter = "SEMUA",
}: GaleriFotoProps) => {
  const [activeFilter, setActiveFilter] = useState<string>(defaultFilter);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const filteredPhotos: Photo[] =
    activeFilter === "SEMUA"
      ? photos
      : photos.filter((photo) => photo.category === activeFilter);

  const openModal = (photo: Photo, photoIndex: number) => {
    setSelectedPhoto(photo);
    setCurrentPhotoIndex(photoIndex);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    if (!selectedPhoto) return;

    if (currentImageIndex < selectedPhoto.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      const nextPhotoIndex = (currentPhotoIndex + 1) % filteredPhotos.length;
      setCurrentPhotoIndex(nextPhotoIndex);
      setSelectedPhoto(filteredPhotos[nextPhotoIndex]);
      setCurrentImageIndex(0);
    }
  };

  const handlePreviousImage = () => {
    if (!selectedPhoto) return;

    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
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
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Filter Buttons - Always Visible */}
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

// ============================================
// TYPE DEFINITION
// ============================================
export type { Photo };
