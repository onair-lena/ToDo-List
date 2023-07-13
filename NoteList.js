import { Note } from './Note.js';

export class NoteList {
  _notes = [];
  _key = null;
  _def = [];

  constructor(container, key = null, def = []) {
    this.container = container;
    this.list = document.createElement('div');
    this.list.classList.add('list-group');

    this._key = key;
    this._def = def;

    this.update();

    container.innerHTML = '';
    container.append(this.list);
  }

  checkEmpty() {
    if (this._notes.length === 0) {
      this.empty = document.createElement('div');
      this.empty.classList.add(
        'd-flex',
        'list-group-item',
        'justify-content-center',
        'align-items-center',
        'text-secondary',
        'bg-light',
        'p-5'
      );

      this.empty.textContent = 'ToDo List is empty';
      this.list.append(this.empty);
    } else {
      if (this.empty) {
        this.empty.remove();
      }
    }
  }

  getNewId() {
    let max = 0;
    for (const note of this._notes) {
      if (note.id > max) max = note.id;
    }
    return max + 1;
  }

  add(name, done = false) {
    let newNote = new Note(this, name, done);
    newNote.id = this.getNewId();
    this._notes.push(newNote);
    this.checkEmpty();
    this.save();

    return newNote.id;
  }

  remove(value) {
    let id = value;

    if (value instanceof Note) {
      id = value.id;
    }

    for (let i = 0; i < this._notes.length; i++) {
      if (this._notes[i].id == id) {
        this._notes.splice(i, 1);
      }
    }
    this.checkEmpty();
    this.save();
  }

  save() {
    if (this._key) {
      let saveList = [];

      for (const note of this._notes) {
        saveList.push({
          id: note.id,
          name: note.name,
          done: note.done,
        });
      }
      localStorage.setItem(this._key, JSON.stringify(saveList));
    }
  }

  update() {
    this.startList = this._def;

    this._notes = [];
    this.list.innerHTML = '';

    if (this._key) {
      let dataLS = localStorage.getItem(this._key);
      if (dataLS !== '' && dataLS !== null) {
        this.startList = JSON.parse(dataLS);
      }
    }
    if (this.startList.length > 0) {
      for (const obj of this.startList) {
        let newNote = new Note(this, obj.name, obj.done);
        if (obj.id) {
          newNote.id = obj.id;
        } else {
          newNote.id = this.getNewId();
        }
        this._notes.push(newNote);
      }
    }
    this.save();
    this.checkEmpty();
  }
}
