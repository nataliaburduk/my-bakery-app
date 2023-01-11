class FormConstructor{
  constructor(containerId, cakeSponges, cakeCreams, cakeFillings) {
    this.containerId = containerId;
    this.cakeSponges = cakeSponges;
    this.cakeCreams = cakeCreams;
    this.cakeFillings = cakeFillings;
  }

  createButtonsGroup() {
    
  }
  
  renderForm() {
    this.formElement = document.createElement('form'); 
    
    const buttonsGroup = document.createElement('div');
    buttonsGroup.setAttribute('class', 'btn-group group-pos');
    buttonsGroup.setAttribute('role', 'group');
    buttonsGroup.setAttribute('aris-label', 'Basic outlined example');
    
    const plusSpongeElement = document.createElement('button'),
          plusCreamElement = document.createElement('button'),
          plusFillingElement = document.createElement('button');
    
    this.addIconForSponge = this.addPlussIcon(plusSpongeElement);
    this.addIconForCream = this.addPlussIcon(plusCreamElement);
    this.addIconForFilling = this.addPlussIcon(plusFillingElement);

    buttonsGroup.append(this.addIconForSponge);
    buttonsGroup.append(this.addIconForCream);
    buttonsGroup.append(this.addIconForFilling);

    this.addPlussIcon(plusSpongeElement, '+Add Sponge');
    this.addPlussIcon(plusCreamElement, '+Add Cream');
    this.addPlussIcon(plusFillingElement, '+Add Filling');

    this.formElement.append(buttonsGroup);
    this.formElement.append(this.getLayerSelector(this.cakeSponges, 'Cake Sponge'));
    this.formElement.append(this.getLayerSelector(this.cakeCreams, 'Cake Cream'));
    this.formElement.append(this.getLayerSelector(this.cakeFillings, 'Cake Filling'));
    
    
    this.addIconForSponge.addEventListener('click', (e) => {
      e.preventDefault();
      this.formElement.append(this.getLayerSelector(this.cakeSponges, 'Cake Sponge'));
    });

    this.addIconForCream.addEventListener('click', (e) => {
      e.preventDefault();
      this.formElement.append(this.getLayerSelector(this.cakeCreams, 'Cake Cream'));
    });

    this.addIconForFilling.addEventListener('click', (e) => {
      e.preventDefault();
      this.formElement.append(this.getLayerSelector(this.cakeFillings, 'Cake Filling'));
    });

    return this.formElement;
  }
  
  addPlussIcon (layer, layerElement) {
    layer.setAttribute('class', 'btn btn-outline-primary');
    layer.innerHTML = `${layerElement}`;

    return layer;
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

}

export default FormConstructor;