import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

const OrangTuaPeduli = () => {
  const teamMembers = [
    {
      name: "Alice Johnson",
      role: "Chief Executive Officer",
      description:
        "Alice is a seasoned leader with over 15 years of experience in driving business growth and innovation.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bgColor: "bg-blue-600",
      socials: true,
    },
    {
      name: "Carter Botosh",
      role: "Chief Financial Officer",
      description: "",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      bgColor: "bg-gray-900",
    },
    {
      name: "Phillip Ekstrom",
      role: "Head of Marketing",
      description: "",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bgColor: "bg-gray-800",
    },
    {
      name: "Abram Culhane",
      role: "Head of Design",
      description: "",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      bgColor: "bg-gray-900",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10">
        <div className="flex-1">
          <div className="inline-block px-4 py-1.5 border border-gray-300 rounded-full text-sm font-medium mb-4">
            EXPERTISE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Explore our comprehensive
            <br />
            service offerings
          </h2>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3 sm:mt-8">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 border-2 hover:bg-blue-600 hover:text-white hover:border-blue-600"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="default"
            size="icon"
            className="rounded-full w-12 h-12 bg-blue-600 hover:bg-blue-700"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            className={`overflow-hidden border-0 ${member.bgColor} ${
              index === 0 ? "text-white" : ""
            }`}
          >
            <CardContent className="p-0">
              {index === 0 ? (
                // First Card - Text Only
                <div className="p-6 h-full flex flex-col justify-between min-h-[320px]">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-sm font-medium mb-3 opacity-90">
                      {member.role}
                    </p>
                    <p className="text-sm opacity-80 leading-relaxed">
                      {member.description}
                    </p>
                  </div>

                  {/* Social Icons */}
                  <div className="flex gap-4 mt-6">
                    <a href="#" className="hover:opacity-70 transition-opacity">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="hover:opacity-70 transition-opacity">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="hover:opacity-70 transition-opacity">
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              ) : (
                // Other Cards - Image with Overlay
                <div className="relative group">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Text Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                    <p className="text-sm opacity-90">{member.role}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OrangTuaPeduli;
