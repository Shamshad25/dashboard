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
    <div className="w-64 h-64 p-0 m-0">
      <Doughnut data={data} />
    </div>
  );
}
