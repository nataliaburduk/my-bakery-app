class CakeCard {
  constructor(id, name, description, image, display) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.display = display;
  }

  htmlElement() {
    const element = document.createElement('div');
    element.style.display = this.display ? 'block' : 'none';
    element.classList.add("col", "col-12", "col-sm-6", "col-md-4", "col-lg-3", "col-xl-2");
    element.innerHTML = `
    <div class="carousel-item active">
      <div id="cake-card-${this.id}" class="card">
        <img src="${this.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <p class="card-text collapsed-text">${this.description}</p>
        </div>
      </div>
    </div>
    `;

    element.querySelector('.card-body').append(this.readMoreButton());
    element.querySelector('.card-body').append(this.collapseButton());

    element.addEventListener('click', (event) => {
      if (event.target.classList.contains('reed-more-btn')) {
        element.querySelector('.card-text').classList.remove('collapsed-text');
        element.querySelector('.collapse-btn').removeAttribute('hidden');
        event.target.setAttribute('hidden', true);
      }

      if (event.target.classList.contains('collapse-btn')) {
        element.querySelector('.card-text').classList.add('collapsed-text');
        element.querySelector('.reed-more-btn').removeAttribute('hidden');
        event.target.setAttribute('hidden', true);
      }
    });

    return element;
  }


  readMoreButton() {
    const btn = document.createElement('div');

    btn.classList.add("btn", "btn-outline-primary", "reed-more-btn");
    btn.innerHTML = 'Read more';

    return btn;
  }

  collapseButton() {
    const colBtn = document.createElement('div');

    colBtn.classList.add("btn", "btn-outline-primary", "collapse-btn");
    colBtn.innerHTML = 'Collapse';
    colBtn.setAttribute('hidden', true);

    return colBtn;
  }
}

export default CakeCard;