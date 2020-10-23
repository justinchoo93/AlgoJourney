/*
An image is represented by a 2-D array of integers, each integer representing 
the pixel value of the image (from 0 to 65535).

Given a coordinate (sr, sc) representing the starting pixel (row and column) 
of the flood fill, and a pixel value newColor, "flood fill" the image.

To perform a "flood fill", consider the starting pixel, plus any pixels 
connected 4-directionally to the starting pixel of the same color as the 
starting pixel, plus any pixels connected 4-directionally to those pixels 
(also with the same color as the starting pixel), and so on. 
Replace the color of all of the aforementioned pixels with the newColor.

At the end, return the modified image.
*/

const floodFill = function (image, sr, sc, newColor) {
  // starting at (sr, sc), keep track of color value
  // does up exist and is same color as sr sc?
  // if so, call floodfill again with sr -1 , sc
  // repeat for down, left, right
  // if none, then change element to new Color

  const oldColor = image[sr][sc];
  image[sr][sc] = newColor;

  // up
  if (sr - 1 >= 0 && image[sr - 1][sc] === oldColor) {
    // console.log('sr', sr);
    // console.log('sc', sc);
    // console.log('goin up');
    floodFill(image, sr - 1, sc, newColor);
  }
  // down
  if (sr + 1 < image.length && image[sr + 1][sc] === oldColor) {
    // console.log('sr', sr);
    // console.log('sc', sc);
    // console.log('goin down');
    floodFill(image, sr + 1, sc, newColor);
  }
  // left
  if (sc - 1 >= 0 && image[sr][sc - 1] === oldColor) {
    // console.log('sr', sr);
    // console.log('sc', sc);
    // console.log('goin left');
    floodFill(image, sr, sc - 1, newColor);
  }
  // right
  if (sc + 1 < image[sr].length && image[sr][sc + 1] === oldColor) {
    // console.log('sr', sr);
    // console.log('sc', sc);
    // console.log('goin right');
    floodFill(image, sr, sc + 1, newColor);
  }

  return image;
};

// sample input
const image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];

// (sr, sc) = (1, 1)
const sr = 1;
const sc = 1;
const newColor = 2;

floodFill(image, sr, sc, newColor); // [[2, 2, 2], [2, 2, 0], [2, 0 ,1]]
