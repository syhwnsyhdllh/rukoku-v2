"use client";
import { useState, useEffect, useRef } from "react";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

interface SocialMedia {
  twitter?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
}

interface TeamMember {
  id: number;
  name: string;
  position: string;
  description: string;
  image: string;
  badgeColor: string;
  socialMedia: SocialMedia;
}

const TeamCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="flex-shrink-0 w-[280px] md:w-[320px]">
      <div className="relative rounded-3xl overflow-hidden h-[480px] bg-white shadow-lg">
        {/* Top Section - Content */}
        <div className="relative h-[180px] p-6 flex flex-col justify-between">
          {/* Age Badge */}
          <div className="flex justify-between items-start">
            <div
              className={`${member.badgeColor} rounded-full px-4 py-1.5 inline-flex items-center gap-2`}
            >
              <span className="text-black font-semibold text-xs">
                {member.position}
              </span>
            </div>
            <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Title & Description */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
              {member.name}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {member.description}
            </p>
          </div>
        </div>

        {/* Bottom Section - Image */}
        <div className="relative h-[300px]">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
          {/* Social Media Overlay */}
          <div className="absolute bottom-4 left-4 flex gap-2">
            {member.socialMedia.twitter && (
              <a
                href={member.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all duration-300 shadow-md"
              >
                <Twitter size={16} className="text-gray-800" />
              </a>
            )}
            {member.socialMedia.facebook && (
              <a
                href={member.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all duration-300 shadow-md"
              >
                <Facebook size={16} className="text-gray-800" />
              </a>
            )}
            {member.socialMedia.instagram && (
              <a
                href={member.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all duration-300 shadow-md"
              >
                <Instagram size={16} className="text-gray-800" />
              </a>
            )}
            {member.socialMedia.linkedin && (
              <a
                href={member.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all duration-300 shadow-md"
              >
                <Linkedin size={16} className="text-gray-800" />
              </a>
            )}
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
      name: "Junior Programs",
      position: "5-8 Years",
      description: "For young kids 5-8 focus on fundamentals and fun",
      image: "/images/tim-efektif/1.svg",
      badgeColor: "bg-lime-400",
      socialMedia: {
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 2,
      name: "Youth Programs",
      position: "12-16 Years",
      description:
        "For teenagers 12-16 Advanced techniques and competition focus",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=800&fit=crop",
      badgeColor: "bg-purple-300",
      socialMedia: {
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 3,
      name: "Adult Programs",
      position: "16-60 Years",
      description: "For players of all levels from beginner to advanced",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=800&fit=crop",
      badgeColor: "bg-pink-300",
      socialMedia: {
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 4,
      name: "Private Lessons",
      position: "All Ages",
      description: "One-on-one coaching personalized to your goals",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&h=800&fit=crop",
      badgeColor: "bg-cyan-300",
      socialMedia: {
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
      },
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

        const cardWidth = 280 + 24; // card width + gap
        const maxScroll = cardWidth * teamMembers.length;

        // Reset to start when reaching the end of first set
        if (prev >= maxScroll) {
          return 0;
        }

        return prev + 1; // Scroll speed (pixels per interval)
      });
    }, 30); // Update every 30ms for smooth animation

    return () => clearInterval(interval);
  }, [isHovered, teamMembers.length]);

  // Apply scroll position
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.transform = `translateX(-${scrollPosition}px)`;
    }
  }, [scrollPosition]);

  return (
    <section className="py-16 bg-gray-50">
      {/* Header - With Container */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Comprehensive Tennis
          <br />
          Training for Everyone
        </h2>
      </div>

      {/* Carousel - Left Aligned with Padding, Right Overflows */}
      <div className="w-full">
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

      {/* Info Text */}
      <div className="max-w-7xl mx-auto px-4 mt-8 text-center text-sm text-gray-500">
        Hover to pause • Auto-scrolling carousel
      </div>
    </section>
  );
};

export default SahabatAnak;
