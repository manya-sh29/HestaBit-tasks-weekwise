import "./globals.css";
import Navbar from "../../components/ui/Navbar";
import Sidebar from "../../components/ui/Sidebar";

// Day-2 Reusable Components
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Badge from "../../components/ui/Badge";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">

        {/* Sidebar */}
        <Sidebar className="flex-shrink-0 border-r bg-white dark:bg-gray-800 shadow-sm" />

        {/* Right Section */}
        <div className="flex-1 flex flex-col min-w-0">

          {/* Navbar */}
          <Navbar />

          {/* 🔵 Global Utility Bar */}
          <div className="px-6 py-4 bg-white dark:bg-gray-800 shadow-sm flex items-center gap-4 border-b">

            {/* Search */}
            <div className="w-64">
              <Input placeholder="Search..." />
            </div>

            {/* Active Badge */}
            <Badge text="Active" color="success" />

            {/* Buttons */}
            <div className="ml-auto flex gap-3">
              <Button variant="primary" size="sm">Add</Button>
              <Button variant="warning" size="sm">Settings</Button>
              <Button variant="danger" size="sm">Delete</Button>
            </div>
          </div>

          {/* Main Content */}
          <main className="flex-1 overflow-auto p-6 bg-gray-50 dark:bg-gray-900">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}
