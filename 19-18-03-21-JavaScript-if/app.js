let a = prompt("Number a");
let b = prompt("Number b");

/* if (Number(b) === 0) {
  alert("Division by zero");
  //
  // много строчек кода
  //
  //
} else {
  let c = a / b;
  alert(`Result = ${c}`);
} */

// 1. b = 0. Boolean(b) - false; !Boolean(b) - true

// Boolean("0"); // true

if (!Number(b)) {
  // или можно записать if(!+b) -> плюс заменяет слово Number, то есть Number(b) === +b
  alert("Division by zero");
} else {
  let c = a / b;
  alert(`Result = ${c}`);
}

if (a > b) {
  alert("A больше В");
} else if (a < b) {
  alert("A меньше В");
} else {
  alert("А равно В");
}

// Тернарный оператор

// let result = (b === 0) ? "Division by zero" : `Result = ${a / b}`;
// alert(result);

// let compare = (a > b) ? "A > B" : (a < b) ? "A < B" : "A = B";
// alert(compare);

a > b ? alert("A > B") : a < b ? alert("A < B") : alert("A = B");

// Логические операторы - Задача: в диапазон 10 - 20 попадает ли число. Оператор И &&, оператор ИЛИ ||

// if ( a >= 10 && a <=20 ) {
//     alert('Yes!');
// } else {
//     alert("No :(((");
// }

// if ( a <= 10 || a >= 20 ) {
//     alert('Yes!');
// } else {
//     alert("No :(((");
// }

// if ( (a >= 10 && a<=20) && (b <=10 || b>=20) ) {
//     alert('Yes!');
// } else {
//     alert("No :(((");
// }

/*  
true || true = true
true || false = true
false || true = true
false || false = false

true && true = true
true && false = false
false && true = false
false && false = false
*/

// Оператор объеденения с null (undefined)

// let i;// = 20; // undefined
// let k = 10;

// // let ik = i ?? k;
// let ik = i ?? k ?? 'no value';
// alert(ik);

let salary = 100;
let tax;

let netto = salary * (tax ?? 1); // let netto = salary * (tax || 1);
alert(netto);
