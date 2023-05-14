import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Briefcase from "./Briefcase"



export default function CMDBase() {
    return (
        <Canvas camera={{ position: [0, 0, 10], fov: 5 }} shadows>
            <ambientLight />
            <directionalLight
                position={[-2, 0, 5]}
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
            <group position={[-0.3, -0.3, -0.1]}>
                <Briefcase />
            </group>

        </Canvas>
    )
}