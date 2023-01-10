import sliderShow from "./carousel";

function welcomeScreen(callback) {
  const slides = document.querySelectorAll('.slider-imgs'),
        welcomeBtn = document.querySelector('.welcome-btn'),
        welcomeContainer = document.querySelector('.welcome-container'),
        scrollBody = document.querySelector('body'),
        mainContent = document.querySelector('#main-content'),
        welcomeDataAttr = document.querySelector('#welcome-screen');
  
  const timeOutId = sliderShow(welcomeDataAttr, slides, 2000);

  function showCardsAfterSlides(){
    welcomeContainer.setAttribute('hidden', true);
    scrollBody.setAttribute('scroll', 'yes');
    scrollBody.style.overflow = 'visible';
    mainContent.classList.remove('just-for-hidding');
  }

  welcomeBtn.addEventListener('click', () => {
    welcomeDataAttr.setAttribute('data-animate', false);
    clearTimeout(timeOutId);
    showCardsAfterSlides();
    callback();
  }, {once: true});
}

export default welcomeScreen;