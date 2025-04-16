import { React, useState } from "react";
import SummaryCard from "../components/SummaryCard";
import EquipStatsCard from "../components/EquipStatsCard";
import LastAlertsCard from "../components/LastAlertsCard";
import AccessGraphCard from "../components/AccessGraphCard";
import Clock from "../components/Clock";

// componentes da dashboard:
// Resumo de acessos:
//  - Total de acessos nas ultimas 24h
//  - Numero de usuarios unicos
//  - Tentativas negadas
// Status dos Equipamentos
//  - Porta 1
//  - Porta 2
//  (No final) Ultima sincronizacao
// Acessos recentes
// Grafico de acessos ao longo do tempo (embaixo de tudo)

function Dashboard() {
  const [userName, setUserName] = useState("DefaultUser");
  return (
    <div>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl">Olá, {userName}!</h1>
          <h2 className="text-xl">Bem vindo à Dashboard.</h2>
        </div>
        <Clock />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard />
        <EquipStatsCard />
        <LastAlertsCard />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4">
        <AccessGraphCard />
      </div>
    </div>
  );
}

export default Dashboard;
