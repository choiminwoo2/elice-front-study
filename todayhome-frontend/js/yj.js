const writeBt = document.querySelector('.yj-header-upper-btn');
const writeMenu = document.querySelector('.yj-header-upper-btn-lists');

const openWriteMenu = () => {
  writeMenu.classList.toggle('openWriteMenu');
};

const closeWriteMenu = (event) => {
  if (event.target !== writeMenu && event.target !== writeBt) {
    writeMenu.classList.remove('openWriteMenu');
  }
};

writeBt.addEventListener('click', openWriteMenu);
window.addEventListener('click', closeWriteMenu);
