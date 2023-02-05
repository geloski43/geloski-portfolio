import * as THREE from 'three';
import { useMemo } from 'react';
import { stackData } from '../../data/stackData';
import Word from './Word';

export default function Cloud({ count, radius }) {
  const temp = [];
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / count;
    const thetaSpan = (Math.PI * 2) / 4;
    for (let i = 0; i < count; i++)
      temp.push([
        new THREE.Vector3().setFromSpherical(
          spherical.set(radius, phiSpan * i, thetaSpan * i)
        ),
        {
          stack: stackData[i] && stackData[i].stack,
          href: stackData[i] && stackData[i].domain,
        },
      ]);

    return temp;
  }, [count, radius]);
  return words.map(([pos, word], index) => (
    <group key={index} position={[0, 0, 0]}>
      <Word position={pos} children={word.stack} item={words[index]} />
    </group>
  ));
}
