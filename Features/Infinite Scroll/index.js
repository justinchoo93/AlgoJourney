/*
Answer from pramp
*/
function getDocumentHeight() {
  const body = document.body;
  const html = document.documentElement;

  return Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
}

function getScrollTop() {
  return window.pageYOffset !== undefined
    ? window.pageYOffset
    : (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
}

function generateImageSourceUrl() {
  const hash = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  return `http://api.adorable.io/avatars/250/${hash}`;
}

function getElementImage() {
  const cssImageClass = 'element-list__item__image';
  const cssImageLoadingClass = `${cssImageClass}--loading`;

  const image = new Image();
  image.className = `${cssImageClass} ${cssImageLoadingClass}`;
  image.src = generateImageSourceUrl();
  image.onload = function () {
    setTimeout(() => image.classList.remove(cssImageLoadingClass), 5000);
  };

  return image;
}

function getElement() {
  const elementImage = getElementImage();
  const element = document.createElement('div');
  element.className = 'element-list__item';
  element.appendChild(elementImage);
  return element;
}

function loadNextBatch(batchSize = 9) {
  while (batchSize--) {
    const element = getElement();
    elementList.appendChild(element);
  }
}

const elementList = document.querySelector('.element-list');

// Load the first batch of elements
loadNextBatch();

// Load more batches when scorlling to the end
window.onscroll = function () {
  if (getScrollTop() < getDocumentHeight() - window.innerHeight) return;
  loadNextBatch();
};

/* My Answer 
// grab container to append images to
    const container = document.querySelector('.container');
    
    // random integer generator
    const getRandomInt = (max) => {
      return Math.floor(Math.random * Math.floor(max));
    }
    
    // get random image path
    const getRandomImagePath = () => {
      return `http://api.adorable.io/avatars/${getRandomInt(10000)}`
    }
    
    // insert image into the DOM
    const addImage = () => {
      const imageDiv = document.createElement('div');
      const imageEl = document.createElement('img');
      
      imageEl.setAttribute('src', getRandomImagePath());
      imageEl.setAttribute('class', 'avatar');
      
      imageDiv.appendChild(imageEl);
      return imageDiv;
    }
    
    // figure out how many images to render in the initial window
    const getNumberOfImagesToAdd =  () => {
      const viewHeight = document.documentElement.scrollHeight
      const qty = Math.max((viewHeight * 1.5) / 100, 3);
      return qty;
    }
    
    // iterate number of times to render image
    const renderImages = () => {
      const numImages = getNumberOfImagesToAdd();
      while(numImages--) {
        const addedImage = addImage();
        container.appendChilde(addedImage);
      }
    }
    
    // handle scroll
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.9) {
      renderImages();
    }
  }
  window.addEventListener('scroll', handleScroll);
  
  renderImages();
  // Often, scroll event listener can be a huge performance bottleneck. We can use Observer Instance API to make scrolling
  // asynchronous

*/
