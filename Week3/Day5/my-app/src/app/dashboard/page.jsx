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
    <div className="pt-10 min-h-screen bg-gray-100 p-6 max-w-7xl mx-auto">
      {/* Main Title */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>

      {/* Grey Box */}
      <div className="bg-gray-300 text-gray-800 rounded-lg p-4 mb-6">
        Dashboard
      </div>

      {/* Cards Section → horizontal row, fixed width */}
      <div className="flex justify-between mb-8">

  <div className="flex-1 max-w-[250px]">
    <Card
      CardName="Primary Card"
      BgColor1="#1e3c72"
      BgColor2="#2a5298"
    />
  </div>

  <div className="flex-1 max-w-[250px]">
    <Card
      CardName="Warning Card"
      BgColor1="#f6d365"
      BgColor2="#fda085"
    />
  </div>

  <div className="flex-1 max-w-[250px]">
    <Card
      CardName="Success Card"
      BgColor1="#56ab2f"
      BgColor2="#a8e063"
    />
  </div>

  <div className="flex-1 max-w-[250px]">
    <Card
      CardName="Danger Card"
      BgColor1="#cb2d3e"
      BgColor2="#ef473a"
    />
  </div>

</div>

      {/* Charts Section → side by side, fixed widths */}
      <div className="flex flex-row gap-6 mb-8">
        <div className="flex-1 max-w-[calc(50%-12px)] bg-white rounded-xl shadow p-4 h-90">
          <Graph title="Area Chart" icon={FaChartArea} typeofgraph={<AreaChart />} />
        </div>
        <div className="flex-1 max-w-[calc(50%-12px)] bg-white rounded-xl shadow p-4 h-90">
          <Graph title="Bar Chart" icon={FaChartBar} typeofgraph={<BarGraph />} />
        </div>
      </div>

      {/* Datatable Section */}
      <div className="bg-white rounded-xl shadow p-4 w-full">
        <h2 className="text-xl font-semibold mb-4">Data Table</h2>
        <Datatable />
      </div>
    </div>
  );
};

export default Dashboard;
