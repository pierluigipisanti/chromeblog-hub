
import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import NewsCard, { NewsItem } from "@/components/NewsCard";
import NewsList from "@/components/NewsList";
import AdBanner from "@/components/AdBanner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Mock data for news
const featuredNews: NewsItem = {
  id: "1",
  title: "Google rilascia ChromeOS 100: tutte le novità della nuova versione",
  excerpt:
    "Un importante aggiornamento per ChromeOS porta nuove funzionalità e migliora la sicurezza del sistema operativo dei Chromebook.",
  image: "https://picsum.photos/seed/chromeos100/800/450",
  date: "2023-04-10",
  category: "ChromeOS",
  slug: "google-rilascia-chromeos-100",
};

const latestNews: NewsItem[] = [
  {
    id: "2",
    title: "Il nuovo Samsung Galaxy Chromebook Go: recensione completa",
    excerpt:
      "Abbiamo testato il nuovo Chromebook di Samsung per verificare prestazioni, autonomia e funzionalità in diversi scenari d'uso.",
    image: "https://picsum.photos/seed/samsungchromebook/800/600",
    date: "2023-04-05",
    category: "ChromeBook",
    slug: "samsung-galaxy-chromebook-go-recensione",
  },
  {
    id: "3",
    title: "Chrome 111 introduce funzionalità di sicurezza avanzate",
    excerpt:
      "L'ultimo aggiornamento di Chrome rafforza la sicurezza della navigazione e migliora la protezione contro il phishing.",
    image: "https://picsum.photos/seed/chrome111/800/600",
    date: "2023-03-28",
    category: "Chrome",
    slug: "chrome-111-sicurezza-avanzata",
  },
  {
    id: "4",
    title: "Android 14: tutte le novità per i Chromebook",
    excerpt:
      "La nuova versione di Android porterà miglioramenti significativi all'integrazione con ChromeOS e ai Chromebook.",
    image: "https://picsum.photos/seed/android14/800/600",
    date: "2023-03-20",
    category: "Android",
    slug: "android-14-novita-chromebook",
  },
  {
    id: "5",
    title: "Google annuncia nuovi strumenti per sviluppatori Chromebook",
    excerpt:
      "Un nuovo SDK per sviluppatori di app Chromebook promette di semplificare lo sviluppo di applicazioni ottimizzate.",
    image: "https://picsum.photos/seed/developertools/800/600",
    date: "2023-03-15",
    category: "ChromeOS",
    slug: "google-strumenti-sviluppatori-chromebook",
  },
  {
    id: "6",
    title: "Come configurare il tuo Chromebook per la produttività",
    excerpt:
      "Guida completa alla configurazione ottimale di un Chromebook per massimizzare la produttività lavorativa e di studio.",
    image: "https://picsum.photos/seed/productivity/800/600",
    date: "2023-03-10",
    category: "ChromeBook",
    slug: "configurare-chromebook-produttivita",
  },
];

const categoryNews = {
  chromebook: latestNews.filter((news) => news.category === "ChromeBook"),
  chromeos: latestNews.filter((news) => news.category === "ChromeOS"),
  android: latestNews.filter((news) => news.category === "Android"),
  chrome: latestNews.filter((news) => news.category === "Chrome"),
};

const popularNews: NewsItem[] = [
  {
    id: "7",
    title: "I 5 migliori Chromebook del 2023",
    excerpt: "La nostra selezione dei migliori Chromebook disponibili quest'anno per ogni fascia di prezzo.",
    image: "https://picsum.photos/seed/best5/800/600",
    date: "2023-02-20",
    category: "ChromeBook",
    slug: "migliori-chromebook-2023",
  },
  {
    id: "8",
    title: "Come usare Linux sui Chromebook",
    excerpt: "Guida completa all'installazione e utilizzo di Linux sui Chromebook per sfruttare appieno il dispositivo.",
    image: "https://picsum.photos/seed/linuxchrome/800/600",
    date: "2023-02-15",
    category: "ChromeOS",
    slug: "linux-su-chromebook-guida",
  },
  {
    id: "9",
    title: "Chrome vs Firefox: quale browser scegliere nel 2023",
    excerpt: "Un confronto aggiornato tra i due popolari browser per aiutarti a scegliere quello più adatto alle tue esigenze.",
    image: "https://picsum.photos/seed/browsers/800/600",
    date: "2023-02-10",
    category: "Chrome",
    slug: "chrome-vs-firefox-confronto-2023",
  },
];

const Index: React.FC = () => {
  useEffect(() => {
    // Animation for elements on scroll
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-visible");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Layout>
      <HeroSection
        title="Il Portale Italiano sui Chromebook"
        subtitle="Notizie, recensioni e guide su ChromeOS, Android e tutto l'ecosistema Google"
        ctaText="Scopri le ultime novità"
        ctaLink="/news/latest"
        backgroundImage="https://picsum.photos/seed/chromeoshero/1920/1080"
      />

      <section className="py-12">
        <div className="cb-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8 animate-on-scroll">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b">
                  In Evidenza
                </h2>
                <NewsCard news={featuredNews} variant="featured" />
              </div>

              <div className="mb-8 animate-on-scroll">
                <AdBanner size="leaderboard" />
              </div>

              <div className="mb-8 animate-on-scroll">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Ultime Notizie</h2>
                  <Link
                    to="/news/latest"
                    className="text-cb-green hover:text-cb-green/80 flex items-center"
                  >
                    Vedi tutte <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <NewsList news={latestNews.slice(0, 3)} columns={3} />
              </div>

              <div className="animate-on-scroll">
                <Tabs defaultValue="chromebook">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Categorie</h2>
                    <TabsList>
                      <TabsTrigger value="chromebook">ChromeBook</TabsTrigger>
                      <TabsTrigger value="chromeos">ChromeOS</TabsTrigger>
                      <TabsTrigger value="android">Android</TabsTrigger>
                      <TabsTrigger value="chrome">Chrome</TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="chromebook">
                    <NewsList news={categoryNews.chromebook} columns={2} />
                  </TabsContent>
                  <TabsContent value="chromeos">
                    <NewsList news={categoryNews.chromeos} columns={2} />
                  </TabsContent>
                  <TabsContent value="android">
                    <NewsList news={categoryNews.android} columns={2} />
                  </TabsContent>
                  <TabsContent value="chrome">
                    <NewsList news={categoryNews.chrome} columns={2} />
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            <div>
              <div className="mb-8 animate-on-scroll">
                <h2 className="text-xl font-bold mb-6 pb-2 border-b">
                  Più Popolari
                </h2>
                <div className="space-y-4">
                  {popularNews.map((news) => (
                    <NewsCard
                      key={news.id}
                      news={news}
                      variant="sidebar"
                      animate={false}
                    />
                  ))}
                </div>
              </div>

              <div className="mb-8 animate-on-scroll">
                <AdBanner size="rectangle" />
              </div>

              <div className="sticky top-20 animate-on-scroll">
                <h2 className="text-xl font-bold mb-6 pb-2 border-b">
                  Seguici
                </h2>
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="mb-4 text-gray-600">
                    Resta aggiornato sulle ultime novità del mondo Chrome!
                  </p>
                  <div className="flex space-x-2">
                    <a
                      href="#"
                      className="flex-1 bg-cb-green text-white p-2 rounded text-center hover:bg-cb-green/90 transition-colors"
                    >
                      Newsletter
                    </a>
                    <a
                      href="#"
                      className="flex-1 bg-cb-red text-white p-2 rounded text-center hover:bg-cb-red/90 transition-colors"
                    >
                      RSS
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
