import React from 'react';
import './SR.styles.css';

const SR = () => {
  const pointsSystem = [
    { action: "Like", points: 2, icon: "👍", color: "#4CAF50" },
    { action: "Comentar", points: 1, icon: "💬", color: "#2196F3" },
    { action: "Compartir", points: 3, icon: "↗️", color: "#FF9800" }
  ];

  const levels = [
    { level: 1, points: 50, reward: "Avatar Básico", title: "Aprendiz de Moda", icon: "👕", color: "#9C27B0" },
    { level: 2, points: 100, reward: "Avatar Avanzado", title: "Estilista Junior", icon: "👔", color: "#3F51B5" },
    { level: 3, points: 200, reward: "Avatoar Animado", title: "Experto en Estilo", icon: "👗", color: "#E91E63" },
    { level: 4, points: 500, reward: "SORPRESA", title: "Gurú de la Moda", icon: "👑", color: "#FFC107" },
    
  ];

  return (
    <section id="sr" className="sr-container">
      <div className="sr-video-container">
        <video className="sr-background-video" autoPlay muted loop playsInline>
          <source src="/videos/sssmall.mp4" type="video/mp4" />
        </video>
        <div className="sr-video-overlay"></div>
      </div>
      
      <div className="sr-content">
        <div className="sr-header">         
        </div>

        <div className="sr-section">
          <h2 className="sr-section-title">
            <span className="sr-title-highlight">ㅤ¿Cómo ganar puntos?ㅤ</span>
          </h2>
          <p className="sr-subtitle">Gana puntos y desbloquea increíbles beneficios</p>
          <div className="sr-points-horizontal">
            {pointsSystem.map((item, index) => (
              <div 
                key={index} 
                className="sr-point-card"
                style={{ '--card-color': item.color }}
              >
                <div className="sr-point-icon">{item.icon}</div>
                <div className="sr-point-details">
                  <div className="sr-point-action">{item.action}</div>
                  <div className="sr-point-value">+{item.points} pts</div>
                </div>
                <div className="sr-point-glow"></div>
                <div className="sr-point-particles"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="sr-section">
          <h2 className="sr-section-title">
            <span className="sr-title-highlight"> ㅤNiveles de Estiloㅤ </span>
          </h2>
          
          <div className="sr-levels-grid">
            {levels.map((item, index) => (
              <div 
                key={index} 
                className={`sr-level-card ${item.level === 4? 'sr-premium' : ''}`}
                style={{ '--card-color': item.color }}
              >
                <div className="sr-level-badge">Nivel {item.level}</div>
                <div className="sr-level-icon">{item.icon}</div>
                <div className="sr-level-info">
                  <h3>{item.title}</h3>
                  <p className="sr-level-requirement">{item.points} pts requeridos</p>
                  <div className="sr-level-reward">{item.reward}</div>
                </div>
                <div className="sr-level-glow"></div>
                {item.level === 5 && <div className="sr-premium-badge">PREMIUM</div>}
              </div>
            ))}
          </div>
        </div>

        <div className="sr-progress-container">
          <div className="sr-progress">
            <div className="sr-progress-info">
              <span>Tus puntos: <strong>96</strong></span>
              <span>Siguiente nivel: <strong>100</strong></span>
            </div>
            <div className="sr-progress-bar">
              <div 
                className="sr-progress-fill" 
                style={{ width: '35%' }}
                data-progress="35%"
              ></div>
            </div>
          </div>
          <div className="sr-progress-message">
            ¡Sigue así! Estás a solo <strong>4 puntos</strong> de convertirte en <strong>Estilista Junior</strong>.
          </div>
        </div>
      </div>
    </section>
  );
};

export default SR;