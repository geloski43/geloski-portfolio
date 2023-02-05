import React from 'react';
import * as THREE from 'three';
import { useMemo } from 'react';
import { Line, Sphere } from '@react-three/drei';
import { useMediaQuery } from '@chakra-ui/react';
import Electron from './Electron';

export default function Atom(props) {
  const [isLessThan820] = useMediaQuery('(max-width: 820px)');
  const points = useMemo(
    () =>
      new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(
        100
      ),
    []
  );

  return (
    <group {...props} position={[7.7, isLessThan820 ? 35 : 34, 1]}>
      <Line worldUnits points={points} color="turquoise" lineWidth={0.3} />
      <Line
        worldUnits
        points={points}
        color="turquoise"
        lineWidth={0.3}
        rotation={[0, 0, 1]}
      />
      <Line
        worldUnits
        points={points}
        color="turquoise"
        lineWidth={0.3}
        rotation={[0, 0, -1]}
      />
      <Electron position={[0, 0, 0.5]} speed={6} />
      <Electron
        position={[0, 0, 0.5]}
        rotation={[0, 0, Math.PI / 3]}
        speed={6.5}
      />
      <Electron
        position={[0, 0, 0.5]}
        rotation={[0, 0, -Math.PI / 3]}
        speed={7}
      />

      <Sphere args={[0.55, 64, 64]}>
        <meshBasicMaterial color={[6, 0.5, 2]} toneMapped={false} />
      </Sphere>
    </group>
  );
}
