const catalog = document.querySelector('[data-catalog]');
const cards = catalog.querySelectorAll('[data-card]');
const cardsFront = catalog.querySelectorAll('[data-card-front]');
const cardsBack = catalog.querySelectorAll('[data-card-back]');

const addActiveClass = () => {
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].classList.contains('focus-visible')) {
      let cardActive = cards[i];

      let frontActive = cardActive.querySelector('[data-card-front]');
      frontActive.style.display = 'none';

      let backActive = cardActive.querySelector('[data-card-back]');
      backActive.style.display = 'block';

    } else {
      cardsFront.forEach((element)=>{
        element.style.display = 'block';
      });
      cardsBack.forEach((element)=>{
        element.style.display = 'none';
      });
    }
  }
};



// const getActionCard = () => {
//   addActiveClass();


//   let activeFront = cardActive.querySelector('[data-card-front]');
//   console.log(activeFront);
// .style.display = 'none';

// cardActive.querySelector('[data-card-back]').style.display = 'block';
// };

const cardsActionHandler = () => {
  cards.forEach((element) => {
    // element.addEventListener('mouseover', addActiveClass);
    element.addEventListener('touchstart', addActiveClass);
    element.addEventListener('focus', addActiveClass);
  });
};

export {cardsActionHandler};
