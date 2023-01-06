function sliderShow(images, timer, current = 0) {
  const article = document.querySelectorAll('.just-for-hidding');
  for (let i = 0; i < images.length; i++) {
    images[i].classList.add('hide-welcome');
    article.forEach(item => item.classList.add('just-for-hidding'));
  }
  images[current].classList.remove('hide-welcome');
  current = (current !== images.length - 1) ? current + 1 : 0;
  const timeOut = setTimeout(sliderShow, timer, images, timer, current);  
  return timeOut;
}

export default sliderShow;