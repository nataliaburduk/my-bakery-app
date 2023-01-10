class FormConstructor{
  constructor(containerId, cakeLayerTitle, cakeLayers) {
    this.containerId = containerId;
    this.cakeLayerTitle = cakeLayerTitle;
    this.cakeLayers = cakeLayers;
  }

  renderForm() {
    const formElement = document.createElement('form');

    formElement.innerHTML = `
      <select class="form-select">
        <option selected>${this.cakeLayerTitle}</option>
      </select>
    `;

    this.cakeLayers.forEach((option) => {
      const layerSelect = formElement.querySelector('.form-select');
      const optionTag = document.createElement('option');
      optionTag.innerHTML = option.name;
      optionTag.setAttribute('value', option.id);
      optionTag.setAttribute('class', 'form-select');

      layerSelect.append(optionTag);
    });
    return formElement;
  }
}
export default FormConstructor;