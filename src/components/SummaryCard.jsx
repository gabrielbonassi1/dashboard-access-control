import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function SummaryCard () {
  const [summary, setSummary] = useState({
    accessToday: 0,
    uniqueUsers: 0,
    deniedAttempts: 0,
  });

  useEffect(() => {
    const mockupData = {
      accessToday: Math.floor(Math.random() * 100),
      uniqueUsers: Math.floor(Math.random() * 50),
      deniedAttempts: Math.floor(Math.random() * 10)
    }

    setTimeout(() => {
      setSummary(mockupData);
    }, 5000);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }} 
      className='bg-white shadow-md rounded-lg p-6 flex flex-col justify-center'>
      <h2 className='text-xl font-semibold text-gray-800 mb-4'>Resumo das últimas 24h</h2>

      <div className='space-y-3 h-full flex flex-col justify-center'>
        <div className='flex justify-between text-sm'>
          <span className='text-gray-600'>Acessos hoje:</span>
          <span className='font-bold text-violet-700'>{summary.accessToday}</span>
        </div>
        <div className='flex justify-between text-sm'>
          <span className='text-gray-600'>Usuários únicos:</span>
          <span className='font-bold text-violet-700'>{summary.uniqueUsers}</span>
        </div>
        <div className='flex justify-between text-sm'>
          <span className='text-gray-600'>Tentativas negadas:</span>
          <span className='font-bold text-red-600'>{summary.deniedAttempts}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default SummaryCard;