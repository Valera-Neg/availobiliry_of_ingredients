function cakes(recipe, available) {
const recipeKeys = Object.keys(recipe);
const availableKeys = Object.keys(available);
let res1 = [];
let res = 0;
 if (recipeKeys.length > availableKeys.length){
  return 0
 }
  
 for (let recipeKey of recipeKeys ) {

  for (let availableKey of availableKeys) {
    if (recipeKey === availableKey) {     
        res1.push(available[availableKey] / recipe[recipeKey])
        res = Math.floor(Math.min(...res1))
      } else if (available[availableKey] / recipe[recipeKey] <= 0) {
        return 0;
    }
  }
 }

return res;
}


console.log(cakes({flour: 500, sugar: 200, eggs: 1},  {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));  // must return 2
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));  // must return 0
