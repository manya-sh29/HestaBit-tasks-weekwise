"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// ChartJS registration
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function AreaChart() {
  // Example labels (dates)
  const labels = ["2025-11-17", "2025-11-18", "2025-11-19", "2025-11-20", "2025-11-21"];

  // Example dataset
  const data = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: [120, 200, 150, 220, 180],
        fill: true, // This makes it an area chart
        backgroundColor: "rgba(59, 130, 246, 0.2)", // semi-transparent fill
        borderColor: "rgba(59, 130, 246, 1)", // line color
        tension: 0.4, // smooth curve
        pointBackgroundColor: "rgba(59, 130, 246, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(59, 130, 246, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Sales",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full h-64">
      <Line data={data} options={options} />
    </div>
  );
}
