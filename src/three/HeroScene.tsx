import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Icosahedron, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { usePrefersReducedMotion, isTouchDevice } from '@/hooks/usePrefersReducedMotion';

function Particles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 7;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    ref.current.rotation.x = state.clock.elapsedTime * 0.015;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#c6ff3a"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
}

function CoreObject() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.12;
      meshRef.current.rotation.y = t * 0.18;
    }
    if (wireRef.current) {
      wireRef.current.rotation.x = t * 0.12;
      wireRef.current.rotation.y = t * 0.18;
    }
  });

  return (
    <group>
      <Icosahedron ref={meshRef} args={[1.7, 1]}>
        <meshStandardMaterial
          color="#0c0e12"
          roughness={0.25}
          metalness={0.9}
          emissive="#1a2a05"
          emissiveIntensity={0.4}
        />
      </Icosahedron>
      <Icosahedron ref={wireRef} args={[1.72, 1]}>
        <meshBasicMaterial color="#c6ff3a" wireframe transparent opacity={0.18} />
      </Icosahedron>
      <Icosahedron args={[2.4, 0]}>
        <meshBasicMaterial color="#7c8cff" wireframe transparent opacity={0.06} />
      </Icosahedron>
    </group>
  );
}

function Rig() {
  const { camera, pointer } = useThree();
  useFrame(() => {
    camera.position.x += (pointer.x * 1.2 - camera.position.x) * 0.04;
    camera.position.y += (pointer.y * 0.8 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroScene() {
  const reduced = usePrefersReducedMotion();
  const touch = isTouchDevice();
  const particleCount = touch ? 600 : 1800;

  if (reduced) {
    return (
      <div className="hero-static-glow" aria-hidden>
        <div className="hero-static-glow__core" />
      </div>
    );
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 50 }}
      dpr={[1, touch ? 1.5 : 2]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#c6ff3a" />
        <pointLight position={[-5, -3, 2]} intensity={0.8} color="#7c8cff" />
        <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
          <CoreObject />
        </Float>
        <Particles count={particleCount} />
        {!touch && <Rig />}
      </Suspense>
    </Canvas>
  );
}
