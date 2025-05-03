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

// Registrar os módulos
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  datasets: [
    {
      label: 'Faturamento (R$)',
      data: [1200, 1900, 800, 1500, 2200, 1700],
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      borderRadius: 4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: '#374151',
      },
    },
    title: {
      display: false,
      text: 'Faturamento Mensal',
      color: '#22c55e',
      font: {
        size: 18,
        weight: 'bold',
      },
    },
  },
  scales: {
    y: {
      ticks: {
        color: '#4B5563',
        callback: function (value) {
          return 'R$ ' + value;
        },
      },
    },
    x: {
      ticks: {
        color: '#4B5563',
      },
    },
  },
};

export default function GraficoValores() {
  return <Bar data={data} options={options} />;
}
