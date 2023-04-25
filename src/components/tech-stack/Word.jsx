import * as THREE from 'three';
import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

export default function Word({ item, children, ...props }) {
  // console.log(item[0]);

  const vector = item[0];

  const onClick = () => {
    // console.log(item[1].href);
    window.open(
      item[1].href,
      '_blank' // <- This is what makes it open in a new window.
    );
  };
  const color = new THREE.Color();
  const fontProps = {
    font: '/fonts/Chalkduster.woff',
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer';
    return () =>
      (document.body.style.cursor = `url(
      'https://res.cloudinary.com/geloski43/image/upload/c_scale,w_85/v1682432203/360_scmdug.png'
    ),
    auto`);
  }, [hovered]);
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion);
    // Animate font color
    ref.current.material.color.lerp(
      color.set(hovered ? '#fa2720' : 'white'),
      0.1
    );
  });

  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      onClick={onClick}
      {...props}
      {...fontProps}
      children={children}
    />
  );
}
