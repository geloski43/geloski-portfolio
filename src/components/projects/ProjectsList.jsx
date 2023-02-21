import React, { useMemo, useContext, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { TextureLoader, LinearFilter } from 'three';
import { MultilineText } from '../Text';
import Plane from '../Plane';
import { Block, useBlock } from '../../blocks';
import state from '../../store';
import { useMediaQuery } from '@chakra-ui/react';
import _ from 'lodash';
import Project from './Project';
import { Context as AppContext } from '../../context/appContext';

export default function ProjectsList() {
  const appContext = useContext(AppContext);
  const {
    projectPlatform,
    // projects,
    // showSideMenu,
    // sections,
    // pages,
    // zoom,
    // stripes,
  } = appContext.state;

  const memoizedProjects = useMemo(() => {
    return _.filter(state.projectData, ['platform', projectPlatform]);
  }, [projectPlatform]);

  const memoizedStripes = useMemo(() => {
    return [
      {
        offset: -0.057,
        color: projectPlatform !== 'web' ? 'gray' : '#4C5270',
        height: 7,
      },
      {
        offset: memoizedProjects.length + 1,
        color: projectPlatform !== 'web' ? '#454545' : '#000000',
        height: 7,
      },
    ];
  }, [projectPlatform]);

  const [isMobile] = useMediaQuery('(max-width: 400px)');
  const [isLessThan820] = useMediaQuery('(max-width: 820px)');

  // console.log(memoizedProjects);

  const images = useLoader(
    TextureLoader,
    memoizedProjects.map(({ thumb }) => thumb)
  );
  useMemo(
    () => images.forEach((texture) => (texture.minFilter = LinearFilter)),
    [images]
  );
  const { contentMaxWidth: w, canvasWidth, canvasHeight, mobile } = useBlock();
  return (
    <>
      <Block factor={1} offset={0}>
        <Block factor={1.0}>
          <Html
            position={[
              isMobile ? -canvasWidth / 2.7 : -canvasWidth / 2.5,
              -canvasHeight / 2.8,
              -2,
            ]}
          >
            <h2
              style={{
                fontSize: '2.4rem',
              }}
            >
              <span style={{ fontSize: '.45em' }}>Personal&</span>
              <span style={{ fontSize: '.45em' }}>Dev</span>
              <br />
              <span>Projects</span>
              <br />
              <span style={{ fontSize: '0.82em' }}></span>
            </h2>
          </Html>
        </Block>
      </Block>
      <Block factor={1.2} offset={memoizedProjects.length + 1}>
        <MultilineText
          top
          left
          size={w * 0.15}
          lineHeight={w / 5}
          position={[-w / 1.8, 0, -1]}
          color="#2fe8c3"
          text={'eight\nthree\neighty-three'}
        />
      </Block>
      {memoizedProjects.map((props, index) => (
        <Project
          projectPlatform={projectPlatform}
          key={index}
          index={index}
          {...props}
          image={images[index]}
        />
      ))}
      {memoizedStripes.map(({ offset, color, height }, index) => (
        <Block key={index} factor={-1.5} offset={offset}>
          <Plane
            args={[50, height, 32, 32]}
            shift={-4}
            color={color}
            rotation={[0, 0, Math.PI / 8]}
            position={[0, -0.35, -10]}
          />
        </Block>
      ))}
    </>
  );
}
