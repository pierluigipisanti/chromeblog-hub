
import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import AdBanner from "@/components/AdBanner";
import { NewsItem } from "@/components/NewsCard";
import NewsList from "@/components/NewsList";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, Tag, Share2 } from "lucide-react";

// Mock data for a single news article
const singleNewsData: { [key: string]: NewsItem } = {
  "google-rilascia-chromeos-100": {
    id: "1",
    title: "Google rilascia ChromeOS 100: tutte le novità della nuova versione",
    excerpt:
      "Un importante aggiornamento per ChromeOS porta nuove funzionalità e migliora la sicurezza del sistema operativo dei Chromebook.",
    image: "https://picsum.photos/seed/chromeos100/800/450",
    date: "2023-04-10",
    category: "ChromeOS",
    slug: "google-rilascia-chromeos-100",
  },
  "samsung-galaxy-chromebook-go-recensione": {
    id: "2",
    title: "Il nuovo Samsung Galaxy Chromebook Go: recensione completa",
    excerpt:
      "Abbiamo testato il nuovo Chromebook di Samsung per verificare prestazioni, autonomia e funzionalità in diversi scenari d'uso.",
    image: "https://picsum.photos/seed/samsungchromebook/800/600",
    date: "2023-04-05",
    category: "ChromeBook",
    slug: "samsung-galaxy-chromebook-go-recensione",
  },
};

// Mock data for related news
const relatedNews: NewsItem[] = [
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
];

const NewsDetail: React.FC = () => {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  
  // For demonstration, using the mock data
  const newsData = singleNewsData[slug || ""] || {
    id: "0",
    title: "Articolo non trovato",
    excerpt: "L'articolo richiesto non è stato trovato",
    image: "https://picsum.photos/seed/notfound/800/450",
    date: new Date().toISOString(),
    category: "Not Found",
    slug: "not-found",
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("it-IT", {
      day: "numeric",
      month: "long",
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
      default:
        return "bg-gray-500 text-white";
    }
  };

  // Example detailed content
  const detailedContent = `
    <p class="text-lg mb-4">
      Google ha rilasciato oggi la versione 100 di ChromeOS, segnando un importante traguardo per il sistema operativo che alimenta i Chromebook. Questo aggiornamento porta con sé numerose novità e miglioramenti, sia sul fronte della sicurezza che dell'usabilità.
    </p>
    
    <h2 class="text-2xl font-bold my-6">Principali novità di ChromeOS 100</h2>
    
    <p class="mb-4">
      Il nuovo aggiornamento introduce diverse funzionalità che migliorano l'esperienza utente e rendono i Chromebook ancora più versatili:
    </p>
    
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>Nuova interfaccia per il launcher delle app, più intuitiva e personalizzabile</li>
      <li>Miglioramenti alla modalità tablet, con gesture più fluide e reattive</li>
      <li>Integrazione avanzata con i dispositivi Android</li>
      <li>Nuovi controlli per la privacy e la sicurezza</li>
      <li>Ottimizzazioni delle prestazioni per una maggiore autonomia della batteria</li>
    </ul>
    
    <p class="mb-6">
      La nuova versione pone particolare enfasi sulla sicurezza degli utenti. "La sicurezza è sempre stata una priorità per ChromeOS", ha dichiarato John Smith, product manager di Google. "Con ChromeOS 100, abbiamo implementato ulteriori misure di protezione che rendono la navigazione ancora più sicura".
    </p>
    
    <h2 class="text-2xl font-bold my-6">Miglioramenti nella produttività</h2>
    
    <p class="mb-4">
      ChromeOS 100 introduce anche funzionalità dedicate alla produttività:
    </p>
    
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>Nuove opzioni di multitasking per gestire meglio le finestre</li>
      <li>Miglioramenti all'app Files con nuovi strumenti di organizzazione</li>
      <li>Supporto avanzato per le videoconferenze</li>
      <li>Migliore integrazione delle Progressive Web Apps (PWA)</li>
    </ul>
    
    <div class="mb-6 p-4 bg-gray-100 rounded-lg">
      <p class="text-lg font-medium mb-2">Quando arriverà l'aggiornamento?</p>
      <p>
        Google ha annunciato che ChromeOS 100 sarà distribuito gradualmente a tutti i dispositivi compatibili nelle prossime settimane. Gli utenti riceveranno una notifica quando l'aggiornamento sarà disponibile per il loro Chromebook.
      </p>
    </div>
    
    <h2 class="text-2xl font-bold my-6">Compatibilità con i dispositivi</h2>
    
    <p class="mb-4">
      ChromeOS 100 sarà disponibile per tutti i Chromebook rilasciati negli ultimi cinque anni. I dispositivi più vecchi potrebbero non ricevere tutte le funzionalità, a seconda delle specifiche hardware.
    </p>
    
    <p class="mb-6">
      Per verificare se il tuo Chromebook è compatibile con il nuovo aggiornamento, puoi controllare la lista dei dispositivi supportati sul sito ufficiale di Google.
    </p>
    
    <h2 class="text-2xl font-bold my-6">Conclusioni</h2>
    
    <p class="mb-4">
      ChromeOS 100 rappresenta un importante passo avanti per il sistema operativo di Google, con miglioramenti significativi in termini di sicurezza, usabilità e produttività. Gli utenti dei Chromebook potranno beneficiare di un'esperienza complessivamente migliore, con nuove funzionalità che rendono questi dispositivi ancora più versatili.
    </p>
    
    <p>
      Restate sintonizzati su ChromeBookItalia per approfondimenti specifici su ciascuna delle nuove funzionalità introdotte con ChromeOS 100!
    </p>
  `;

  return (
    <Layout>
      <div className="cb-container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="mb-4">
              <Badge className={getCategoryColor(newsData.category)}>
                {newsData.category}
              </Badge>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">{newsData.title}</h1>

            <div className="flex flex-wrap gap-4 text-gray-500 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{formatDate(newsData.date)}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>5 min di lettura</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                <span>{newsData.category}</span>
              </div>
            </div>

            <div className="mb-6">
              <img
                src={newsData.image}
                alt={newsData.title}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="mb-6 flex justify-between items-center">
              <div className="text-gray-500 text-sm">
                Di <span className="font-medium">Redazione ChromeBookItalia</span>
              </div>
              <button className="flex items-center text-gray-500 hover:text-cb-green">
                <Share2 className="h-4 w-4 mr-1" /> Condividi
              </button>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <div dangerouslySetInnerHTML={{ __html: detailedContent }} />
            </div>

            <div className="mb-8">
              <AdBanner size="leaderboard" />
            </div>

            <Separator className="my-8" />

            <div>
              <h2 className="text-2xl font-bold mb-6">Articoli correlati</h2>
              <NewsList news={relatedNews} columns={3} />
            </div>
          </article>

          <aside className="space-y-8">
            <div className="sticky top-20">
              <div className="mb-8">
                <AdBanner size="rectangle" />
              </div>

              <div className="bg-white shadow rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Categorie</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/news/chromebook"
                      className="flex items-center justify-between p-2 hover:bg-gray-50 rounded transition-colors hover:text-cb-green"
                    >
                      <span>ChromeBook</span>
                      <Badge>24</Badge>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/news/chromeos"
                      className="flex items-center justify-between p-2 hover:bg-gray-50 rounded transition-colors hover:text-cb-green"
                    >
                      <span>ChromeOS</span>
                      <Badge>18</Badge>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/news/android"
                      className="flex items-center justify-between p-2 hover:bg-gray-50 rounded transition-colors hover:text-cb-green"
                    >
                      <span>Android</span>
                      <Badge>32</Badge>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/news/chrome"
                      className="flex items-center justify-between p-2 hover:bg-gray-50 rounded transition-colors hover:text-cb-green"
                    >
                      <span>Chrome</span>
                      <Badge>16</Badge>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                <p className="text-gray-600 mb-4">
                  Iscriviti per ricevere gli aggiornamenti
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
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default NewsDetail;
