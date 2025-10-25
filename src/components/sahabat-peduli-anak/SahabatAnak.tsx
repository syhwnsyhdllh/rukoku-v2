"use client";
import { useState, useEffect, useRef } from "react";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  description: string;
  image: string;
}

const TeamCard = ({ member }: { member: TeamMember }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex-shrink-0 w-[300px] md:w-[340px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative rounded-3xl overflow-hidden h-[500px] bg-white z-10 shadow hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        {/* Top Section - Quote */}
        <div className="relative h-[200px] p-6 flex flex-col justify-center">
          <div className="relative">
            {/* Animated Quote Icon */}
            <div
              className={`transition-all duration-500 ${
                isHovered ? "scale-110 rotate-6" : "scale-100 rotate-0"
              }`}
            >
              <svg
                className="absolute -left-2 -top-3 w-12 h-12 text-blue-400 opacity-30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            {/* Quote Text with Animation */}
            <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed italic pl-8 transition-all duration-300">
              {member.description}
            </p>
          </div>
        </div>

        {/* Bottom Section - Image */}
        <div className="relative h-[300px]">
          {/* Image with Overlay Effect */}
          <div className="relative h-full overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className={`w-full h-full object-cover object-top transition-transform duration-700 ${
                isHovered ? "scale-110" : "scale-100"
              }`}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent"></div>
          </div>

          {/* Info Card with Glass Effect */}
          <div
            className={`absolute bottom-4 left-4 right-4 bg-white/50 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-2xl transition-all duration-500 ${
              isHovered ? "bg-white/95 translate-y-0" : "translate-y-1"
            }`}
          >
            {/* Decorative Line */}
            <div className="w-12 h-1 bg-gradient-to-r from-[#48BCFF] to-[#046DC2] rounded-full mb-3"></div>

            <h3 className="font-bold text-gray-900 text-base mb-1 leading-tight">
              {member.name}
            </h3>
            <p className="text-blue-600 text-sm font-medium">
              {member.position}
            </p>

            {/* Hover Effect Icon */}
            <div
              className={`absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-[#48BCFF] to-[#046DC2] rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${
                isHovered
                  ? "scale-100 rotate-0 opacity-100"
                  : "scale-0 rotate-180 opacity-0"
              }`}
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SahabatAnak = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Prof. Dr. Muhammad Jufri, S.Psi., M.Si., M.Psi.",
      position: "Psikolog",
      description:
        "Anak adalah investasi masa depan yang harus kita didik dengan penuh kasih sayang dan kebijaksanaan.",
      image: "/images/tim-efektif/1.svg",
    },
    {
      id: 2,
      name: "Iqbal Raymond, S.Psi.NNLP",
      position: "Direktur Program BrainEvo Indonesia",
      description:
        "Anak adalah titipan sang pencipta dan bentuklah dia sesuai dengan fitrahnya.",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=800&fit=crop",
    },
    {
      id: 3,
      name: "Sutrawati Rasyid, SKM. M.M",
      position: "Kepala Bidang PPA",
      description:
        "Anak adalah masa depan bangsa yang harus kita jaga dan lindungi agar terbentuk karakter pemimpin yang berakhlak mulia.",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=800&fit=crop",
    },
    {
      id: 4,
      name: "dr. Gaffar, DPDK",
      position: "Kabid Pencegahan dan Pengendalian Penyakit Dinkes Gowa",
      description:
        "Kesehatan anak adalah fondasi bangsa yang kuat, mari kita lindungi mereka dengan penuh perhatian.",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&h=800&fit=crop",
    },
    {
      id: 5,
      name: "Athina Saraya, S.Psi., M.Sc",
      position: "Psikolog",
      description:
        "Memahami psikologi anak adalah kunci membuka potensi terbaik mereka untuk masa depan gemilang.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop",
    },
    {
      id: 6,
      name: "Riskawati Agung S.T",
      position: "Ruang Guru",
      description:
        "Pendidikan yang berkualitas adalah hak setiap anak untuk meraih mimpi dan cita-citanya.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop",
    },
  ];

  // Duplicate items for seamless loop
  const duplicatedMembers = [...teamMembers, ...teamMembers, ...teamMembers];

  // Auto-scroll effect
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const container = scrollContainerRef.current;
        if (!container) return prev;

        const cardWidth = 300 + 24; // card width + gap
        const maxScroll = cardWidth * teamMembers.length;

        if (prev >= maxScroll) {
          return 0;
        }

        return prev + 0.5; // Slower scroll speed
      });
    }, 20);

    return () => clearInterval(interval);
  }, [isHovered, teamMembers.length]);

  // Apply scroll position
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.transform = `translateX(-${scrollPosition}px)`;
    }
  }, [scrollPosition]);

  return (
    <section className="py-20 bg-gradient-to-br from-white to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-16 relative z-10">
        <div className="inline-block">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-[#48BCFF] rounded-full"></div>
            <span className="text-[#046DC2] font-semibold text-sm uppercase tracking-wider">
              Tim Profesional
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2 leading-tight">
            Bertemu dengan
          </h2>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#48BCFF] to-[#046DC2] bg-clip-text text-transparent leading-tight">
            Sahabat Anak
          </h2>
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full relative z-10">
        <div className="overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 pl-4 md:pl-8 lg:pl-16 transition-transform duration-100 ease-linear"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ willChange: "transform" }}
          >
            {duplicatedMembers.map((member, index) => (
              <TeamCard key={`${member.id}-${index}`} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SahabatAnak;
