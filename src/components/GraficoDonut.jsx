'use client';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Registrar elementos necessários
ChartJS.register(ArcElement, Tooltip, Legend, Title);

// Dados de exemplo
const data = {
  labels: ['Vendas', 'Marketing', 'Desenvolvimento', 'Suporte'],
  datasets: [
    {
      label: 'Investimentos (R$)',
      data: [4000, 2000, 3000, 1000],
      backgroundColor: [
        '#22c55e', // verde
        '#3b82f6', // azul
        '#facc15', // amarelo
        '#ef4444', // vermelho
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Distribuição de Gastos',
      color: '#111827',
      font: {
        size: 18,
        weight: 'bold',
      },
    },
    legend: {
      position: 'right',
      labels: {
        color: '#374151',
      },
    },
  },
};

export default function GraficoDonut() {
  return <Doughnut data={data} options={options} />;
}
