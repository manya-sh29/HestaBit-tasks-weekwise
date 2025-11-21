"use client";

import { FaAngleRight } from "react-icons/fa";

export default function Card({ CardName, BgColor1, BgColor2 }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg flex flex-col w-64">
      {/* Top colored section */}
      <div
        className={`h-32 flex items-center justify-center text-white text-xl font-bold`}
        style={{ background: `linear-gradient(to right, ${BgColor1}, ${BgColor2})` }}
      >
        {CardName}
      </div>

      {/* Bottom button section */}
      <div className="bg-white p-4 flex justify-between items-center">
        <span className="font-semibold text-gray-800">View Details</span>
        <button className="text-blue-600 hover:text-blue-800">
          <FaAngleRight size={20} />
        </button>
      </div>
    </div>
  );
}
