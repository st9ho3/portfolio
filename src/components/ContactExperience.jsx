import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'

const ContactExperience = () => {
  return (
    <div className="w-full h-full min-h-[350px]">
      <Canvas camera={{ position: [0, 1, 3], fov: 50 }} shadows>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 5, 2]} intensity={1.2} castShadow />
        <mesh position={[0, -1, 0]} receiveShadow>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color="#e0e0e0" />
        </mesh>
        {/* Model will be loaded here later */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}

export default ContactExperience
