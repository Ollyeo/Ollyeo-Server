var path = require('path');
var fs = require('fs');
var _ = require('underscore');

fs.readdirSync(__dirname).forEach((file) => {
	if (file === 'index.js') return;
	
	var mod = {};
			   
	mod[path.basename(file, 'js')] = require(path.join(__dirname, file));
	
	_.extend(module.exports, mod);
});
