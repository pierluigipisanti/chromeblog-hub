
import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { MessageCircle, ChevronRight } from "lucide-react";

export interface ForumTopic {
  id: string;
  title: string;
  author: {
    name: string;
    avatar?: string;
  };
  date: string;
  replies: number;
  views: number;
  lastReply?: {
    author: {
      name: string;
      avatar?: string;
    };
    date: string;
  };
  category: string;
  isSticky?: boolean;
  isPinned?: boolean;
}

interface ForumTopicListProps {
  topics: ForumTopic[];
}

const ForumTopicList: React.FC<ForumTopicListProps> = ({ topics }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("it-IT", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(date);
  };

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
      case "discussione generale":
        return "bg-gray-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="space-y-4">
      {topics.map((topic) => (
        <div
          key={topic.id}
          className="bg-white rounded-lg shadow p-4 transition-all hover:shadow-md"
        >
          <div className="flex items-start gap-4">
            <div className="hidden md:block">
              <Avatar className="h-10 w-10">
                {topic.author.avatar ? (
                  <img src={topic.author.avatar} alt={topic.author.name} />
                ) : (
                  <div className="bg-cb-red text-white h-full w-full flex items-center justify-center text-xs">
                    {topic.author.name.charAt(0).toUpperCase()}
                  </div>
                )}
              </Avatar>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge className={getCategoryColor(topic.category)}>
                  {topic.category}
                </Badge>
                {topic.isSticky && (
                  <Badge variant="outline" className="border-cb-red text-cb-red">
                    In evidenza
                  </Badge>
                )}
              </div>

              <Link to={`/forum/topic/${topic.id}`}>
                <h3 className="text-lg font-semibold mt-2 hover:text-cb-green transition-colors">
                  {topic.title}
                </h3>
              </Link>

              <div className="mt-2 text-sm text-gray-500 flex flex-wrap gap-x-4 gap-y-1">
                <span>
                  di <span className="font-medium">{topic.author.name}</span>
                </span>
                <span>{formatDate(topic.date)}</span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="h-4 w-4" /> {topic.replies} risposte
                </span>
              </div>
            </div>

            <div className="hidden md:block text-right">
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
          </div>

          {topic.lastReply && (
            <div className="mt-3 pt-3 border-t border-gray-100 text-sm text-gray-500 flex justify-between items-center">
              <div>
                Ultima risposta di{" "}
                <span className="font-medium">{topic.lastReply.author.name}</span>
              </div>
              <div>{formatDate(topic.lastReply.date)}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ForumTopicList;
