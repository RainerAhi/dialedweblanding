import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./animatedlaptop.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (actions.ScreenOpen) {
      actions.ScreenOpen.setLoop(THREE.LoopOnce);
      actions.ScreenOpen.clampWhenFinished = true;
      setTimeout(() => {
        actions.ScreenOpen.play();
      }, 1000); // 1000 milliseconds = 1 second
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Macbook" position={[0, -1, 0]} scale={0.15}>
          <mesh
            name="Circle001"
            castShadow
            receiveShadow
            geometry={nodes.Circle001.geometry}
            material={materials['Frame.001']}
          />
          <mesh
            name="Circle001_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle001_1.geometry}
            material={materials.HeadPhoneHole}
          />
          <mesh
            name="Circle001_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle001_2.geometry}
            material={materials.USB_C_INSIDE}
          />
          <mesh
            name="Circle001_3"
            castShadow
            receiveShadow
            geometry={nodes.Circle001_3.geometry}
            material={materials.TouchbarBorder}
          />
          <mesh
            name="Circle001_4"
            castShadow
            receiveShadow
            geometry={nodes.Circle001_4.geometry}
            material={materials.Keyboard}
          />
          <group name="Bottom" position={[0, -0.509, 0]} scale={5.796}>
            <mesh
              name="Circle006"
              castShadow
              receiveShadow
              geometry={nodes.Circle006.geometry}
              material={materials['Frame.001']}
            />
            <mesh
              name="Circle006_1"
              castShadow
              receiveShadow
              geometry={nodes.Circle006_1.geometry}
              material={materials.USB_C_INSIDE}
            />
          </group>
          <group name="Keyboard" position={[-11.786, -0.15, -8.301]} scale={5.796}>
            <mesh
              name="Circle"
              castShadow
              receiveShadow
              geometry={nodes.Circle.geometry}
              material={materials['Keyboard.001']}
            />
            <mesh
              name="Circle_1"
              castShadow
              receiveShadow
              geometry={nodes.Circle_1.geometry}
              material={materials.Key}
            />
            <mesh
              name="Circle_2"
              castShadow
              receiveShadow
              geometry={nodes.Circle_2.geometry}
              material={materials.Touchbar}
            />
          </group>
          <mesh
            name="KeyboardKeyHole"
            castShadow
            receiveShadow
            geometry={nodes.KeyboardKeyHole.geometry}
            material={materials['Keyboard.001']}
            position={[-11.786, -0.152, -8.301]}
            scale={5.796}
          />
          <mesh
            name="RubberFoot"
            castShadow
            receiveShadow
            geometry={nodes.RubberFoot.geometry}
            material={materials.DarkRubber}
            position={[-11.951, -0.751, 7.857]}
            scale={5.796}
          />
          <group name="ScreenHinge" position={[0.011, -0.211, -10.559]} scale={5.796}>
            <mesh
              name="Circle012"
              castShadow
              receiveShadow
              geometry={nodes.Circle012.geometry}
              material={materials.HingeBlack}
            />
            <mesh
              name="Circle012_1"
              castShadow
              receiveShadow
              geometry={nodes.Circle012_1.geometry}
              material={materials.HingeMetal}
            />
          </group>
          <group name="SpeakerLeft" position={[-15.026, 0.031, 0.604]} scale={5.796}>
            <mesh
              name="Circle009"
              castShadow
              receiveShadow
              geometry={nodes.Circle009.geometry}
              material={materials['Frame.001']}
            />
            <mesh
              name="Circle009_1"
              castShadow
              receiveShadow
              geometry={nodes.Circle009_1.geometry}
              material={materials.SpeakerHole}
            />
          </group>
          <group name="SpeakerRight" position={[12.204, 0.031, 0.604]} scale={5.796}>
            <mesh
              name="Circle003"
              castShadow
              receiveShadow
              geometry={nodes.Circle003.geometry}
              material={materials['Frame.001']}
            />
            <mesh
              name="Circle003_1"
              castShadow
              receiveShadow
              geometry={nodes.Circle003_1.geometry}
              material={materials.SpeakerHole}
            />
          </group>
          <group
            name="Top"
            position={[0.007, -0.472, -10.412]}
            rotation={[3.13, 0, 0]}
            scale={[5.796, 5.796, 5.716]}>
            <mesh
              name="Circle002"
              castShadow
              receiveShadow
              geometry={nodes.Circle002.geometry}
              material={materials['Frame.002']}
            />
            <mesh
              name="Circle002_1"
              castShadow
              receiveShadow
              geometry={nodes.Circle002_1.geometry}
              material={materials.Screen}
            />
            <mesh
              name="Circle002_2"
              castShadow
              receiveShadow
              geometry={nodes.Circle002_2.geometry}
              material={materials.ScreenGlass}
            />
            <mesh
              name="Circle002_3"
              castShadow
              receiveShadow
              geometry={nodes.Circle002_3.geometry}
              material={materials.Rubber}
            />
            <mesh
              name="Circle002_4"
              castShadow
              receiveShadow
              geometry={nodes.Circle002_4.geometry}
              material={materials.DisplayGlass}
            />
            <mesh
              name="AppleLogo000"
              castShadow
              receiveShadow
              geometry={nodes.AppleLogo000.geometry}
              material={materials['AppleLogo.004']}
              position={[0.005, -0.111, -1.795]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={0.579}
            />
            <mesh
              name="FrontCameraRing001"
              castShadow
              receiveShadow
              geometry={nodes.FrontCameraRing001.geometry}
              material={materials['CameraRIngBlack.002']}
              position={[-0.028, -0.068, -3.597]}
              rotation={[-1.32, 0, 0]}
              scale={[1, 1.013, 1.001]}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./animatedlaptop.glb')