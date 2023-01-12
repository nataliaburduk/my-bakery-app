class FormConstructor{
  constructor(containerId, cakeSponges, cakeCreams, cakeFillings) {
    this.containerId = containerId;
    this.cakeSponges = cakeSponges;
    this.cakeCreams = cakeCreams;
    this.cakeFillings = cakeFillings;
  }

  

  renderForm() { 

    this.formElement = document.createElement('form'); 

    this.createBtnsGroup();

    this.formElement.append(this.btnsGroup);
    this.appendSpongeToForm();
    this.appendCreamToForm();
    this.appendFillingToForm();
  
    return this.formElement;
  }

  appendSpongeToForm() {
    this.formElement.append(this.getLayerSelector(this.cakeSponges, 'Cake Sponge'));
  }

  appendCreamToForm() {
    this.formElement.append(this.getLayerSelector(this.cakeCreams, 'Cake Cream'));
  }

  appendFillingToForm() {
    this.formElement.append(this.getLayerSelector(this.cakeFillings, 'Cake Filling'));
  }

  getButton(label) {
    const btn =  document.createElement('button');
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
    fieldSelectElement.setAttribute('class', 'form-select');

    fieldSelectElement.innerHTML = `
      <option selected>${title}</option>
    `;

    options.forEach((option) => {
      const optionTag = document.createElement('option');
      optionTag.innerHTML = option.name;
      optionTag.setAttribute('value', option.id);
      optionTag.setAttribute('class', 'form-select');

      fieldSelectElement.append(optionTag);
    });
    return fieldSelectElement;
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