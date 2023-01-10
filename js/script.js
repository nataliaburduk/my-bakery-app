import CakeSlider from "./components/cakes_slider";
import hideWelcomeScreen from "./components/welcome_screen";
import ModalWindow from "./components/modal";

hideWelcomeScreen(() => {
  const cakeSlider = new CakeSlider('#wrapper', window.innerWidth);
  cakeSlider.render();

  const cakeCalculator = document.querySelector('.btn-cake-calc');
  const cakeModal = new ModalWindow(
    '#cake-calculator-modal-container',
    'Create a Cake!',
    'Describe your own cake and we will create it for you!',
    cakeCalculator
  );
  cakeModal.render();
});

