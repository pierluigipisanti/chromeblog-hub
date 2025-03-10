
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { AdminAuthProvider, RequireAdminAuth } from "./hooks/useAdminAuth";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import NewsListAdmin from "./pages/admin/NewsList";
import NewsForm from "./pages/admin/NewsForm";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AdminAuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={
              <RequireAdminAuth>
                <AdminLayout />
              </RequireAdminAuth>
            }>
              <Route index element={<AdminDashboard />} />
              <Route path="news" element={<NewsListAdmin />} />
              <Route path="news/create" element={<NewsForm />} />
              <Route path="news/edit/:id" element={<NewsForm />} />
              <Route path="users" element={<div>Gestione Utenti</div>} />
              <Route path="settings" element={<div>Impostazioni</div>} />
            </Route>
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AdminAuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
