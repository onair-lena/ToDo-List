export class AddButton {
  constructor(container) {
    this.addButton = document.createElement('button');
    this.addButton.classList.add('btn');
    this.addButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg " viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/></svg>';

    container.navWrapper.append(this.addButton);

    this.addButton.addEventListener('click', () => {
      container.addList(prompt('Add list title'));
    });
  }
}
