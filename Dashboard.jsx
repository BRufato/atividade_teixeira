import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

//montar o gráfico com os elementos
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Nascimento mensal de animais por sexo',
    },
  },
};

const labels = ['Janeiro'];

export const data = {
  labels,
  datasets: [
    {
      label: "Machos",
      data: labels.map(() => faker.number.int({ min: 0, max: 50})
      ),
      backgroundColor: "rgba(238, 12, 61, 0.5)",
    },
    {
      label: "Fêmeas",
      data: labels.map(() => faker.number.int({ min: 0, max: 50})
      ),
      backgroundColor: "rgba(8, 31, 161, 0.5)",
    },
  ],
};

export function App() {
    return <Bar options={options} data={data} />;
}