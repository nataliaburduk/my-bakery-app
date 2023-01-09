class ModalWindow {
  constructor(id, modalTitle, modalSubtitle) {
    this.id = id;
    this.modalTitle = modalTitle;
    this.modalSubtitle = modalSubtitle;
    this.cakeCalculator = document.querySelector('.btn-cake-calc');
    this.modal = document.querySelector('.modal');
    this.closeModalIcon = document.querySelector('.btn-close');
  }

  modalWindow() {        
    this.openModalWindow();
    this.closeModalByCross();
    this.closeModalWindow();
  }

  openModalWindow() {
    this.cakeCalculator.addEventListener('click', () => {
      this.modal.classList.add('show');
      this.modal.classList.remove('hide');
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", this.escapeClose.bind(this));
      this.modal.addEventListener("click", this.outsideClose.bind(this));
    });
  }
  
  closeModalWindow() {
    this.modal.classList.add('hide');
    this.modal.classList.remove('show');
    document.body.style.overflow = "auto";
    document.removeEventListener("keydown", this.escapeClose.bind(this));
    this.modal.removeEventListener("click", this.outsideClose.bind(this));
  }

  closeModalByCross() {
    this.closeModalIcon.addEventListener('click', () => {
      this.closeModalWindow();
    });
  }

  escapeClose(event) {
    if (event.code === 'Escape') {
      this.closeModalWindow();
    }
  }

  outsideClose(event) {
    if (event.target === this.modal || event.target.classList.contains('btn-close')) {
      this.closeModalWindow();
    }
  }
}

export default ModalWindow;