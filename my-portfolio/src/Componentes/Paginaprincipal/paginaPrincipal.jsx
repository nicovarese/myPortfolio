import React from "react";
import "./paginaPrincipal.css";
import { Link } from "react-router-dom";
import perfil from "../../Materiales/Perfil.JPG";



function paginaPrincipal() {
  return <div className="contenedor">
   <ul class="menu">
  <li title="home"><a href="#" class="home">home</a></li>
  <li title="search"><a href="#" class="search">search</a></li>
  <li title="pencil"><a href="#" class="pencil">pencil</a></li>
  <li title="about"><a href="#" class="active about">about</a></li>
  <li title="archive"><a href="#" class="archive">archive</a></li>
  <li title="contact"><a href="#" class="contact">contact</a></li>
</ul>

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
  <h5>Name: Santiago</h5>
  <h5>Surname: Varese</h5>
  <h5>Age: 23</h5>
  <h5>Country: Uruguay</h5>
  <h5>City: Montevideo</h5>
</div>
</div>
</div>


}

export default paginaPrincipal;
