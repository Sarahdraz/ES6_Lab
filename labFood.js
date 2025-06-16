let Food =  ['Burger', 'Pizza', 'Donuts', 'Pizza', 'Koshary', 'Donuts', 'Seafood','Burger']
const food = new Set(Food);
food.add('pasta');
console.log(food);
food.delete('Burger');
console.log(food);

function clearset(set) {
  if (set.size > 2) {
    set.clear();}
}
clearset(food);
console.log(food);