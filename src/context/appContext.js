import createDataContext from './createDataContext';

const appReducer = (state, action) => {
  switch (action.type) {
    case 'set_projectPlatform':
      return { ...state, projectPlatform: action.payload };
    case 'set_projects':
      return { ...state, projects: action.payload };
    case 'set_show_sideMenu':
      return { ...state, showSideMenu: action.payload };
    case 'set_sections':
      return { ...state, sections: action.payload };
    case 'set_pages':
      return { ...state, pages: action.payload };
    case 'set_zoom':
      return { ...state, zoom: action.payload };
    case 'set_stripes':
      return { ...state, stripes: action.payload };
    default:
      return state;
  }
};

const setProjectPlatform = (dispatch) => (str) => {
  dispatch({
    type: 'set_projectPlatform',
    payload: str,
  });
};

const setProjects = (dispatch) => (arr) => {
  dispatch({
    type: 'set_projects',
    payload: arr,
  });
};

const setShowSideMenu = (dispatch) => (bool) => {
  dispatch({
    type: 'set_show_sideMenu',
    payload: bool,
  });
};

const setSections = (dispatch) => (num) => {
  dispatch({
    type: 'set_sections',
    payload: num,
  });
};

const setPages = (dispatch) => (num) => {
  dispatch({
    type: 'set_pages',
    payload: num,
  });
};

const setZoom = (dispatch) => (num) => {
  dispatch({
    type: 'set_zoom',
    payload: num,
  });
};

const setStripes = (dispatch) => (arr) => {
  dispatch({
    type: 'set_stripes',
    payload: arr,
  });
};

export const { Provider, Context } = createDataContext(
  appReducer,
  {
    setProjectPlatform,
    setProjects,
    setShowSideMenu,
    setSections,
    setPages,
    setZoom,
    setStripes,
  },
  {
    projectPlatform: 'web',
    projects: [],
    showSideMenu: false,
    sections: null,
    pages: null,
    zoom: 75,
    stripes: [],
  }
);

// sections: projLength + 1,
// pages: projLength + 1,
// zoom: 75,
// projectData: [...projectData],
// stripes: [
//   { offset: -0.057, color: '#000', height: 7 },
//   { offset: projLength, color: '#000', height: 7 },
// ],
