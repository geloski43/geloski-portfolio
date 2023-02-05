import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Stars, Html } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { Highlight, useMediaQuery, Box } from '@chakra-ui/react';
import FooterLinks from '../components/FooterLinks';
import { Context as AppContext } from '../context/appContext';
import Atom from '../components/about/Atom';

export default function About() {
  const [isLessThan820] = useMediaQuery('(max-width: 820px)');
  const [isMoreThan1400] = useMediaQuery('(min-width: 1400px)');

  const appContext = React.useContext(AppContext);
  const { showSideMenu } = appContext.state;

  return (
    <>
      <Canvas linear dpr={[1, 2]} camera={{ position: [0, 0, 70] }}>
        <color attach="background" args={['black']} />
        {showSideMenu ? null : (
          <Html transform position={[isLessThan820 ? -10 : -10, 43, 1]}>
            <h3 style={{ fontSize: isLessThan820 ? '8rem' : '10.4em' }}>
              <span style={{ fontSize: '.45em' }}>My</span>
              <br />
              <span>Coding</span>
              <br />
              <span style={{ fontSize: '0.8em' }}>Journey</span>
            </h3>
          </Html>
        )}
        <Float speed={1} rotationIntensity={1} floatIntensity={2}>
          <Atom />
        </Float>

        {showSideMenu ? null : (
          <Html transform position={[0, 0, 1]} distanceFactor={17}>
            <div
              style={{
                color: 'white',
                fontSize: isLessThan820 ? '1.8rem' : '3em',
                letterSpacing: 5,
                width: window.innerWidth * 2,
              }}
            >
              <Box pb="50px">
                <Highlight
                  query={['self-taught', 'React JS', 'React Native', 'Node JS']}
                  styles={{
                    px: '2',
                    py: '1',
                    rounded: 'full',
                    bg: 'yellow.100',
                    fontWeight: 'bold',
                  }}
                >
                  I’m a self-taught web developer which started from an online
                  course “Complete Web Developer in 2020 from Zero to Mastery”.
                  After finishing the said course, I have created multiple
                  personal projects built mainly using React JS, React Native
                  and Node JS either following from other online video tutorials
                  or transform any idea that pops up in my head into a new
                  project from scratch.
                </Highlight>
              </Box>
              <Box>
                <Highlight
                  query={[
                    'grow everyday',
                    'struggles and challenges',
                    'Perseverance',
                  ]}
                  styles={{
                    px: '2',
                    py: '1',
                    rounded: 'full',
                    bg: 'yellow.100',
                    fontWeight: 'bold',
                  }}
                >
                  I currently landed my first job as a web developer
                  professionally and I make sure my skills and knowledge grow
                  everyday be it small or big leap from yesterday. Programming /
                  Coding is not for the faint of heart as it comes with constant
                  struggles and challenges being thrown at you along the way.
                  Perseverance and maintaining the level of learning right where
                  you started is the key to moving forward.
                </Highlight>
              </Box>
            </div>
          </Html>
        )}
        <Stars saturation={10} count={400} speed={1.5} />
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
        </EffectComposer>
      </Canvas>

      <div style={{ position: 'absolute' }} className="footer">
        <FooterLinks />
      </div>
    </>
  );
}
