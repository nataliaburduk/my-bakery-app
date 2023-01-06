function sliderShow(images, timer, current = 0) {
  images.forEach(image => image.classList.add('hide-welcome'));
  images[current].classList.remove('hide-welcome');
  current = nextImgIndex(current, images.length - 1);

  return setTimeout(sliderShow, timer, images, timer, current);
}

function nextImgIndex(index, lastImageIndex) {
  if (index == lastImageIndex) {
    return 0;
  } else {
    return ++index;
  }
}

export default sliderShow;