import React, { useState, useEffect } from "react";
import { db } from '../../firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';

const Regulars = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
      const users = snapshot.docs.map(doc => doc.data());
      setUsers(users);
    });
    return () => unsub();
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold text-indigo-600">Usuários Regulars</h1>
        <div className="flex flex-col justify-center">
          <ul className="flex flex-col justify-center">
            {users.map((user, index) => (
              <li key={index} className="flex justify-between items-center">
                <div>
                  <p className='font-medium text-gray-700'>{user.name}</p>
                </div>
                <div>
                  {/* <p className='font-medium text-gray-700'>Último acesso: {user.last_access}</p> */}
                </div>
                <span className={`text-xs font-semibold px-2, py-1 rounded-md ${
                user.card_id != 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {user.card_id != 0 ? 'Com Cartão' : 'Sem Cartão'}
                </span>
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default Regulars;
