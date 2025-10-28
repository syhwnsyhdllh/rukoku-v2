"use client";
import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  User,
  School,
  Tag,
  Ticket,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

// WhatsApp Icon Component
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

interface MediaItem {
  type: "image" | "video";
  url: string;
  thumbnail?: string;
}

interface EventDetailProps {
  // Basic Info
  title: string;
  category?: string;

  // Date & Time
  startDate: string;
  endDate?: string;
  startTime?: string;
  endTime?: string;
  timezone?: string;

  // Location
  location: string;
  locationUrl?: string;

  // Organizer Info
  organizer?: string;
  organizerLogo?: string;
  school?: string;

  // Media
  posterImage?: string;
  media?: MediaItem[];

  // Content
  description: string | React.ReactNode;

  // Price Info
  price?: string; // "Gratis" or "Rp 50.000"
  isPaid?: boolean; // true = berbayar, false = gratis

  // Additional Info
  ticketUrl?: string;
  registrationUrl?: string;

  // Type
  type?: "agenda-parenting" | "event-sekolah" | "general";
  backUrl?: string;
}

const EventDetailComponent: React.FC<EventDetailProps> = ({
  title,
  category,
  startDate,
  endDate,
  startTime,
  endTime,
  timezone = "WIB",
  location,
  locationUrl,
  organizer,
  school,
  posterImage,
  media = [],
  description,
  price,
  isPaid = false,
  ticketUrl,
  registrationUrl,
  type = "general",
  backUrl = "/",
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  // Format tanggal
  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const displayDate = endDate
    ? `${formatDate(startDate)} - ${formatDate(endDate)}`
    : formatDate(startDate);

  const displayTime =
    startTime && endTime ? `${startTime} - ${endTime} ${timezone}` : null;

  // Share functions
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);

  const shareToFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    window.open(facebookUrl, "_blank", "width=600,height=400");
  };

  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
    window.open(twitterUrl, "_blank", "width=600,height=400");
  };

  const shareToWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
    window.open(whatsappUrl, "_blank");
  };

  const openLightbox = (index: number) => {
    setCurrentMediaIndex(index);
    setLightboxOpen(true);
  };

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % media.length);
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      {/* Top Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-sm bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href={backUrl}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Kembali</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Sidebar - Share Buttons (Desktop) */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-28 space-y-4">
              <p className="text-sm font-semibold text-gray-700 mb-3">
                Bagikan
              </p>

              <button
                onClick={shareToFacebook}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                aria-label="Bagikan ke Facebook"
              >
                <Facebook className="w-5 h-5" />
              </button>

              <button
                onClick={shareToTwitter}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors shadow-md hover:shadow-lg"
                aria-label="Bagikan ke Twitter"
              >
                <Twitter className="w-5 h-5" />
              </button>

              <button
                onClick={shareToWhatsApp}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors shadow-md hover:shadow-lg"
                aria-label="Bagikan ke WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-7">
            <article className="overflow-hidden">
              {/* Poster Image */}
              {posterImage && (
                <div className="relative w-full aspect-[16/9] rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden mb-6">
                  <img
                    src={posterImage}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                  {category && (
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-blue-700 text-sm font-bold rounded-full shadow-lg">
                        <Tag className="w-4 h-4" />
                        {category}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Content */}
              <div className="p-4 sm:p-6">
                {/* Title */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950 mb-6 leading-tight">
                  {title}
                </h1>

                {/* Description */}
                <div className="prose prose-lg max-w-none mb-8">
                  <style jsx global>{`
                    .prose {
                      color: #374151;
                    }
                    .prose p {
                      margin-bottom: 1.25em;
                      line-height: 1.75;
                    }
                  `}</style>
                  {typeof description === "string" ? (
                    <p className="text-gray-700 leading-relaxed">
                      {description}
                    </p>
                  ) : (
                    description
                  )}
                </div>

                {/* Gallery (jika ada) */}
                {media.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-blue-950 mb-4">
                      Galeri
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {media.map((item, index) => (
                        <div
                          key={index}
                          className="relative aspect-video rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all"
                          onClick={() => openLightbox(index)}
                        >
                          {item.type === "video" ? (
                            <div className="relative w-full h-full">
                              <img
                                src={item.thumbnail || posterImage}
                                alt={`Media ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                                  <div className="w-0 h-0 border-l-8 border-l-blue-600 border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <img
                              src={item.url}
                              alt={`Media ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mobile Share Buttons */}
                <div className="lg:hidden mt-8 pt-6 border-t-2 border-gray-100">
                  <h3 className="text-lg font-bold text-blue-950 mb-4">
                    Bagikan Event
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={shareToFacebook}
                      className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      <Facebook className="w-4 h-4" />
                      <span>Facebook</span>
                    </button>
                    <button
                      onClick={shareToTwitter}
                      className="flex items-center gap-2 px-4 py-2.5 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors font-medium"
                    >
                      <Twitter className="w-4 h-4" />
                      <span>Twitter</span>
                    </button>
                    <button
                      onClick={shareToWhatsApp}
                      className="flex items-center gap-2 px-4 py-2.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </main>

          {/* Right Sidebar - Event Info */}
          <aside className="lg:col-span-4">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden sticky top-28">
              <div className="p-6 space-y-6">
                <h5 className="text-lg font-semibold text-blue-950">
                  Info Event
                </h5>

                {/* Tanggal */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 font-medium mb-1">
                      Tanggal
                    </p>
                    <p className="text-base font-bold text-blue-950">
                      {displayDate}
                    </p>
                  </div>
                </div>

                {/* Waktu */}
                {displayTime && (
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 font-medium mb-1">
                        Waktu
                      </p>
                      <p className="text-base font-bold text-blue-950">
                        {displayTime}
                      </p>
                    </div>
                  </div>
                )}

                {/* Lokasi */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 font-medium mb-1">
                      Lokasi
                    </p>
                    {locationUrl ? (
                      <a
                        href={locationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                      >
                        {location}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <p className="text-base font-bold text-blue-950">
                        {location}
                      </p>
                    )}
                  </div>
                </div>

                {/* Penyelenggara */}
                {organizer && (
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <User className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 font-medium mb-1">
                        Penyelenggara
                      </p>
                      <p className="text-base font-bold text-blue-950">
                        {organizer}
                      </p>
                    </div>
                  </div>
                )}

                {/* Price */}
                {price && (
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        isPaid ? "bg-amber-100" : "bg-emerald-100"
                      }`}
                    >
                      <Ticket
                        className={`w-6 h-6 ${
                          isPaid ? "text-amber-600" : "text-emerald-600"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 font-medium mb-1">
                        Harga
                      </p>
                      <p
                        className={`text-base font-bold ${
                          isPaid ? "text-amber-600" : "text-emerald-600"
                        }`}
                      >
                        {price}
                      </p>
                    </div>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="pt-4 space-y-3">
                  {ticketUrl && (
                    <a
                      href={ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3.5 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                    >
                      Beli Tiket Sekarang
                    </a>
                  )}
                  {registrationUrl && (
                    <a
                      href={registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-3.5 px-6 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                    >
                      Daftar Sekarang
                    </a>
                  )}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && media.length > 0 && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="relative w-full h-full flex items-center justify-center px-4 sm:px-16">
            {media.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevMedia();
                  }}
                  className="absolute left-4 text-white hover:text-gray-300 z-50"
                >
                  <ChevronLeft className="w-12 h-12" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextMedia();
                  }}
                  className="absolute right-4 text-white hover:text-gray-300 z-50"
                >
                  <ChevronRight className="w-12 h-12" />
                </button>
              </>
            )}

            <div
              className="max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {media[currentMediaIndex].type === "video" ? (
                <div className="aspect-video w-full">
                  <iframe
                    src={media[currentMediaIndex].url}
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <img
                  src={media[currentMediaIndex].url}
                  alt={`Media ${currentMediaIndex + 1}`}
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                />
              )}
              <div className="text-center text-white mt-4 text-sm">
                {currentMediaIndex + 1} / {media.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetailComponent;
