import React from 'react';
import './S3.styles.css';

const S3 = () => {
  return (
    <section className="s3-container">
      <div className="s3-background">
        <video className="s3-background-video" autoPlay muted loop playsInline>
          <source src="/videos/S3.mp4" type="video/mp4" />
        </video>
        <div className="s3-video-overlay"></div>
        <div className="s3-neural-network"></div>
        <div className="s3-particles"></div>
      </div>
      
      <div className="s3-content">
        <div className="s3-header">
          <h2 className="s3-title">
            <span className="s3-title-main">CONECTA TU</span>
            <span className="s3-title-accent">ESTILO</span>
          </h2>
          
          <p className="s3-subtitle">
            Nuestra IA revolucionaria analiza tu foto y te recomienda outfits 
            que complementan perfectamente tu estilo único
          </p>
        </div>

        <div className="s3-demo-container">
          <div className="s3-process-flow">
            {/* Paso 1: Subir foto */}
            <div className="s3-step">
              <div className="s3-step-number">01</div>
              <div className="s3-step-content">
                <div className="s3-photo-upload">
                  <div className="s3-upload-placeholder">
                    <div className="s3-camera-icon">📸</div>
                    <div className="s3-upload-text">Sube tu foto</div>
                    <div className="s3-upload-glow"></div>
                  </div>
                </div>
                <h3>Sube tu Foto</h3>
                <p>Comparte una imagen tuya y deja que nuestra IA trabaje su magia</p>
              </div>
            </div>

            {/* Flecha animada */}
            <div className="s3-arrow">
              <div className="s3-arrow-line"></div>
              <div className="s3-arrow-head"></div>
            </div>

            {/* Paso 2: Análisis IA */}
            <div className="s3-step">
              <div className="s3-step-number">02</div>
              <div className="s3-step-content">
                <div className="s3-ai-analysis">
                  <div className="s3-brain-icon">🧠</div>
                  <div className="s3-scanning-lines"></div>
                  <div className="s3-ai-particles">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <h3>Análisis IA</h3>
                <p>Analizamos tu tono de piel, complexión y características únicas</p>
              </div>
            </div>

            {/* Flecha animada */}
            <div className="s3-arrow">
              <div className="s3-arrow-line"></div>
              <div className="s3-arrow-head"></div>
            </div>

            {/* Paso 3: Recomendaciones */}
            <div className="s3-step">
              <div className="s3-step-number">03</div>
              <div className="s3-step-content">
                <div className="s3-recommendations">
                  <div className="s3-outfit-cards">
                    <div className="s3-outfit-card">👔</div>
                    <div className="s3-outfit-card">👗</div>
                    <div className="s3-outfit-card">👕</div>
                  </div>
                  <div className="s3-sparkles">✨</div>
                </div>
                <h3>Outfits Personalizados</h3>
                <p>Recibe recomendaciones perfectas que realzan tu belleza natural</p>
              </div>
            </div>
          </div>
        </div>

        <div className="s3-features">
          <div className="s3-feature-grid">
            <div className="s3-feature-item">
              <div className="s3-feature-icon">🎯</div>
              <h4>Precisión Milimétrica</h4>
              <p>Análisis avanzado de colores, texturas y proporciones</p>
            </div>
            
            <div className="s3-feature-item">
              <div className="s3-feature-icon">🌈</div>
              <h4>Paleta de Colores</h4>
              <p>Identifica los tonos que mejor complementan tu piel</p>
            </div>
            
            <div className="s3-feature-item">
              <div className="s3-feature-icon">💎</div>
              <h4>Estilo Único</h4>
              <p>Cada recomendación es completamente personalizada</p>
            </div>
            
            <div className="s3-feature-item">
              <div className="s3-feature-icon">⚡</div>
              <h4>Resultados Instantáneos</h4>
              <p>Obtén recomendaciones en menos de 3 segundos</p>
            </div>
          </div>
        </div>

        <div className="s3-cta">
          <div className="s3-cta-content">
            <h3>¿Listo para descubrir tu estilo perfecto?</h3>
            <p>Únete a miles de usuarios que ya han transformado su guardarropa</p>
          </div>
        </div>
      </div>

      <div className="s3-floating-ai-elements">
        <div className="s3-ai-node s3-node-1"></div>
        <div className="s3-ai-node s3-node-2"></div>
        <div className="s3-ai-node s3-node-3"></div>
        <div className="s3-ai-connection s3-connection-1"></div>
        <div className="s3-ai-connection s3-connection-2"></div>
      </div>
    </section>
  );
};

export default S3;