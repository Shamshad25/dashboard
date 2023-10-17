import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: "# of Votes",
      data: [2, 4, 4],
      backgroundColor: [
        "rgb(248 113 113)",
        "rgb(96 165 250 )",
        "rgb(243 244 246)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function Donut() {
  return (
    <div className="w-64 h-64 p-0 m-0 relative">
      <Doughnut data={data} />
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-center leading-none">
        <p className="text-xl font-bold">65%</p>
        <p className="text-xs font-bold">Total New</p>
        <p className="text-xs font-bold">Customers</p>
      </div>
    </div>
  );
}
