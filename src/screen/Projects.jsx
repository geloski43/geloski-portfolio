import React, { Suspense, useEffect, useRef, useContext, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import state from '../store';
import AnimatedSwitch from '../components/projects/switch/AnimatedSwitch';
import FooterLinks from '../components/FooterLinks';
import Startup from '../components/projects/Startup';
import ProjectsList from '../components/projects/ProjectsList';
import { Context as AppContext } from '../context/appContext';
import _ from 'lodash';
import { Center } from '@chakra-ui/react';

const Projects = () => {
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

  const memoizedSections = useMemo(() => {
    return memoizedProjects.length + 2;
  }, [memoizedProjects]);

  const memoizedPages = useMemo(() => {
    return memoizedProjects.length + 2;
  }, [memoizedProjects]);

  const scrollArea = useRef();
  const onScroll = (e) => (state.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);
  return (
    <Suspense
      fallback={
        <Center>
          <span style={{ fontSize: '1rem', paddingTop: '40%' }}>
            Loading...
          </span>
        </Center>
      }
    >
      <Canvas
        linear
        dpr={[1, 2]}
        orthographic
        camera={{ zoom: state.zoom, position: [0, 0, 500] }}
      >
        <ProjectsList />
        <Startup />
      </Canvas>

      <div
        style={{ height: '100vh' }}
        className="scrollArea"
        ref={scrollArea}
        onScroll={onScroll}
      >
        <AnimatedSwitch />
        {new Array(memoizedSections).fill().map((_, index) => (
          <div
            key={index}
            id={'0' + index}
            style={{ height: `${(memoizedPages / memoizedSections) * 100}vh` }}
          />
        ))}
        <FooterLinks />
      </div>
    </Suspense>
  );
};

export default Projects;
