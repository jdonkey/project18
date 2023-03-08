'use strict';
const arr = [1, 2, 4];
console.log(arr.length);
const str = 'test';
// console.log(str[2]);
console.log(str.toUpperCase());
console.log(str);

const fruit = 'Some fruit';
console.log(fruit.indexOf('S'))
const logg = 'Hello world';
console.log(logg.slice(3, 11));
console.log(logg.substring(3, 11));
console.log(logg.substr(3, 8));

const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
// console.log(parseInt(test));
console.log(parseFloat(test));



let numberOfFilms;
function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посотрели?', '');
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посотрели?', '');
	}
}
start();
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', ''),
			b = prompt('На сколько оцените его?', '');

		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
	}
}
// rememberMyFilms();
function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Вы посмотрели слишком мало!');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
		console.log('Вы посмотрели норм!');
	} else if (personalMovieDB.count > 30) {
		console.log('Вы киноманьяк!');
	} else {
		console.log('ERROR!');
	}
}
// detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		const genre = prompt(`Ваш любимый жанр под номером ${i}`);
		personalMovieDB.genres[i - 1] = genre;
	}
}

writeYourGenres();