'use strict';
function first() {
	setTimeout(function () {
		console.log(1);
	}, 500);
}
function second() {
	console.log(2);
}
first();
second();

function learnJS(lang, callback) {
	console.log(`Я учу ${lang}`);
	callback();
}
const wellDone = function () {
	console.log('Я прошел этот урок!!!!!');
}
learnJS('JavaScript', wellDone);

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red',
	},
	makeTest: function () {
		console.log('тест');
	}
};
options.makeTest();

// Деструктуризация объекта
const { bg, border } = options.colors;
console.log(bg);

// console.log(Object.keys(options).length);
// // let count = 0;
// for (let key in options) {
// 	if (typeof (options[key]) === 'object') {
// 		for (let i in options[key]) {
// 			console.log(`Свойство ${i} имеет значение ${options[key][i]}!`);
// 			// count++;
// 		}
// 	} else {
// 		console.log(`Свойство ${key} имеет значение ${options[key]}!`);
// 		// count++;
// 	}
// }
// // console.log(count);