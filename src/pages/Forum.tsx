
import React from "react";
import Layout from "@/components/Layout";
import ForumTopicList, { ForumTopic } from "@/components/ForumTopicList";
import AdBanner from "@/components/AdBanner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

// Mock data for forum topics
const forumTopics: ForumTopic[] = [
  {
    id: "1",
    title: "Problema con aggiornamento ChromeOS 100 sul mio Acer Chromebook",
    author: {
      name: "Mario Rossi",
    },
    date: "2023-04-15",
    replies: 8,
    views: 124,
    lastReply: {
      author: {
        name: "ChromeExpert",
      },
      date: "2023-04-16",
    },
    category: "ChromeOS",
    isSticky: true,
  },
  {
    id: "2",
    title: "Confronto tra Samsung Galaxy Chromebook e Acer Chromebook Spin",
    author: {
      name: "Laura Bianchi",
    },
    date: "2023-04-14",
    replies: 12,
    views: 256,
    lastReply: {
      author: {
        name: "TechReviewer",
      },
      date: "2023-04-16",
    },
    category: "ChromeBook",
  },
  {
    id: "3",
    title: "Come installare le estensioni di Chrome senza il Web Store",
    author: {
      name: "Giovanni Verdi",
    },
    date: "2023-04-12",
    replies: 5,
    views: 98,
    lastReply: {
      author: {
        name: "ChromeGuru",
      },
      date: "2023-04-15",
    },
    category: "Chrome",
  },
  {
    id: "4",
    title: "Migliori app Android ottimizzate per ChromeOS",
    author: {
      name: "Francesca Neri",
    },
    date: "2023-04-10",
    replies: 15,
    views: 310,
    lastReply: {
      author: {
        name: "AppDeveloper",
      },
      date: "2023-04-16",
    },
    category: "Android",
  },
  {
    id: "5",
    title: "Presentazioni: nuovo utente di Chromebook!",
    author: {
      name: "Nuovo Utente",
    },
    date: "2023-04-08",
    replies: 10,
    views: 87,
    lastReply: {
      author: {
        name: "Admin",
      },
      date: "2023-04-15",
    },
    category: "Discussione Generale",
  },
];

const Forum: React.FC = () => {
  return (
    <Layout>
      <div className="cb-container py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Forum ChromeBookItalia</h1>
            <p className="text-gray-600">
              Discuti con altri appassionati di ChromeBook, ChromeOS, Android e Chrome
            </p>
          </div>
          <Button className="bg-cb-green hover:bg-cb-green/90">
            <Plus className="mr-2 h-4 w-4" /> Nuovo Topic
          </Button>
        </div>

        <div className="mb-8">
          <AdBanner size="leaderboard" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <Tabs defaultValue="recenti">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Discussioni</h2>
                <TabsList>
                  <TabsTrigger value="recenti">Recenti</TabsTrigger>
                  <TabsTrigger value="popolari">Popolari</TabsTrigger>
                  <TabsTrigger value="senza-risposta">Senza risposta</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="recenti">
                <ForumTopicList topics={forumTopics} />
              </TabsContent>

              <TabsContent value="popolari">
                <ForumTopicList
                  topics={[...forumTopics].sort(
                    (a, b) => b.replies - a.replies
                  )}
                />
              </TabsContent>

              <TabsContent value="senza-risposta">
                <ForumTopicList
                  topics={forumTopics.filter((topic) => topic.replies === 0)}
                />
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:w-1/3 space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold mb-4">Categorie</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-between p-2 hover:bg-gray-50 rounded transition-colors hover:text-cb-green"
                  >
                    <span>ChromeBook</span>
                    <span className="bg-gray-100 text-gray-800 py-1 px-2 rounded-full text-xs">
                      24
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-between p-2 hover:bg-gray-50 rounded transition-colors hover:text-cb-green"
                  >
                    <span>ChromeOS</span>
                    <span className="bg-gray-100 text-gray-800 py-1 px-2 rounded-full text-xs">
                      18
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-between p-2 hover:bg-gray-50 rounded transition-colors hover:text-cb-green"
                  >
                    <span>Android</span>
                    <span className="bg-gray-100 text-gray-800 py-1 px-2 rounded-full text-xs">
                      32
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-between p-2 hover:bg-gray-50 rounded transition-colors hover:text-cb-green"
                  >
                    <span>Chrome</span>
                    <span className="bg-gray-100 text-gray-800 py-1 px-2 rounded-full text-xs">
                      16
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-between p-2 hover:bg-gray-50 rounded transition-colors hover:text-cb-green"
                  >
                    <span>Discussione Generale</span>
                    <span className="bg-gray-100 text-gray-800 py-1 px-2 rounded-full text-xs">
                      29
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold mb-4">Statistiche Forum</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600">Discussioni:</span>
                  <span className="font-medium">87</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Messaggi:</span>
                  <span className="font-medium">432</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Utenti:</span>
                  <span className="font-medium">156</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Ultimo utente:</span>
                  <span className="font-medium text-cb-green">TechFan23</span>
                </li>
              </ul>
            </div>

            <AdBanner size="rectangle" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Forum;
