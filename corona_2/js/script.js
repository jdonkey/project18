'use strict';

const btns = document.querySelectorAll('button');
wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[3].classList.toggle('blue'));
// if (btns[1].classList.contains('red')) {
// 	console.log('red');
// }

// btns[0].addEventListener('click', () => {
// 	if (!btns[1].classList.contains('red')) {
// 		btns[1].classList.add('red');
// 	} else {
// 		btns[1].classList.remove('red');
// 	}
// })

btns[0].addEventListener('click', () => {
	btns[1].classList.toggle('red');
});

//делегирование событий
wrapper.addEventListener('click', (event) => {
	if (event.target && event.target.tagName == 'BUTTON') {
		console.log('Hello');
	}
});

wrapper.addEventListener('click', (event) => {
	if (event.target && event.target.matches('button.red')) {
		console.log('Hello');
	}
});

// ошибка с делегированием
btns.forEach(btn => {
	btn.addEventListener('click', () => {
		console.log('Hello');
	});
});
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.apend(btn);

