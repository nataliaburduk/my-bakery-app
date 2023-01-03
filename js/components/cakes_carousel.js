import {
  SMALL_SCREEN_WIDTH,
  MEDIUM_SCREEN_WIDTH,
  LARGE_SCREEN_WIDTH,
  EXTRA_LARGE_SCREEN_WIDTH
} from "../screen_breakpoints";

import CakeCard from "./cake_card";

class CakeCarousel {
  constructor(parentSelector, screenWidth, ...classes) {
    this.parentSelector = parentSelector;
    this.classes = classes;
    this.cakes = [{
        name: "Cakes",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "img/cakes/cake_1.jpg"
      },
      {
        name: "Cookies",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "img/cakes/cake_2.jpg"
      },
      {
        name: "Chocolate",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "img/cakes/cake_3.jpg"
      },
      {
        name: "Macaroons",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "img/cakes/cake_4.jpg"
      },
      {
        name: "Panettone",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "img/cakes/cake_5.jpg"
      },
      {
        name: "Chimney Cakes",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "img/cakes/cake_6.jpg"
      }
    ];

    this.screenWidth = screenWidth;
    this.firstVisibleIndex = 0;
    this.lastVisibleIndex = this.calcLastVisibleIndex();
    this.nextBtn = document.querySelector('.next');
    this.prevBtn = document.querySelector('.previous');
    this.wrapper = document.querySelector(this.parentSelector);
  }

  render() {
    const cardsToShow = this.cakes.slice(this.firstVisibleIndex, this.lastVisibleIndex + 1);
    cardsToShow.forEach((cake, i) => {
      const cakeCard = new CakeCard(i, cake.name, cake.description, cake.image, true);
      this.wrapper.append(cakeCard.htmlElement());
    });

    this.showNextSlide();
    this.showPrevSlide();  
  }

  showNextSlide() {
    this.nextBtn.addEventListener('click', () => {
      this.incrementIndex(this.firstVisibleIndex);
      this.incrementIndex(this.lastVisibleIndex);

      const cake = this.cakes[this.lastVisibleIndex];
      const cakeCard = new CakeCard(this.lastVisibleIndex, cake.name, cake.description, cake.image, true);
      this.wrapper.removeChild(this.wrapper.querySelector('div'));
      this.wrapper.append(cakeCard.htmlElement());
    });
  }

  showPrevSlide() {
    this.prevBtn.addEventListener('click', () => {
      this.decrementIndex(this.firstVisibleIndex);
      this.decrementIndex(this.lastVisibleIndex);

      const cake = this.cakes[this.firstVisibleIndex];
      const cakeCard = new CakeCard(this.firstVisibleIndex, cake.name, cake.description, cake.image, true);
      this.wrapper.insertBefore(cakeCard.htmlElement(), this.wrapper.querySelector('div'));
      this.wrapper.removeChild(this.wrapper.lastChild);
    });
  }

  incrementIndex(index) {
    if (index === this.cakes.length - 1) {
      index = 0;
    } else {
      index++;
    }
  }

  decrementIndex(index) {
    if (index === 0) {
      index = this.cakes.length - 1;
    } else {
      index--;
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
}


export default CakeCarousel;