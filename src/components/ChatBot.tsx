
import React, { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Ciao! Sono il ChatBot di ChromeBookItalia. Come posso aiutarti oggi?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate a response
    setTimeout(() => {
      const botReplies = [
        "Grazie per la tua domanda! Sto cercando informazioni sui ChromeBook più recenti.",
        "ChromeOS ha ricevuto di recente un importante aggiornamento che migliora la sicurezza.",
        "Posso aiutarti con domande specifiche su Android, Chrome, o ChromeOS.",
        "I ChromeBook sono ottimi per la produttività e hanno un'ottima durata della batteria.",
        "Hai provato le ultime funzionalità di Google Chrome? Ci sono miglioramenti significativi nelle prestazioni.",
      ];

      const botMessage: Message = {
        id: Date.now().toString(),
        content: botReplies[Math.floor(Math.random() * botReplies.length)],
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      <div className="bg-cb-green text-white p-4">
        <h2 className="text-xl font-semibold">ChromeBookItalia ChatBot</h2>
        <p className="text-sm opacity-80">
          Risposte istantanee alle tue domande su ChromeBook, ChromeOS, Android e Chrome
        </p>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex items-start gap-2 max-w-[80%] ${
                  message.sender === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <Avatar className="h-8 w-8">
                  {message.sender === "bot" ? (
                    <img
                      src="/lovable-uploads/8491c047-d089-4ccb-9662-84da916131ba.png"
                      alt="ChromeBookItalia Bot"
                    />
                  ) : (
                    <div className="bg-cb-red text-white h-full w-full flex items-center justify-center text-xs">
                      TU
                    </div>
                  )}
                </Avatar>
                <div
                  className={`p-3 rounded-lg ${
                    message.sender === "user"
                      ? "bg-cb-red text-white"
                      : "bg-gray-100"
                  }`}
                >
                  <p>{message.content}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 p-3 rounded-lg">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-75"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="p-4 border-t">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Scrivi un messaggio..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-cb-green hover:bg-cb-green/90"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;
