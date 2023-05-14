import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Languages from "./Languages"


export default function CMDBase() {
    return (
        <Canvas camera={{ position: [0, 0, 10], fov: 25 }} shadows>
            <ambientLight />
            <directionalLight
                position={[0, 0, 10]}
                castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
            <OrbitControls
                enableZoom={false}
                enableDamping={true}
                autoRotate={true}
                autoRotateSpeed={2}
                enableRotate={false}
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
            />
            <group position={[-1, -1.5, -0.5]}>
                <Languages />
            </group>

        </Canvas>
    )
}