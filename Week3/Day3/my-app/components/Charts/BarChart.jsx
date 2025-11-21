"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// ChartJS registration
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function BarGraph() {
  // Example labels (months)
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  // Example dataset
  const data = {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: [300, 500, 400, 600, 450, 700],
        backgroundColor: "rgba(16, 185, 129, 0.7)", // greenish bars
        borderColor: "rgba(16, 185, 129, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Chart options
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
      y: {
        beginAtZero: true,
        max: 1000, // example max value
        title: {
          display: true,
          text: "Revenue ($)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
    },
  };

  return (
    <div className="w-full h-64">
      <Bar data={data} options={options} />
    </div>
  );
}
