const test_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Using ES6 reduce and callback function
const sum_odd_reduce = (array) => {
  return array.reduce((a, c) => {
    if (c % 2 !== 0) {
      return a + c;
    }
    return a;
  }, 0);
};

//Using a while loop instead of a for loop
function sum_odd_reduce_while(array) {
  let counter = 0;
  let total = 0;
  while (counter < array.length) {
    if (array[counter] % 2 !== 0) {
      total += array[counter];
    }
    counter++;
  }
  return total;
}

// console.log(sum_odd_reduce(test_array));
console.log(sum_odd_reduce_while(test_array));
