import React, { useState } from 'react';
import './Fin.styles.css';

const Fin = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email captado:', email);
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="fin" className="fin-simple-container">
      <div className="fin-simple-content">
        <h2 className="fin-simple-title">¿Quieres ser el primero en probarlo?</h2>
        <p className="fin-simple-subtitle">Déjanos tu correo y te avisaremos cuando esté listo</p>
        
        <form onSubmit={handleSubmit} className="fin-simple-form">
          <div className="fin-simple-input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              required
              className="fin-simple-input"
            />
            <button type="submit" className="fin-simple-button">
              Avísame
            </button>
          </div>
        </form>

        {submitted && (
          <div className="fin-simple-success">
            ¡Gracias! Te avisaremos cuando esté disponible.
          </div>
        )}
      </div>
    </section>
  );
};

export default Fin;