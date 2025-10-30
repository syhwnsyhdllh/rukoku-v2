import { School, BookOpen, Building2, GraduationCap } from "lucide-react";

interface SchoolStat {
  id: number;
  label: string;
  count: number;
  icon: "tk" | "sd" | "smp" | "sma";
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
      icon: "sd",
      iconColor: "text-red-400",
      bgColor: "bg-red-50",
    },
    {
      id: 3,
      label: "Sekolah Dasar Inpres",
      count: 200,
      icon: "sd",
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
      case "sd":
        return <BookOpen {...iconProps} />;
      case "smp":
        return <Building2 {...iconProps} />;
      case "sma":
        return <GraduationCap {...iconProps} />;
      default:
        return <School {...iconProps} />;
    }
  };

  return (
    <div className="w-full min-h-screen  px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {schoolStats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-2xl shadow hover:shadow-md transition-shadow duration-200 p-6 pb-3"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <p className="text-sm text-gray-600 font-normal mb-2">
                    {stat.label}
                  </p>
                  <h3 className="text-4xl font-bold text-blue-950">
                    {stat.count}
                  </h3>
                </div>
                <div
                  className={`${stat.bgColor} w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0`}
                >
                  {getIcon(stat.icon, stat.iconColor)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolStats;
