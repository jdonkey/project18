'use strict';
const arr = [1, 24, 23, 6, 8];
arr.sort(compareNum);
function compareNum(a, b) {
	return a - b;
}
console.log(arr);
// arr.pop();
// arr.push(222);
// arr[99] = 22;
// console.log(arr.length);
// console.log(arr);
arr.forEach(function (item, i, arr) {
	console.log(`${i}: ${item} внутри массива ${arr}`);
});
// for (let i = 0; i < arr.length; i++) {
// 	console.log(i);
// }
// for (let value of arr) {
// 	console.log(value);
// }
const str = prompt('', '');
const products = str.split(', ');// на основании строк, формируем массив.
arr.sort();//сортирует массив как строки
console.log(products.join('; ')); //на основании массива, делаем строку

const obj = {
	a: 5,
	b: 1
};
// const copy = obj;
// copy.a = 12;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
	let objCopy = {};
	let key;
	for (key in mainObj) {
		objCopy[key] = mainObj[key];
	}
	return objCopy;
}

const numbers = {
	a: 3,
	b: 'w',
	f: {
		g: 33,
		h: 6
	}
};

const add = {
	d: 17,
	e: 21
};
const odd = Object.assign({}, add);
odd.d = 18;
odd.z = 30;
console.log(add);
console.log(odd);

const oldArr = ['w', 'rr', 3];
const newArr = oldArr.slice();
newArr.push(55, 'eee');
newArr[5] = 'ewwwwww';

console.log(oldArr);
console.log(newArr);

const video = ['youtube', 'vimeo', 'rutube'],
	blogs = ['wordpress', 'livejournal', 'bloger'],
	internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}

const num = [2, 5, 7];
log(...num);

const array = ['a', 'sd'];
const newAarray = [...array];
const q = {
	one: 1,
	two: 2
}

const newObbbj = { ...q };