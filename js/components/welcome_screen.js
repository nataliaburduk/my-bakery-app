function hideWelcomeScreen() {
  const welcomeBtn = document.querySelector('.welcome-btn'),
        welcomeContainer = document.querySelector('.welcome-container'),
        scrollBody = document.querySelector('body');
  
  welcomeBtn.addEventListener('click', () => {
    welcomeContainer.classList.add('hide-welcome');
    scrollBody.setAttribute('scroll', 'yes');
    scrollBody.style.overflow = 'visible';    
  });
}

export default hideWelcomeScreen;