const version = require('./package.json').version
console.log(`arng v${version}`)
console.log('usage: npm test [seed]')
console.log('\ninitializing...')

function runNext() {
	console.log('\nnext():')
	for (var i = 0; i < 10; i++) {
		console.log(arng.next())
	}
}

function runRange(floored) {
	console.log(`\nrange(1, 10${floored ? ', true' : ''}):`)
	for (var i = 0; i < 10; i++) {
		console.log(arng.range(1, 10, floored))
	}
}

var arng = require('./index.js')
if (process.argv.length > 2) {
	console.log(`arng.setSeed(${process.argv[2]})`)
	arng.setSeed(process.argv[2])
}

runNext()
runRange()
runRange(true)