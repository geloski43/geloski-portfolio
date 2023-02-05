import React, { useState, useContext } from 'react';
// All hooks are cross platform now
import { useSpring } from '@react-spring/core';
// Platform knowledge is in here ...
import { a } from '@react-spring/web';
import './styles.css';
import { Scene } from './Canvas';
import { Context as AppContext } from '../../../context/appContext';

export default function AnimatedSwitch() {
  const appContext = useContext(AppContext);
  const { projectPlatform, projects } = appContext.state;

  const [toggle, set] = useState(0);
  // Set up a shared spring which simply animates the toggle above
  // We use this spring to interpolate all the colors, position and rotations
  const [{ x }] = useSpring(
    {
      x: toggle,
      config: { mass: 5, tension: 1000, friction: 50, precision: 0.0001 },
    },
    [toggle]
  );

  return (
    <a.div
      className="container"
      style={{
        backgroundColor: 'transparent',
        color: x.to([0, 1], ['#7fffd4', '#c70f46']),
        marginTop: 90,
      }}
    >
      {projectPlatform === 'mobile' ? (
        <h1 className="open" children="Mobile" />
      ) : (
        <h1 className="close" children="Web" />
      )}

      {/* <a.h1>{x.to((x) => (x + 8).toFixed(2))}</a.h1> */}
      <Scene x={x} set={set} />
    </a.div>
  );
}
