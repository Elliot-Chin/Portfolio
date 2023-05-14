/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 .\wrench.gltf
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function wrench(props) {
  const { nodes, materials } = useGLTF('./models/wrench.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.011']} rotation={[Math.PI / 2, 0, 0]} scale={250} />
      <mesh geometry={nodes.Curve001.geometry} material={materials['SVGMat.011']} rotation={[Math.PI / 2, 0, 0]} scale={250} />
      <mesh geometry={nodes.Curve002.geometry} material={materials['SVGMat.011']} rotation={[Math.PI / 2, 0, 0]} scale={250} />
    </group>
  )
}

useGLTF.preload('./models/wrench.gltf')
