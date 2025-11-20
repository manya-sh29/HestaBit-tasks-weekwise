import './globals.css';
import Navbar from "../../components/ui/Navbar";
import Sidebar from "../../components/ui/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar className="flex-shrink-0" />

        <div className="flex-1 flex flex-col min-w-0">
          <Navbar />
          <main className="flex-1 overflow-auto p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
