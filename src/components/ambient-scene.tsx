"use client";

import { Float, MeshDistortMaterial, OrbitControls, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function FloatingCore() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.1;
    mesh.current.rotation.y += delta * 0.16;
    mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, state.pointer.x * 0.25, 0.03);
    mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, state.pointer.y * 0.18, 0.03);
  });

  return (
    <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.55}>
      <mesh ref={mesh} scale={1.7}>
        <icosahedronGeometry args={[1, 5]} />
        <MeshDistortMaterial color="#d9f99d" roughness={0.34} metalness={0.36} distort={0.18} speed={1.5} />
      </mesh>
      <mesh scale={2.08}>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial color="#bef264" wireframe transparent opacity={0.17} />
      </mesh>
    </Float>
  );
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={1.5} />
      <pointLight position={[3, 4, 4]} color="#fef08a" intensity={18} distance={10} />
      <pointLight position={[-4, -2, 2]} color="#67e8f9" intensity={10} distance={9} />
      <FloatingCore />
      <Sparkles count={70} scale={11} size={2.2} speed={0.18} color="#d9f99d" />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.25} maxPolarAngle={Math.PI / 1.65} minPolarAngle={Math.PI / 2.5} />
    </>
  );
}

export function AmbientScene() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mediaQuery.matches || window.innerWidth < 640);
    update();
    mediaQuery.addEventListener("change", update);
    window.addEventListener("resize", update);
    return () => {
      mediaQuery.removeEventListener("change", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (reduced) {
    return <div className="scene-fallback" aria-hidden="true"><span /></div>;
  }

  return (
    <Canvas className="ambient-canvas" camera={{ position: [0, 0, 7], fov: 38 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
      <SceneContent />
    </Canvas>
  );
}
