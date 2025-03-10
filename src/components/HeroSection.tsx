
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
}) => {
  return (
    <section
      className="relative py-20 bg-cb-dark overflow-hidden"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cb-green/20 to-cb-red/20 mix-blend-multiply pointer-events-none"></div>
      
      <div className="cb-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-white mb-6 leading-tight">{title}</h1>
          <p className="text-white/80 text-xl mb-8">{subtitle}</p>
          
          {ctaText && ctaLink && (
            <Link to={ctaLink}>
              <Button
                size="lg"
                className="bg-cb-green hover:bg-cb-green/90 text-white"
              >
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
