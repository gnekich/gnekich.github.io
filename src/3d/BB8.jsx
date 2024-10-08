/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: lorenzo.toso (https://sketchfab.com/lorenzo.toso)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/bb-8-starwars-toy-25409a8dde8b4e7c9df6485a70df2484
Title: BB-8 StarWars Toy
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import HolographicMaterial from "./HolographicMaterial";

export default function BB8(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/assets/bb-8_starwars_toy.glb"
  );

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="bb8FBX" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Object004"
                  position={[-10.564, 50.348, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group
                    name="Object_5"
                    position={[0.448, -0.201, 52.013]}
                    rotation={[0, 0, -0.62]}
                    scale={0.06}
                  >
                    <mesh
                      name="Object004_Material_#28_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object004_Material_#28_0"].geometry}
                      // material={materials.Material_28}
                    >
                      <HolographicMaterial
                        fresnelOpacity={0.08}
                        scanlineSize={15}
                        fresnelAmount={0.3}
                      />
                    </mesh>
                    <mesh
                      name="Object004_Material_#62_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object004_Material_#62_0"].geometry}
                      // material={materials.Material_62}
                    >
                      <HolographicMaterial fresnelOpacity={0.08} />
                    </mesh>
                    <mesh
                      name="Object004_Material_#61_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object004_Material_#61_0"].geometry}
                      // material={materials.Material_61}
                    >
                      <HolographicMaterial fresnelOpacity={0.08} />
                    </mesh>
                    <mesh
                      name="Object004_Material_#32_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object004_Material_#32_0"].geometry}
                      // material={materials.Material_32}
                    >
                      <HolographicMaterial fresnelOpacity={0.08} />
                    </mesh>
                    <mesh
                      name="Object004_Material_#31_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object004_Material_#31_0"].geometry}
                      // material={materials.Material_31}
                    >
                      <HolographicMaterial fresnelOpacity={0.08} />
                    </mesh>
                    <mesh
                      name="Object004_Material_#47_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object004_Material_#47_0"].geometry}
                      // material={materials.Material_47}
                    >
                      <HolographicMaterial fresnelOpacity={0.08} />
                    </mesh>
                    <mesh
                      name="Object004_Material_#49_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object004_Material_#49_0"].geometry}
                      // material={materials.Material_49}
                    >
                      <HolographicMaterial fresnelOpacity={0.08} />
                    </mesh>
                    <mesh
                      name="Object004_Material_#48_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object004_Material_#48_0"].geometry}
                      // material={materials.Material_48}
                    >
                      <HolographicMaterial fresnelOpacity={0.08} />
                    </mesh>
                    <mesh
                      name="Object004_Material_#34_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object004_Material_#34_0"].geometry}
                      // material={materials.Material_34}
                    >
                      <HolographicMaterial fresnelOpacity={0.08} />
                    </mesh>
                    <mesh
                      name="Object004_Material_#33_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object004_Material_#33_0"].geometry}
                      // material={materials.Material_33}
                    >
                      <HolographicMaterial fresnelOpacity={0.08} />
                    </mesh>
                    <mesh
                      name="Object004_Material_#46_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object004_Material_#46_0"].geometry}
                      // material={materials.Material_46}
                    >
                      <HolographicMaterial fresnelOpacity={0.08} />
                    </mesh>
                  </group>
                </group>
                <group
                  name="Box001"
                  position={[-10.564, 50, 0]}
                  rotation={[-Math.PI / 2, -0.212, 0]}
                  scale={0.758}
                >
                  <group
                    name="Object_18"
                    position={[39.511, -27.978, -44.303]}
                    rotation={[-0.563, -0.646, -1.358]}
                    scale={1.313}
                  >
                    <mesh
                      name="Box001_Material_#27_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Box001_Material_#27_0"].geometry}
                      // material={materials.Material_27}
                    >
                      <HolographicMaterial
                        fresnelAmount={0.2}
                        fresnelOpacity={0.15}
                        hologramBrightness={0.7}
                        scanlineSize={6}
                        signalSpeed={2.3}
                        hologramColor={"#ff0000"}
                        enableBlinking={false}
                      />
                    </mesh>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/bb-8_starwars_toy.glb");
