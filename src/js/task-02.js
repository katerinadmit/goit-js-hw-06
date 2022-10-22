const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listOfEl = document.querySelector('#ingredients')

const listEl = ingredients.map(ingredient => {

  const itemEl = document.createElement('li')
  itemEl.textContent = ingredient;
itemEl.classList.add('item')  
  return itemEl
});

listOfEl.append(...listEl)
console.log(listOfEl)