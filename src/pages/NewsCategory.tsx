
import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import NewsList from "@/components/NewsList";
import AdBanner from "@/components/AdBanner";

// Mock data
import { NewsItem } from "@/components/NewsCard";

// Generic news data to be filtered by category
const newsData: NewsItem[] = [
  {
    id: "1",
    title: "Google rilascia ChromeOS 100: tutte le novità della nuova versione",
    excerpt:
      "Un importante aggiornamento per ChromeOS porta nuove funzionalità e migliora la sicurezza del sistema operativo dei Chromebook.",
    image: "https://picsum.photos/seed/chromeos100/800/450",
    date: "2023-04-10",
    category: "ChromeOS",
    slug: "google-rilascia-chromeos-100",
  },
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

// Title and description for each category
const categoryInfo = {
  chromebook: {
    title: "Notizie su ChromeBook",
    description: "Recensioni, guide e aggiornamenti sui dispositivi ChromeBook",
    image: "https://picsum.photos/seed/chromebookhero/1920/1080",
  },
  chromeos: {
    title: "Notizie su ChromeOS",
    description: "Tutte le novità sul sistema operativo ChromeOS",
    image: "https://picsum.photos/seed/chromeoshero/1920/1080",
  },
  android: {
    title: "Notizie su Android",
    description: "Aggiornamenti, app e consigli per il sistema operativo mobile di Google",
    image: "https://picsum.photos/seed/androidhero/1920/1080",
  },
  chrome: {
    title: "Notizie su Chrome",
    description: "Novità, estensioni e suggerimenti per il browser di Google",
    image: "https://picsum.photos/seed/chromehero/1920/1080",
  },
  latest: {
    title: "Ultime Notizie",
    description: "Tutte le ultime novità dall'ecosistema Google",
    image: "https://picsum.photos/seed/latestnews/1920/1080",
  },
};

const NewsCategory: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const currentCategory = category || "latest";

  // Filter news by category or get latest news
  const filteredNews =
    currentCategory === "latest"
      ? [...newsData].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
      : newsData.filter(
          (news) => news.category.toLowerCase() === currentCategory
        );

  const categoryData = categoryInfo[currentCategory as keyof typeof categoryInfo] || {
    title: "Notizie",
    description: "Tutte le notizie su ChromeBook, ChromeOS, Android e Chrome",
    image: "https://picsum.photos/seed/news/1920/1080",
  };

  return (
    <Layout>
      <HeroSection
        title={categoryData.title}
        subtitle={categoryData.description}
        backgroundImage={categoryData.image}
      />

      <section className="py-12">
        <div className="cb-container">
          <div className="mb-8">
            <AdBanner size="leaderboard" />
          </div>

          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-3 lg:gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b">
                {categoryData.title}
              </h2>

              {filteredNews.length > 0 ? (
                <NewsList news={filteredNews} columns={2} />
              ) : (
                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <h3 className="text-xl mb-2">Nessuna notizia trovata</h3>
                  <p className="text-gray-600">
                    Non ci sono ancora notizie in questa categoria. Torna presto!
                  </p>
                </div>
              )}
            </div>

            <div>
              <div className="sticky top-20">
                <div className="mb-8">
                  <AdBanner size="rectangle" />
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 pb-2 border-b">
                    Categorie
                  </h3>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="/news/latest"
                          className="block p-2 hover:bg-gray-50 rounded transition-colors hover:text-cb-green"
                        >
                          Ultime Notizie
                        </a>
                      </li>
                      <li>
                        <a
                          href="/news/chromebook"
                          className="block p-2 hover:bg-gray-50 rounded transition-colors hover:text-cb-green"
                        >
                          ChromeBook
                        </a>
                      </li>
                      <li>
                        <a
                          href="/news/chromeos"
                          className="block p-2 hover:bg-gray-50 rounded transition-colors hover:text-cb-green"
                        >
                          ChromeOS
                        </a>
                      </li>
                      <li>
                        <a
                          href="/news/android"
                          className="block p-2 hover:bg-gray-50 rounded transition-colors hover:text-cb-green"
                        >
                          Android
                        </a>
                      </li>
                      <li>
                        <a
                          href="/news/chrome"
                          className="block p-2 hover:bg-gray-50 rounded transition-colors hover:text-cb-green"
                        >
                          Chrome
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 pb-2 border-b">
                    Newsletter
                  </h3>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <p className="mb-4 text-gray-600">
                      Iscriviti alla nostra newsletter per ricevere le ultime
                      notizie
                    </p>
                    <input
                      type="email"
                      placeholder="La tua email"
                      className="w-full p-2 mb-2 border rounded"
                    />
                    <button className="w-full bg-cb-green text-white p-2 rounded hover:bg-cb-green/90 transition-colors">
                      Iscriviti
                    </button>
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

export default NewsCategory;
