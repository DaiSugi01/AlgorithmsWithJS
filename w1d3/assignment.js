// Use the value below whenever you need the value //of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  return 4 / 3 * PI * (Math.pow(radius, 3))
}
console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);


const coneVolume = function (radius, height) {
  return PI * Math.pow(radius, 2) * height / 3
}
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);


const prismVolume = function (height, width, depth) {
  return width * depth * height
}
console.log(prismVolume(3, 4, 5) === 60);