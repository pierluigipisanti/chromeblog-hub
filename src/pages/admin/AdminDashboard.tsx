
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, Users, MessageSquare, Calendar } from "lucide-react";

const AdminDashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Articoli Totali</CardTitle>
            <Newspaper className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
            <p className="text-xs text-muted-foreground">+3 nell'ultima settimana</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Utenti</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">120</div>
            <p className="text-xs text-muted-foreground">+12 nell'ultimo mese</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Commenti</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">53</div>
            <p className="text-xs text-muted-foreground">+8 nell'ultima settimana</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Pubblicati Oggi</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">+1 rispetto a ieri</p>
          </CardContent>
        </Card>
      </div>
      
      <h2 className="text-xl font-semibold mb-4">Attività Recenti</h2>
      <Card>
        <CardContent className="p-0">
          <ul className="divide-y">
            <li className="p-4">
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">Nuovo articolo pubblicato</p>
                  <p className="text-sm text-muted-foreground">ChromeOS riceve un importante aggiornamento</p>
                </div>
                <span className="text-sm text-muted-foreground">2 ore fa</span>
              </div>
            </li>
            <li className="p-4">
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">Articolo modificato</p>
                  <p className="text-sm text-muted-foreground">Le migliori app per Chromebook nel 2024</p>
                </div>
                <span className="text-sm text-muted-foreground">Ieri</span>
              </div>
            </li>
            <li className="p-4">
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">Nuovo commento</p>
                  <p className="text-sm text-muted-foreground">Mario ha commentato 'Ottimo articolo!'</p>
                </div>
                <span className="text-sm text-muted-foreground">2 giorni fa</span>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
