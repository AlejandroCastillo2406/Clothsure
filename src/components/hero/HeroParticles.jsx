import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const HeroParticles = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="hero-particles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 40 },
          color: {
            value: ["#340061", "#a71090"]
          },
          shape: { type: "circle" },
          opacity: {
            value: 0.6,
            random: true
          },
          size: {
            value: 4,
            random: true
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: true,
            straight: false,
            outMode: "out"
          }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true
          },
          modes: {
            repulse: { distance: 80 }
          }
        },
        background: {
          color: "transparent"
        }
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -2
      }}
    />
  );
};

export default HeroParticles;
