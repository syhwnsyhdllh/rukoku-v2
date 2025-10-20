"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const StatistikSection = () => {
  const [activeTab, setActiveTab] = useState("tkpaud");
  const [filter, setFilter] = useState<"all" | "siswa" | "siswi">("all");

  // Data untuk setiap tab
  const statisticsData = {
    tkpaud: {
      total: 403,
      barData: [
        { name: "Guru PNS", value: 150, color: "#fca5a5" },
        { name: "Guru Non PNS", value: 780, color: "#93c5fd" },
        { name: "Kepala Sekolah", value: 480, color: "#fde68a" },
        { name: "Pengawas", value: 120, color: "#d1d5db" },
        { name: "Penilik", value: 90, color: "#e5e7eb" },
      ],
      horizontalData: [
        { name: "TK/PAUD", siswa: 473, siswi: 100 },
        { name: "SD", siswa: 850, siswi: 350 },
        { name: "SMP", siswa: 280, siswi: 720 },
      ],
    },
    sd: {
      total: 285,
      barData: [
        { name: "Guru PNS", value: 220, color: "#fca5a5" },
        { name: "Guru Non PNS", value: 650, color: "#93c5fd" },
        { name: "Kepala Sekolah", value: 380, color: "#fde68a" },
        { name: "Pengawas", value: 95, color: "#d1d5db" },
        { name: "Penilik", value: 75, color: "#e5e7eb" },
      ],
      horizontalData: [
        { name: "TK/PAUD", siswa: 420, siswi: 180 },
        { name: "SD", siswa: 920, siswi: 280 },
        { name: "SMP", siswa: 350, siswi: 650 },
      ],
    },
    smp: {
      total: 168,
      barData: [
        { name: "Guru PNS", value: 180, color: "#fca5a5" },
        { name: "Guru Non PNS", value: 590, color: "#93c5fd" },
        { name: "Kepala Sekolah", value: 320, color: "#fde68a" },
        { name: "Pengawas", value: 85, color: "#d1d5db" },
        { name: "Penilik", value: 65, color: "#e5e7eb" },
      ],
      horizontalData: [
        { name: "TK/PAUD", siswa: 380, siswi: 220 },
        { name: "SD", siswa: 780, siswi: 420 },
        { name: "SMP", siswa: 420, siswi: 580 },
      ],
    },
  };

  const currentData = statisticsData[activeTab as keyof typeof statisticsData];

  // Simple Bar Chart Component
  const BarChart = ({
    data,
  }: {
    data: Array<{ name: string; value: number; color: string }>;
  }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [animated, setAnimated] = useState(false);
    const maxValue = Math.max(...data.map((d) => d.value));

    // Trigger animation on mount and when data changes
    useEffect(() => {
      setAnimated(false);
      const timer = setTimeout(() => setAnimated(true), 100);
      return () => clearTimeout(timer);
    }, [data]);

    // Generate Y-axis labels
    const yAxisMax = Math.ceil(maxValue / 200) * 200;
    const yAxisSteps = 5;
    const stepValue = yAxisMax / yAxisSteps;
    const yLabels = Array.from({ length: yAxisSteps + 1 }, (_, i) =>
      Math.round(stepValue * i)
    );

    return (
      <div className="w-full">
        {/* Chart Area */}
        <div className="relative h-[280px] sm:h-[320px] lg:h-[350px] flex">
          {/* Y-axis */}
          <div className="flex flex-col justify-between pr-2 sm:pr-3 text-xs sm:text-sm text-gray-600 font-medium py-2">
            {yLabels.reverse().map((label, i) => (
              <div key={i} className="leading-none">
                {label}
              </div>
            ))}
          </div>

          {/* Grid and Bars */}
          <div className="flex-1 relative">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between py-2">
              {yLabels.map((_, i) => (
                <div key={i} className="border-t border-gray-300"></div>
              ))}
            </div>

            {/* Bars Container */}
            <div className="absolute inset-0 flex items-end justify-around gap-2 sm:gap-3 lg:gap-4 px-2 sm:px-3 lg:px-4 pb-2">
              {data.map((item, index) => {
                const heightPercentage = (item.value / yAxisMax) * 100;
                const isHovered = hoveredIndex === index;

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center flex-1 relative group cursor-pointer h-full justify-end"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Bar */}
                    <div
                      className="w-full rounded-t-md border-2 relative"
                      style={{
                        height: animated ? `${heightPercentage}%` : "0%",
                        backgroundColor: item.color,
                        borderColor: item.color.replace("a5", "c0"),
                        minHeight: "5px",
                        transform: isHovered ? "scale(1.05)" : "scale(1)",
                        boxShadow: isHovered
                          ? "0 4px 12px rgba(0,0,0,0.15)"
                          : "none",
                        transition: animated
                          ? `height 1s ease-out ${
                              index * 0.1
                            }s, transform 0.3s ease, box-shadow 0.3s ease`
                          : "transform 0.3s ease, box-shadow 0.3s ease",
                      }}
                    >
                      {/* Tooltip on hover */}
                      {isHovered && (
                        <div className="absolute -top-12 sm:-top-14 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg shadow-xl z-10 min-w-max pointer-events-none">
                          <div className="font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1 whitespace-nowrap">
                            {item.name}
                          </div>
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            <div
                              className="w-3 h-3 sm:w-4 sm:h-4 rounded"
                              style={{ backgroundColor: item.color }}
                            ></div>
                            <span className="text-sm sm:text-base font-bold">
                              {item.value}
                            </span>
                          </div>
                          {/* Arrow */}
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* X-axis Labels */}
        <div className="flex justify-around gap-2 sm:gap-3 lg:gap-4 mt-2 pl-6 sm:pl-8 lg:pl-10 pr-2 sm:pr-3 lg:pr-4">
          {data.map((item, index) => (
            <div key={index} className="flex-1 text-center">
              <div className="text-[10px] sm:text-xs lg:text-sm text-gray-700 font-medium leading-tight">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Legend Filter Component
  const LegendFilter = () => {
    return (
      <div className="mb-4 sm:mb-6 flex justify-center gap-3 sm:gap-6 flex-wrap">
        <button
          onClick={() => setFilter(filter === "siswa" ? "all" : "siswa")}
          className={`flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-md transition-all text-sm ${
            filter === "siswa"
              ? "bg-emerald-100 ring-2 ring-emerald-500"
              : "hover:bg-gray-100"
          }`}
        >
          <div
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded ${
              filter === "siswi" ? "bg-gray-300" : "bg-emerald-500"
            }`}
          ></div>
          <span className="text-xs sm:text-sm font-medium">Siswa</span>
        </button>
        <button
          onClick={() => setFilter(filter === "siswi" ? "all" : "siswi")}
          className={`flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-md transition-all text-sm ${
            filter === "siswi"
              ? "bg-indigo-100 ring-2 ring-indigo-500"
              : "hover:bg-gray-100"
          }`}
        >
          <div
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded ${
              filter === "siswa" ? "bg-gray-300" : "bg-indigo-500"
            }`}
          ></div>
          <span className="text-xs sm:text-sm font-medium">Siswi</span>
        </button>
      </div>
    );
  };

  // Horizontal Bar Chart Component
  const HorizontalBarChart = ({
    data,
  }: {
    data: Array<{ name: string; siswa: number; siswi: number }>;
  }) => {
    const [animated, setAnimated] = useState(false);
    const [showText, setShowText] = useState(false);

    // Trigger animation on mount and when data changes
    useEffect(() => {
      setAnimated(false);
      setShowText(false);
      const timer = setTimeout(() => setAnimated(true), 100);
      const textTimer = setTimeout(() => setShowText(true), 900); // Show text after bar animation
      return () => {
        clearTimeout(timer);
        clearTimeout(textTimer);
      };
    }, [data, filter]);

    return (
      <div className="space-y-4 sm:space-y-6">
        {data.map((item, index) => {
          const total = item.siswa + item.siswi;
          const siswaPercentage = (item.siswa / total) * 100;
          const siswiPercentage = (item.siswi / total) * 100;

          // Calculate display width based on filter
          let siswaWidth = 0;
          let siswiWidth = 0;

          if (filter === "all") {
            siswaWidth = siswaPercentage;
            siswiWidth = siswiPercentage;
          } else if (filter === "siswa") {
            siswaWidth = 100;
            siswiWidth = 0;
          } else if (filter === "siswi") {
            siswaWidth = 0;
            siswiWidth = 100;
          }

          return (
            <div key={index} className="space-y-2">
              <div className="text-xs sm:text-sm font-semibold text-gray-700 pl-1 sm:pl-2">
                {item.name}
              </div>
              <div className="flex h-12 sm:h-14 rounded-lg overflow-hidden shadow-sm">
                {(filter === "all" || filter === "siswa") && (
                  <div
                    className="bg-emerald-500 flex items-center justify-center text-white text-[10px] sm:text-xs font-semibold relative"
                    style={{
                      width: animated ? `${siswaWidth}%` : "0%",
                      transition: `width 0.8s ease-out ${index * 0.1}s`,
                    }}
                  >
                    {showText && siswaWidth > 0 && (
                      <span className="font-semibold px-1">
                        {filter === "siswa"
                          ? `${item.siswa} Siswa`
                          : siswaWidth > 15
                          ? `Siswa: ${Math.round(siswaPercentage)}% (${
                              item.siswa
                            })`
                          : `${item.siswa}`}
                      </span>
                    )}
                  </div>
                )}
                {(filter === "all" || filter === "siswi") && (
                  <div
                    className="bg-indigo-500 flex items-center justify-center text-white text-[10px] sm:text-xs font-semibold"
                    style={{
                      width: animated ? `${siswiWidth}%` : "0%",
                      transition: `width 0.8s ease-out ${index * 0.1}s`,
                    }}
                  >
                    {showText && siswiWidth > 0 && (
                      <span className="font-semibold px-1">
                        {filter === "siswi"
                          ? `${item.siswi} Siswi`
                          : siswiWidth > 15
                          ? `Siswi: ${Math.round(siswiPercentage)}% (${
                              item.siswi
                            })`
                          : `${item.siswi}`}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-in forwards;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl mb-4 sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Statistik
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm lg:text-base px-4">
            Statistik Data Sekolah Kab. Gowa
          </p>
        </div>

        {/* Tabs */}
        <Tabs
          defaultValue="tkpaud"
          className="w-full"
          onValueChange={(value) => setActiveTab(value)}
        >
          <div className="overflow-x-auto overflow-y-hidden scrollbar-hide">
            <TabsList className="mb-6 sm:mb-8 bg-transparent w-full justify-start inline-flex min-w-full">
              <TabsTrigger
                value="tkpaud"
                className="data-[state=active]:bg-[#046DC2] data-[state=active]:text-white rounded-md px-4 sm:px-6 py-1.5 sm:py-2 text-sm whitespace-nowrap flex-shrink-0"
              >
                TK/PAUD
              </TabsTrigger>
              <TabsTrigger
                value="sd"
                className="data-[state=active]:bg-[#046DC2] data-[state=active]:text-white rounded-md px-4 sm:px-6 py-1.5 sm:py-2 text-sm whitespace-nowrap flex-shrink-0"
              >
                Sekolah Dasar
              </TabsTrigger>
              <TabsTrigger
                value="smp"
                className="data-[state=active]:bg-[#046DC2] data-[state=active]:text-white rounded-md px-4 sm:px-6 py-1.5 sm:py-2 text-sm whitespace-nowrap flex-shrink-0"
              >
                SMP
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Left Card - Bar Chart */}
              <Card className="border-none rounded-3xl">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-center mb-1 sm:mb-2">
                    Data Sekolah Kab. Gowa
                  </h3>
                  <p className="text-center text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">
                    Total Sekolah : {currentData.total} Sekolah
                  </p>

                  <BarChart data={currentData.barData} />
                </CardContent>
              </Card>

              {/* Right Card - Horizontal Bar Chart */}
              <Card className="border-none rounded-3xl">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-center mb-4 sm:mb-6">
                    Data Sekolah Kab. Gowa
                  </h3>

                  <LegendFilter />

                  <HorizontalBarChart data={currentData.horizontalData} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default StatistikSection;
