var arng

(function() {
	var __seed = Date.now()
	var _seed = __seed

	function nextInt() {
		return _seed = _seed * 16807 % 2147483647
	}

	function next() {
		return (nextInt() - 1) / 2147483646
	}

	function range(min, max, floored) {
		floored = floored === true

		var n = (next() * (max - min + 1)) + min

		return floored ? Math.floor(n) : n
	}

	function getSeed() {
		return (__seed)
	}

	function setSeed(seed) {
		seed = seed || Date.now()
		__seed = seed

		if (isNaN(parseInt(seed))) {
			var n = 0

			seed.split('').forEach(c => n += c.charCodeAt(0))

			seed = n
		}

		seed = parseInt(seed)

		if (seed % 2147483647 <= 0) seed += 2147483646

		_seed = seed
	}

	arng = {
		next: next,
		range: range,
		getSeed: getSeed,
		setSeed: setSeed
	}
})()

module.exports = arng