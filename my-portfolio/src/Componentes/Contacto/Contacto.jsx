import React from "react";
import "./Contacto.css";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import Linkedin from "../../Materiales/logoLinkedin.png";
import Github from "../../Materiales/logoGithub.png";
import Gmail from "../../Materiales/logoGmail.png";

function Contacto() {
  return (
    <div className="container-home">
      <NavBar />
      <div>
        <div className="title">
          <div class="block">
            <div class="block-content">
              <p class="block-text fade-animation">SOCIAL MEDIA</p>
            </div>
          </div>
        </div>
        <div className="imagenSocialMedia">
          <a href="https://www.linkedin.com/in/santiago-varese/">
            <img className="logoLinkedin" src={Linkedin} alt="Linkedin" />
          </a>
          <h2>Click the logo to go to my Linkedin!</h2>
        </div>
        <div className="imagenSocialMedia">
          <a href="https://github.com/santiVarese">
            <img className="logoLinkedin" src={Github} alt="Linkedin" />
          </a>
          <h2>Click the logo to go to my Github!</h2>
        </div>
        <div className="imagenSocialMedia">
          <img className="logoLinkedin" src={Gmail} alt="Linkedin" />
          <h2>Here is my mail! varesesanti@gmail.com</h2>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
