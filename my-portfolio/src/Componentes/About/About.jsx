import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";

function About() {
  return (
    <div className="container-home">
      <NavBar />
      <div className="title">
        <div class="block">
          <div class="block-content">
            <p class="block-text fade-animation">ABOUT ME!</p>
          </div>
        </div>
      </div>
      <div className="textoDePresentacion">
        <p className="texto">
          My name is Santiago Varese, I am 23 years old and I live in
          Montevideo, Uruguay. I studied in Senpai Academy a bootcamp full time
          to be a Full Stack Web Developer, which was 3 months, 8 hours from
          Monday to Friday. I consider myself a sociable person, with a good
          ability to adapt to groups, I also consider myself ambitious and with
          many desire to grow and learn, I am focused and that makes me clear
          what I want my future to be in the IT area.
        </p>
      </div>
    </div>
  );
}

export default About;
