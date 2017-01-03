var collide = require('../');
var test = require('tape');

test('boundary', function (t) {
    var base = { left: 4, right: 8, top: 12, bottom: 16 };
    var left1 = { left: 0, right: 4, top: 12, bottom: 16 };
    var left2 = { left: 0, right: 5, top: 12, bottom: 16 };
    var right1 = { left: 8, right: 12, top: 12, bottom: 16 };
    var right2 = { left: 7, right: 12, top: 12, bottom: 16 };
    var top1 = { left: 4, right: 8, top: 8, bottom: 12 };
    var top2 = { left: 4, right: 8, top: 8, bottom: 13 };
    var bottom1 = { left: 4, right: 8, top: 16, bottom: 20 };
    var bottom2 = { left: 4, right: 8, top: 15, bottom: 20 };
    
    t.equal(collide(base,left1), false);
    t.equal(collide(base,left2), true);
    t.equal(collide(base,right1), false);
    t.equal(collide(base,right2), true);
    t.equal(collide(base,top1), false);
    t.equal(collide(base,top2), true);
    t.equal(collide(base,bottom1), false);
    t.equal(collide(base,bottom2), true);
    t.end();
});
