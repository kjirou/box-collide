var collide = require('../');
var a = { left: 4, right: 8, top: 100, bottom: 140 };
var b = { left: 6, top: 90, height: 20, width: 1 };
var c = { x: -3, y: 20, width: 400, height: 300 };
var d = { x: 2, y: 8 };

console.log('a,b', collide(a, b));
console.log('a,c', collide(a, c));
console.log('a,d', collide(a, d));
console.log('b,c', collide(b, c));
console.log('b,d', collide(b, d));
console.log('c,d', collide(c, d));
