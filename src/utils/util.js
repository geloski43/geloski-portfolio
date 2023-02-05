import * as THREE from 'three';
import { proxy } from 'valtio';
import { projectData } from '../data/projectData';

export const damp = THREE.MathUtils.damp;
export const state = proxy({
  clicked: null,
  projectData: [...projectData],
  project: null,
});
