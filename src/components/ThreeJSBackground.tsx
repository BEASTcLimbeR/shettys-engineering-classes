"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ThreeJSBackgroundProps {
  className?: string;
}

const ThreeJSBackground: React.FC<ThreeJSBackgroundProps> = ({ className }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Create floating geometric shapes
    const createFloatingShape = (geometry: THREE.BufferGeometry, color: number, position: THREE.Vector3) => {
      const material = new THREE.MeshPhongMaterial({ 
        color, 
        transparent: true, 
        opacity: 0.7,
        shininess: 100
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.copy(position);
      mesh.userData = {
        originalY: position.y,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        floatSpeed: Math.random() * 0.01 + 0.005,
        floatRange: Math.random() * 2 + 1
      };
      return mesh;
    };

    // Add various geometric shapes
    const shapes: THREE.Mesh[] = [];

    // Cubes
    for (let i = 0; i < 8; i++) {
      const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 10
      );
      const color = new THREE.Color().setHSL(Math.random(), 0.7, 0.5);
      const cube = createFloatingShape(geometry, color.getHex(), position);
      shapes.push(cube);
      scene.add(cube);
    }

    // Spheres
    for (let i = 0; i < 6; i++) {
      const geometry = new THREE.SphereGeometry(0.3, 16, 16);
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 12
      );
      const color = new THREE.Color().setHSL(Math.random(), 0.6, 0.6);
      const sphere = createFloatingShape(geometry, color.getHex(), position);
      shapes.push(sphere);
      scene.add(sphere);
    }

    // Torus
    for (let i = 0; i < 4; i++) {
      const geometry = new THREE.TorusGeometry(0.4, 0.1, 8, 16);
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 14
      );
      const color = new THREE.Color().setHSL(Math.random(), 0.8, 0.4);
      const torus = createFloatingShape(geometry, color.getHex(), position);
      shapes.push(torus);
      scene.add(torus);
    }

    // Octahedron
    for (let i = 0; i < 3; i++) {
      const geometry = new THREE.OctahedronGeometry(0.4);
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 16
      );
      const color = new THREE.Color().setHSL(Math.random(), 0.9, 0.3);
      const octahedron = createFloatingShape(geometry, color.getHex(), position);
      shapes.push(octahedron);
      scene.add(octahedron);
    }

    // Create particle system
    const particleCount = 200;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 20;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      const color = new THREE.Color().setHSL(Math.random(), 0.8, 0.6);
      particleColors[i * 3] = color.r;
      particleColors[i * 3 + 1] = color.g;
      particleColors[i * 3 + 2] = color.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0x00ff00, 0.5, 10);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x00ccff, 0.5, 10);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Animation
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Animate shapes
      shapes.forEach((shape) => {
        const userData = shape.userData;
        
        // Rotation
        shape.rotation.x += userData.rotationSpeed;
        shape.rotation.y += userData.rotationSpeed * 0.5;
        shape.rotation.z += userData.rotationSpeed * 0.3;

        // Floating animation
        const time = Date.now() * userData.floatSpeed;
        shape.position.y = userData.originalY + Math.sin(time) * userData.floatRange;

        // Gentle movement
        shape.position.x += Math.sin(time * 0.5) * 0.001;
        shape.position.z += Math.cos(time * 0.3) * 0.001;
      });

      // Animate particles
      particles.rotation.y += 0.001;
      particles.rotation.x += 0.0005;

      // Animate lights
      pointLight1.position.x = Math.sin(Date.now() * 0.001) * 5;
      pointLight1.position.z = Math.cos(Date.now() * 0.001) * 5;
      
      pointLight2.position.x = Math.sin(Date.now() * 0.001 + Math.PI) * 5;
      pointLight2.position.z = Math.cos(Date.now() * 0.001 + Math.PI) * 5;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (renderer && mountRef.current) {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (renderer && mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
        renderer.dispose();
      }
      if (scene) {
        scene.clear();
      }
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className={className}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default ThreeJSBackground; 