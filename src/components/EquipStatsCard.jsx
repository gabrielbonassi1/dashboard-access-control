import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { db } from '../firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';

function EquipStatsCard() {
  const [equips, setEquips] = useState([])

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "devices"), (snapshot) => {
      const devices = snapshot.docs.map(doc => doc.data());
      setEquips(devices);
    });

    return () => unsub();
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }} 
      className='bg-white shadow-md rounded-lg p-6'>
      <h2 className='text-xl font-semibold text-gray-800 mb-4'>Status dos Equipamentos</h2>
      <div className='flex flex-col justify-center'>
        <ul className='space-y-3 text-sm'>
          {equips.map((equip, index) => (
            <li key={index} className="flex justify-between items-center">
              <div>
                <p className='font-medium text-gray-700'>{equip.name}</p>
              </div>
              <span className={`text-xs font-semibold px-2 py-1 rounded-md ${
                  equip.status === 1
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}>
                  {equip.status === 1 ? 'Online' : 'Offline'}
                </span>
              <p className='text-gray-500 text-xs'>Última sincronização: {equip.lastSync}</p>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default EquipStatsCard;