import React from "react";
import "./Header.styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/imagenes/logo.png" alt="The Clothesure" className="logo" />
        <span className="header-tagline">
          The Clothesure está en construcción…
        </span>
      </div>

      <nav className="header-nav">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#s2">¿Qué es?</a></li>
          <li><a href="#s3">IA</a></li>
          <li><a href="#s3-1">Demo IA</a></li>
          <li><a href="#sr">Niveles</a></li>
          <li><a href="#r">Reacciona</a></li>
          <li><a href="#fin">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
