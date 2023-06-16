import { Note } from './Note.js';
import { NoteList } from './NoteList.js';
import { ToDo } from './ToDo.js';

let app = new ToDo(document.getElementById('app'));
app.addUser('My ToDo List', 'my');
app.addUser('My Shopping List', 'shop');
app.addUser('My Cooking List', 'cooking');

// let newList = new NoteList(document.getElementById('app'), 'noteList', [
//   { name: 'Task 1' },
//   { name: 'Task 2' },
// ]);

// let initialNote = new Note(document.getElementById('app'), 'Hello');

document.getElementById('action').addEventListener('click', () => {
  app.addUser(prompt('Add list title'));
});
