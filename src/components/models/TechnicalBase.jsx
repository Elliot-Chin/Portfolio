import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Technical from "./Technical"



export default function TechnicalBase() {
    return (
        <Canvas camera={{ position: [0, 0, 10], fov: 5 }} shadows>
            <ambientLight />
            <directionalLight
                position={[0, 0, 5]}
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
            <group position={[-0.4, -0.5, -0.05]}>
                <Technical />
            </group>

        </Canvas>
    )
}