// LOOPS

// let source = 10;

// while (source > 0) {
//   source--; // source = source - 1
//   console.log(`Жарим блин № ${10 - source}`);
// }

// console.log("Пора есть блины");

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++; // i = i + 1
// }

// console.log("end while i");

// let k = 0;
// while (k < 5) {
//   console.log(k);
//   k--;
// }

// do {
//   console.log(`Do while ${k}`);
//   k++;
// } while (k <= 10);

// console.log(`After do-while k = ${k}`);
// let j;
// for (j = 1; j <= 10; j++) {
//   console.log(`For loop j = ${j}`);
// }

// for (j = 1; j <= 10; j = j + 1) {
//   console.log(`For loop j = ${j}`);
// }

// let counter = 1;
// for (;counter <= 10; counter++) {

// }

// for (; counter <= 10; ) {
//   console.log(counter++);
// }

// m 0-20 НеЧетные.

// let m;
// for (m = 0; m <= 20; m = m + 1) {
//   if (m % 2) {
//     console.log(m);
//   }
// }
// for (m = 0; m <= 20; m = m + 2) {
//   if (m === 0) {
//     m++;
//   }
//   console.log(m);
// }

// Умножение   x - 1-9, y - 1-9
// x = 1; y = 1; x*y = 1

// let x, y;

// for (x = 1; x <= 9; x++) {
//   for (y = 1; y <= 9; y++) {
//     console.log(`x=${x}, y=${y}, x*y = ${x * y}`);
//   }
// }

// for (let x = 0; x <= 100; x += 5) {
//   if (x === 55) {
//     break;
//   }
//   console.log(x);
// }

// for (let x = 0; x <= 100; x += 5) {
//   if (x >= 50 && x <= 60) {
//     continue;
//   }
//   console.log(x);
// }

// for (m = 0; m <= 20; m = m + 1) {
//   if (m % 3 !== 0) {
//     continue;
//   }
//   console.log(m);
// }

// something: for (let x = 0; x < 10; x++) {
//   for (let y = 0; y < 10; y++) {
//     if (x === y) {
//       continue something;
//     }
//     console.log(x, y);
//   }
// }

// ARRAYS

// [1,2,3,4,5,6]
// ['Apple','Cherry','Peach']
// const arrNumber2 = new Array();

const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const fruit = ["Apple", "Chery", "Peach"];

// console.log(arrNumber);
// // console.table(fruit);

// // console.log(fruit[1]);
// for (let i = 0; i < fruit.length; i++) {
//   console.log(fruit[i]);
// }

// fruit[1] = "Вишня";
// for (let i = 0; i < fruit.length; i++) {
//   console.log(fruit[i]);
// }

// Limon
// fruit[3] = "Limon";
// fruit[fruit.length] = "Limon";
// for (let i = 0; i < fruit.length; i++) {
//   console.log(fruit[i]);
// }
// fruit.push("Kiwi");
// console.table(fruit);

// fruit[100] = "Limon";
// console.table(fruit);

// fruit.pop();
// console.table(fruit);

// fruit.unshift("Apple");
// console.table(fruit);

// fruit.unshift(200, 300, 400);
// console.table(fruit);

// for (let abc in fruit) {
//   console.log(fruit[abc]);
// }

// const matrix = [
//   ["a", "b", "c"],
//   ["d", "e", "f"],
//   ["h", "i", "k"],
// ];

// console.log(matrix[1][2]);