'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

// Registrar os módulos do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Dados do gráfico
const data = {
  labels: ['Jan', 'Fev', 'Mar', 'Mai'],
  datasets: [
    {
      label: 'Vendas',
      data: [5, 17, 30, 20],
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
  ],
};

// Configurações do gráfico
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      color: '#000000',
    },
    title: {
      display: false,
      text: 'Gráfico de Vendas',
      color: '#000000',
      font: {
        size: 18,
        weight: 'bold',
      },
    },
  },
};

export default function MeuGrafico() {
  return <Bar data={data} options={options} />;
}
