
import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('./models/speech.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.001']} rotation={[Math.PI / 2, 0, 0]} scale={[150, 150, 150]} />
      <mesh geometry={nodes.Curve001.geometry} material={materials['SVGMat.001']} rotation={[Math.PI / 2, 0, 0]} scale={[150, 150, 150]} />
      <mesh geometry={nodes.Curve002.geometry} material={materials['SVGMat.001']} rotation={[Math.PI / 2, 0, 0]} scale={[150, 150, 150]} />
      <mesh geometry={nodes.Curve003.geometry} material={materials['SVGMat.001']} rotation={[Math.PI / 2, 0, 0]} scale={[150, 150, 150]} />
    </group>
  )
}

useGLTF.preload('./models/speech.gltf')
