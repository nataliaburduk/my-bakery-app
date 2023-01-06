import sliderShow from "./carousel";

function hideWelcomeScreen() {
  const slides = document.querySelectorAll('.slider-imgs'),
        welcomeBtn = document.querySelector('.welcome-btn'),
        welcomeContainer = document.querySelector('.welcome-container'),
        scrollBody = document.querySelector('body'),
        article = document.querySelectorAll('.just-for-hidding');
  
  const timeOutId = sliderShow(slides, 2000);

  welcomeBtn.addEventListener('click', () => {
    clearTimeout(timeOutId);
    welcomeContainer.classList.add('hide-welcome');
    welcomeContainer.scrollTo(0, 0);
    article.forEach(item => item.classList.remove('just-for-hidding'));
    scrollBody.setAttribute('scroll', 'yes');
    scrollBody.style.overflow = 'visible';
  });
}

export default hideWelcomeScreen;