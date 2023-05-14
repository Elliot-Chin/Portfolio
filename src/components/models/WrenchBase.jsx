import { Canvas } from "@react-three/fiber"
import Wrench from "./Wrench"
import { OrbitControls } from "@react-three/drei"




export default function WrenchBase() {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 15 }} shadows>
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
             <group position={[-0.5, -0.5, 0]}>
            <Wrench/>
            </group>

        </Canvas>
    )
}