import {
  SMALL_SCREEN_WIDTH,
  MEDIUM_SCREEN_WIDTH,
  LARGE_SCREEN_WIDTH,
  EXTRA_LARGE_SCREEN_WIDTH
} from "../screen_breakpoints";

import CakeCard from "./cake_card";
 
class CakeSlider {
  constructor(parentSelector, screenWidth, ...classes) {
    this.parentSelector = parentSelector;
    this.classes = classes;   
    this.screenWidth = screenWidth;
    this.firstVisibleIndex = 0;
    this.lastVisibleIndex = this.calcLastVisibleIndex();
    this.nextBtn = document.querySelector('.next');
    this.prevBtn = document.querySelector('.previous');
    this.wrapper = document.querySelector(this.parentSelector);
  }

  render() {
    fetch('http://localhost:3000/cakes')
      .then(data =>  data.json())
      .then(res => this.renderFetchedCards(res))
      .catch(_error => this.hideArrows());   
  }

  renderFetchedCards(cakes) {
    const cardsToShow = cakes.slice(this.firstVisibleIndex, this.lastVisibleIndex + 1);
    cardsToShow.forEach((cake, i) => {
      const cakeCard = new CakeCard(i, cake.name, cake.description, cake.image, true);
      this.wrapper.append(cakeCard.htmlElement());
    });
    this.showNextSlide(cakes);
    this.showPrevSlide(cakes); 
  }

  showNextSlide(cakes) {
    this.nextBtn.addEventListener('click', () => {
      this.firstVisibleIndex = this.incrementedIndex(this.firstVisibleIndex, cakes.length);
      this.lastVisibleIndex = this.incrementedIndex(this.lastVisibleIndex, cakes.length);

      const cake = cakes[this.lastVisibleIndex];
      const cakeCard = new CakeCard(this.lastVisibleIndex, cake.name, cake.description, cake.image, true);
      this.wrapper.removeChild(this.wrapper.querySelector('div'));
      this.wrapper.append(cakeCard.htmlElement());
    });
  }

  showPrevSlide(cakes) {
    this.prevBtn.addEventListener('click', () => {
      this.firstVisibleIndex = this.decrementedIndex(this.firstVisibleIndex, cakes.length);
      this.lastVisibleIndex = this.decrementedIndex(this.lastVisibleIndex, cakes.length);

      const cake = cakes[this.firstVisibleIndex];
      const cakeCard = new CakeCard(this.firstVisibleIndex, cake.name, cake.description, cake.image, true);
      this.wrapper.insertBefore(cakeCard.htmlElement(), this.wrapper.querySelector('div'));
      this.wrapper.removeChild(this.wrapper.lastChild);
    });
  }

  incrementedIndex(index, cakeCount) {
    if (index === cakeCount - 1) {
      return 0;
    } else {
      return ++index;
    }
  }

  decrementedIndex(index, cakeCount) {
    if (index === 0) {
      return cakeCount - 1;
    } else {
      return --index;
    }
  }

  calcLastVisibleIndex() {
    if (this.screenWidth < SMALL_SCREEN_WIDTH) {
      return 0;
    } else if (this.screenWidth < MEDIUM_SCREEN_WIDTH) {
      return 1;
    } else if (this.screenWidth < LARGE_SCREEN_WIDTH) {
      return 2;
    } else if (this.screenWidth < EXTRA_LARGE_SCREEN_WIDTH) {
      return 3;
    } else {
      return 5;
    }
  }

  hideArrows() {
    this.nextBtn.hidden = 'true';
    this.prevBtn.hidden = 'true';
  }
}
export default CakeSlider;