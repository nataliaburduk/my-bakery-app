import CakeSlider from "./components/cakes_slider"; 
import hideWelcomeScreen from "./components/welcome_screen";

hideWelcomeScreen(() => {
  const cakeSlider = new CakeSlider('#wrapper', window.innerWidth);
  cakeSlider.render();
});

