import CakeCard from "./cake_card";

class CakeCarousel {
  constructor (parentSelector, ...classes){
    this.parentSelector = parentSelector;
    this.classes = classes;
    this.cakes = [
      {
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
    this.visibleAmount = 4;
    this.firstVisibleIndex = 0;
    this.nextBtn = document.querySelector('.next'),
    this.prevBtn = document.querySelector('.previous');
  }

  render () {
    const wrapper = document.querySelector(this.parentSelector);
    while (wrapper.firstChild) {
      wrapper.removeChild(wrapper.lastChild);
    }
    this.cakesToShow().forEach((cake, i) => {
      const cakeCard = new CakeCard(i, cake.name, cake.description, cake.image, i < this.visibleAmount);
      wrapper.append(cakeCard.htmlElement());
    });
  }

  showNextSlide () {
    this.nextBtn.addEventListener('click', () => {
      if (this.firstVisibleIndex > this.visibleAmount - 1) {
        this.firstVisibleIndex = 0;
      } else {
        this.firstVisibleIndex++;
      }
      this.render();
    });
  }

  showPrevSlide(){
    this.prevBtn.addEventListener('click', () => {
      if (this.firstVisibleIndex == 0) {
        this.firstVisibleIndex = this.cakes.length - 1;
      } else {
        this.firstVisibleIndex--;
      }
      this.render();
    });
  }

  cakesToShow () {
    const arr1 = this.cakes.slice(this.firstVisibleIndex, this.firstVisibleIndex + this.visibleAmount);
    const howMany = this.visibleAmount - arr1.length;
    const arr2 = this.cakes.slice(0, howMany);
    return arr1.concat(arr2);
  }
}
export default CakeCarousel;
