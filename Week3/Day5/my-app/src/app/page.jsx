"use client";

import Link from "next/link";
import {FaCode, FaServer, FaCloud, FaLaptopCode, FaMicrochip } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-300 to-purple-300 overflow-hidden">
      
       {/*Bouncing Background Icons */}
      <FaCode className="text-blue-700 text-6xl absolute top-16 left-10 animate-bounce opacity-20" />
      <FaServer className="text-green-700 text-6xl absolute bottom-20 right-14 animate-bounce opacity-20" />
      <FaCloud className="text-white text-6xl absolute top-1/3 right-1/4 animate-bounce opacity-20" />
      <FaLaptopCode className="text-yellow-700 text-6xl absolute bottom-10 left-1/3 animate-bounce opacity-20" />
      <FaMicrochip className="text-pink-700 text-6xl absolute top-1/2 left-1/2 animate-bounce opacity-20" />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center h-[80vh] text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Day 5 Project</h2>
        <p className="text-gray-700 mb-8">
          Navigate to login, dashboard, about and user details page.
        </p>

        <div className="flex gap-4">
          <Link
            href="/login"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Go to Login
          </Link>

          
        </div>
      </div>
    </div>
  );
}

