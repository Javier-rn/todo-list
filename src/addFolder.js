import { addFoldersEvents } from './eventHandlers';

function addFolder() {
  const addFolderBtn = document.querySelector('#add-folder-btn');
  const folders = document.querySelector('#folders');
  addFolderBtn.addEventListener('click', function () {
    if (!(folders.lastChild.textContent === '+')) {
      const newLi = document.createElement('li');
      const newLiInput = document.createElement('input');
      const newLiButton = document.createElement('button');
      newLiButton.textContent = '+';
      newLi.append(newLiInput);
      newLi.append(newLiButton);
      folders.append(newLi);

      newLiInput.focus();

      newLiButton.addEventListener('click', function () {
        newLi.textContent = newLiInput.value;
        newLiInput.remove();
        newLiButton.remove();
        addFoldersEvents();
      });
    }
  });
}

export { addFolder };
