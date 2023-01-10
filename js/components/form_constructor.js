class FormConstructor{
  constructor(containerId, cakeSponges, cakeCreams, cakeFillings) {
    this.containerId = containerId;
    this.cakeSponges = cakeSponges;
    this.cakeCreams = cakeCreams;
    this.cakeFillings = cakeFillings;
  }
  
  renderForm() {
    this.formElement = document.createElement('form');
    this.formElement.append(this.getLayerSelector(this.cakeSponges, 'Cake Sponge'));
    this.formElement.append(this.getLayerSelector(this.cakeCreams, 'Cake Cream'));
    this.formElement.append(this.getLayerSelector(this.cakeFillings, 'Cake Filling'));

    return this.formElement;
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