'use strict';
let result = '';
const length = 8;
for (let i = 3; i < length; i++) {
	for (let j = 0; j < i; j++) {
		result += '*';
	}
	result += '\n';
}
console.log(result);