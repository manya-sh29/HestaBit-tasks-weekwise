"use client";

import { useState } from "react";
import "./globals.css";   // ✅ ONLY FIX (correct relative path)
import Navbar from "../../components/ui/Navbar";
import Sidebar from "../../components/ui/Sidebar";

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <html lang="en">
      <body className="h-screen">
        <div className="flex h-screen">
          <Sidebar sidebarOpen={sidebarOpen} />
          <div className="flex-1 flex flex-col">
            <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
            <main className="flex-1 p-6 bg-gray-50 overflow-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
