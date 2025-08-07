import React from 'react';
import './S4.styles.css';

const S4 = () => {
  const features = [
    {
      icon: '👤',
      title: 'Crea tu perfil',
      description: 'Comparte tus propios outfits y construye tu identidad de estilo.'
    },
    {
      icon: '💬',
      title: 'Recibe feedback real',
      description: 'Opiniones honestas de una comunidad apasionada por la moda.'
    },
    {
      icon: '🏅',
      title: 'Sube en los rankings',
      description: 'Gana visibilidad y reconocimiento por tus looks más votados.'
    },
    {
      icon: '🛠️',
      title: 'Herramientas de estilo',
      description: 'Planifica tus outfits, guarda favoritos y define tu estilo único.'
    }
  ];

  return (
    <div className="s4-container">
      <div className="s4-content">
        <h2 className="s4-title">Lo que estamos por lanzar</h2>
        <p className="s4-subtitle">
          Ésta es tu oportunidad de formar parte de algo nuevo desde el inicio.
        </p>
        
        <div className="features-container">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <p className="s4-slogan">
          ¿Qué me pongo para esta ocasión? Aquí lo sabrás.
        </p>
      </div>
    </div>
  );
};

export default S4;