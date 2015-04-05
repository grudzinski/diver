module.exports = function(rootLevel, keys, defaultValue) {
	var level = rootLevel;
	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		var val = level[key];
		if (val === undefined || val === null) {
			if (defaultValue !== undefined) {
				return defaultValue;
			}
			return val;
		}
		level = val;
	}
	return level;
};
