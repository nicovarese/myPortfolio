import React from "react";
import "./paginaPrincipal.css";
import { Link } from "react-router-dom";
import perfil from "../../Materiales/Perfil.JPG";


function paginaPrincipal() {
  return <div className="contenedor">
<div class="grid">
  <div class="grid__title">
    <h2>WELCOME !</h2>
    <h2>I´M SANTIAGO VARESE</h2>
    <span class="mask"></span>
  </div>
  <div class="grid__subtitle">
    <p>FULL STACK WEB DEVELOPER</p>
    <span class="mask delay"></span>
  </div>
  
</div>
<div className="contendeorperfillista">
<div className="imagenetc">
<div className="imagenPerfil2">
  <img
    className="imagenPerfil"   
    src={perfil}  
    alt="Perfil"
  />
</div>
  <h5>klsgjksdg</h5>
  <h5>klsgjksdg</h5>
  <h5>klsgjksdg</h5>
  <h5>klsgjksdg</h5>
</div>
</div>
</div>


}

export default paginaPrincipal;
