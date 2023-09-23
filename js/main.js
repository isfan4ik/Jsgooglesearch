const btn = document.getElementById('btn');
const inp = document.getElementById('inp');
const box = document.querySelector('.box');

let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

inp.addEventListener('keydown', () => {
    fetch(`${url}${inp.value}`)
      .then ((res) => res.json())
      .then ((data) => {
         let items = data.drinks;
         let displayItem = items.map((item) => {
             return `
               <h2>${item.strDrink}</h2>             
             `
         })
         displayItem = displayItem.join('')
         box.innerHTML = displayItem;
      })
})