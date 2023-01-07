import sliderShow from "./carousel";

function welcomeScreen(callback) {
  const slides = document.querySelectorAll('.slider-imgs'),
        welcomeBtn = document.querySelector('.welcome-btn'),
        welcomeContainer = document.querySelector('.welcome-container'),
        scrollBody = document.querySelector('body'),
        mainContent = document.querySelector('#main-content');
  
  const timeOutId = sliderShow(slides, 2000);

  function showCardsAfterSlides(){
    welcomeContainer.classList.add('hide-welcome');
    scrollBody.setAttribute('scroll', 'yes');
    scrollBody.style.overflow = 'visible';
    mainContent.classList.remove('just-for-hidding');
  }

  welcomeBtn.addEventListener('click', () => {
    clearTimeout(timeOutId);
    showCardsAfterSlides();
    callback();
  });
}

export default welcomeScreen;