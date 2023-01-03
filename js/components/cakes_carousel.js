import CakeCard from "./cake_card";

class CakeCarousel {
  constructor(parentSelector,screenWidth, ...classes) {
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
    this.cakes.slice(this.firstVisibleIndex, this.lastVisibleIndex + 1).forEach((cake, i) => {
      const cakeCard = new CakeCard(i, cake.name, cake.description, cake.image, true);
      this.wrapper.append(cakeCard.htmlElement());
    });
  }

  showNextSlide() {
    this.nextBtn.addEventListener('click', () => {
      if (this.firstVisibleIndex === this.cakes.length - 1) {
        this.firstVisibleIndex = 0;
      } else {
        this.firstVisibleIndex++;
      }

      if (this.lastVisibleIndex === this.cakes.length - 1) {
        this.lastVisibleIndex = 0;
      } else {
        this.lastVisibleIndex++;
      }

      this.wrapper.removeChild(this.wrapper.querySelector('div'));
      const cake = this.cakes[this.lastVisibleIndex];
      const cakeCard = new CakeCard(this.lastVisibleIndex, cake.name, cake.description, cake.image, true);
      this.wrapper.append(cakeCard.htmlElement());

    });
  }

  showPrevSlide() {
    this.prevBtn.addEventListener('click', () => {
      if (this.firstVisibleIndex === 0) {
        this.firstVisibleIndex = this.cakes.length - 1;
      } else {
        this.firstVisibleIndex--;
      }

      if (this.lastVisibleIndex === 0) {
        this.lastVisibleIndex = this.cakes.length - 1;
      } else {
        this.lastVisibleIndex--;
      }

      const cake = this.cakes[this.firstVisibleIndex];
      const cakeCard = new CakeCard(this.firstVisibleIndex, cake.name, cake.description, cake.image, true);
      this.wrapper.insertBefore(cakeCard.htmlElement(), this.wrapper.querySelector('div'));
      this.wrapper.removeChild(this.wrapper.lastChild);
    });
  }
  calcLastVisibleIndex() {
    if (this.screenWidth < 576) {
      return 0;
    } else if (this.screenWidth < 768) {
      return 1;
    } else if (this.screenWidth < 992) {
      return 2;
    } else {
      return 5;
    }
  }
}


export default CakeCarousel;