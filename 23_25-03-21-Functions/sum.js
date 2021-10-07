// 1. Возврат суммы элементов массива
/*
function summary(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const array = [15, 35, 24, 12, -3];
console.log(summary(array));

*/

// 2. Возврат суммы двух массивов (число)

// function calcSum(arr1, arr2) {
//   let sum1 = 0;
//   let sum2 = 0;
//   let sum = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     sum1 += arr1[i];
//     for (let j = 0; j < arr2.length; j++) {
//       sum2 += arr2[j];
//     }
//   }
//   sum = sum1 + sum2;
//   return sum;
// }

// const number1 = [1, 0, 3, -2];
// const number2 = [2, 3, 1, 1];
// console.log(calcSum(number1, number2));

// 3. Возврат века от года

// function centuryFromYear(year) {
//   century = (year - (year % 100)) / 100 + 1;
//   return century;
// }

// let year = +prompt("Введите год");
// alert(`${centuryFromYear(year)} век от ${year} года`);

// 4. Возврат типа данных суммы двух аргументов

// function typeOfSum(x, y) {
//   return typeof (x + y);
// }

// console.log(typeOfSum(5, 10));
// console.log(typeOfSum("Машино любимое число:", 10));
// console.log(typeOfSum(true, 10));
// console.log(typeOfSum(true, false));
// console.log(typeOfSum(null, null));
// console.log(typeOfSum(undefined, undefined));
// console.log(typeOfSum({}, {}));

// 5. Поиск кол-ва вхождений символа в переменной

let counter = 0;

function symbolSearch(variable, symbol) {
  if (typeof variable !== typeof symbol) {
    alert("Ошибка. Типы данных должны совпадать.");
  } else {
    variable = String(variable);
    symbol = String(symbol);
    const letters_of_var = variable.split("");
    for (let i = 0; i < letters_of_var.length; i++) {
      if (letters_of_var[i] === symbol) {
        counter++;
      }
    }
    return counter;
  }
}

let variable = "Hello World";
let symbol = "l";

// let variable = "Hello World";
// let symbol = 2;

// let variable = 20224320;
// let symbol = 2;

console.log(symbolSearch(variable, symbol));
