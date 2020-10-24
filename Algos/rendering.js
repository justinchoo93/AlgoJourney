/*
Create a function to move an element. The function arguments are,
distance, duration, and the element to move.
*/

// hint: requestAnimationFrame()

function moveElement(duration, distance, element) {
  let start = performance.now();
  function cb(timestamp) {
  
  // time lapsed from start
  const elapsed = timestamp - start;

  // how much time collapsed out of total duration you want
  const progress = elapsed / duration;

  // how much to move every loop
  const amountToMove = progress * distance;

  element.style.transform =
    `translateX(${amountToMove}px)`;

  if (amountToMove < distance) {
    window.requestAnimationFrame(cb);
  }
  requestAnimationFrame(cb);
}
