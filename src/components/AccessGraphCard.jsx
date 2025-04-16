import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { motion } from 'framer-motion';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

function AccessGraphCard() {
  const mockupData = {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    datasets: [
      {
        label: 'Acessos',
        data: [120, 90, 150, 80, 200, 110, 50],
        backgroundColor: '#7c3aed', // violeta Tailwind
        borderRadius: 6,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 50
        }
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }} 
      className="bg-white shadow-md rounded-lg p-6 max-h-796h-full flex flex-col">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Acessos nos Últimos 7 Dias</h2>
      <div className="flex-1">
        <Bar data={mockupData} options={options} height={80}/>
      </div>
    </motion.div>
  )
}

export default AccessGraphCard;