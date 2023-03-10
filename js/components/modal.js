import FormConstructor from "./form_constructor";
class ModalWindow {
  constructor(containerId, modalTitle, modalSubtitle, openModalBtn) {
    this.container = document.querySelector(containerId);
    this.modalTitle = modalTitle;
    this.modalSubtitle = modalSubtitle;
    this.openModalBtn = openModalBtn;
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
          </div>
      </div>
    `;

    
    this.container.append(this.modal);
    this.modal.querySelector('.modal-header').append(this.closeModalIcon);
    // this.modal.querySelector('.total-price').innerHTML = this.result;

    this.openModalWindowTrigger();
    this.closeModalByCross();
    this.closeModalWindow();
    this.addLoadingSpinner();
    this.getFetchedCakeParts();

  }

  getFetchedCakeParts() {
    let mySponges, myCreams, myFillings;

    fetch('http://localhost:3000/cake-sponges')
      .then(data =>  data.json())
      .then(sponges => mySponges = sponges)
      .then(() => fetch('http://localhost:3000/cake-creams'))
      .then(data =>  data.json())
      .then(creams => myCreams = creams)
      .then(() => fetch('http://localhost:3000/cake-fillings'))
      .then(data =>  data.json())
      .then(fillings => myFillings = fillings)
      .then(() => {
        const cakeConstructor = new FormConstructor('.modal-body', mySponges, myCreams, myFillings);
        this.modal.querySelector('.modal-body .modal-spinner').remove();
        this.modal.querySelector('.modal-body').append(cakeConstructor.renderForm());
      })
      .catch(error => { console.log(error) });
  }
    
  addLoadingSpinner() {
    const loading = document.createElement('div');
    loading.setAttribute('class', 'modal-spinner d-flex justify-content-center');
    loading.innerHTML = `
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden"></span>
    </div>
    `    
    return this.modal.querySelector('.modal-body').append(loading);
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

  openModalWindowTrigger() {
    this.openModalBtn.addEventListener('click', () => {
      this.modal.classList.add('show');
      this.modal.classList.remove('hide');
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", this.closeModalByClickingEscape.bind(this));
      this.modal.addEventListener("click", this.closeModalByClickingOutside.bind(this));
    });
  }

  closeModalWindow() {
    this.modal.classList.add('hide');
    this.modal.classList.remove('show');
    document.body.style.overflow = "auto";
    document.removeEventListener("keydown", this.closeModalByClickingEscape.bind(this));
    this.modal.removeEventListener("click", this.closeModalByClickingOutside.bind(this));
  }

  closeModalByCross() {
    this.closeModalIcon.addEventListener('click', () => {
      this.closeModalWindow();
    });
  }

  closeModalByClickingEscape(event) {
    if (event.code === 'Escape') {
      this.closeModalWindow();
    }
  }

  closeModalByClickingOutside(event) {
    if (event.target === this.modal || event.target.classList.contains('btn-close')) {
      this.closeModalWindow();
    }
  }
}

export default ModalWindow;