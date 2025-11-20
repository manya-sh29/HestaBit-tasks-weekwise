export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-900 p-6 flex flex-col">
      <h2 className="text-lg font-bold mb-4">Core</h2>
      <ul className="space-y-2 mb-6">
        <li>Dashboard</li>
        <li>Layouts</li>
        <li>Pages</li>
      </ul>

      <h2 className="text-lg font-bold mb-4">Interface</h2>
      <ul className="space-y-2 mb-6">
        <li>Components</li>
        <li>Forms</li>
        <li>Tables</li>
      </ul>

      <h2 className="text-lg font-bold mb-4">Addons</h2>
      <ul className="space-y-2">
        <li>Charts</li>
        <li>Tables</li>
      </ul>
    </aside>
  );
}
