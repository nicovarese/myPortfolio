import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Paginaprincipal from "./src/Componentes/Paginaprincipal";
import Contacto from "./my-portfolio/src/Componentes/Contacto";
import Proyectos from "./src/Componentes/Proyectos";
import Skills from "./src/Componentes/Skills";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Paginaprincipal />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Proyectos" element={<Proyectos />} />
        <Route path="/Skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
