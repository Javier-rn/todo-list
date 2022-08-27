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

export { addFoldersEvents };
