import { hideLoading } from './toggleLoading.js';
import getElement from './getElement.js';

const displaySingleDrink = (data) => {
  hideLoading();

  const drink = data.drinks[0];
  const {
    strDrink: drinkName,
    strInstructions: drinkInstructions,
    strDrinkThumb: drinkImage,
  } = drink;
  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
  ];
  const drinkImageDOM = getElement('.drink-img');
  const drinkNameDOM = getElement('.drink-name');
  const drinkDescription = getElement('.drink-desc');
  const drinkIngredients = getElement('.drink-ingredients');
  drinkImageDOM.src = drinkImage;
  drinkNameDOM.textContent = drinkName;
  document.title = drinkName;
  drinkDescription.textContent = drinkInstructions;
  drinkIngredients.innerHTML = list
    .map((ingredient) => {
      if (!ingredient) return;
      return `<li><i class="far fa-check-square"></i>${ingredient}</li>`;
    })
    .join('');
};

export default displaySingleDrink;
