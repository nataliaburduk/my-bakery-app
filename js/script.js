import CakeSlider from "./components/cakes_slider";
import hideWelcomeScreen from "./components/welcome_screen";
import ModalWindow from "./components/modal";

hideWelcomeScreen(() => {
  const cakeSlider = new CakeSlider('#wrapper', window.innerWidth);
  cakeSlider.render();
});

const cakeModal = new ModalWindow('.modal');
cakeModal.modalWindow();