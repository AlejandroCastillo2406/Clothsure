import React, { useState, useEffect, useRef } from 'react';
import './DemoIA.styles.css';

const DemoIA = () => {
  const [step, setStep] = useState('upload');
  const [selectedResult, setSelectedResult] = useState(null);
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);
  const radarRef = useRef(null);

  const predefinedResults = [
    {
      title: "Estilo Clásico Elegante",
      description: "Basado en tu tono de piel cálido y complexión atlética, te recomendamos colores tierra y cortes estructurados que realzan tu figura.",
      outfits: [
        { emoji: "👔", name: "Blazer azul marino" },
        { emoji: "👖", name: "Pantalones chinos beige" },
        { emoji: "👞", name: "Zapatos Oxford" }
      ],
      colors: ["#2E5A88", "#D4B483", "#3A4E48"]
    },
    {
      title: "Look Casual Moderno",
      description: "Perfecto para tu estilo relajado pero sofisticado, con colores neutros que complementan tus ojos.",
      outfits: [
        { emoji: "👕", name: "Camiseta blanca" },
        { emoji: "🧥", name: "Chaqueta denim" },
        { emoji: "👟", name: "Zapatillas blancas" }
      ],
      colors: ["#FFFFFF", "#6B8C9E", "#E3D7BF"]
    }
  ];

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      startAnalysis();
    }
  };

  const startAnalysis = () => {
    setStep('analyzing');
    setProgress(0);
    
    if (radarRef.current) {
      radarRef.current.style.animation = 'radarPulse 3s infinite';
    }
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          const randomIndex = Math.floor(Math.random() * predefinedResults.length);
          setSelectedResult(predefinedResults[randomIndex]);
          setStep('results');
          return 100;
        }
        return prev + (prev < 90 ? 10 : 1);
      });
    }, 150);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const resetDemo = () => {
    setStep('upload');
    setSelectedResult(null);
    setFileName('');
    if (radarRef.current) {
      radarRef.current.style.animation = 'none';
    }
  };

  return (
    <section id="s3-1" className="s3-1-container">
      <div className="s3-1-background">
        <div className="s3-1-grid-overlay"></div>
        <div className="s3-1-radial-gradient"></div>
        <div className="s3-1-particles">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="s3-1-particle" style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`
            }}></div>
          ))}
        </div>
      </div>
      
      <div className="s3-1-content">
        {step === 'upload' && (
          <div className="s3-1-upload-container">
            <div className="s3-1-header">
              <h2 className="s3-1-title">DESCUBRE TU ESTILO IDEAL</h2>
              <p className="s3-1-subtitle">Sube tu foto y nuestro sistema analizará tus características para recomendarte outfits perfectos</p>
            </div>
            
            <div className="s3-1-upload-card" onClick={triggerFileInput}>
              <div className="s3-1-upload-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                </svg>
              </div>
              <h3 className="s3-1-upload-title">Selecciona tu foto</h3>
              <p className="s3-1-upload-text">Arrastra o haz clic para buscar</p>
              
              <div className="s3-1-upload-button">
                Explorar archivos
              </div>
              
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                accept="image/*"
                style={{ display: 'none' }}
              />
            </div>
          </div>
        )}
        
        {step === 'analyzing' && (
          <div className="s3-1-analyzing-container">
            <div className="s3-1-analysis-header">
              <h2 className="s3-1-title">ANALIZANDO TU ESTILO</h2>
              <p className="s3-1-subtitle">Estamos procesando tus características únicas</p>
              <div className="s3-1-file-name">{fileName}</div>
            </div>
            
            <div className="s3-1-analysis-animation">
              <div className="s3-1-radar" ref={radarRef}>
                <div className="s3-1-radar-center"></div>
                <div className="s3-1-radar-glow"></div>
                <div className="s3-1-radar-scan"></div>
                <div className="s3-1-radar-ring s3-1-radar-ring-1"></div>
                <div className="s3-1-radar-ring s3-1-radar-ring-2"></div>
                <div className="s3-1-radar-ring s3-1-radar-ring-3"></div>
                <div className="s3-1-radar-dots">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="s3-1-radar-dot" style={{
                      transform: `rotate(${i * 45}deg) translateY(-90px)`
                    }}></div>
                  ))}
                </div>
                
              </div>
              
              <div className="s3-1-progress-container">
                <div className="s3-1-progress-bar">
                  <div 
                    className="s3-1-progress-fill" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className="s3-1-progress-text">
                  <span>Procesando: {progress}%</span>
                  <span>{
                    progress < 30 ? "Detectando características..." :
                    progress < 60 ? "Analizando colores..." :
                    progress < 90 ? "Buscando estilos..." :
                    "Finalizando recomendaciones..."
                  }</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {step === 'results' && selectedResult && (
          <div className="s3-1-results-container">
            <div className="s3-1-results-header">
              <h2 className="s3-1-title">TUS RECOMENDACIONES</h2>
              <p className="s3-1-subtitle">Basado en nuestro análisis de estilo</p>
            </div>
            
            <div className="s3-1-result-card">
              <div className="s3-1-result-main">
                <h3 className="s3-1-result-title">{selectedResult.title}</h3>
                <p className="s3-1-result-description">{selectedResult.description}</p>
              </div>
              
              <div className="s3-1-result-sections">
                <div className="s3-1-outfits-section">
                  <h4 className="s3-1-section-title">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20 7h-3a4 4 0 0 0-4 4v1m4-5a4 4 0 0 1 4 4v1m-8-5h3m-3 0H7m3 0h3m-3 4v1m0 4v1m0 0H7m3 0h3m-3-4h3m3 0h3"/>
                    </svg>
                    Outfits recomendados
                  </h4>
                  <div className="s3-1-outfits-grid">
                    {selectedResult.outfits.map((item, index) => (
                      <div key={index} className="s3-1-outfit-item">
                        <div className="s3-1-outfit-emoji">{item.emoji}</div>
                        <div className="s3-1-outfit-name">{item.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="s3-1-colors-section">
                  <h4 className="s3-1-section-title">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M7 21a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12a4 4 0 0 1-4 4Zm0 0h12a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 0 1 2.828 0l2.829 2.829a2 2 0 0 1 0 2.828l-8.486 8.485M7 17h.01"/>
                    </svg>
                    Paleta de colores
                  </h4>
                  <div className="s3-1-colors-grid">
                    {selectedResult.colors.map((color, index) => (
                      <div 
                        key={index} 
                        className="s3-1-color-item" 
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              className="s3-1-cta-button"
              onClick={resetDemo}
            >
              Probar con otra foto
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DemoIA;