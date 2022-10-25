import { useMemo, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from 'tsparticles-slim';

const Part = () => {
  const options = useMemo(() => {
    return {
      background: {
        color: '#000',
      },
      fullScreen: {
        enable: true,
        zIndex: 0,
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          modes: {
            push: {
              quantity: 100,
            },
            repulse: {
              distance: 100,
            },
          },
        },
      },
      particles: {
        move: {
          enable: true,
          speed: {min: 1, max: 3},
        },
        opacity: {
          value: {min: 0.1, max: 0.2}
        },
        links: {
          enable: true,
          distance: 150,
        },
        size: {
          value: { min: 1, max: 3}
        }
      }
    }
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return (
    <Particles init={particlesInit} options={options} />
  );
}

export default Part;
