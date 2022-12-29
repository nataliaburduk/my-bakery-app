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
  }

  render () {
    const wrapper = document.querySelector(this.parentSelector);
    this.cakes.forEach((cake, i) => {
      const cakeCard = new CakeCard(i, cake.name, cake.description, cake.image);
      wrapper.append(cakeCard.htmlElement());
    });
  }

}

export default CakeCarousel;
