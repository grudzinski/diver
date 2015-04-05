module.exports = function(rootLevel, keys, value) {
	var level = rootLevel;
	for (var i = 0, l = keys.length, li = l - 1; i < l; i++) {
		var key = keys[i];
		if (li === i) {
			level[key] = value;
			return;
		}
		var newLevel = level[key];
		if (newLevel === undefined) {
			newLevel = {};
			level[key] = newLevel;
		}
		level = newLevel;
	}
};
