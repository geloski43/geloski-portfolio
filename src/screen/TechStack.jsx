import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { TrackballControls, Html } from '@react-three/drei';
import { stackData } from '../data/stackData';
import { useMediaQuery } from '@chakra-ui/react';
import FooterLinks from '../components/FooterLinks';
import Cloud from '../components/tech-stack/Cloud';

export default function TechStack() {
  const [isMobile] = useMediaQuery('(max-width: 400px)');
  const [isLessThan820] = useMediaQuery('(max-width: 820px)');

  return (
    <>
      <Canvas
        dpr={[1, 2]}
        camera={{
          position: [1, 0, 35],
          fov: isMobile ? 135 : isLessThan820 ? 130 : 110,
        }}
        style={{
          maxWidth: '1300px',
          height: '100%',
          margin: 'auto',
        }}
      >
        <Suspense
          fallback={
            <Html position={[-1, 1, -2]}>
              <h2
                style={{
                  fontSize: '2.4rem',
                }}
              >
                <span style={{ fontSize: '0.82em' }}>Loading</span>
                <br />
                <span>...</span>
                <br />
                <span style={{ fontSize: '.45em' }}></span>
              </h2>
            </Html>
          }
        >
          <fog attach="fog" args={['#202025', 0, 80]} />
          <Html>
            <h2
              style={{
                fontSize: isMobile
                  ? '1.9rem'
                  : isLessThan820
                  ? '2.7rem'
                  : '2.9em',
              }}
            >
              <span style={{ fontSize: '.45em' }}>My</span>
              <br />
              <span>Tech</span>
              <br />
              <span style={{ fontSize: '0.82em' }}>Stack</span>
            </h2>
          </Html>
          <Cloud count={stackData && stackData.length} radius={23} />
          <TrackballControls />
        </Suspense>
      </Canvas>
      <div style={{ position: 'absolute' }} className="footer">
        <FooterLinks />
      </div>
    </>
  );
}
