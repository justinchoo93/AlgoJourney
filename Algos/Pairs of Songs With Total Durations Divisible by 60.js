/*

In a list of songs, the i-th song has a duration of time[i] seconds. 

Return the number of pairs of songs for which their total duration in seconds 
is divisible by 60.  Formally, we want the number of indices i, j such that i < j 
with (time[i] + time[j]) % 60 == 0.

*/

const numPairsDivisibleBy60 = function (time) {
  // hash map to keep track
  const hash = {};

  // output
  let numPairs = 0;

  // loop through time array
  time.forEach((el) => {
    // keep track of current element's modulo. ex). 30 % 30 = 60
    const mod = el % 60;
    // keep track of what needs to be added to the modulo for divisibility by 60.
    // ex) (60 - 30) % 60 = 30
    const left = (60 - mod) % 60;
    // check hash if value of left exists? if so, add it to num pairs, if not add 0
    // ex) Does hash['30'] exist?
    numPairs += hash[left] ? hash[left] : 0;

    // add mod to hash, if it already exists add one, if not value will be set to 1
    // hash['30'] = 1
    hash[mod] = hash[mod] ? hash[mod] + 1 : 1;
  });
  return numPairs;
};
