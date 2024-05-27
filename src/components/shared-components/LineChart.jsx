import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import ArrowUp from "../../assets/svgs/ArrowUp.svg";
import ArrowDown from "../../assets/svgs/ArrowDown.svg";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
);

const LineChart = ({ details }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  useEffect(() => {
    if (details.diagnosis_history && details.diagnosis_history.length > 0) {
      // Extract the last 6 months of data
      const lastSixMonthsData = details.diagnosis_history.slice(0, 6);
      const labels = lastSixMonthsData.map(
        (item) => `${item.month.slice(0, 3)}, ${item.year}`
      );

      // Extract diastolic and systolic values
      const diastolicData = lastSixMonthsData.map(
        (item) => item.blood_pressure.diastolic?.value || 0
      );
      const systolicData = lastSixMonthsData.map(
        (item) => item.blood_pressure.systolic?.value || 0
      );
      setChartData({
        labels: labels.reverse(),
        datasets: [
          {
            data: diastolicData.reverse(),
            borderColor: "#e66fd2",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            fill: true,
            tension: 0.4,
          },
          {
            data: systolicData.reverse(),
            borderColor: "#8c6fe6",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            fill: true,
            tension: 0.5,
          },
        ],
      });
    }
  }, [details.diagnosis_history]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    layout: {
      padding: {
        top: 0,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
          drawBorder: false,
        },
        ticks: {
          callback: function (value) {
            const allowedTicks = [60, 80, 100, 120, 140, 160, 180];
            return allowedTicks.includes(value) ? value : "";
          },
          stepSize: 20,
        },
        min: 60,
        max: 180,
      },
    },
  };

  const systolicLevels =
    details.diagnosis_history.length > 0 &&
    details.diagnosis_history[0].blood_pressure.systolic;

  const diastolicLevels =
    details.diagnosis_history.length > 0 &&
    details.diagnosis_history[0].blood_pressure.diastolic;
  return (
    <div className="bg-custom-lightGray rounded-[1rem] p-3 flex gap-5">
      <section className="w-[450px]">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-left  font-semibold">Blood Pressure</h1>
          <select className="border-0 outline-none rounded p-1 bg-transparent">
            <option>Last 6 months</option>
          </select>
        </div>
        <Line data={chartData} options={options} />
      </section>

      {/* displayResult */}
      <section className="bg-transparent pt-2">
        {/* systolic */}
        <div className="flex gap-2 items-center">
          <div className="w-2.5 h-2.5  bg-custom-pink rounded-full"></div>
          <p className="font-semibold text-sm">Systolic</p>
        </div>
        <h1 className="mt-1 font-semibold text-lg">
          {details.diagnosis_history.length > 0 &&
            details.diagnosis_history[0].blood_pressure.systolic.value}
        </h1>

        <div className="flex items-center gap-1 mt-3">
          <img
            src={
              systolicLevels.levels !== "Higher than Average"
                ? ArrowDown
                : ArrowUp
            }
            alt="arrow"
          />
          <p className="text-xs">{systolicLevels.levels}</p>
        </div>

        {/* demarcation */}
        <div className="my-5 border-b-[1px] border-gray-300"></div>

          {/* Diastolic */}
          <div className="flex gap-2 items-center">
          <div className="w-2.5 h-2.5  bg-custom-purple rounded-full"></div>
          <p className="font-semibold text-sm">Diastolic</p>
        </div>
        <h1 className="mt-1 font-semibold text-lg">
          {details.diagnosis_history.length > 0 &&
            details.diagnosis_history[0].blood_pressure.diastolic.value}
        </h1>

        <div className="flex items-center gap-1 mt-3">
          <img
            src={
              diastolicLevels.levels === "Lower than Average"
                ? ArrowDown
                : ArrowUp
            }
            alt="arrow"
          />
          <p className="text-xs">{systolicLevels.levels}</p>
        </div>

      </section>
    </div>
  );
};

export default LineChart;
