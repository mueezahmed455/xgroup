'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { Suspense } from 'react'
import { useMousePosition } from '@/hooks/useMousePosition'

function HeroMesh() {
  const meshRef = useRef<THREE.Mesh>(null)
  const mouse = useMousePosition()

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      mouse.normalizedY * 0.2 + state.clock.elapsedTime * 0.1,
      0.05,
    )
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      mouse.normalizedX * 0.2 + state.clock.elapsedTime * 0.15,
      0.05,
    )
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.2, 0.4, 128, 32]} />
        <MeshDistortMaterial
          color="#0d0d14"
          emissive="#00FFD1"
          emissiveIntensity={0.15}
          roughness={0.2}
          metalness={0.9}
          distort={0.15}
          speed={1.5}
        />
      </mesh>
      <pointLight position={[3, 3, 5]} color="#00FFD1" intensity={2} distance={15} />
      <pointLight position={[-3, -3, 3]} color="#6C63FF" intensity={1} distance={10} />
    </Float>
  )
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 5], fov: 50 }}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <HeroMesh />
        </Suspense>
      </Canvas>
    </div>
  )
}
