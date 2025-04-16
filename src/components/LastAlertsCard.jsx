import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function LastAlertsCard() {
  const [alerts, setAlerts] = useState([])

  useEffect(() => {
    const mockupData = [
      {
        id: 1,
        type: "denied_access",
        message: "Tentativa de acesso negado",
        timestamp: '16/04/2025 08:21'
      },
      {
        id: 2,
        type: "allowed_access",
        message: "Acesso permitido: User",
        timestamp: '16/04/2025 09:47'
      }
    ]

    setTimeout(() => {
      setAlerts(mockupData)
    }, 5000)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }} 
      className='bg-white shadow-md rounded-lg p-6'>
      <h2 className='text-xl font-semibold text-gray-800 mb-4'>Últimos Alertas</h2>
      <div className='flex flex-col justify-center'>
        <ul className='space-y-3 text-sm overflow-y-auto max-h-64 pr-2'>
          {alerts.map((alert) => (
            <li key={alert.id} className='flex items-start gap-3 border-l-4 border-red-500 pl-3'>
              {/* devia ter um icone aqui */}
              <div className='flex-1'>
                <p className='text-gray-700'>{alert.message}</p>
                <p className='text-gray-500 text-xs'>{alert.timestamp}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default LastAlertsCard;