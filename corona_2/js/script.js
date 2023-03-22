'use strict';

const shops = [
	{ rice: 500 },
	{ oil: 200 },
	{ bread: 50 }
];

const map = new Map([
	[{ paper: 400 }, 8000]
]);
map.set(shops[0], 5000);
map.set(shops[1], 15000);
map.set(shops[2], 3000);
console.log(map);
//то же самое с помощью цикла
const budget = [5000, 15000, 3000];
shops.forEach((shop, i) => {
	map.set(shop, budget[i]);
})
console.log(map);
// console.log(map.get(shops[0]));
// console.log(map.has(shops[0]));

// console.log(map.keys());

//первый метод
const goods = [];
for (let shop of map.keys()) {
	goods.push(Object.keys(shop)[0])
}
console.log(goods);

//второй метод
for (let price of map.values()) {
	console.log(price);
}

//третий метод

for (let [shop, price] of map.entries()) {
	console.log(price, shop);
}

//четвертый метод
map.forEach((value, key, map) => {
	console.log(key, value);
});

//перевод объекта в карту map
const user = {
	name: 'Alex',
	surname: 'Smith',
	birthday: '20/04/1993',
	showMyPublicData: function () {
		console.log(`${this.name} ${this.surname}`);
	}
}
const userMap = new Map(Object.entries(user));
console.log(userMap);
//перевод карты в объект
const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);