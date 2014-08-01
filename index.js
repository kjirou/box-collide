module.exports = function (ra, rb) {
    var a = norm(ra), b = norm(rb);
    var inx = isect(a.left, b.left, b.right)
        || isect(a.right, b.left, b.right)
    ;
    var iny = isect(a.top, b.top, b.bottom)
        || isect(a.bottom, b.top, b.bottom)
    ;
    return inx && iny;
};

function isect (x, lower, upper) {
    return x >= lower && x <= upper;
}

function norm (q) {
    var p = {
        left: q.left,
        right: q.right,
        top: q.top,
        bottom: q.bottom
    };
    if (p.left === undefined && q.x) p.left = q.x;
    if (p.top === undefined && q.y) p.top = q.y;
    
    var w = q.width || 0, h = q.height || 0;
    
    if (p.right === undefined && q.x) p.right = q.x + w;
    if (p.bottom === undefined && q.y) p.bottom = q.y + h;
    return p;
}
