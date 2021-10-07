/// Деструктуризация массивов - Array

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// let [first, second, third, fourth, fifth] = array;
// let [, , third] = array;

let [, second, ...ostatok] = array; // ...ostatok - REST

console.log(second); // 2
console.log(ostatok); //[3,4,5]

// console.log( first ) //1
// console.log( second ) //2
// console.log( third ) //3
// console.log( fourth ) //4
// console.log( fifth ) //5
console.log(array);

//---------------------------------------
console.log(...array); // spread - 1 2 3 4 5 6 7 8 9 0

const copyArray = array; // делает ссылку на ту же ячейку памяти, где лежит массив
const cloneArray = [...array]; //  false - создается такой же массив и теперь cloneArray и Array ссылаются каждый на свой массив
const newArray = [...array, "a", "b", "c", "d"];

array[0] = "HELLO";
console.log(copyArray);
console.log(cloneArray);
console.log(newArray);

// const fullName = 'Ivan Ivanov';
// arrayName = ['Ivan', 'Ivanov'];
// arrayName[0];
// arrayName[1];
//
// let [firstName, lastName] = fullName.split(" ");
// console.log( firstName )
// console.log( lastName )

/// Деструктуризация Объектов - Objects

let options = {
  width: 100,
  title: "Menu",
  height: 200,
  something: "any",
};

let { width, height, ...fields } = options;
console.log(fields);
console.log(width);
console.log(height);
console.log(options);

const copyOptions = options;
const cloneOptions = { ...options };
const newOptions = { ...options, abc: "123" };

console.log(copyOptions === cloneOptions);
console.log(options === cloneOptions);
console.log(copyOptions === options);

options.title = "Hello, World";

console.log(copyOptions);
console.log(cloneOptions);
console.log(newOptions);

// для всех функций (кроме стрелочных) работает объект arguments, который записывает аргументы в массив объектов

function abc(a, b, c, d) {
  console.log(arguments);
  console.log(arguments[0]);
}

const abcd = function (a, b, c, d) {
  console.log(arguments);
  console.log(arguments[0]);
};

// не работает со стрелочными функциями
const arrows = (a, b, c, d) => {
  console.log(arguments);
};

abc(1, 2, 3, 4);
abcd(1, 2, 3, 4);
arrows(1, 2, 3, 4);
