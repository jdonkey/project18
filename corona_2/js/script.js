'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посотрели?', '');
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

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

if (personalMovieDB.count < 10) {
	console.log('Вы посмотрели слишком мало!');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
	console.log('Вы посмотрели норм!');
} else if (personalMovieDB.count > 30) {
	console.log('Вы киноманьяк!');
} else {
	console.log('ERROR!');
}
console.log(personalMovieDB);

const flafyOff = (a, b) => {
	console.log('2')
	return a + b;
};
console.log(flafyOff(4, 6));


const euroCur = 78;
const discount = 0.9;
function convert(curr, sum) {
	return curr * sum;
}
function promotion(result) {
	console.log(result * discount);
}
const conv = convert(euroCur, 1000);
promotion(conv);
