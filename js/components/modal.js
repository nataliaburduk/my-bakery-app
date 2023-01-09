class ModalWindow {
  constructor(containerId, modalTitle, modalSubtitle, openModalBtn) {
    this.container = document.querySelector(containerId);
    this.modalTitle = modalTitle;
    this.modalSubtitle = modalSubtitle;
    this.openModalBtn = openModalBtn;
    // this.modal = document.querySelector('.modal');
    // this.closeModalIcon = document.querySelector('.btn-close');
  }

  render() {
    this.closeModalIcon = this.closeModalIconElement();

    this.modal = document.createElement('div');
    this.modal.classList.add("modal");
    this.modal.setAttribute('tabindex', '-1');
    this.modal.innerHTML = `
      <div class="modal__dialog">
          <div class="modal__content">
            <div class="modal-header">
              <h5 class="modal-title">${this.modalTitle}</h5>
            </div>
            <div class="modal-body">
                <div class="modal__subtitle">${this.modalSubtitle}</div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-primary">Give me a Call </button>

            </div>
                  
          </div>
      </div>
    `;
    this.modal.querySelector('.modal-header').append(this.closeModalIcon);
    this.container.append(this.modal);
    this.openModalWindow();
    this.closeModalByCross();
    this.closeModalWindow();
  }

  closeModalIconElement() {
    const icon = document.createElement('button');
    icon.classList.add("btn-close", "modal__close");
    icon.setAttribute('data-bs-dismiss', 'modal');
    icon.setAttribute('type', 'button');
    icon.setAttribute('aria-label', 'Close');
    icon.innerHTML = '<i class="fa fa-times"></i>';

    return icon;
  }

  openModalWindow() {
    this.openModalBtn.addEventListener('click', () => {
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