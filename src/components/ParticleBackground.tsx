import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  density: number;
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    let animationFrameId: number;
    
    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', resizeCanvas);

    // Mouse position tracker
    let mouse = {
      x: -1000,
      y: -1000,
      radius: 120 // How far the repulsion reaches
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    function init() {
      particlesArray = [];
      const numberOfParticles = (canvas!.width * canvas!.height) / 6000; // Adjust density here
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas!.width;
        const y = Math.random() * canvas!.height;
        particlesArray.push({
          x,
          y,
          baseX: x,
          baseY: y,
          size: Math.random() * 1.5 + 0.5, // Tiny grains
          density: (Math.random() * 30) + 1 // Weight for repulsion speed
        });
      }
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      
      const isDarkMode = document.documentElement.classList.contains('dark');
      // Subtle color based on theme. Assuming dark mode by default for CodeBreakdowns
      ctx!.fillStyle = 'rgba(255, 255, 255, 0.15)'; 

      for (let i = 0; i < particlesArray.length; i++) {
        let particle = particlesArray[i];
        
        // Calculate distance between mouse and particle
        let dx = mouse.x - particle.x;
        let dy = mouse.y - particle.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        
        // Max distance, beyond that the force is 0
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        
        let directionX = forceDirectionX * force * particle.density;
        let directionY = forceDirectionY * force * particle.density;
        
        if (distance < mouse.radius) {
          particle.x -= directionX;
          particle.y -= directionY;
        } else {
          // Return to base position
          if (particle.x !== particle.baseX) {
            let dx = particle.x - particle.baseX;
            particle.x -= dx / 10;
          }
          if (particle.y !== particle.baseY) {
            let dy = particle.y - particle.baseY;
            particle.y -= dy / 10;
          }
        }
        
        ctx!.beginPath();
        ctx!.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx!.closePath();
        ctx!.fill();
      }
      
      animationFrameId = requestAnimationFrame(animate);
    }

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
}
