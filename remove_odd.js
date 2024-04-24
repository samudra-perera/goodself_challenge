const test_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Using filter method and ES6+ syntax
const remove_odd_filter = (array) => {
  return array.filter((e) => e % 2 !== 0);
};

//Using normal functional call
function remove_odd_for_loop(array) {
  let temp = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) temp.push(array[i]);
  }
  return temp;
}

console.log(remove_odd_filter(test_array));
console.log(remove_odd_for_loop(test_array));
