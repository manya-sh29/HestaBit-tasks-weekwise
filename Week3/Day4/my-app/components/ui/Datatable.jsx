"use client";

import { FaDatabase } from "react-icons/fa";

export default function DataTableHeader({ title, entriesOptions = [5, 10, 25, 50] }) {
  return (
    <div className="mb-6">
      {/* Top bar with icon + title */}
      <div className="flex items-center mb-4">
        <FaDatabase className="text-blue-600 mr-2" size={24} />
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      </div>

      {/* Row: Show entries & Search */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Show entries dropdown */}
        <div className="flex items-center gap-2">
          <label htmlFor="showEntries" className="font-medium text-gray-700">
            Show
          </label>
          <select
            id="showEntries"
            className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {entriesOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <span className="text-gray-700">entries</span>
        </div>

        {/* Search input */}
        <div className="flex items-center gap-2 ml-auto">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search..."
            className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>
    </div>
  );
}
