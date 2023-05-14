
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('./models/Technical.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.007']} rotation={[Math.PI / 2, 0, 0]} scale={200} />
      <mesh geometry={nodes.Curve001.geometry} material={materials['SVGMat.007']} rotation={[Math.PI / 2, 0, 0]} scale={200} />
      <mesh geometry={nodes.Curve002.geometry} material={materials['SVGMat.007']} rotation={[Math.PI / 2, 0, 0]} scale={200} />
      <mesh geometry={nodes.Curve003.geometry} material={materials['SVGMat.007']} rotation={[Math.PI / 2, 0, 0]} scale={200} />
      <mesh geometry={nodes.Curve004.geometry} material={materials['SVGMat.007']} rotation={[Math.PI / 2, 0, 0]} scale={200} />
      <mesh geometry={nodes.Curve005.geometry} material={materials['SVGMat.007']} rotation={[Math.PI / 2, 0, 0]} scale={200} />
      <mesh geometry={nodes.Curve006.geometry} material={materials['SVGMat.007']} rotation={[Math.PI / 2, 0, 0]} scale={200} />
    </group>
  )
}

useGLTF.preload('./models/Technical.gltf')
