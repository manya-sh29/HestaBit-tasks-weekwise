"use client";

import Card from "../components/ui/Card";
import Graph from "../components/ui/Graph";
import AreaChart from "../components/Charts/AreaChart";
import BarGraph from "../components/Charts/BarGraph";
import { FaChartLine, FaDollarSign, FaUsers, FaShoppingCart } from "react-icons/fa";
import DataTableHeader from "../components/ui/DataTableHeader";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-8">
      {/* Main Title */}
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card CardName="Revenue" BgColor1="#06b6d4" BgColor2="#3b82f6" />
        <Card CardName="Users" BgColor1="#fbbf24" BgColor2="#f97316" />
        <Card CardName="Orders" BgColor1="#10b981" BgColor2="#059669" />
        <Card CardName="Visits" BgColor1="#8b5cf6" BgColor2="#c084fc" />
      </div>

      {/* Graphs Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Graph title="Sales Overview" icon={FaChartLine} typeofgraph={<AreaChart />} />
        <Graph title="Revenue Growth" icon={FaDollarSign} typeofgraph={<BarGraph />} />
      </div>

      {/* DataTable Section */}
      <div className="bg-white rounded-lg shadow-md border p-6">
        <DataTableHeader title="User Database" />
        {/* Table placeholder */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">ID</th>
                <th className="border px-4 py-2 text-left">Name</th>
                <th className="border px-4 py-2 text-left">Email</th>
                <th className="border px-4 py-2 text-left">Role</th>
                <th className="border px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">Manya Sharma</td>
                <td className="border px-4 py-2">manya@example.com</td>
                <td className="border px-4 py-2">Admin</td>
                <td className="border px-4 py-2">Active</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2">John Doe</td>
                <td className="border px-4 py-2">john@example.com</td>
                <td className="border px-4 py-2">User</td>
                <td className="border px-4 py-2">Inactive</td>
              </tr>
              {/* Add more rows dynamically as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
