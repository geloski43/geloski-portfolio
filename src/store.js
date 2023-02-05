import { createRef } from 'react';
import { Vector3 } from 'three';
import { projectData } from './data/projectData';

const projLength = 10;

const state = {
  sections: projLength + 1,
  pages: projLength + 1,
  zoom: 75,
  projectData: [...projectData],
  stripes: [
    { offset: -0.057, color: '#000', height: 7 },
    { offset: projLength, color: '#000', height: 7 },
  ],
  top: createRef(),
};

export default state;
