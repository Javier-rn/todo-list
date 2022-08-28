function addFoldersEvents() {
  const folders = document.querySelectorAll('#folders li');

  folders.forEach((folder) => {
    folder.addEventListener('click', function () {
      const activeFolder = document.querySelector('.active');

      activeFolder.classList.remove('active');
      folder.classList.add('active');
    });
  });
}

import { CreateTodo } from './createTodo.js';
import { displayTodo } from './display.js';

function addNewTodo(title, description, due, priority) {
  const currentFolder = document.querySelector('.active');

  const newTodo = new CreateTodo(title, description, due, priority, currentFolder);

  displayTodo(newTodo);
}

export { addFoldersEvents, addNewTodo };
