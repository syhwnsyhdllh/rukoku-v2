// components/HeroSection.tsx
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  backgroundColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  showWave?: boolean;
  showDecorations?: boolean;
  decorationColors?: {
    circle1?: string;
    circle2?: string;
  };
  actions?: React.ReactNode;
}

const HeroSection = ({
  title,
  description,
  imageSrc,
  imageAlt,
  backgroundColor = "#DCEEFF",
  titleColor = "text-blue-950",
  descriptionColor = "text-gray-600",
  showWave = true,
  showDecorations = true,
  decorationColors = {
    circle1: "bg-white",
    circle2: "bg-purple-300",
  },
  actions,
}: HeroSectionProps) => {
  return (
    <section
      className="relative py-16 md:py-24 lg:px-20 overflow-hidden lg:pt-10 px-4"
      style={{ backgroundColor }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6 z-10 lg:-mt-16">
            <h1
              className={`text-3xl md:text-4xl lg:text-5xl font-bold ${titleColor}`}
            >
              {title}
            </h1>
            <p
              className={`text-base md:text-lg ${descriptionColor} leading-relaxed`}
            >
              {description}
            </p>
            {/* Actions slot */}
            {actions && <div className="pt-4">{actions}</div>}
          </div>

          {/* Illustration */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-[280px] md:max-w-[320px] xl:max-w-[390px] aspect-square">
              {/* Hero Illustration */}
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain animate-float"
                priority
              />
              {/* Decorative elements */}
              {showDecorations && (
                <>
                  <div
                    className={`absolute -top-4 -right-4 w-16 h-16 lg:w-20 lg:h-20 ${decorationColors.circle1} rounded-full opacity-50 -z-10`}
                  ></div>
                  <div
                    className={`absolute -bottom-4 -left-4 w-10 h-10 lg:w-12 lg:h-12 ${decorationColors.circle2} rounded-full opacity-30 -z-10`}
                  ></div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      {showWave && (
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
