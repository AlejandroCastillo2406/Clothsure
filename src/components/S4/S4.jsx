import React, { useEffect, useState } from 'react';
import './S4.styles.css';

const BodaImage = '/imagenes/boda.png';
const GraduacionImage = '/imagenes/graduacion.jpeg';
const FiestaImage = '/imagenes/fiesta.jpeg';

const events = [
  {
    id: 'evento1',
    img: GraduacionImage,
    title: 'Boda en Cuernavaca',
    details: 'Cuernavaca - 5 de sep - 6:00 PM',
    comments: 12,
    shares: 5
  },
  {
    id: 'evento2',
    img: BodaImage,
    title: 'Graduación ITZ',
    details: 'Zacatepec - 12 de sep - 8:00 PM',
    comments: 8,
    shares: 3
  },
  {
    id: 'evento3',
    img: FiestaImage,
    title: 'Fiesta temática 90s',
    details: 'CDMX - 21 de sep - 10:00 PM',
    comments: 24,
    shares: 15
  }
];

const levels = [
  { points: 50, name: "Aprendiz de Moda" },
  { points: 100, name: "Estilista Junior" },
  { points: 150, name: "Experto en Estilo" },
  { points: 200, name: "Trendsetter" },
  { points: 400, name: "Gurú de la moda" }
];

const S4 = () => {
  const [userData, setUserData] = useState({
    points: 96,
    votedEvents: {}
  });
  
  const [currentLevel, setCurrentLevel] = useState(levels[1]);
  const [notification, setNotification] = useState(null);
  const [levelUp, setLevelUp] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const initialData = {
      points: 96,
      votedEvents: {}
    };
    setUserData(initialData);
    updateCurrentLevel(initialData.points);

    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: Math.random() * 10 + 5,
      delay: Math.random() * 5,
      duration: Math.random() * 20 + 10,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: `hsl(${Math.random() * 60 + 270}, 100%, ${Math.random() * 30 + 60}%)`
    }));
    setParticles(newParticles);
  }, []);

  const updateCurrentLevel = (points) => {
    const newLevel = [...levels].reverse().find(l => points >= l.points) || levels[0];
    setCurrentLevel(newLevel);
  };

  const handleVote = (eventId, type) => {
    if (userData.votedEvents[eventId]) {
      setNotification({ message: "Ya votaste en este evento", type: "error" });
      setTimeout(() => setNotification(null), 1500);
      return;
    }

    const pointsEarned = 2;
    const newPoints = userData.points + pointsEarned;
    const updatedData = {
      ...userData,
      points: newPoints,
      votedEvents: { ...userData.votedEvents, [eventId]: true }
    };
    
    setUserData(updatedData);
    
    const nextLevel = levels.find(l => l.points > currentLevel.points && newPoints >= l.points);
    if (nextLevel) {
      setCurrentLevel(nextLevel);
      setLevelUp(true);
      setTimeout(() => setLevelUp(false), 3000);
    }
    
    setNotification({
      message: `+${pointsEarned} pts por reaccionar`,
      type: "success"
    });
    setTimeout(() => setNotification(null), 2000);
  };

  const getProgressPercentage = () => {
    const nextLevel = levels.find(l => l.points > currentLevel.points);
    if (!nextLevel) return 100;
    return ((userData.points - currentLevel.points) / (nextLevel.points - currentLevel.points)) * 100;
  };

  return (
    <section id="r" className="reactions-container">
      <div className="particles-container">
        {particles.map(particle => (
          <div 
            key={particle.id}
            className="particle"
            style={{
              '--size': `${particle.size}px`,
              '--delay': `${particle.delay}s`,
              '--duration': `${particle.duration}s`,
              '--x': `${particle.x}vw`,
              '--y': `${particle.y}vh`,
              '--color': particle.color
            }}
          />
        ))}
        <div className="particles-connections"></div>
      </div>

      <div className="reactions-content">
        <div className="reactions-header">
          <div className="reactions-badge">
            <span className="reactions-badge-text">Eventos Exclusivos</span>
            <div className="reactions-badge-glow"></div>
          </div>
          <h1 className="reactions-title">
            Reacciona a los <span className="reactions-highlight">eventos</span>
          </h1>
          <p className="reactions-subtitle">
            Reacciona, comenta y comparte para ganar puntos y desbloquear recompensas
          </p>
        </div>

        <div className="progress-container">
          <div className="level-display">
            <span className="level-name">{currentLevel.name}</span>
            <span className="level-points">{userData.points} pts</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${getProgressPercentage()}%` }}
            ></div>
          </div>
          <div className="next-level">
            Siguiente nivel: {levels.find(l => l.points > currentLevel.points)?.name || "¡Máximo nivel!"}
          </div>
        </div>

        <div className="reactions-grid">
          {events.map(event => (
            <div className="reactions-card" key={event.id}>
              <div className="card-image-container">
                <img src={event.img} alt={event.title} className="reactions-img" />
                <div className="card-overlay"></div>
                <div className="card-glow"></div>
              </div>
              
              <div className="card-content">
                <div className="event-header">
                  <h3>{event.title}</h3>
                  <span className="event-date">{event.details}</span>
                </div>
                
                <div className="reactions-buttons">
                  <button 
                    onClick={() => handleVote(event.id, 'like')}
                    disabled={userData.votedEvents[event.id]}
                    className={userData.votedEvents[event.id] ? 'active' : ''}
                  >
                    👍
                  </button>
                  <button 
                    onClick={() => handleVote(event.id, 'love')}
                    disabled={userData.votedEvents[event.id]}
                    className={userData.votedEvents[event.id] ? 'active' : ''}
                  >
                    ❤️
                  </button>
                  <button 
                    onClick={() => handleVote(event.id, 'angry')}
                    disabled={userData.votedEvents[event.id]}
                    className={userData.votedEvents[event.id] ? 'active' : ''}
                  >
                    😠
                  </button>
                  <button 
                    onClick={() => handleVote(event.id, 'risa')}
                    disabled={userData.votedEvents[event.id]}
                    className={userData.votedEvents[event.id] ? 'active' : ''}
                  >
                    😂
                  </button>
                </div>
                
                <div className="engagement-stats">
                  <span>💬 {event.comments} comentarios</span>
                  <span>↗️ {event.shares} compartidos</span>
                </div>
                
                {userData.votedEvents[event.id] && (
                  <div className="action-badge">
                    <span>✔️ Ya votaste (+2pts)</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}

      {levelUp && (
        <div className="level-up-animation">
          <div className="confetti-container">
            {[...Array(150)].map((_, i) => {
              const randomX = Math.random() * 100;
              const randomDelay = Math.random() * 3;
              const randomDuration = 2 + Math.random() * 3;
              const randomSize = 5 + Math.random() * 10;
              const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
              
              return (
                <div 
                  key={i}
                  className="confetti"
                  style={{
                    left: `${randomX}%`,
                    '--delay': `${randomDelay}s`,
                    '--duration': `${randomDuration}s`,
                    '--size': `${randomSize}px`,
                    '--color': randomColor,
                    '--rotation': `${Math.random() * 360}deg`,
                    '--end-rotation': `${360 + Math.random() * 360}deg`
                  }}
                />
              );
            })}
          </div>
          <div className="level-up-content">
            <h2>¡Subiste de nivel!</h2>
            <h3>Ahora eres {currentLevel.name}</h3>
            <p>¡Sigue participando para alcanzar el próximo nivel!</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default S4;