import { FaSearch } from "react-icons/fa";

export default function SearchInput({ placeholder = "Search...", onSearch }) {
  return (
    <div className="flex items-center border border-gray-300 rounded overflow-hidden w-full max-w-md">
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onKeyDown={(e) => {
          if (e.key === "Enter" && onSearch) onSearch(e.target.value);
        }}
      />
      <button
        className="bg-blue-600 text-white px-3 py-2 hover:bg-blue-700"
        onClick={() => {
          if (onSearch) onSearch(document.querySelector("input").value);
        }}
      >
        <FaSearch />
      </button>
    </div>
  );
}
