function modalWindow() {
  const cakeCalculator = document.querySelector('.btn-cake-calc'),
    modal = document.querySelector('.modal'),
    closeModalIcon = document.querySelector('.btn-close');


  function openModalWindow() {
    cakeCalculator.addEventListener('click', () => {
      modal.classList.add('show');
      modal.classList.remove('hide');
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", escapeClose);
      modal.addEventListener("click", outsideClose);
    });
  }

  function closeModalByCross() {
    closeModalIcon.addEventListener('click', () => {
      closeModalWindow();
    });
  }

  function closeModalWindow() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = "auto";
    document.removeEventListener("keydown", escapeClose);
    modal.removeEventListener("click", outsideClose);
  }

  function escapeClose(event) {
    if (event.code === 'Escape') {
      closeModalWindow();
    }
  }

  function outsideClose(event) {
    if (event.target === modal || event.target.classList.contains('btn-close')) {
      closeModalWindow();
    }
  }
  closeModalByCross();
  openModalWindow();
}

export default modalWindow;