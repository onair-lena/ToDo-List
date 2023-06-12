import { Note } from './Note.js';
import { NoteList } from './NoteList.js';

let newList = new NoteList(document.getElementById('app'), 'noteList');

// let initialNote = new Note(document.getElementById('app'), 'Hello');

document.getElementById('action').addEventListener('click', () => {
  newList.add(prompt('Add new task'));
});
