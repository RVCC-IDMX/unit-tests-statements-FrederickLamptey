/*
 * stmnts-03.js
 * Language: javascript
 * Test: tests/stmnts-03.tests.js
 * Path: src/stmnts-03.js
 * Arithmetic Expressions
 * [JavaScript: The Definitive Guide, Chapter 4.8](https://bit.ly/2Z30rSk)
 */

/**
 * Calculates the perimeter of the rectangle rounded to 2 decimal places
 * @param {number} width - the width of the rectangle
 * @param {number} height - the height of the rectangle
 * @returns {number} - the perimeter of the rectangle rounded to 2 decimal places
 *
 */

function rectanglePerimeter(width, height) {
  // write your code here & return
  const perimeter = 2 * (width + height).toFixed(2);
  return perimeter;
}

/**
 * Calculates the area of a rectangle rounded to 2 decimal places
 * @param {number} width - the width of the rectangle
 * @param {number} height - the height of the rectangle
 * @returns {number} - the area of the rectangle rounded to 2 decimal places
 *
 */
function rectangleArea(width, height) {
  // write your code here & return
  const area = (width * height).toFixed(2);
  return area;
}

/**
 * Calculates the circumference of a circle with a known radius
 * rounded to 2 decimal places
 * @param {number} radius - the radius of the circle
 * @returns {number} - the circumference of the circle rounded to 2 decimal places
 *
 * The math equation is c = 2 * pi * radius
 *
 * Hint: use toFixed()
 */
function circleCircumference(radius) {
  // write your code here & return
  const circumference = 2 * Math.PI * radius.toFixed(2);
  return circumference;
}

/**
 * Calculates the area of a circle with a known radius
 * rounded to 2 decimal places
 * @param {number} radius - the radius of the circle
 * @returns {number} - the area of the circle rounded to 2 decimal places
 */
function circleArea(radius) {
  // write your code here & return
  const area = Math.PI * (radius ** 2).toFixed(2);
  return area;
}

/**
 * Calculates the area of a triangle with three sides
 * rounded to 2 decimal places
 *
 * @param {number} base - the base of the triangle
 * @param {number} height - the height of the triangle
 * @returns {number} - the area of the triangle rounded to 2 decimal places
 */
function triangleArea(base, height) {
  // write your code here & return
  const area = (1 / 2 * base * height).toFixed(2);
  return area;
}

/**
 * Calculates the hypotenuse of a right triangle with two sides,
 * rounded to 2 decimal places
 * @param {number} sideA - the length of side A
 * @param {number} sideB - the length of side B
 * @returns {number} - the hypotenuse of the triangle rounded to 2 decimal places
 */
function pythagorean(sideA, sideB) {
  // write your code here & return
  const result = Math.sqrt(sideA ** 2 + sideB ** 2).toFixed(2);
  return result;
}

module.exports = {
  rectanglePerimeter,
  rectangleArea,
  circleCircumference,
  circleArea,
  triangleArea,
  pythagorean,
};
