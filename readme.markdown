# box-collide

return whether two boxes or points are colliding in 2d

# example

``` js
var collide = require('box-collide');
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
```

output:

```
a,b false
a,c true
a,d false
b,c true
b,d false
c,d false
```

# methods

```
var collide = require('box-collide')
```

## var colliding = collide(a, b)

Return a boolean `colliding` indicating whether `a` and `b` overlap.

`a` and `b` can be points or bounding boxes and must have any of these
combinations of properties:

* left, right, top, bottom
* left, top, width, height
* x, y
* x, y, width, height

x and y indicate the top left corner of the box or point.

# install

With [npm](https://npmjs.org) do:

```
npm install box-collide
```

# license

MIT
