import React from 'react';
import './S2.styles.css';

const S2 = () => {
  return (
    <section id="s2" className="s2-container">
      <div className="s2-background">
        <div className="s2-grid-overlay"></div>
        <div className="s2-gradient-overlay"></div>
      </div>
      
      <div className="s2-content">
        <div className="s2-header">
          <h2 className="s2-title">
            <span className="s2-title-main">¿QUÉ ES?</span>
          </h2>
        </div>

        <div className="s2-main-content">
          <div className="s2-description">
            <p className="s2-text-primary">
              <span className="s2-brand-name">The Clothesure</span> no es solo otra red social. 
              Somos una <span className="s2-highlight-text">plataforma integral</span> que 
              revoluciona la forma en que experimentas la moda digital.
            </p>
            
            <p className="s2-text-secondary">
              Combinamos inteligencia artificial, realidad aumentada y una comunidad 
              vibrante para crear una experiencia única donde la tecnología y el estilo 
              se encuentran.
            </p>
          </div>

          <div className="s2-features-preview">
            <div className="s2-feature-card">
              <div className="s2-feature-icon">
                <div className="s2-icon-ai"></div>
              </div>
              <h3>IA Avanzada</h3>
              <p>Recomendaciones inteligentes</p>
            </div>
            
            <div className="s2-feature-card">
              <div className="s2-feature-icon">
                <div className="s2-icon-ar"></div>
              </div>
              <h3>Realidad Aumentada</h3>
              <p>Pruébate ropa virtualmente</p>
            </div>
            
            <div className="s2-feature-card">
              <div className="s2-feature-icon">
                <div className="s2-icon-community"></div>
              </div>
              <h3>Comunidad Global</h3>
              <p>Conecta con fashionistas</p>
            </div>
          </div>
        </div>

        <div className="s2-cta">
          <p className="s2-cta-text">
            En las siguientes secciones descubrirás todas las funciones 
            que hacen de <span className="s2-brand-accent">The Clothesure</span> 
            tu nueva experiencia de moda favorita.
          </p>
          
          <div className="s2-scroll-indicator">
            <div className="s2-scroll-arrow"></div>
            <span>Sigue explorando</span>
          </div>
        </div>
      </div>

      <div className="s2-floating-elements">
        <div className="s2-float-element s2-float-1"></div>
        <div className="s2-float-element s2-float-2"></div>
        <div className="s2-float-element s2-float-3"></div>
      </div>
    </section>
  );
};

export default S2;