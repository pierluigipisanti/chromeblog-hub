
import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

// Simple mock admin user
const ADMIN_USER = {
  username: "admin",
  password: "admin123", // In a real app, use proper authentication
};

type AdminUser = {
  username: string;
  isAuthenticated: boolean;
};

interface AdminAuthContextType {
  user: AdminUser | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AdminAuthContext = createContext<AdminAuthContextType | null>(null);

export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    // Check if user is already logged in from localStorage
    const storedUser = localStorage.getItem("adminUser");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem("adminUser");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (username === ADMIN_USER.username && password === ADMIN_USER.password) {
      const adminUser = { username, isAuthenticated: true };
      setUser(adminUser);
      localStorage.setItem("adminUser", JSON.stringify(adminUser));
      toast({
        title: "Login effettuato",
        description: "Benvenuto nel pannello di amministrazione",
      });
      setIsLoading(false);
      return true;
    } else {
      toast({
        title: "Accesso negato",
        description: "Credenziali non valide",
        variant: "destructive",
      });
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("adminUser");
    toast({
      title: "Logout effettuato",
      description: "Hai effettuato il logout con successo",
    });
  };

  return (
    <AdminAuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error("useAdminAuth must be used within an AdminAuthProvider");
  }
  return context;
};

export const RequireAdminAuth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isLoading } = useAdminAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/admin/login");
    }
  }, [user, isLoading, navigate]);

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Caricamento...</div>;
  }

  return user ? <>{children}</> : null;
};
