function hideWelcomeScreen() {
  const welcomeBtn = document.querySelector('.welcome-btn'),
        welcomeContainer = document.querySelector('.welcome-container img');
  
  welcomeBtn.addEventListener('click', () => {
    welcomeContainer.classList.add('hide-welcome');
    welcomeBtn.classList.add('hide-welcome');
  });
}

export default hideWelcomeScreen;