var collide = require('../');
var test = require('tape');

var money = {
    height: 74.8148193359375,
    width: 34.17144775390625,
    left: 374.94927978515625,
    bottom: 396.6666259765625,
    right: 409.1207275390625,
    top: 321.851806640625
};

var player = {
    height: 61.609130859375,
    width: 47.7554931640625,
    left: 371.3440246582031,
    bottom: 444.71173095703125,
    right: 419.0995178222656,
    top: 383.10260009765625
};

test('drop', function (t) {
    t.equal(collide(player, money), true);
    t.end();
});
