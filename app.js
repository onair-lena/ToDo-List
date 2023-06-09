import {Note} from './Note.js'


let initialNote = new Note(document.getElementById('app'), 'Hello')

     document.getElementById('action').addEventListener('click', ()=>{
      let newNote = new Note(document.getElementById('app'), prompt('Add new task'))
      })