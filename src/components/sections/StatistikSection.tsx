"use client";
import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const StatistikSection = () => {
  const [activeTab, setActiveTab] = useState("tkpaud");

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
    const maxValue = Math.max(...data.map((d) => d.value));

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
        <div className="relative h-[400px] flex">
          {/* Y-axis */}
          <div className="flex flex-col justify-between pr-3 text-sm text-gray-600 font-medium py-2">
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
            <div className="absolute inset-0 flex items-end justify-around gap-4 px-4 pb-2">
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
                    {/* Tooltip on hover */}
                    {isHovered && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg z-10 min-w-max pointer-events-none">
                        <div className="font-semibold text-sm mb-1">
                          {item.name}
                        </div>
                        <div className="flex items-center gap-2">
                          <div
                            className="w-4 h-4 rounded"
                            style={{ backgroundColor: item.color }}
                          ></div>
                          <span className="text-base font-bold">
                            {item.value}
                          </span>
                        </div>
                        {/* Arrow pointing down to bar */}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                      </div>
                    )}

                    {/* Bar */}
                    <div
                      className="w-full rounded-t-md transition-all duration-300 border-2"
                      style={{
                        height: `${heightPercentage}%`,
                        backgroundColor: item.color,
                        borderColor: item.color.replace("a5", "c0"),
                        minHeight: "5px",
                        transform: isHovered ? "scale(1.05)" : "scale(1)",
                        boxShadow: isHovered
                          ? "0 4px 12px rgba(0,0,0,0.15)"
                          : "none",
                      }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* X-axis Labels */}
        <div className="flex justify-around gap-4 mt-2 pl-10 pr-4">
          {data.map((item, index) => (
            <div key={index} className="flex-1 text-center">
              <div className="text-sm text-gray-700 font-medium leading-tight">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-12 bg-gray-800"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              STATISTIK
            </h2>
            <div className="h-1 w-12 bg-gray-800"></div>
          </div>
          <p className="text-gray-600 text-sm sm:text-base">
            Statistik Data Sekolah Kab. Gowa
          </p>
        </div>

        {/* Tabs */}
        <Tabs
          defaultValue="tkpaud"
          className="w-full"
          onValueChange={(value) => setActiveTab(value)}
        >
          <TabsList className="mb-8 bg-transparent border-b w-full justify-start">
            <TabsTrigger
              value="tkpaud"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-md px-6 py-2"
            >
              TK/PAUD
            </TabsTrigger>
            <TabsTrigger
              value="sd"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-md px-6 py-2"
            >
              Sekolah Dasar
            </TabsTrigger>
            <TabsTrigger
              value="smp"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-md px-6 py-2"
            >
              SMP
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Card - Bar Chart */}
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-center mb-2">
                    Data Sekolah Kab. Gowa
                  </h3>
                  <p className="text-center text-gray-600 mb-6">
                    Total Sekolah : {currentData.total} Sekolah
                  </p>

                  <BarChart data={currentData.barData} />
                </CardContent>
              </Card>

              {/* Right Card - Horizontal Bar Chart */}
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-center mb-6">
                    Data Sekolah Kab. Gowa
                  </h3>

                  <div className="mb-6 flex justify-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-emerald-500 rounded"></div>
                      <span className="text-sm font-medium">Siswa</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-indigo-500 rounded"></div>
                      <span className="text-sm font-medium">Siswi</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {currentData.horizontalData.map((item, index) => {
                      const total = item.siswa + item.siswi;
                      const siswaPercentage = (item.siswa / total) * 100;
                      const siswiPercentage = (item.siswi / total) * 100;

                      return (
                        <div key={index} className="space-y-2">
                          <div className="text-sm font-semibold text-gray-700 pl-2">
                            {item.name}
                          </div>
                          <div className="flex h-14 rounded-lg overflow-hidden shadow-sm">
                            <div
                              className="bg-emerald-500 flex items-center justify-center text-white text-xs font-semibold relative transition-all duration-500"
                              style={{ width: `${siswaPercentage}%` }}
                            >
                              {siswaPercentage > 30 && (
                                <span>
                                  Siswa: {Math.round(siswaPercentage)}% (
                                  {item.siswa})
                                </span>
                              )}
                            </div>
                            <div
                              className="bg-indigo-500 flex items-center justify-center text-white text-xs font-semibold transition-all duration-500"
                              style={{ width: `${siswiPercentage}%` }}
                            >
                              {siswiPercentage > 15 && (
                                <span>
                                  Siswi: {Math.round(siswiPercentage)}% (
                                  {item.siswi})
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
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
