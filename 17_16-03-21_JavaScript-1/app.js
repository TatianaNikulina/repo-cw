// string

console.log("head"); // This is console
// alert("Hello world!");
console.log(1 + 2);

/*
Hello
lkdfljasdhfljhsadhsadfjh
    */

// // // // // // // // // console.log(123);

// Variables

let message;
console.log(message);
message = "Message!";
console.log(message);
message = "Hello World!";
console.log(message);
message = 5;
console.log(message);

const PI = 3.14159;
console.log(PI);
// PI = 'число Pi'; //- ОШИБКА!!!
// console.log(PI);

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

let firstName = "Ivan",
  lastName = "Ivonov",
  age = 25;
let firstname;
let first_1_name;
let i, j, k;
let _;
let _firstName;
let $;

// BAD
let имя;
let imya;

// let 314kdjf;

// name != Name - разные переменные

// let, const, class, function, return, .... - зарезервированные слова

console.log(firstName);

let importData;

// Type of Data

// Number, BigInt

let n = 100;
let m = 100.1;

console.log(1 / 0); //математическая бесконечность
console.log(Infinity);

console.log("hello" / 2);
console.log(NaN);

// String

let str1 = "Hello";
let str2 = "World";
let str3 = `Hello`;

let result1 = str1 + " " + str2;
console.log(result1);

let _res = "Выведем " + str1 + " " + str2 + ". Ура!!!" + str3;

let result2 = `Выведем ${str1} ${str2}. Ура!!! ${str3}`;
console.log(result2);

console.log("${str1} ${str2}");
console.log(`${str1} ${str2}`);

console.log("Hello");
console.log(`Hello ${str2}`);

console.log(`${"hello"} world`);
console.log(`result = ${2 + 2}`);

// Boolean - логический
let isTrue = true;
let isFalse = false;

let isLess = 2 < 5;

console.log(isLess);

// Null, undefined

_res = null;
console.log(_res);

let newRes;
console.log(newRes);

// Object, Symbol

// Type of

console.log(typeof n);
console.log(typeof str1);
console.log(typeof _res);
console.log(typeof newRes);
console.log(typeof isTrue);
