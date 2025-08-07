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
          <li><a href="#demo">Demo</a></li>
          <li><a href="#como-funciona">Cómo funciona</a></li>
          <li><a href="#niveles">Recompensas</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
