import sliderShow from "./carousel";

function welcomeScreen(callback) {
  const slides = document.querySelectorAll('.slider-imgs'),
        welcomeBtn = document.querySelector('.welcome-btn'),
        welcomeContainer = document.querySelector('.welcome-container'),
        scrollBody = document.querySelector('body'),
        mainContent = document.querySelector('#main-content'),
        welcomeDataAttr = document.querySelector('#welcome-screen');
  

  function showCardsAfterSlides(){
    welcomeContainer.setAttribute('hidden', true);
    scrollBody.setAttribute('scroll', 'yes');
    scrollBody.style.overflow = 'visible';
    mainContent.classList.remove('just-for-hidding');
  }

  if (sessionStorage.getItem('welcome-btn') ==='clicked') {
    showCardsAfterSlides();
    callback();
  } else {
    const timeOutId = sliderShow(welcomeDataAttr, slides, 2000);

    welcomeBtn.addEventListener('click', () => {
      sessionStorage.setItem('welcome-btn', 'clicked');
      welcomeDataAttr.setAttribute('data-animate', false);
      clearTimeout(timeOutId);
      showCardsAfterSlides();
      callback();
    })
  }
}

export default welcomeScreen;