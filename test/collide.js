var collide = require('../');
var test = require('tape');

test('collisions', function (t) {
    var a = { left: 4, right: 8, top: 100, bottom: 140 };
    var b = { left: 6, top: 90, height: 20, width: 1 };
    var c = { x: -3, y: 20, width: 400, height: 300 };
    var d = { x: 2, y: 8 };
    
    t.equal(collide(a,b), false, 'a,b -> false');
    t.equal(collide(a,c), true, 'a,c -> true');
    t.equal(collide(a,d), false, 'a,d -> false');
    t.equal(collide(b,c), true, 'b,c -> true');
    t.equal(collide(b,d), false, 'b,d -> false');
    t.equal(collide(c,d), false, 'c,d -> false');
    t.end();
});
