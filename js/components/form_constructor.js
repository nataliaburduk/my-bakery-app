class FormConstructor {
  constructor(containerId, cakeSponges, cakeCreams, cakeFillings) {
    this.containerId = containerId;
    this.cakeSponges = cakeSponges;
    this.cakeCreams = cakeCreams;
    this.cakeFillings = cakeFillings;
  }

  renderForm() {
    this.formElement = document.createElement('form');
    this.fieldsContainer = document.createElement('div');
    this.formElement.append(this.fieldsContainer);
     
    this.createBtnsGroup();
    this.formElement.append(this.btnsGroup);
    this.appendSpongeToForm();
    this.appendCreamToForm();
    this.appendFillingToForm();
    this.formElement.append(this.getTotalCakePriceBtn())
    this.getTotalCakePrice();

    return this.formElement;
  }

  getTotalCakePriceBtn() {
    const totalPriceBtn = document.createElement('div');
    totalPriceBtn.setAttribute('class', 'calc-total-price');

    totalPriceBtn.innerHTML = `
    <button class="btn btn-outline-warning">Calculate Cake's Price</button>
    <div class="total-price"></div>
    `
    return totalPriceBtn;

  }

  getTotalCakePrice() {
    const totalPriceBtn = this.formElement.querySelector('.calc-total-price');

    totalPriceBtn.addEventListener('click', (e) => {
      if (this.formElement.reportValidity()){
        e.preventDefault();
        let result = 0;
        const allSelectFields = document.querySelectorAll('select');
        allSelectFields.forEach(field => {
            result += +field.value;
  
          return result;
        })
        document.querySelector('.total-price').innerHTML = result + '$';
      }
    })
  }

  appendSpongeToForm() {
    this.fieldsContainer.append(this.getLayerSelector(this.cakeSponges, 'Cake Sponge'));
  }

  appendCreamToForm() {
    this.fieldsContainer.append(this.getLayerSelector(this.cakeCreams, 'Cake Cream'));
  }

  appendFillingToForm() {
    this.fieldsContainer.append(this.getLayerSelector(this.cakeFillings, 'Cake Filling'));
  }

  getButton(label) {
    const btn = document.createElement('button');
    btn.setAttribute('class', 'btn btn-outline-primary');
    btn.innerHTML = `${label}`;

    return btn;
  }

  createBtnsGroup() {
    this.btnsGroup = this.getBtnsGroup();

    this.plusSpongeElement = this.getButton('+Add Sponge');
    this.plusCreamElement = this.getButton('+Add Cream');
    this.plusFillingElement = this.getButton('+Add Filling');

    this.btnsGroup.append(this.plusSpongeElement);
    this.btnsGroup.append(this.plusCreamElement);
    this.btnsGroup.append(this.plusFillingElement);

    this.plusSpongeElement.addEventListener('click', (e) => {
      e.preventDefault();
      this.appendSpongeToForm();
    });

    this.plusCreamElement.addEventListener('click', (e) => {
      e.preventDefault();
      this.appendCreamToForm();
    });

    this.plusFillingElement.addEventListener('click', (e) => {
      e.preventDefault();
      this.appendFillingToForm();
    });
  }

  getLayerSelector(options, title) {
    const fieldSelectElement = document.createElement('select');
    fieldSelectElement.setAttribute('class', 'form-select form-control required');
    fieldSelectElement.setAttribute('required', 'required');
    fieldSelectElement.setAttribute('name', 'layer[]');

    fieldSelectElement.innerHTML = `
      <option selected value="">${title}</option>
    `;

    options.forEach((option) => {
      const optionTag = document.createElement('option');
      optionTag.innerHTML = option.name;
      optionTag.setAttribute('value', +option.price);
      optionTag.setAttribute('class', 'form-select');

      fieldSelectElement.append(optionTag);
    });


    const fieldWrapper = this.getFieldWrapper();
    const crossField = this.getCrossFieldBtn(fieldSelectElement);

    fieldWrapper.append(fieldSelectElement);
    fieldWrapper.append(crossField);

    return fieldWrapper;
  }

  getFieldWrapper() {
    const fieldWrapper = document.createElement('div');
    fieldWrapper.setAttribute('class', 'field-wrapper');

    return fieldWrapper;
  }

  getCrossFieldBtn(selector) {
    const crossField = document.createElement('button');
    crossField.classList.add('hide-cross-field', 'btn');
    crossField.setAttribute('type', 'button');
    crossField.setAttribute('aria-label', 'Close');
    crossField.innerHTML = '<i class="fa fa-times"></i>';

    selector.addEventListener('mouseover', () => {
      crossField.classList.add('field-close');
      crossField.classList.remove('hide-cross-field');
    });

    selector.addEventListener('mouseout', () => {
      crossField.classList.remove('field-close');
      crossField.classList.add('hide-cross-field');
    })

    crossField.addEventListener('click', () => {
      selector.remove();
      this.getTotalCakePrice();
    });

    return crossField;
  }

  getBtnsGroup() {
    const buttonsGroup = document.createElement('div');
    buttonsGroup.setAttribute('class', 'btn-group group-pos');
    buttonsGroup.setAttribute('role', 'group');
    buttonsGroup.setAttribute('aris-label', 'Basic outlined example');

    return buttonsGroup;
  }

}

export default FormConstructor;