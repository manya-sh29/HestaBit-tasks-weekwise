"use client";

import { FaBars, FaUserCircle } from "react-icons/fa";
import SearchInput from "./Input";

export default function DarkNavbar({ toggleSidebar }) {
  return (
    <nav className="bg-gray-900 text-white flex items-center justify-between px-4 py-3 shadow-md">
      {/* Left: Sidebar toggle */}
      <button
        className="text-white text-2xl focus:outline-none hover:text-gray-300"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>

      {/* Center: Search */}
      <div className="flex-1 mx-4">
        <SearchInput placeholder="Search..." />
      </div>

      {/* Right: User icon */}
      <button className="text-white text-2xl focus:outline-none hover:text-gray-300">
        <FaUserCircle />
      </button>
    </nav>
  );
}
