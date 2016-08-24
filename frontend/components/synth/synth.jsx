import React from 'react';
import Note from '../../util/note.js';
import {TONES, NOTE_NAMES} from '../../util/tones.js';
import $ from 'jquery';


class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.map(name => {
      return new Note(TONES[name]);
    });
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.playNotes = this.playNotes.bind(this);
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  onKeyDown(e) {
    const keyName = e.key;
    this.props.keyPressed(keyName);
  }

  onKeyUp(e) {
    const keyName = e.key;
    this.props.keyReleased(keyName);
  }

  playNotes() {
    const self = this;
    NOTE_NAMES.forEach((note, idx)=>{
      if(self.props.notes.includes(note)) {
        self.notes[idx].start();
      } else {
        self.notes[idx].stop();
      }
    });
  }

  render() {
    const noteList = NOTE_NAMES.map( note => {
      return <li key={note}>{note}</li>;
    });
    this.playNotes();
    return(<ul>{noteList}</ul>);
  }
}

export default Synth;
