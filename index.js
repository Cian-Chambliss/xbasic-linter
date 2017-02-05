
var lintXbasic = function(code) {
    var xbp = require("xbasic-parser");
    var out = xbp.parse(code);
    // TBD - add linting for non parse related errors (i.e. undimmed symbols etc)
    return out.error || [];
};

exports.lint = lintXbasic; 