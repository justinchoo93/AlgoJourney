/*
Write a function that takes in non empty array of integers and returns 
max sum that can be obtained by summing up all of integers in non-empty
subarray of the input array. A subarray must only contain adjacent numbers.
*/

function kadanesAlgorithm(array) {
  let maxEndingHere = array[0];
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    // 5 -9 1 3 -2 3 4 7 2 -9 6 3 1 -5 4
    const current = array[i];
    // 8 -1 1 4 2 5 9 16 18 9 15 18 19 14 18
    maxEndingHere = Math.max(current, maxEndingHere + current);
    // 8 8 8 8 8 8 9 16 18 18 18 18 19 19 19
    max = Math.max(max, maxEndingHere);
  }
  return max;
}

// test
const array = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];
kadanesAlgorithm(array); // 19 -> [1, 3, -2, 3, 4, 7, 2, -9, 6, 3 1]
