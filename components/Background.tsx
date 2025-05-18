import React from 'react';
import Particles from 'react-tsparticles';

export default function Background() {
  const options = {
    background: {
      color: { value: '#000000' },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        resize: true,
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: ['#61dafb', '#ff79c6', '#50fa7b', '#f1fa8c'] },
      links: { enable: true, color: '#444444', distance: 120 },
      move: { enable: true, speed: 1, outModes: { default: 'bounce' } },
      number: { density: { enable: true, area: 800 }, value: 50 },
      opacity: { value: 0.3 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      options={options as any}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
}