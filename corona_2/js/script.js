'use strict';

const arr = ['Alex', 'Annie', 'Oleg', 'Alex'];

function unique(arr) {
	return Array.from(new Set(arr));
}
console.log(unique(arr));

const set = new Set(arr);
set.add('Ivan');
console.log(set);
set.forEach((value, valueAgain, set) => {
	console.log(value, valueAgain);
})