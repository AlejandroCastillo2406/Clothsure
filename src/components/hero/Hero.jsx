import React from "react";
import "./Hero.styles.css";

const Hero = () => {
  return (
    <section className="hero-container" id="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/videos/hero.mp4" type="video/mp4" />
        Tu navegador no soporta video.
      </video>

      <div className="hero-overlay" />

      <div className="hero-content">
        <img src="/imagenes/logo.png" alt="The Clothesure Logo" className="hero-logo" />

        <h1 className="hero-title">The Clothesure</h1>
        <p className="hero-subtitle">
          La moda no se repite. Se impone. Atrévete a decidir qué merece ser visto.
        </p>

        <a href="#demo" className="hero-button">
          Probar la demo
        </a>
      </div>
    </section>
  );
};

export default Hero;
