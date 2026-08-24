'use client';

import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Float, Environment, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import React from 'react';

// Trophy Component - Procedural 3D trophy
function Trophy() {
  const trophyRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (trophyRef.current) {
      trophyRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      trophyRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={trophyRef} position={[2, 0, 0]}>
        {/* Trophy Base */}
        <mesh position={[0, -2, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[1.5, 1.8, 0.5, 32]} />
          <meshStandardMaterial 
            color="#1a1a1a" 
            metalness={0.9} 
            roughness={0.1}
            envMapIntensity={1}
          />
        </mesh>
        
        {/* Trophy Stem */}
        <mesh position={[0, -0.5, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.3, 0.5, 3, 32]} />
          <meshStandardMaterial 
            color="#FF5A00" 
            metalness={0.8} 
            roughness={0.2}
            emissive="#FF5A00"
            emissiveIntensity={0.2}
          />
        </mesh>
        
        {/* Trophy Cup */}
        <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
          <sphereGeometry args={[1.2, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.6]} />
          <meshStandardMaterial 
            color="#FFD700" 
            metalness={0.95} 
            roughness={0.05}
            envMapIntensity={1.5}
          />
        </mesh>
        
        {/* Trophy Handles */}
        <mesh position={[-1.3, 1.2, 0]} rotation={[0, 0, Math.PI * 0.3]} castShadow>
          <torusGeometry args={[0.4, 0.1, 16, 32, Math.PI]} />
          <meshStandardMaterial 
            color="#FFD700" 
            metalness={0.95} 
            roughness={0.05}
          />
        </mesh>
        <mesh position={[1.3, 1.2, 0]} rotation={[0, 0, -Math.PI * 0.3]} castShadow>
          <torusGeometry args={[0.4, 0.1, 16, 32, Math.PI]} />
          <meshStandardMaterial 
            color="#FFD700" 
            metalness={0.95} 
            roughness={0.05}
          />
        </mesh>
        
        {/* Star on top */}
        <mesh position={[0, 2.5, 0]} castShadow>
          <octahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial 
            color="#FF5A00" 
            metalness={0.8} 
            roughness={0.2}
            emissive="#FF5A00"
            emissiveIntensity={0.5}
          />
        </mesh>
      </group>
    </Float>
  );
}

// Glowing Platform
function GlowingPlatform() {
  return (
    <mesh position={[2, -2.5, 0]} rotation={[0, 0, 0]} receiveShadow>
      <ringGeometry args={[2, 2.5, 64]} />
      <meshStandardMaterial 
        color="#FF5A00" 
        emissive="#FF5A00" 
        emissiveIntensity={0.5}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

// Stadium Lights
function StadiumLights() {
  const lightsRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (lightsRef.current) {
      lightsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={lightsRef}>
      {Array.from({ length: 8 }).map((_, i) => (
        <pointLight
          key={i}
          position={[
            Math.cos((i / 8) * Math.PI * 2) * 15,
            10,
            Math.sin((i / 8) * Math.PI * 2) * 15
          ]}
          color="#FF5A00"
          intensity={2}
          distance={20}
        />
      ))}
    </group>
  );
}

// Particles
function Particles({ count = 500 }: { count?: number }) {
  const particlesRef = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#FF5A00"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Camera Controller
function CameraController() {
  const { camera } = useThree();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    camera.position.x += (mouseRef.current.x * 0.5 - camera.position.x) * 0.02;
    camera.position.y += (mouseRef.current.y * 0.3 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        
          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <directionalLight 
            position={[5, 10, 5]} 
            intensity={1} 
            castShadow 
            shadow-mapSize-width={2048} 
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-5, 5, -5]} color="#FF5A00" intensity={2} />
          <StadiumLights />
          
          {/* 3D Objects */}
          <Particles count={300} />
          
          {/* Environment */}
          <Environment preset="city" />
          <ContactShadows 
            position={[0, -3, 0]} 
            opacity={0.3} 
            scale={20} 
            blur={2}
          />
          
          {/* Camera Control */}
          <CameraController />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            enableRotate={false}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
    </div>
  );
}
