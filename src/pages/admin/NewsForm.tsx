
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

// Schema for form validation
const formSchema = z.object({
  title: z.string().min(5, "Il titolo deve essere di almeno 5 caratteri"),
  slug: z.string().min(5, "Lo slug deve essere di almeno 5 caratteri"),
  excerpt: z.string().min(20, "La descrizione breve deve essere di almeno 20 caratteri"),
  content: z.string().min(50, "Il contenuto deve essere di almeno 50 caratteri"),
  category: z.string().min(1, "Seleziona una categoria"),
  image: z.string().min(5, "Inserisci un URL dell'immagine valido"),
  author: z.string().min(3, "Il nome dell'autore deve essere di almeno 3 caratteri"),
});

type FormValues = z.infer<typeof formSchema>;

// Mock data for edit mode
const mockArticle = {
  id: "1",
  title: "Google lancia nuovo Chromebook con processore Snapdragon",
  slug: "google-lancia-nuovo-chromebook-snapdragon",
  excerpt: "Google ha annunciato un nuovo modello di Chromebook con il potente processore Snapdragon.",
  content: `<p>Google ha recentemente annunciato il lancio di un nuovo modello di Chromebook equipaggiato con il processore Snapdragon di Qualcomm.</p>
<p>Questo nuovo dispositivo promette prestazioni superiori e una durata della batteria eccezionale.</p>
<p>Le caratteristiche principali includono:</p>
<ul>
<li>Processore Snapdragon 8cx Gen 3</li>
<li>16GB di RAM</li>
<li>Display da 13.3 pollici 2K</li>
<li>Autonomia fino a 15 ore</li>
</ul>
<p>Il nuovo Chromebook sarà disponibile a partire dal prossimo mese ad un prezzo di 599€.</p>`,
  category: "chromebook",
  image: "https://picsum.photos/800/600",
  date: "2024-03-01",
  author: "Mario Rossi",
  status: "published",
};

const NewsForm: React.FC = () => {
  const { id } = useParams();
  const isEditMode = Boolean(id);
  const navigate = useNavigate();
  const { toast } = useToast();
  const [previewImage, setPreviewImage] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      category: "",
      image: "",
      author: "",
    },
  });

  useEffect(() => {
    if (isEditMode) {
      // In a real app, fetch the article by ID from an API
      // For now, use the mock data
      const article = mockArticle;
      if (article) {
        form.reset({
          title: article.title,
          slug: article.slug,
          excerpt: article.excerpt,
          content: article.content,
          category: article.category,
          image: article.image,
          author: article.author,
        });
        setPreviewImage(article.image);
      }
    }
  }, [isEditMode, id, form]);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-");
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.setValue("title", e.target.value);
    
    // Only auto-generate slug if it's empty or matches the previous auto-generated slug
    const currentSlug = form.getValues("slug");
    const currentTitle = form.getValues("title");
    if (!currentSlug || currentSlug === generateSlug(currentTitle)) {
      form.setValue("slug", generateSlug(e.target.value));
    }
  };

  const handleImageChange = (url: string) => {
    form.setValue("image", url);
    setPreviewImage(url);
  };

  const onSubmit = (values: FormValues) => {
    // In a real app, send the data to an API
    console.log(values);
    
    toast({
      title: isEditMode ? "Articolo aggiornato" : "Articolo creato",
      description: isEditMode 
        ? "L'articolo è stato aggiornato con successo" 
        : "L'articolo è stato creato con successo",
    });
    
    navigate("/admin/news");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        {isEditMode ? "Modifica Articolo" : "Nuovo Articolo"}
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="general">Generale</TabsTrigger>
              <TabsTrigger value="content">Contenuto</TabsTrigger>
              <TabsTrigger value="seo">SEO</TabsTrigger>
            </TabsList>
            
            <TabsContent value="general" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Titolo</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Inserisci il titolo dell'articolo" 
                            {...field} 
                            onChange={handleTitleChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Slug</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="inserisci-lo-slug" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Categoria</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Seleziona una categoria" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="chromebook">Chromebook</SelectItem>
                            <SelectItem value="chromeos">ChromeOS</SelectItem>
                            <SelectItem value="android">Android</SelectItem>
                            <SelectItem value="chrome">Chrome</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="author"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Autore</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Nome dell'autore" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div>
                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                      <FormItem className="space-y-4">
                        <FormLabel>Immagine di copertina</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="URL dell'immagine" 
                            {...field} 
                            onChange={(e) => handleImageChange(e.target.value)}
                          />
                        </FormControl>
                        {previewImage && (
                          <div className="mt-2">
                            <p className="text-sm mb-1">Anteprima:</p>
                            <div className="aspect-video w-full rounded-md overflow-hidden border">
                              <img 
                                src={previewImage} 
                                alt="Preview" 
                                className="w-full h-full object-cover"
                                onError={() => setPreviewImage("")}
                              />
                            </div>
                          </div>
                        )}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="content" className="space-y-6">
              <FormField
                control={form.control}
                name="excerpt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrizione breve</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Inserisci una breve descrizione dell'articolo" 
                        className="min-h-[100px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contenuto</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Scrivi il contenuto dell'articolo..." 
                        className="min-h-[300px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </TabsContent>
            
            <TabsContent value="seo" className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-4">Anteprima SEO</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-blue-600 text-xl font-medium hover:underline">
                      {form.watch("title") || "Titolo dell'articolo"}
                    </h4>
                    <p className="text-green-700 text-sm">
                      https://chromebookitalia.it/news/{form.watch("category") || "categoria"}/{form.watch("slug") || "url-dell-articolo"}
                    </p>
                    <p className="text-gray-800">
                      {form.watch("excerpt") || "Descrizione breve dell'articolo..."}
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          <Separator />
          
          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/admin/news")}
            >
              Annulla
            </Button>
            <Button type="submit">
              {isEditMode ? "Aggiorna" : "Pubblica"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default NewsForm;
