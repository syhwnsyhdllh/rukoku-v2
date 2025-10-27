"use client";
import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  ArrowLeft,
  Calendar,
  User,
  Download,
  GraduationCap,
  X,
  ChevronLeft,
  ChevronRight,
  School,
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

interface ArticleDetailProps {
  category?: string;
  school?: string;
  title: string;
  date: string;
  author: string;
  class?: string;
  featuredImage?: string;
  media?: MediaItem[];
  content: string | React.ReactNode;
  downloadUrl?: string;
  downloadFileName?: string;
  type?: "blog" | "materi" | "kreasi";
  backUrl?: string;
}

const DetailComponent: React.FC<ArticleDetailProps> = ({
  category,
  school,
  title,
  date,
  author,
  class: studentClass,
  featuredImage,
  media = [],
  content,
  downloadUrl,
  downloadFileName = "materi.pdf",
  type = "blog",
  backUrl = "/blog",
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

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

  const handleDownload = () => {
    if (!downloadUrl) return;
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = downloadFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

  // Tidak tampilkan badge untuk kreasi
  const displayCategory = type === "kreasi" ? null : category;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
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
          <main className="lg:col-span-11">
            <article className="overflow-hidden">
              {/* Featured Image or Media Gallery */}
              {type === "kreasi" && media.length > 0 ? (
                <div className="mb-8">
                  {/* Main Media - Tanpa Badge */}
                  <div className="relative w-full aspect-video rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden mb-4">
                    {media[0].type === "video" ? (
                      <iframe
                        src={media[0].url}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <img
                        src={media[0].url}
                        alt={title}
                        className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() => openLightbox(0)}
                      />
                    )}
                  </div>

                  {/* Thumbnail Grid */}
                  {media.length > 1 && (
                    <div className="grid grid-cols-4 gap-2">
                      {media.slice(1, 5).map((item, index) => (
                        <div
                          key={index + 1}
                          className="relative aspect-video rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all"
                          onClick={() => openLightbox(index + 1)}
                        >
                          {item.type === "video" ? (
                            <div className="relative w-full h-full">
                              <img
                                src={item.thumbnail || media[0].url}
                                alt={`Media ${index + 2}`}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                                  <div className="w-0 h-0 border-l-8 border-l-blue-600 border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <img
                              src={item.url}
                              alt={`Media ${index + 2}`}
                              className="w-full h-full object-cover"
                            />
                          )}
                          {index === 3 && media.length > 5 && (
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-xl font-bold">
                              +{media.length - 5}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                /* Regular Featured Image for Blog/Materi */
                featuredImage && (
                  <div className="relative w-full aspect-[21/12] sm:aspect-[16/8] rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden mb-8">
                    <img
                      src={featuredImage}
                      alt={title}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    {displayCategory && (
                      <div className="absolute lg:top-6 lg:left-6 left-3 top-3">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/75 backdrop-blur-sm text-blue-700 text-xs lg:text-sm font-bold rounded-full shadow-lg lg:border lg:border-blue-100">
                          <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                          {displayCategory}
                        </span>
                      </div>
                    )}
                  </div>
                )
              )}

              {/* Header Content */}
              <div className="p-4 sm:p-8 lg:p-12">
                {/* Title */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950 mb-6 leading-tight">
                  {title}
                </h1>

                {/* Meta Info with Icons */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 pb-8 mb-8 border-b-2 border-gray-100">
                  {/* Tanggal */}
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">
                        Tanggal
                      </p>
                      <time
                        dateTime={date}
                        className="text-sm font-semibold text-blue-950"
                      >
                        {date}
                      </time>
                    </div>
                  </div>

                  <div className="hidden sm:block w-px h-10 bg-gray-200"></div>

                  {/* Penulis */}
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <User className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">
                        Penulis
                      </p>
                      <span className="text-sm font-semibold text-blue-950">
                        {author}
                      </span>
                    </div>
                  </div>

                  {/* Sekolah (Only for Kreasi) */}
                  {type === "kreasi" && school && (
                    <>
                      <div className="hidden sm:block w-px h-10 bg-gray-200"></div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                          <School className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-medium">
                            Sekolah
                          </p>
                          <span className="text-sm font-semibold text-blue-950">
                            {school}
                          </span>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Kelas (Only for Kreasi) */}
                  {type === "kreasi" && studentClass && (
                    <>
                      <div className="hidden sm:block w-px h-10 bg-gray-200"></div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <GraduationCap className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-medium">
                            Kelas
                          </p>
                          <span className="text-sm font-semibold text-blue-950">
                            {studentClass}
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="prose prose-lg sm:prose-xl max-w-none">
                  <style jsx global>{`
                    .prose {
                      color: #374151;
                    }
                    .prose p {
                      margin-bottom: 1.5em;
                      line-height: 1.8;
                    }
                    .prose h2 {
                      color: #1f2937;
                      font-weight: 700;
                      margin-top: 2em;
                      margin-bottom: 1em;
                      font-size: 1.75em;
                    }
                    .prose h3 {
                      color: #1f2937;
                      font-weight: 600;
                      margin-top: 1.5em;
                      margin-bottom: 0.75em;
                    }
                    .prose ul,
                    .prose ol {
                      margin: 1.5em 0;
                      padding-left: 1.5em;
                    }
                    .prose li {
                      margin: 0.5em 0;
                    }
                    .prose strong {
                      color: #1f2937;
                      font-weight: 600;
                    }
                    .prose img {
                      border-radius: 1rem;
                      margin: 2em 0;
                      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    }
                    .prose a {
                      color: #2563eb;
                      text-decoration: none;
                      font-weight: 500;
                    }
                    .prose a:hover {
                      text-decoration: underline;
                    }
                  `}</style>
                  {typeof content === "string" ? (
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                  ) : (
                    content
                  )}
                </div>

                {/* Download Button (Materi Only) */}
                {type === "materi" && downloadUrl && (
                  <div className="mt-12 pt-8 border-t-2 border-gray-100">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 border-2 border-blue-100">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                          <Download className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-blue-950 mb-1">
                            Download Materi Lengkap
                          </h3>
                          <p className="text-sm text-gray-600">
                            File:{" "}
                            <span className="font-semibold">
                              {downloadFileName}
                            </span>
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={handleDownload}
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-3 group"
                      >
                        <Download className="w-5 h-5 group-hover:animate-bounce" />
                        <span>Download Sekarang</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Mobile Share Buttons */}
                <div className="lg:hidden mt-12 pt-8 border-t-2 border-gray-100">
                  <h3 className="text-lg font-bold text-blue-950 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>
                    </span>
                    Bagikan {type === "kreasi" ? "Kreasi" : "Artikel"}
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
        </div>
      </div>

      {/* Lightbox Modal for Media Gallery */}
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
            {/* Previous Button */}
            {media.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevMedia();
                }}
                className="absolute left-4 text-white hover:text-gray-300 z-50"
              >
                <ChevronLeft className="w-12 h-12" />
              </button>
            )}

            {/* Media Content */}
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

              {/* Counter */}
              <div className="text-center text-white mt-4 text-sm">
                {currentMediaIndex + 1} / {media.length}
              </div>
            </div>

            {/* Next Button */}
            {media.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextMedia();
                }}
                className="absolute right-4 text-white hover:text-gray-300 z-50"
              >
                <ChevronRight className="w-12 h-12" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailComponent;
