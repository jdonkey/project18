'use strict';
let str = 'some';
let strObj = new String(str);

console.log(typeof (str));
console.log(typeof (strObj));

const hayabusa = {
	speed: 300,
	riders: 1,
	sayVerryGood: function () {
		console.log('So Good!!!');
	}
};
let alfa = {
	speed: 70
};
// Object.setPrototypeOf(alfa, hayabusa);

const pulsar = Object.create(hayabusa);
console.log(pulsar.speed);
alfa = Object.create(hayabusa);
alfa.sayVerryGood();
