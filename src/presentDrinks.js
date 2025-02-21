import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';
import setDrink from './setDrink.js';

const showDrinks = async (url) => {
  // fetch drinks
  const data = await fetchDrinks(url);

  //   display drinks
  const sectionCenter = await displayDrinks(data);

  if (sectionCenter) {
    setDrink(sectionCenter);
  }
};

export default showDrinks;
