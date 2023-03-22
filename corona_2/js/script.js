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
const goods = [];
for (let shop of map.keys()) {
	goods.push(Object.keys(shop)[0])
}
console.log(goods);
