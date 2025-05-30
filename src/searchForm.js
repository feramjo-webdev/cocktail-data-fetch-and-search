import getElement from './getElement.js';
import presentDrinks from './presentDrinks.js';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const searchForm = getElement('.search-form');
const input = getElement('[name="drink"]');

searchForm.addEventListener('keyup', (e) => {
  e.preventDefault();
  const value = input.value;
  if (!value) return;
  presentDrinks(`${baseURL}${value}`);
});
