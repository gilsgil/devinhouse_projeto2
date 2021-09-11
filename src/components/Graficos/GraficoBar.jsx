import "./Graficos.css";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Zapelino", "OI", "BRB", "BRB Nação"],
  datasets: [
    {
      label: "Quantidade de contas abertas",
      data: [2300, 1300, 550, 1000],
      backgroundColor: ["#007cb6", "#1bcf2a", "#06adfa", "#702000"],
      borderColor: ["#007cb6", "#1bcf2a", "#06adfa", "#702000"],
      borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Contas Abertas - BOT",
    },
  },
};

const GraficoBar = () => <Bar data={data} options={options} />;

export default GraficoBar;
