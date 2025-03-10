
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Newspaper, PlusCircle, LayoutDashboard, Users, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const AdminLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold text-cb-green">Admin Dashboard</h2>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/admin"
                end
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-2 p-2 rounded-md transition-colors",
                    isActive
                      ? "bg-cb-green text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  )
                }
              >
                <LayoutDashboard size={18} />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/news"
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-2 p-2 rounded-md transition-colors",
                    isActive
                      ? "bg-cb-green text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  )
                }
              >
                <Newspaper size={18} />
                <span>Articoli</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/news/create"
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-2 p-2 rounded-md transition-colors",
                    isActive
                      ? "bg-cb-green text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  )
                }
              >
                <PlusCircle size={18} />
                <span>Nuovo Articolo</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/users"
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-2 p-2 rounded-md transition-colors",
                    isActive
                      ? "bg-cb-green text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  )
                }
              >
                <Users size={18} />
                <span>Utenti</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/settings"
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-2 p-2 rounded-md transition-colors",
                    isActive
                      ? "bg-cb-green text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  )
                }
              >
                <Settings size={18} />
                <span>Impostazioni</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Main content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
