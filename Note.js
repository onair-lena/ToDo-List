export class Note {

  _name = ''
  _done = false

  constructor(container, name='',done=false){
  this.item = document.createElement('div')
  this.buttonGroup = document.createElement('div')
  this.nameSpan = document.createElement('span')
  this.doneButton = document.createElement('button')
  this.deleteButton = document.createElement('button')

  this.item.classList.add(
    'list-group-item', 
    'd-flex', 
    'justify-content-between', 
    'align-items-center',
    'p-3'
    )
  this.buttonGroup.classList.add('btn-group', 'btn-group-sm')
  this.doneButton.classList.add('btn', 'btn-success')
  this.doneButton.textContent = 'Done'
  this.deleteButton.classList.add('btn', 'btn-danger')
   this.deleteButton.textContent = 'Delete'

      this.doneButton.addEventListener('click', ()=>{
        this.done = !this.done
      })

            this.deleteButton.addEventListener('click', ()=>{
        if(confirm('Sure to delete?')){
          this.delete()
        }
      })

   this.nameSpan.textContent = name
   
   this.buttonGroup.append(this.doneButton)
   this.buttonGroup.append(this.deleteButton)
   this.item.append(this.nameSpan)
   this.item.append(this.buttonGroup)

  this.name = name
  this.done = done

  container.append(this.item)
}

set name(value){
  console.log(value)
  this._name = value
  this.nameSpan.textContent = value
}

get name(){
return this.name
}

set done(value){
  this._done = value

  if(value){
    this.item.classList.add('list-group-item-success')
  } else {
    this.item.classList.remove('list-group-item-success')
  }

}

get done(){
 
 return this._done
}

delete(){
  this.item.remove()
}

}