import React from "react";
import Input from "./Input";
import { FaBars, FaSearch, FaUser } from "react-icons/fa";

function Navbar({ toggleSidebar }) {
  return (
    <div className="fixed top-0 left-0 w-full bg-gray-900 h-16 px-4 flex items-center justify-between z-10">
      
      {/* LEFT SIDE → Bars + Start Bootstrap */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="text-gray-300 hover:text-white text-xl"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>

        {/* ⭐ Added text here */}
        <span className="text-gray-300 font-semibold text-lg">
          Start Bootstrap
        </span>
      </div>

      {/* RIGHT SIDE → Search + User */}
      <div className="flex gap-4 h-[67%] w-[30%] min-w-60 justify-between">
        <Input />
        <button
          type="button"
          className="text-gray-300 hover:text-white text-xl w-[10%]"
        >
          <FaUser />
        </button>
      </div>
    </div>
  );
}

export default Navbar;

