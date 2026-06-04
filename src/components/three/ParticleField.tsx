'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import type * as THREE from 'three'
import { Suspense } from 'react'
import { useMousePosition } from '@/hooks/useMousePosition'

const PARTICLE_COUNT = 800

function Particles() {
  const pointsRef = useRef<THREE.Points>(null)
  const mouse = useMousePosition()

  const positions = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [])

  useFrame((state) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y =
      state.clock.elapsedTime * 0.02 + mouse.normalizedX * 0.05
    pointsRef.current.rotation.x = mouse.normalizedY * 0.03
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#00FFD1"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={2}
      />
    </points>
  )
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 10], fov: 60 }}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <Particles />
        </Suspense>
      </Canvas>
    </div>
  )
}
