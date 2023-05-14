
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('./models/api.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.009']} rotation={[Math.PI / 2, 0, 0]} scale={[700, 900, 700]} />
      <mesh geometry={nodes.Curve001.geometry} material={materials['SVGMat.009']} rotation={[Math.PI / 2, 0, 0]} scale={[700, 900, 700]} />
    </group>
  )
}

useGLTF.preload('./models/api.gltf')
