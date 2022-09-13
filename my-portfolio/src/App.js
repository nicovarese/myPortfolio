import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Paginaprincipal from "./Componentes/Paginaprincipal/paginaPrincipal";
import Contacto from "./Componentes/Contacto/Contacto";
import Proyectos from "./Componentes/Proyectos/Proyectos";
import Skills from "./Componentes/Skills/Skills";

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
