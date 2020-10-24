// implement debounce

function debounce(cb, time) {
  let setTimeoutId;

  return function () {
    if (setTimeoutId) {
      clearTimeout(setTimeoutId);
    }
    setTimeoutId = setTimeout(() => {
      cb.apply(this, arguments);
      setTimeoutId = null;
    }, time);
  };
}

// debouncedFn()
// debouncedFn()
// debouncedFn()
// debouncedFn()
// debouncedFn()

function throttle(cb, time) {
  let setTimeoutId;

  return function () {
    if (setTimeoutId) {
      return;
    }
    setTimeoutId = setTimeout(() => {
      cb.apply(this, arguments);
      setTimeoutId = null;
    }, time);
  };
}
