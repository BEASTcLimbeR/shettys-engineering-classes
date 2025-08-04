"use client";

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

interface ThreeJSBackgroundProps {
  className?: string;
}

const ThreeJSBackground: React.FC<ThreeJSBackgroundProps> = ({ className }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const seedRef = useRef(12345); // Fixed seed for consistent results

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!mountRef.current || !isClient) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Use a stable seed for consistent random values
    const seededRandom = () => {
      seedRef.current = (seedRef.current * 9301 + 49297) % 233280;
      return seedRef.current / 233280;
    };

    // Simplified shape creation
    const createSimpleShape = (geometry: THREE.BufferGeometry, color: number, position: THREE.Vector3) => {
      const material = new THREE.MeshBasicMaterial({ 
        color, 
        transparent: true, 
        opacity: 0.3,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.copy(position);
      mesh.userData = {
        originalY: position.y,
        rotationSpeed: (seededRandom() - 0.5) * 0.01,
        floatSpeed: seededRandom() * 0.005 + 0.002,
        floatRange: seededRandom() * 1 + 0.5
      };
      return mesh;
    };

    // Reduced number of shapes
    const shapes: THREE.Mesh[] = [];

    // Fewer cubes
    for (let i = 0; i < 4; i++) {
      const geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
      const position = new THREE.Vector3(
        (seededRandom() - 0.5) * 8,
        (seededRandom() - 0.5) * 4,
        (seededRandom() - 0.5) * 8
      );
      const color = new THREE.Color().setHSL(seededRandom(), 0.7, 0.5);
      const cube = createSimpleShape(geometry, color.getHex(), position);
      shapes.push(cube);
      scene.add(cube);
    }

    // Fewer spheres
    for (let i = 0; i < 3; i++) {
      const geometry = new THREE.SphereGeometry(0.2, 8, 8);
      const position = new THREE.Vector3(
        (seededRandom() - 0.5) * 10,
        (seededRandom() - 0.5) * 6,
        (seededRandom() - 0.5) * 10
      );
      const color = new THREE.Color().setHSL(seededRandom(), 0.6, 0.6);
      const sphere = createSimpleShape(geometry, color.getHex(), position);
      shapes.push(sphere);
      scene.add(sphere);
    }

    // Simplified particle system
    const particleCount = 50;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (seededRandom() - 0.5) * 15;
      particlePositions[i * 3 + 1] = (seededRandom() - 0.5) * 10;
      particlePositions[i * 3 + 2] = (seededRandom() - 0.5) * 15;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: 0x00ff00,
      transparent: true,
      opacity: 0.4
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Simplified lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    camera.position.z = 5;

    // Animation
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Simplified shape animations
      shapes.forEach((shape) => {
        const userData = shape.userData;
        
        shape.rotation.x += userData.rotationSpeed * 0.5;
        shape.rotation.y += userData.rotationSpeed * 0.3;

        const time = Date.now() * userData.floatSpeed;
        shape.position.y = userData.originalY + Math.sin(time) * userData.floatRange;
      });

      particles.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isClient]);

  if (!isClient) {
    return <div ref={mountRef} className={className} />;
  }

  return <div ref={mountRef} className={className} />;
};

export default ThreeJSBackground; 