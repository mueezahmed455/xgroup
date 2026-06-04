'use client'

import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import type * as THREE from 'three'

function FloatingEnvelope() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <boxGeometry args={[1.5, 1, 0.1]} />
        <MeshDistortMaterial
          color="#0d0d14"
          emissive="#00FFD1"
          emissiveIntensity={0.3}
          roughness={0.3}
          metalness={0.8}
          distort={0.1}
          speed={2}
        />
      </mesh>
      <pointLight color="#00FFD1" intensity={2} distance={8} />
    </Float>
  )
}

export default function ContactScene() {
  return (
    <div className="w-full h-full" aria-hidden="true">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 4], fov: 50 }}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <FloatingEnvelope />
        </Suspense>
      </Canvas>
    </div>
  )
}
