class CakeCard {
  constructor(name, description, image) {
    this.name = name;
    this.description = description;
    this.image = image;
  }

  htmlElement() {
    const element = document.createElement('div');

    element.classList.add("col", "col-12", "col-sm-6", "col-md-4", "col-lg-3", "col-xl-2");

    element.innerHTML = `
      <div class="card">
          <img src="${this.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">${this.description}</p>
            <a href="#" class="btn btn-outline-primary">Read more</a>
          </div>
      </div>`;

    return element;
  }
}

export default CakeCard;