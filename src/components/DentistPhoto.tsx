import { cn } from "@/lib/utils";

interface DentistPhotoProps {
  src: string;
  alt: string;
  aspectRatio?: "1:1" | "4:5" | "16:9" | "3:4";
  objectPosition?: "center" | "top" | "bottom" | "left" | "right";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const DentistPhoto = ({
  src,
  alt,
  aspectRatio = "1:1",
  objectPosition = "center",
  size = "md",
  className
}: DentistPhotoProps) => {
  const aspectRatioClasses = {
    "1:1": "aspect-square",
    "4:5": "aspect-[4/5]",
    "16:9": "aspect-[16/9]",
    "3:4": "aspect-[3/4]"
  };

  // For aspect ratios other than 1:1, we only control width
  const widthClasses = {
    sm: "w-32 lg:w-40",
    md: "w-40 lg:w-52",
    lg: "w-48 lg:w-60",
    xl: "w-56 lg:w-72"
  };

  // For 1:1 aspect ratio, we use fixed square sizes
  const squareClasses = {
    sm: "w-32 h-32 lg:w-40 lg:h-40",
    md: "w-40 h-40 lg:w-52 lg:h-52",
    lg: "w-48 h-48 lg:w-60 lg:h-60",
    xl: "w-56 h-56 lg:w-72 lg:h-72"
  };

  const objectPositionClasses = {
    center: "object-center",
    top: "object-top", 
    bottom: "object-bottom",
    left: "object-left",
    right: "object-right"
  };

  return (
    <div 
      className={cn(
        "bg-white/60 backdrop-blur-sm rounded-3xl border-4 border-accent/20 overflow-hidden shadow-soft",
        aspectRatio === "1:1" ? squareClasses[size] : cn(widthClasses[size], aspectRatioClasses[aspectRatio]),
        className
      )}
    >
      <img 
        src={src}
        alt={alt}
        className={cn(
          "w-full h-full object-cover transition-smooth antialiased",
          objectPositionClasses[objectPosition]
        )}
        style={{
          imageRendering: 'auto',
          filter: 'contrast(1.02) saturate(1.05)',
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)'
        }}
        loading="lazy"
      />
    </div>
  );
};

export default DentistPhoto;