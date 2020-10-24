/*
Create a sleep function that takes one parameter (time) and
will wait "time" ms
*/

/*
example:
async function run() {
  await sleep(500);
  console.log('hello') // hello after 500 ms
}

*/

function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
