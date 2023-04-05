const catalog = document.querySelector('[data-catalog]');
const cards = catalog.querySelectorAll('[data-card]');

const addDisplayStyle = () => {
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].classList.contains('focus-visible')) {
      let cardActive = cards[i];

      let frontActive = cardActive.querySelector('[data-card-front]');
      frontActive.style.display = 'none';

      let backActive = cardActive.querySelector('[data-card-back]');
      backActive.style.display = 'block';

    } else if (!cards[i].classList.contains('focus-visible')) {
      let cardPassive = cards[i];

      let frontPassive = cardPassive.querySelector('[data-card-front]');
      frontPassive.style.display = '';

      let backPassive = cardPassive.querySelector('[data-card-back]');
      backPassive.style.display = '';
    } else {
      return;
    }
  }
};

const cardsActionHandler = () => {
  cards.forEach((element) => {
    element.addEventListener('touchstart', addDisplayStyle);
    element.addEventListener('keydown', addDisplayStyle);
    element.addEventListener('focus', addDisplayStyle);
  });
};

export {cardsActionHandler};
