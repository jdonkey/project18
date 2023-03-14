const btn = document.querySelectorAll('button'),
	overlay = document.querySelector('.overlay');

const deleteElement = (e) => {
	console.log(e.target);
	console.log(e.type);
};

btn.addEventListener('click', () => {
	alert('Click');
});

btn.addEventListener('click', () => {
	alert('Second click');
});

// btn.addEventListener('mouseenter', (e) => {
// 	e.target.remove();
// 	// console.log('Hover');
// })

// let i = 0;
//  const deleteElement = (e) => {
// 	console.log(e.target);
// 	i++;
// 	if (i == 1) {
// 		btn.removeEventListener('click', deleteElement);
// 	}
//  };
//   btn.addEventListener('click', deleteElement);
//  overlay.addEventListener('click', deleteElement);
btn.forEach(item => {
	item.addEventListener('click', deleteElement, { once: true });
});

const link = document.querySelector('a');
link.addEventListener('click', (event) => {
	event.preventDefault();//отменить стандартное поведение браузера
	console.log(event.target);
});