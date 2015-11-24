module.exports = function(rootLevel, keys, defaultValue) {
	var level = rootLevel;
	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		var val = level[key];

		if (key instanceof Array) {
			var keyOptions = key;
			var keyElm;
			for (var j = 0; j < keyOptions.length; j++) {
				keyElm = keyOptions[j];
				val = level[keyElm];
				if (val !== undefined && val !== null) {
					break;
				}
			}
		}

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
