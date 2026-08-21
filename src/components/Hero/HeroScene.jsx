import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';

const nodePositions = [
  [-2.4, 0.8, 0],
  [-0.8, 1.55, -0.45],
  [0.85, 0.7, 0.2],
  [2.05, -0.55, -0.2],
  [-1.4, -1.15, 0.35],
  [0.55, -1.35, -0.4],
];

function ArchitectureNode({ position, color, scale = 1 }) {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = clock.elapsedTime * 0.28;
    meshRef.current.rotation.y = clock.elapsedTime * 0.36;
    meshRef.current.position.y = position[1] + Math.sin(clock.elapsedTime * 1.2 + position[0]) * 0.08;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[0.28, 1]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.45} roughness={0.34} metalness={0.3} />
    </mesh>
  );
}

function ArchitectureScene() {
  const groupRef = useRef();
  const coreRef = useRef();
  const connections = useMemo(() => {
    const pairs = [
      [nodePositions[0], nodePositions[1]],
      [nodePositions[1], nodePositions[2]],
      [nodePositions[2], nodePositions[3]],
      [nodePositions[0], nodePositions[4]],
      [nodePositions[4], nodePositions[5]],
      [nodePositions[5], nodePositions[3]],
      [nodePositions[1], nodePositions[5]],
    ];

    return new Float32Array(pairs.flat(2));
  }, []);
  const particles = useMemo(() => {
    const positions = [];
    for (let index = 0; index < 70; index += 1) {
      positions.push((Math.random() - 0.5) * 5.4, (Math.random() - 0.5) * 3.8, (Math.random() - 0.5) * 2.6);
    }
    return new Float32Array(positions);
  }, []);

  useFrame(({ pointer, clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += (pointer.x * 0.18 - groupRef.current.rotation.y) * 0.04;
    groupRef.current.rotation.x += (-pointer.y * 0.12 - groupRef.current.rotation.x) * 0.04;
    groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.55) * 0.08;

    if (coreRef.current) {
      coreRef.current.rotation.x = clock.elapsedTime * 0.18;
      coreRef.current.rotation.y = clock.elapsedTime * 0.24;
    }
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color="#44d3c2" size={0.025} transparent opacity={0.58} />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={connections.length / 3} array={connections} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color="#44d3c2" transparent opacity={0.42} />
      </lineSegments>
      <ArchitectureNode position={nodePositions[0]} color="#44d3c2" scale={1.14} />
      <ArchitectureNode position={nodePositions[1]} color="#f0c86a" />
      <ArchitectureNode position={nodePositions[2]} color="#8fa2ff" scale={1.08} />
      <ArchitectureNode position={nodePositions[3]} color="#44d3c2" />
      <ArchitectureNode position={nodePositions[4]} color="#8fa2ff" />
      <ArchitectureNode position={nodePositions[5]} color="#f0c86a" scale={1.05} />
      <mesh ref={coreRef} position={[0, 0, -0.9]} rotation={[0.35, 0.35, 0]}>
        <torusKnotGeometry args={[0.52, 0.09, 76, 8]} />
        <meshStandardMaterial color="#101923" emissive="#44d3c2" emissiveIntensity={0.18} roughness={0.2} metalness={0.62} />
      </mesh>
    </group>
  );
}

function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5.7], fov: 45 }} dpr={[1, 1.6]}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 4, 4]} intensity={1.3} />
      <pointLight position={[-3, 2, 3]} intensity={1.8} color="#44d3c2" />
      <pointLight position={[3, -2, 2]} intensity={1.2} color="#f0c86a" />
      <ArchitectureScene />
    </Canvas>
  );
}

export default HeroScene;
