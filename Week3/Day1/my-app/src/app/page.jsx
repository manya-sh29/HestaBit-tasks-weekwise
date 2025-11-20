export default function Page() {
  return (
    <div className="flex flex-col h-screen p-6 gap-6">
      {/* Cards row */}
      <div className="flex gap-6 flex-[0_0_40%]">
        {/* Primary Card */}
        <div className="flex-1 bg-blue-700 text-white p-8 rounded-lg shadow-xl flex flex-col justify-between hover:scale-105 transition-transform duration-300">

          <h3 className="text-2xl font-bold">Primary Card</h3>
          <button className="mt-4 underline hover:text-gray-200">View Details</button>
        </div>

        {/* Warning Card */}
        <div className="flex-1 bg-yellow-400 text-white p-8 rounded-lg shadow-xl flex flex-col justify-between hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-bold">Warning Card</h3>
          <button className="mt-4 underline hover:text-gray-200">View Details</button>
        </div>

        {/* Success Card */}
        <div className="flex-1 bg-green-500 text-white p-8 rounded-lg shadow-xl flex flex-col justify-between hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-bold">Success Card</h3>
          <button className="mt-4 underline hover:text-gray-200">View Details</button>
        </div>

        {/* Danger Card */}
        <div className="flex-1 bg-red-600 text-white p-8 rounded-lg shadow-xl flex flex-col justify-between hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-bold">Danger Card</h3>
          <button className="mt-4 underline hover:text-gray-200">View Details</button>
        </div>
      </div>

      {/* Charts row */}
      <div className="flex gap-6 flex-[0_0_50%]">
        {/* Area Chart */}
        <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-between">
          <h3 className="font-bold mb-4 text-gray-800 dark:text-white">Area Chart</h3>
          <img
            src="https://via.placeholder.com/600x200/4f46e5/ffffff?text=Area+Chart"
            alt="Area Chart"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Bar Chart */}
        <div className="flex-1 bg-blue dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-between">
          <h3 className="font-bold mb-4 text-gray-800 dark:text-white">Bar Chart</h3>
          <img
            src="https://via.placeholder.com/600x200/f59e0b/ffffff?text=Bar+Chart"
            alt="Bar Chart"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Footer search */}
      <footer className="flex-[0_0_10%]">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
        />
      </footer>
    </div>
  );
}
