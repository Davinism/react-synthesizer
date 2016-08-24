import React from 'react';
import ReactDOM from 'react-dom';
import Note from "./util/note.js";
import Root from './components/root.jsx';
import configureStore from './store/store.js';
import {TONES} from './util/tones.js';

// window.tones = TONES;
// const store = configureStore();

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});

// window.myNote = new Note(440);
