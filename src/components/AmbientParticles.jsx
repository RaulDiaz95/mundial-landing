"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function AmbientParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="ambient-particles-canvas"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        fpsLimit: 60,
        detectRetina: true,
        particles: {
          number: {
            value: 60,
            density: { enable: true, area: 900 },
          },
          color: { value: "#0b07ff" },
          shape: { type: "circle" },
          opacity: {
            value: { min: 0.18, max: 0.35 },
            random: true,
          },
          size: {
            value: { min: 2.6, max: 4.2 },
          },
          move: {
            enable: true,
            speed: 0.25,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: false },
            onClick: { enable: false },
            resize: true,
          },
        },
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        background: "transparent",
      }}
    />
  );
}
