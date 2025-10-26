import Image from "next/image";

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  badge?: string;
  badgePosition?: "overlay" | "bottom";
  time?: string;
  metadata: {
    label?: string;
    value: string;
    subLabel?: string;
  };
  showMetadataLabel?: boolean;
  onClick?: () => void;
}

const EventCard = ({
  image,
  title,
  date,
  badge,
  badgePosition = "bottom",
  time,
  metadata,
  showMetadataLabel = true,
  onClick,
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
        {badge && badgePosition === "overlay" && (
          <div className="absolute top-3 right-3 z-10">
            <span className="font-semibold text-white bg-green-600/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs shadow-lg">
              {badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 md:p-5 space-y-3 flex flex-col flex-grow">
        {/* Title with Fixed Height */}
        <h3 className="font-semibold text-gray-800 text-base md:text-lg line-clamp-2 group-hover:text-blue-600 transition-colors min-h-[3rem] md:min-h-[3.5rem]">
          {title}
        </h3>

        {/* Date & Badge/Time Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between text-xs md:text-sm gap-2">
          <span className="text-gray-500 flex-shrink-0">{date}</span>

          {/* Bottom Badge or Time */}
          {badgePosition === "bottom" && badge && (
            <span className="font-semibold text-green-600 bg-green-50 px-2.5 md:px-3 py-1 rounded-full text-xs whitespace-nowrap">
              {badge}
            </span>
          )}

          {time && (
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
          )}
        </div>

        {/* Metadata (Organizer/Speaker Info) */}
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
      </div>
    </div>
  );
};

export default EventCard;
