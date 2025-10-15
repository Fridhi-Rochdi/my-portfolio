import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import './ThreeBackground.css';

const FloatingCubes = () => {
  const cubesRef = useRef([]);
  
  const cubes = useMemo(() => [
    { position: [-8, 3, -15], scale: 1.5, color: '#60a5fa', rotation: [0.5, 0.3, 0] },
    { position: [10, -2, -20], scale: 2, color: '#a78bfa', rotation: [0.2, 0.8, 0.3] },
    { position: [-4, -4, -12], scale: 1.2, color: '#34d399', rotation: [0.7, 0.2, 0.5] },
    { position: [6, 5, -18], scale: 1.8, color: '#f472b6', rotation: [0.3, 0.6, 0.2] },
  ], []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    cubesRef.current.forEach((cube, i) => {
      if (cube) {
        cube.rotation.x += 0.003;
        cube.rotation.y += 0.004;
        cube.position.y += Math.sin(time * 0.4 + i * 2) * 0.008;
      }
    });
  });

  return (
    <group>
      {cubes.map((cube, index) => (
        <mesh
          key={index}
          ref={(el) => (cubesRef.current[index] = el)}
          position={cube.position}
          rotation={cube.rotation}
        >
          <boxGeometry args={[cube.scale, cube.scale, cube.scale]} />
          <meshStandardMaterial
            color={cube.color}
            transparent
            opacity={0.1}
            wireframe
            emissive={cube.color}
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  );
};

const GlassSpheres = () => {
  const spheresRef = useRef([]);
  
  const spheres = useMemo(() => [
    { position: [-12, 6, -25], scale: 3.5, color: '#dbeafe' },
    { position: [14, -4, -30], scale: 4, color: '#e9d5ff' },
    { position: [0, 8, -22], scale: 2.8, color: '#d1fae5' },
  ], []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    spheresRef.current.forEach((sphere, i) => {
      if (sphere) {
        sphere.position.y += Math.sin(time * 0.25 + i * 3) * 0.01;
        sphere.position.x += Math.cos(time * 0.2 + i * 2) * 0.008;
      }
    });
  });

  return (
    <group>
      {spheres.map((sphere, index) => (
        <mesh
          key={index}
          ref={(el) => (spheresRef.current[index] = el)}
          position={sphere.position}
        >
          <sphereGeometry args={[sphere.scale, 64, 64]} />
          <meshPhysicalMaterial
            color={sphere.color}
            transparent
            opacity={0.08}
            roughness={0}
            metalness={0}
            clearcoat={1}
            clearcoatRoughness={0}
            transmission={0.98}
            ior={1.45}
            thickness={3}
          />
        </mesh>
      ))}
    </group>
  );
};

const GeometricShapes = () => {
  const shapesRef = useRef([]);
  
  const shapes = useMemo(() => [
    { type: 'torus', position: [5, 0, -16], args: [2, 0.4, 16, 100], color: '#60a5fa' },
    { type: 'octahedron', position: [-7, 2, -14], args: [1.5], color: '#a78bfa' },
    { type: 'icosahedron', position: [9, -3, -19], args: [1.3], color: '#34d399' },
  ], []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    shapesRef.current.forEach((shape, i) => {
      if (shape) {
        shape.rotation.x = time * 0.3 + i;
        shape.rotation.y = time * 0.4 + i * 0.5;
      }
    });
  });

  const getGeometry = (type, args) => {
    switch (type) {
      case 'torus':
        return <torusGeometry args={args} />;
      case 'octahedron':
        return <octahedronGeometry args={args} />;
      case 'icosahedron':
        return <icosahedronGeometry args={args} />;
      default:
        return <boxGeometry />;
    }
  };

  return (
    <group>
      {shapes.map((shape, index) => (
        <mesh
          key={index}
          ref={(el) => (shapesRef.current[index] = el)}
          position={shape.position}
        >
          {getGeometry(shape.type, shape.args)}
          <meshStandardMaterial
            color={shape.color}
            transparent
            opacity={0.15}
            wireframe
            emissive={shape.color}
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
};

const ModernParticles = () => {
  const pointsRef = useRef();
  
  const particles = useMemo(() => {
    const positions = new Float32Array(1500 * 3);
    const colors = new Float32Array(1500 * 3);
    
    const colorPalette = [
      new THREE.Color('#60a5fa'),
      new THREE.Color('#a78bfa'),
      new THREE.Color('#34d399'),
      new THREE.Color('#f472b6'),
    ];
    
    for (let i = 0; i < 1500; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 70;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
      
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const DynamicLights = () => {
  const light1 = useRef();
  const light2 = useRef();
  const light3 = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (light1.current) {
      light1.current.position.x = Math.sin(time * 0.3) * 20;
      light1.current.position.z = Math.cos(time * 0.3) * 20;
    }
    
    if (light2.current) {
      light2.current.position.x = Math.cos(time * 0.4) * 20;
      light2.current.position.z = Math.sin(time * 0.4) * 20;
    }
    
    if (light3.current) {
      light3.current.intensity = 0.6 + Math.sin(time * 0.5) * 0.3;
    }
  });

  return (
    <>
      <pointLight ref={light1} position={[15, 10, 10]} intensity={0.7} color="#60a5fa" distance={35} />
      <pointLight ref={light2} position={[-15, 10, -10]} intensity={0.7} color="#a78bfa" distance={35} />
      <pointLight ref={light3} position={[0, 12, 0]} intensity={0.6} color="#34d399" distance={40} />
    </>
  );
};

const ThreeBackground = () => {
  return (
    <div className="three-background-container">
      <Canvas
        camera={{ position: [0, 0, 14], fov: 70 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 15, 5]} intensity={0.4} color="#ffffff" />
        <DynamicLights />
        
        <GlassSpheres />
        <FloatingCubes />
        <GeometricShapes />
        <ModernParticles />
        
        <fog attach="fog" args={['#0a0f1e', 12, 55]} />
      </Canvas>
      
      <div className="modern-gradient"></div>
      <div className="glow-effect"></div>
    </div>
  );
};

export default ThreeBackground;
