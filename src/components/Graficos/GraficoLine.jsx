import "./Graficos.css";
import { Line } from "react-chartjs-2";

const data = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
  ],
  datasets: [
    {
      label: "Quantidade de transações PIX",
      data: [
        1300, 13000, 3700, 1600, 3700, 6100, 1300, 13000, 3700, 5500, 2100,
        3500, 1300, 13000, 3700, 7500, 8100, 4500, 8100, 2400,
      ],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const GraficoLine = () => <Line data={data} options={options} />;

export default GraficoLine;
