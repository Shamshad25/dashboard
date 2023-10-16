import { BarChart } from "@mui/x-charts/BarChart";

const xLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const color = [
  //   "rgb(37 99 235)",
  "rgb(233 213 255)",
];

export default function Barchart() {
  return (
    <BarChart
      xAxis={[
        {
          scaleType: "band",
          data: xLabels,
        },
      ]}
      series={[
        {
          data: [8, 6, 12, 9, 10, 4, 10, 12, 11, 9, 8, 10],
        },
      ]}
      width={750}
      height={300}
      colors={color}
    />
  );
}
