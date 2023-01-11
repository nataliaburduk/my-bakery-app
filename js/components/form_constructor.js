class FormConstructor{
  constructor(containerId, cakeSponges, cakeCreams, cakeFillings) {
    this.containerId = containerId;
    this.cakeSponges = cakeSponges;
    this.cakeCreams = cakeCreams;
    this.cakeFillings = cakeFillings;
  }
  
  renderForm() {
    this.formElement = document.createElement('form');  

    const plusSpongeElement = document.createElement('button'),
          plusCreamElement = document.createElement('button'),
          plusFillingElement = document.createElement('button');
          
    this.addPlussIcon(plusSpongeElement);
    this.addPlussIcon(plusCreamElement);
    this.addPlussIcon(plusFillingElement);

    this.sponge = this.addPlussIcon(plusSpongeElement);
    this.cream = this.addPlussIcon(plusCreamElement);
    this.filling = this.addPlussIcon(plusFillingElement);

    this.formElement.append(this.sponge);
    this.formElement.append(this.cream);
    this.formElement.append(this.filling);
    this.formElement.append(this.getLayerSelector(this.cakeSponges, 'Cake Sponge'));
    this.formElement.append(this.getLayerSelector(this.cakeCreams, 'Cake Cream'));
    this.formElement.append(this.getLayerSelector(this.cakeFillings, 'Cake Filling'));
    
    
    this.sponge.addEventListener('click', () => {
      this.formElement.append(this.getLayerSelector(this.cakeSponges, 'Cake Sponge'));
    });

    this.cream.addEventListener('click', () => {
      this.formElement.append(this.getLayerSelector(this.cakeCreams, 'Cake Cream'));
    });

    this.filling.addEventListener('click', () => {
      this.formElement.append(this.getLayerSelector(this.cakeFillings, 'Cake Filling'));
    });

    return this.formElement;
  }
  
  addPlussIcon (layer) {
    layer.setAttribute('type', 'button');
    layer.setAttribute('class', 'plus-icon');
    layer.innerHTML = `<i class="fa fa-plus"></i>`;

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