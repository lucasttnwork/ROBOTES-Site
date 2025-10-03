import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedSphere({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.3
    meshRef.current.rotation.x = time * 0.2
    meshRef.current.rotation.y = time * 0.3
  })

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        transparent
        opacity={0.6}
      />
    </Sphere>
  )
}

function Scene() {
  const spheres = useMemo(() => [
    { position: [-3, 0, -2] as [number, number, number], color: '#6366f1', speed: 0.5 },
    { position: [3, 0, -3] as [number, number, number], color: '#8b5cf6', speed: 0.7 },
    { position: [0, 2, -4] as [number, number, number], color: '#ec4899', speed: 0.6 },
    { position: [-2, -1, -2] as [number, number, number], color: '#3b82f6', speed: 0.8 },
    { position: [2, -2, -3] as [number, number, number], color: '#a855f7', speed: 0.4 },
  ], [])

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
      {spheres.map((sphere, index) => (
        <AnimatedSphere key={index} {...sphere} />
      ))}
    </>
  )
}

export default function LiquidGlassBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
      <div className="absolute inset-0 gradient-mesh opacity-50" />
    </div>
  )
}

