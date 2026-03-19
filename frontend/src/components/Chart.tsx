import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
      displayColors: false,
      callbacks: {
        label: (context: any) => context.raw,
      },
      //filter: {},
    },
  },
  scales: {
    x: {
      display: true,
      grid: {
        display: false,
      },
      ticks: {
        color: "#94a3b8",
        font: {
          size: 12,
        },
      },
      border: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
      min: 0,
      max: 100,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels,
  datasets: [
    {
      label: "Applications",
      data: [18, 25, 46, 22, 10, 69],
      backgroundColor: labels.map((i) =>
        i == "March" ? "rgba(25, 127, 236, 1)" : "rgba(19, 127, 236, 0.5)",
      ),
      hoverBackgroundColor: "rgba(19, 127, 236, 1)",
      barThickness: 40,
      borderRadius: 10,
    },
  ],
};

function Chart() {
  return (
    <div className="rounded-4xl bg-card p-5 shadow-sm border border-white/5 h-90">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-foreground">
          Applications by Month
        </h2>
        <p className="text-sm text-muted-foreground">
          Trends of your application activity for 2026
        </p>
      </div>

      <div className="h-60">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default Chart;
