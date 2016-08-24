import {NotesConstants} from '../actions/note_actions.js';
import {NOTE_NAMES} from '../util/tones.js';

const validKeys = ['a', 's', 'd', 'f', 'g'];
const keyMap = {
  'a': 'C5',
  's': 'D5',
  'd': 'E5',
  'f': 'F5',
  'g': 'G5'
};



const notesReducer = (state = [], action) => {
  const note = keyMap[action.key];
  const idx = state.indexOf(note);

  switch(action.type) {
    case NotesConstants.KEY_PRESSED:
      if (note && idx === -1) {
        return [
          ...state,
          note
        ];
      }
      return state;
    case NotesConstants.KEY_RELEASED:
      if (idx !== -1) {
        return [
          ...state.slice(0, idx),
          ...state.slice(idx + 1)
        ];
      }
      return state;
    default:
      return state;
  }
};

export default notesReducer;
