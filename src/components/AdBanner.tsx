
import React from "react";
import { cn } from "@/lib/utils";

interface AdBannerProps {
  size: "leaderboard" | "sidebar" | "rectangle" | "mobile";
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ size, className }) => {
  const dimensionClasses = {
    leaderboard: "h-[90px] w-full", // 728x90
    sidebar: "h-[600px] w-[300px] mx-auto", // 300x600
    rectangle: "h-[250px] w-[300px] mx-auto", // 300x250
    mobile: "h-[100px] w-full", // Mobile banner
  };

  return (
    <div
      className={cn(
        "ad-container",
        dimensionClasses[size],
        className
      )}
    >
      <div>Spazio Pubblicitario</div>
    </div>
  );
};

export default AdBanner;
