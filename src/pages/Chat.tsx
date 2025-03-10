
import React from "react";
import Layout from "@/components/Layout";
import ChatBot from "@/components/ChatBot";
import AdBanner from "@/components/AdBanner";

const Chat: React.FC = () => {
  return (
    <Layout>
      <div className="cb-container py-12">
        <h1 className="text-4xl font-bold mb-2 text-center">ChatBot ChromeBookItalia</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Hai domande su ChromeBook, ChromeOS, Android o Chrome? Il nostro ChatBot è pronto ad aiutarti con risposte immediate e informazioni utili.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <ChatBot />
          </div>

          <div className="lg:w-1/3 space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Il nostro ChatBot</h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-4">
                  Il ChatBot di ChromeBookItalia è in grado di rispondere a domande su:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Caratteristiche e funzionalità dei Chromebook</li>
                  <li>Aggiornamenti e novità di ChromeOS</li>
                  <li>Compatibilità con app Android</li>
                  <li>Consigli per ottimizzare Chrome</li>
                  <li>Risoluzione di problemi comuni</li>
                  <li>Suggerimenti per acquisti</li>
                </ul>
                <p className="text-sm text-gray-500">
                  Nota: Il ChatBot è in continuo aggiornamento per migliorare le risposte.
                </p>
              </div>
            </div>

            <AdBanner size="rectangle" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Chat;
