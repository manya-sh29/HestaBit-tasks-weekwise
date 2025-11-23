export default function ProfileCard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
      <div className="w-20 h-20 bg-blue-200 rounded-full"></div>

      <div>
        <h3 className="text-xl font-semibold">Manya Sharma</h3>
        <p className="text-sm text-gray-500">Admin</p>
        <p className="text-gray-600 mt-1">manya@gmail.com</p>
      </div>
    </div>
  );
}
