import { School, BookOpen, Building2, GraduationCap } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface SchoolStat {
  id: number;
  label: string;
  count: number;
  icon: "tk" | "sdn" | "sdi" | "smp";
  iconColor: string;
  bgColor: string;
}

interface SchoolStatsProps {
  stats?: SchoolStat[];
}

const SchoolStats = ({ stats }: SchoolStatsProps) => {
  const defaultStats: SchoolStat[] = [
    {
      id: 1,
      label: "Taman Kanak-Kanak",
      count: 100,
      icon: "tk",
      iconColor: "text-cyan-500",
      bgColor: "bg-cyan-50",
    },
    {
      id: 2,
      label: "Sekolah Dasar Negeri",
      count: 100,
      icon: "sdn",
      iconColor: "text-red-400",
      bgColor: "bg-red-50",
    },
    {
      id: 3,
      label: "Sekolah Dasar Inpres",
      count: 200,
      icon: "sdi",
      iconColor: "text-orange-400",
      bgColor: "bg-orange-50",
    },
    {
      id: 4,
      label: "Sekolah Menengah Pertama",
      count: 100,
      icon: "smp",
      iconColor: "text-indigo-400",
      bgColor: "bg-indigo-50",
    },
  ];

  const schoolStats = stats || defaultStats;

  const getIcon = (iconType: string, iconColor: string) => {
    const iconProps = {
      size: 28,
      strokeWidth: 2,
      className: iconColor,
    };

    switch (iconType) {
      case "tk":
        return <School {...iconProps} />;
      case "sdn":
        return <BookOpen {...iconProps} />;
      case "sdi":
        return <Building2 {...iconProps} />;
      case "smp":
        return <GraduationCap {...iconProps} />;
      default:
        return <School {...iconProps} />;
    }
  };

  // Mobile & Tablet Portrait Card
  const StatCardMobile = ({ stat }: { stat: SchoolStat }) => (
    <div className="bg-blue-100/20 rounded-3xl hover:shadow-md transition-shadow duration-200 p-6 h-full z-10">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 font-normal mb-2">{stat.label}</p>
          <h3 className="text-4xl font-bold text-blue-950">{stat.count}</h3>
        </div>
        <div
          className={`${stat.bgColor} w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0`}
        >
          {getIcon(stat.icon, stat.iconColor)}
        </div>
      </div>
    </div>
  );

  // Desktop Card (label di bawah)
  const StatCardDesktop = ({ stat }: { stat: SchoolStat }) => (
    <div className="bg-blue-100/20 rounded-3xl xl:hover:shadow-md transition-shadow duration-200 p-6 h-full z-10">
      <div className="flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-4xl font-bold text-blue-950">{stat.count}</h3>
          <div
            className={`${stat.bgColor} w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0`}
          >
            {getIcon(stat.icon, stat.iconColor)}
          </div>
        </div>
        <p className="text-sm text-gray-600 font-normal">{stat.label}</p>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {/* Mobile & Tablet Portrait: Carousel */}
      <div className="lg:hidden pl-4">
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {schoolStats.map((stat) => (
              <CarouselItem
                key={stat.id}
                className="pl-2 basis-[90%] sm:basis-[31%]"
              >
                <StatCardMobile stat={stat} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Desktop: 4 columns grid */}
      <div className="hidden lg:block max-w-7xl mx-auto px-20">
        <div className="grid grid-cols-4 gap-3">
          {schoolStats.map((stat) => (
            <StatCardDesktop key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolStats;
