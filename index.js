
var lintXbasic = function(code,options) {
    var xbp = require("xbasic-parser");
    var out = xbp.parse(code,options);
    // TBD - add linting for non parse related errors (i.e. undimmed symbols etc)
    return out.error || [];
};

exports.lint = lintXbasic; 