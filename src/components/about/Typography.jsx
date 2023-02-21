import React from 'react';
import { useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { useMediaQuery } from '@chakra-ui/react';

export default function Typography() {
  const [isLessThan820] = useMediaQuery('(max-width: 820px)');
  const [isMoreThan1200] = useMediaQuery('(min-width: 1200px)');

  const state = useThree();
  const { width, height } = state.viewport.getCurrentViewport(
    state.camera,
    [0, 0, 12]
  );
  const shared = {
    letterSpacing: -0.06,
    color: '#84967d',
    lineHeight: isLessThan820 ? '3' : '1',
    textAlign: 'center',
  };
  return (
    <>
      <Text
        children={`
        I’m a self-taught web developer which started from an online
        course “Complete Web Developer in 2020 from Zero to Mastery”.
        After finishing the said course, I have created multiple
        personal projects built mainly using React JS, React Native
        and Node JS either following from other online video tutorials
        or transform any idea that pops up in my head into a new
        project from scratch.`}
        {...shared}
        position={[-width * 0.06, height * 0.6, 1]}
      />
      <Text
        children={`
        I currently landed my first job as a web developer
        professionally and I make sure my skills and knowledge grow
        everyday be it small or big leap from yesterday. Programming
        is not for the faint of heart as it comes with constant
        struggles and challenges being thrown at you along the way.
        Perseverance and maintaining the level of learning right where
        you started is the key to moving forward.`}
        {...shared}
        position={[-width * 0.107, -height * 0.5, 1]}
      />
    </>
  );
}
