import React, { useRef, useState } from 'react';
import { createPortal, useFrame, useThree } from '@react-three/fiber';
import {
  useFBO,
  useGLTF,
  MeshTransmissionMaterial,
  Html,
} from '@react-three/drei';
import * as THREE from 'three';
import { easing } from 'maath';
import { useMediaQuery } from '@chakra-ui/react';

export default function Lens({ children, damping = 0.15, ...props }) {
  const [isLessThan820] = useMediaQuery('(max-width: 820px)');
  const [isMoreThan1200] = useMediaQuery('(min-width: 1200px)');

  const ref = useRef();
  const { nodes } = useGLTF('/lens-transformed.glb');
  const buffer = useFBO();
  const viewport = useThree((state) => state.viewport);
  const [scene] = useState(() => new THREE.Scene());
  useFrame((state, delta) => {
    // Tie lens to the pointer
    // getCurrentViewport gives us the width & height that would fill the screen in threejs units
    // By giving it a target coordinate we can offset these bounds, for instance width/height for a plane that
    // sits 15 units from 0/0/0 towards the camera (which is where the lens is)
    const viewport = state.viewport.getCurrentViewport(
      state.camera,
      [0, 0, 15]
    );
    easing.damp3(
      ref.current.position,
      [
        (state.pointer.x * viewport.width) / 2,
        (state.pointer.y * viewport.height) / 2,
        15,
      ],
      damping,
      delta
    );
    // This is entirely optional but spares us one extra render of the scene
    // The createPortal below will mount the children of <Lens> into the new THREE.Scene above
    // The following code will render that scene into a buffer, whose texture will then be fed into
    // a plane spanning the full screen and the lens transmission material
    state.gl.setRenderTarget(buffer);
    state.gl.setClearColor('#0a0a0a');
    state.gl.render(scene, state.camera);
    state.gl.setRenderTarget(null);
  });

  function Header() {
    return (
      <Html>
        <h3 style={{ fontSize: isLessThan820 ? '1rem' : '1.3rem' }}>
          <span style={{ fontSize: '.45em' }}>My</span>
          <br />
          <span>Coding</span>
          <br />
          <span style={{ fontSize: '0.8em' }}>Journey</span>
        </h3>
      </Html>
    );
  }

  return (
    <>
      {createPortal(children, scene)}
      <mesh scale={[viewport.width * 0.75, viewport.height * 0.75, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} />
      </mesh>
      <mesh
        scale={isMoreThan1200 ? 0.7 : 1}
        ref={ref}
        rotation-x={Math.PI / 2}
        geometry={nodes.Cylinder.geometry}
        {...props}
      >
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={0.6}
          thickness={0.9}
          anisotropy={0.1}
          chromaticAberration={0.04}
        />
        <Header />
      </mesh>
    </>
  );
}
