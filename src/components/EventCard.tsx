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
  onClick,
}: EventCardProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
    >
      {/* Image with Optional Overlay Badge */}
      <div className="relative h-40 md:h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
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
      <div className="p-3 md:p-5 space-y-2 md:space-y-3">
        {/* Title */}
        {/* Title - Fixed Height */}
        <h3 className="font-semibold text-gray-800 text-sm md:text-lg line-clamp-2 group-hover:text-blue-600 transition-colors min-h-[2.5rem] md:min-h-[3.5rem]">
          {title}
        </h3>

        {/* Date & Badge/Time Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between text-xs md:text-sm gap-2">
          <span className="text-gray-500">{date}</span>

          {/* Bottom Badge or Time */}
          {badgePosition === "bottom" && badge && (
            <span className="font-semibold text-green-600 bg-green-50 px-2 md:px-3 py-1 rounded-full text-xs">
              {badge}
            </span>
          )}

          {time && (
            <span className="font-semibold text-blue-600 bg-blue-50 px-2 md:px-3 py-1 rounded-full text-xs flex items-center gap-1">
              <svg
                className="w-3 h-3"
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
              {time}
            </span>
          )}
        </div>

        {/* Metadata (Organizer/Speaker Info) */}
        <div className="pt-2 md:pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-400 mb-1">{metadata.label}</p>
          <p className="text-xs md:text-sm text-gray-700 font-medium line-clamp-1">
            {metadata.value}
          </p>
          {metadata.subLabel && (
            <p className="text-xs text-gray-500 mt-0.5">{metadata.subLabel}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;

// ============================================
// EXAMPLE USAGE - HALAMAN KEGIATAN SEKOLAH
// ============================================
/*
import EventCard from "@/components/EventCard";

const activities = [
  {
    id: 1,
    image: "/images/kegiatan/english-contest.jpg",
    title: "English Speech Contest",
    date: "10 - 17 Juli 2023",
    price: "Gratis",
    organizer: "Kejaksaan Negeri 2 & Dinas Pendidikan Kab. Gowa",
  },
  // ... more activities
];

// Render:
{activities.map((activity) => (
  <EventCard
    key={activity.id}
    image={activity.image}
    title={activity.title}
    date={activity.date}
    badge={activity.price}
    badgePosition="bottom"
    metadata={{
      label: "Organizer",
      value: activity.organizer,
    }}
    onClick={() => console.log("Clicked:", activity.title)}
  />
))}
*/

// ============================================
// EXAMPLE USAGE - HALAMAN PARENTING (With Time & Speaker)
// ============================================
/*
const parentingEvents = [
  {
    id: 1,
    image: "/images/parenting/workshop.jpg",
    title: "Workshop Pola Asuh Anak",
    date: "15 Oktober 2023",
    time: "09:00 - 12:00",
    badge: "Gratis",
    speaker: "Dr. Budi Santoso",
    position: "Psikolog Anak",
  },
  // ... more events
];

// Render:
{parentingEvents.map((event) => (
  <EventCard
    key={event.id}
    image={event.image}
    title={event.title}
    date={event.date}
    badge={event.badge}
    badgePosition="overlay"
    time={event.time}
    metadata={{
      label: "Pembicara",
      value: event.speaker,
      subLabel: event.position,
    }}
  />
))}
*/
