/*
Witout using .flat(), create a function to flatten an array

const example = [1,2,[3,4,[5,6,7],8],9,10];
flatten(example); // [1,2,3,4,5,6,7,8,9,10];
*/

const flatten = (arr, output = []) => {
  // output is an array
  // iterate over the array
  // check if the current element is an array
  // if not an array, push the element into the output array
  // if it is an array, recursively call flatten
  // once everything is done, return the output array;

  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      output.push(arr[i]);
    } else {
      flatten(arr[i], output);
    }
  }
  return output;
};

const flattenReduce = (arr) => {
  return arr.reduce((acc, curr) => {
    Array.isArray(curr)
      ? (acc = acc.concat(flattenReduce(curr)))
      : acc.push(curr);
    return acc;
  }, []);
};

const example = [1, 2, [3, 4, [5, 6, 7], 8], 9, 10];
console.log(flattenReduce(example)); // [1,2,3,4,5,6,7,8,9,10];
