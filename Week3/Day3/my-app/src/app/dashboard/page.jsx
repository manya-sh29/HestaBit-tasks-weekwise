"use client";

import React from "react";
import Card from "../../../components/ui/Card";
import Graph from "../../../components/ui/Graph";
import Datatable from "../../../components/ui/Datatable";
import BarGraph from "../../../components/Charts/BarChart";
import AreaChart from "../../../components/Charts/AreaChart";
import { FaChartArea, FaChartBar } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Main H1 */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>

      {/* Grey Box with text 'Dashboard' */}
      <div className="bg-gray-300 text-gray-800 rounded-lg p-4 mb-6">
        Dashboard
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card title="Primary Card" value="Blue Card" color="blue" />
        <Card title="Warning Card" value="Yellow Card" color="yellow" />
        <Card title="Success Card" value="Green Card" color="green" />
        <Card title="Danger Card" value="Red Card" color="red" />
      </div>

      {/* Graph Section */}
      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        {/* Area Chart */}
        <Graph title="Area Chart" icon={FaChartArea} typeofgraph={<AreaChart />} />

        {/* Bar Chart */}
        <Graph title="Bar Chart" icon={FaChartBar} typeofgraph={<BarGraph />} />
      </div>

      {/* Datatable Section */}
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-xl font-semibold mb-4">Data Table</h2>
        <Datatable />
      </div>
    </div>
  );
};

export default Dashboard;
