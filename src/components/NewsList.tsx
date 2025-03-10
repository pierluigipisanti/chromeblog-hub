
import React from "react";
import NewsCard, { NewsItem } from "./NewsCard";

interface NewsListProps {
  news: NewsItem[];
  columns?: 1 | 2 | 3 | 4;
  variant?: "default" | "featured" | "sidebar";
}

const NewsList: React.FC<NewsListProps> = ({
  news,
  columns = 3,
  variant = "default",
}) => {
  const getGridClass = () => {
    switch (columns) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-1 md:grid-cols-2";
      case 3:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      case 4:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
      default:
        return "grid-cols-1 md:grid-cols-3";
    }
  };

  return (
    <div className={`grid ${getGridClass()} gap-6`}>
      {news.map((item, index) => (
        <NewsCard key={item.id} news={item} variant={variant} />
      ))}
    </div>
  );
};

export default NewsList;
