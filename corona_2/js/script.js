'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посотрели?', '');
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};
const a = prompt('Один из последних просмотренных фильмов?', ''),
	b = prompt('На сколько оцените его?', ''),
	c = prompt('Один из последних просмотренных фильмов?', ''),
	d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);

const num = 5;

if (num < 49) {
	console.log('Error');
} else if (num > 100) {
	console.log('Много');
} else {
	console.log('OK!');
}