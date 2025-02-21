import getElement from './getElement.js';
import { hideLoading } from './toggleLoading.js';

const displayDrinks = ({ drinks }) => {
  const sectionCenter = getElement('.section-center');
  const title = getElement('.title');
  if (!drinks) {
    hideLoading();
    title.textContent = 'sorry, no drinks matched your search';
    sectionCenter.innerHTML = null;
    return;
  }

  const newDrinks = drinks
    .map((drink) => {
      const {
        idDrink: id,
        strDrink: drinkName,
        strDrinkThumb: drinkImage,
      } = drink;

      return `<a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <!-- drink image -->
            <img src="${drinkImage}" alt="${drinkName}" />
            <h3>${drinkName}</h3>
          </article>
        </a>`;
    })
    .join('');
  hideLoading();
  sectionCenter.innerHTML = newDrinks;
  return sectionCenter;
};

export default displayDrinks;
