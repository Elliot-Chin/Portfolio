import Avatar from './Avatar'
import { Canvas } from '@react-three/fiber'

export default function AvatarBase() {
    return (
        <Canvas camera={{ position: [0, 1, 13], fov: 16 }} shadows>
            <ambientLight />
            <directionalLight
                position={[-2, 5, 10]}
                castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
            <group position={[0, -0.5, 5]}>
                <Avatar />
            </group>

            <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, 0, 0]} receiveShadow>
                <planeBufferGeometry args={[10, 10, 1, 1]} />
                <shadowMaterial transparent opacity={0.2} />
            </mesh>
            </Canvas>
    )
}
