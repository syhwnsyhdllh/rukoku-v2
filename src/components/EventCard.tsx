import Image from "next/image";

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  price?: string; // Optional - Can be "Gratis" or "Berbayar"
  pricePosition?: "overlay" | "bottom";
  time?: string;
  showMetadataLabel?: boolean;
  metadata?: {
    label: string;
    value: string;
    subLabel?: string;
  };
  onClick?: () => void;
  variant?: "default" | "school"; // Layout variant
}

const EventCard = ({
  image,
  title,
  date,
  price,
  pricePosition = "bottom",
  time,
  metadata,
  showMetadataLabel = true,
  onClick,
  variant = "default",
}: EventCardProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col h-full"
    >
      {/* Image with Optional Overlay Badge */}
      <div className="relative w-full pt-[60%] bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Overlay Badge (Top Right) */}
        {price && pricePosition === "overlay" && (
          <div className="absolute top-3 right-3 z-10">
            <span
              className={`font-semibold text-white backdrop-blur-sm px-3 py-1.5 rounded-full text-xs shadow-lg ${
                price === "Gratis" || price.toLowerCase().includes("gratis")
                  ? "bg-green-600/90"
                  : "bg-blue-600/90"
              }`}
            >
              {price}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 md:p-5 space-y-3 flex flex-col flex-grow">
        {/* School Variant: Title → Date → Time */}
        {variant === "school" ? (
          <>
            {/* Title at top */}
            <h3 className="font-semibold text-gray-800 text-base md:text-lg line-clamp-2 group-hover:text-blue-600 transition-colors min-h-[3rem] md:min-h-[3.5rem]">
              {title}
            </h3>

            {/* Date below title */}
            <div className="text-xs md:text-sm text-gray-500">
              <span className="line-clamp-1">{date}</span>
            </div>

            {/* Time at bottom */}
            {time && (
              <div className="flex items-center gap-2">
                <span className="font-semibold text-blue-600 bg-blue-50 px-2.5 md:px-3 py-1 rounded-full text-xs flex items-center gap-1.5 whitespace-nowrap">
                  <svg
                    className="w-3.5 h-3.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{time}</span>
                </span>
              </div>
            )}
          </>
        ) : (
          /* Default Variant: Title → Date → Time */
          <>
            {/* Title with Fixed Height */}
            <h3 className="font-semibold text-gray-800 text-base md:text-lg line-clamp-2 group-hover:text-blue-600 transition-colors min-h-[3rem] md:min-h-[3.5rem]">
              {title}
            </h3>

            {/* Date */}
            <div className="text-xs md:text-sm text-gray-500">
              <span className="line-clamp-2 leading-relaxed">{date}</span>
            </div>

            {/* Time Badge below date */}
            {time && (
              <div className="flex items-center gap-2">
                <span className="font-semibold text-blue-600 bg-blue-50 px-2.5 md:px-3 py-1 rounded-full text-xs flex items-center gap-1.5 whitespace-nowrap">
                  <svg
                    className="w-3.5 h-3.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{time}</span>
                </span>

                {/* Bottom Badge (if exists) */}
                {pricePosition === "bottom" && price && (
                  <span
                    className={`font-semibold px-2.5 md:px-3 py-1 rounded-full text-xs whitespace-nowrap ${
                      price === "Gratis"
                        ? "text-green-600 bg-green-50"
                        : "text-blue-600 bg-blue-50"
                    }`}
                  >
                    {price}
                  </span>
                )}
              </div>
            )}

            {/* Price Badge only (if no time) */}
            {!time && pricePosition === "bottom" && price && (
              <div className="flex items-center">
                <span
                  className={`font-semibold px-2.5 md:px-3 py-1 rounded-full text-xs whitespace-nowrap ${
                    price === "Gratis"
                      ? "text-green-600 bg-green-50"
                      : "text-blue-600 bg-blue-50"
                  }`}
                >
                  {price}
                </span>
              </div>
            )}
          </>
        )}

        {/* Metadata (Organizer/Speaker Info) */}
        {metadata && (
          <div className="pt-3 border-t border-gray-100 mt-auto">
            {showMetadataLabel && metadata.label && (
              <p className="text-xs text-gray-400 mb-1">{metadata.label}</p>
            )}
            <p className="text-sm text-gray-700 font-medium line-clamp-1">
              {metadata.value}
            </p>
            {metadata.subLabel && (
              <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                {metadata.subLabel}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
