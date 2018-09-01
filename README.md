# rng
simple random number generator with zero dependancies

## Intro
I cannot take full responsibility for the code in this. I has been compiled together over years of use and changed with code by many authors.

## Installation
	npm install arng

## Usage
	var arng = require('arng');

	console.log(arng.next());

	console.log(arng.range(1, 10));

	console.log(arng.range(1, 10, true));

## Methods
next(): Returns a random number between 0 and 1.

range( min: number, max: number, floored: boolean): Return a random number between min and max. If floored is true, the return value is floored using Math.floor().

getSeed(): Returns the current seed.

setSeed(value: any): Sets the current seed to value.

## Testing
	npm test [seed]