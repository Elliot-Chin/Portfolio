/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 .\briefcase.gltf
*/

import { useGLTF } from '@react-three/drei'

export default function Briefcase(props) {
  const { nodes, materials } = useGLTF('./models/briefcase.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve007.geometry} material={materials['SVGMat.016']} rotation={[Math.PI / 2, 0, 0]} scale={150} />
      <mesh geometry={nodes.Curve008.geometry} material={materials['SVGMat.016']} rotation={[Math.PI / 2, 0, 0]} scale={150} />
    </group>
  )
}

useGLTF.preload('./models/briefcase.gltf')
