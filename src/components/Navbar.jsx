import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import NavbarButton from "./NavbarButton";
import react_logo from "../assets/react.svg"

function Navbar() {
  const [usersTabOpen, setUsersTabOpen] = useState(false);
  const [reportsTabOpen, setReportsTabOpen] = useState(false);
  return (
    <nav className="bg-linear-to-bl from-purple-500 to-purple-800 text-white w-48 min-h-screen p-4 flex flex-col justify-between">
      <div>
        <div className="mb-6 flex items-center justify-center"><img src={react_logo} alt="Logomarca da empresa" className="w-20 h-30" /></div>
        <ul className="space-y-2 flex flex-col">
          <li>
            <NavbarButton address="/">Dashboard</NavbarButton>
          </li>
          <li>
            <button
              onClick={() => setUsersTabOpen(!usersTabOpen)}
              className="w-full text-center hover:bg-gray-800 hover:rounded-md hover:border-2 hover:border-gray-400 px-2 py-1 flex justify-between items-center"
            >
              Usuários
              <span className="text-sm">{usersTabOpen ? "▾" : "▸"}</span>
            </button>
            {usersTabOpen && (
              <ul className="pl-4 space-y-1 mt-1">
                <li>
                  <NavbarButton address="/users/regulars">Regulares</NavbarButton>
                </li>
                <li>
                  <NavbarButton address="/users/visitors">Visitantes</NavbarButton>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <Footer />
    </nav>
  );
}

export default Navbar;
