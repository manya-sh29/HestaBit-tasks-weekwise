"use client";

import Link from "next/link";
import { FaTachometerAlt, FaCogs, FaPuzzlePiece, FaUser, FaChartLine, FaDatabase } from "react-icons/fa";

export default function Sidebar({ sidebarOpen }) {
  return (
    <aside
      className={`bg-gray-800 text-white w-64 p-4 transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:block`}
    >
      {/* Core Section */}
      <div className="mb-6">
        <h2 className="text-gray-400 uppercase text-xs font-semibold mb-2">Core</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
              <FaTachometerAlt /> Dashboard
            </Link>
          </li>
          <li>
            <Link href="/users" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
              <FaUser /> Users
            </Link>
          </li>
        </ul>
      </div>

      {/* Interface Section */}
      <div className="mb-6">
        <h2 className="text-gray-400 uppercase text-xs font-semibold mb-2">Interface</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/charts" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
              <FaChartLine /> Charts
            </Link>
          </li>
          <li>
            <Link href="/database" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
              <FaDatabase /> Database
            </Link>
          </li>
        </ul>
      </div>

      {/* Addons Section */}
      <div>
        <h2 className="text-gray-400 uppercase text-xs font-semibold mb-2">Addons</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/settings" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
              <FaCogs /> Settings
            </Link>
          </li>
          <li>
            <Link href="/plugins" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
              <FaPuzzlePiece /> Plugins
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
