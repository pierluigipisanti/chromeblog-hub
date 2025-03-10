
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  slug: string;
}

interface NewsCardProps {
  news: NewsItem;
  variant?: "default" | "featured" | "sidebar";
  animate?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({
  news,
  variant = "default",
  animate = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (animate && cardRef.current) {
              cardRef.current.classList.add("animate-visible");
            }
            if (imageRef.current) {
              imageRef.current.classList.add("loaded");
              imageRef.current.src = imageRef.current.dataset.src || "";
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [animate]);

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "chromebook":
        return "bg-cb-green text-white";
      case "chromeos":
        return "bg-blue-500 text-white";
      case "android":
        return "bg-green-600 text-white";
      case "chrome":
        return "bg-yellow-500 text-black";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("it-IT", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "rounded-lg overflow-hidden card-hover",
        animate && "animate-on-scroll",
        variant === "featured"
          ? "bg-white shadow-lg"
          : variant === "sidebar"
          ? "bg-transparent flex gap-3"
          : "bg-white shadow"
      )}
    >
      <Link to={`/news/${news.category.toLowerCase()}/${news.slug}`}>
        <div
          className={cn(
            "relative overflow-hidden",
            variant === "featured"
              ? "aspect-[16/9]"
              : variant === "sidebar"
              ? "w-24 h-24 flex-shrink-0"
              : "aspect-[4/3]"
          )}
        >
          <img
            ref={imageRef}
            className="lazy-load object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            data-src={news.image}
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmMWYxZjEiLz48L3N2Zz4="
            alt={news.title}
          />
          <Badge
            className={cn(
              "absolute top-2 left-2",
              getCategoryColor(news.category)
            )}
          >
            {news.category}
          </Badge>
        </div>
      </Link>

      <div
        className={cn(
          "p-4",
          variant === "sidebar" ? "p-0 flex-1" : "",
          variant === "featured" ? "p-6" : ""
        )}
      >
        <div className="mb-2 text-sm text-gray-500">{formatDate(news.date)}</div>
        <Link to={`/news/${news.category.toLowerCase()}/${news.slug}`}>
          <h3
            className={cn(
              "font-bold mb-2 transition-colors hover:text-cb-green",
              variant === "featured"
                ? "text-2xl"
                : variant === "sidebar"
                ? "text-base"
                : "text-lg"
            )}
          >
            {news.title}
          </h3>
        </Link>
        {variant !== "sidebar" && (
          <p className="text-gray-600 line-clamp-3">{news.excerpt}</p>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
