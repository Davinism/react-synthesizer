import { createStore } from 'redux';
import reducer from '../reducers/index.js';

// const store = createStore(reducer);

const configureStore = (preloadedState = {}) => {
  createStore(reducer, preloadedState);
};

export default configureStore;
