import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/globals.css";
import Navbar from "./components/Navbar";
import Dashboard from "./app/Dashboard";
import Regulars from "./app/users/Regulars";
import Visitors from "./app/users/Visitors";

const isProduction = import.meta.env.MODE === "production";

function App() {
  return (
    <BrowserRouter basename={isProduction ? "/dashboard-access-control" : "/"}>
      <div className="flex">
        <Navbar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users/regulars" element={<Regulars />} />
            <Route path="/users/visitors" element={<Visitors />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
