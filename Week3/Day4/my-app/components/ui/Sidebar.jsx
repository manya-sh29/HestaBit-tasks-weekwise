import React from "react";
import Link from "next/link";
import { FaTachometerAlt, FaBookOpen, FaLayerGroup, FaChartBar, FaTable } from "react-icons/fa";

function Sidebar({ sidebarOpen }) {   // ⭐ ONLY CHANGE #1
  return(
    <div 
      className={`${sidebarOpen ? "block" : "hidden"} w-[18%] h-screen bg-gray-900 text-gray-300 flex flex-col p-4 space-y-6`}   // ⭐ ONLY CHANGE #2
    >
      <Link href="/" className="flex items-center text-xl font-semibold text-gray-200 mb-4 hover:bg-gray-800 h-[0px]">
        Start Bootstrap
      </Link>

      <div>
        <p className="text-xs text-gray-500 mb-2">CORE</p>
        <Link href="/dashboard" className="flex items-center gap-3 p-2 hover:bg-gray-800 text-white cursor-pointer">
          <FaTachometerAlt className="text-lg" />
          <span>Dashboard</span>
        </Link>
      </div>

      <div>
        <p className="text-xs text-gray-500 mb-2">INTERFACE</p>
        <div className="flex items-center gap-3 p-2 hover:bg-gray-800">
          <FaLayerGroup className="text-lg" />
          <span>Layouts</span>
        </div>

        <div className="flex items-center gap-3 p-2 hover:bg-gray-800">
          <FaBookOpen className="text-lg" />
          <span>Pages</span>
        </div>
      </div>

      <div>
        <p className="text-xs text-gray-500 mb-2">ADDONS</p>
        <div className="flex items-center gap-3 p-2 hover:bg-gray-800">
          <FaChartBar className="text-lg" />
          <span>Charts</span>
        </div>

        <div className="flex items-center gap-3 p-2 hover:bg-gray-800">
         <FaTable className="text-lg" />
         <span>Tables</span>
        </div>
      </div>

    </div>
  );
}

export default Sidebar;






























































  





































