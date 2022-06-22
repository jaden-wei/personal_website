/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Marco Zakaria (https://sketchfab.com/marcoZakaria)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/computer-monitor-lowpoly-model-1d4ee42eda804b02b05b63721921c1d7
title: Computer Monitor Lowpoly Model
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, -0.06, 0.03]}>
            <mesh geometry={nodes.Object_4.geometry} material={materials.Display} />
            <mesh geometry={nodes.Object_5.geometry} material={materials.Main} />
          </group>
          <group position={[0, -0.06, 0.03]} rotation={[-1.57, 0, 0]} scale={0.27}>
            <mesh geometry={nodes.Object_7.geometry} material={materials.Stand} />
          </group>
          <mesh geometry={nodes.Object_9.geometry} material={materials.Main_MAt} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
