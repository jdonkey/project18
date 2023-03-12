'use strict';

// To String

// 1)
console.log(typeof (String(null)));
console.log(typeof (String(4)));

// 2)
console.log(typeof (null + ''));

const num = 5;
console.log('https://vk.com/catalog/' + num);
const fontSize = 34 + 'px';
// to number
console.log(typeof (Number('4')));
console.log(typeof (+'5'));
console.log(typeof (parseInt('16', 10)));
let answ = +prompt('Hello', '');

// to boolean
0, '', null, undefined, NaN;// false

console.log(typeof (Boolean('5')));
console.log(typeof (!!'5'));//boolean



