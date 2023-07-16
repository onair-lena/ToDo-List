export class DeleteButton {
  constructor(container, key) {
    this._key = key;

    this.deleteButton = document.createElement('button');
    this.deleteButton.classList.add('btn', 'btn-outline-danger', 'm-2');
    this.deleteButton.style =
      '--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;';
    this.deleteButton.textContent = 'Delete';
    container.titleWrapper.append(this.deleteButton);

    this.deleteButton.addEventListener('click', () => {
      const key = container._currentList;
      container.removeList(key);
    });
  }
}
