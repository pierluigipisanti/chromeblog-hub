
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle, Search, Edit, Trash, Eye, EyeOff } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

// Mock news data
const mockNews = [
  {
    id: "1",
    title: "Google lancia nuovo Chromebook con processore Snapdragon",
    category: "chromebook",
    date: "2024-03-01",
    status: "published",
    author: "Mario Rossi",
  },
  {
    id: "2",
    title: "ChromeOS 120 introduce nuove funzionalità di produttività",
    category: "chromeos",
    status: "published",
    date: "2024-02-25",
    author: "Luca Bianchi",
  },
  {
    id: "3",
    title: "Le migliori app Android ottimizzate per Chromebook",
    category: "android",
    status: "draft",
    date: "2024-02-20",
    author: "Giulia Verdi",
  },
  {
    id: "4",
    title: "Chrome 123 migliora le prestazioni e la sicurezza",
    category: "chrome",
    status: "published",
    date: "2024-02-15",
    author: "Paolo Neri",
  },
  {
    id: "5",
    title: "Confronto: i migliori Chromebook del 2024",
    category: "chromebook",
    status: "draft",
    date: "2024-02-10",
    author: "Mario Rossi",
  },
];

const NewsListAdmin: React.FC = () => {
  const [news, setNews] = useState(mockNews);
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  const handleDelete = (id: string) => {
    if (window.confirm("Sei sicuro di voler eliminare questo articolo?")) {
      setNews(news.filter((item) => item.id !== id));
      toast({
        title: "Articolo eliminato",
        description: "L'articolo è stato eliminato con successo",
      });
    }
  };

  const toggleStatus = (id: string) => {
    setNews(
      news.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === "published" ? "draft" : "published",
            }
          : item
      )
    );
    
    const article = news.find((item) => item.id === id);
    const newStatus = article?.status === "published" ? "draft" : "published";
    
    toast({
      title: newStatus === "published" ? "Articolo pubblicato" : "Articolo nascosto",
      description: newStatus === "published" 
        ? "L'articolo è ora visibile sul sito" 
        : "L'articolo è stato messo in bozza",
    });
  };

  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Gestione Articoli</h1>
        <Button asChild>
          <Link to="/admin/news/create">
            <PlusCircle className="mr-2 h-4 w-4" />
            Nuovo Articolo
          </Link>
        </Button>
      </div>

      <div className="flex mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Cerca articoli..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Titolo</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Stato</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Autore</TableHead>
              <TableHead className="text-right">Azioni</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredNews.length > 0 ? (
              filteredNews.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell>
                    <Badge className={getCategoryColor(item.category)}>
                      {item.category}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={item.status === "published" ? "default" : "outline"}
                    >
                      {item.status === "published" ? "Pubblicato" : "Bozza"}
                    </Badge>
                  </TableCell>
                  <TableCell>{new Date(item.date).toLocaleDateString("it-IT")}</TableCell>
                  <TableCell>{item.author}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleStatus(item.id)}
                        title={
                          item.status === "published"
                            ? "Metti in bozza"
                            : "Pubblica"
                        }
                      >
                        {item.status === "published" ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                      >
                        <Link to={`/admin/news/edit/${item.id}`}>
                          <Edit className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(item.id)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  Nessun articolo trovato
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default NewsListAdmin;
