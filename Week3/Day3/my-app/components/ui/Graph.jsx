"use client";

export default function Graph({ title, icon: Icon, typeofgraph }) {
  return (
    <div className="bg-white rounded-lg shadow-md border flex flex-col w-full h-80">
      {/* Top header bar */}
      <div className="flex items-center gap-2 p-4 border-b">
        {Icon && <Icon className="text-blue-600" size={24} />}
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>

      {/* Graph area */}
      <div className="flex-1 p-4">
        {typeofgraph}
      </div>
    </div>
  );
}
