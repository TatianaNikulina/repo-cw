// alert("Hello!");

// let result = confirm("Вы согласны?");

// console.log(result);

// ========

// let firstName = prompt("Как Вас зовут?");

// console.log(`Доброе утро, ${firstName}!`);

// '17'

// let age = prompt("Сколько тебе лет?", 17);
// console.log(age);
// console.log(typeof age);

// ========

// Type Conversions

// let value = false;
// console.log(typeof value);
// console.log(value);

// value = String(value);
// console.log(typeof value);
// console.log(value);

// value = "        155            ";
// console.log(value);
// value = Number(value);
// console.log(typeof value);
// console.log(value);

// let text = "Какой-то текст";
// text = Number(text);
// console.log(text);

// console.log(Number(undefined));
// console.log(Number(null));
// console.log(Number(true));
// console.log(Number("Peter1"));
// console.log(Number("2Section"));

// console.log(Boolean(1));
// console.log(Boolean(0));
// console.log(Boolean("Hello"));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(null));

// Operators

// 2 * 2 + 3, x * y -> Операнды и операторы

let x = 1;
x = -x; // Унарный оператор

let y = 3;

let z = x - y; // Бинарный оператор

// + , - , * , / , ** , %

// console.log(5 ** 2);

// console.log(5 % 2);

// console.log(Number("1") + 1);
// console.log(1 + +"1");

// console.log(1 + 1 + "1");
// console.log(1 + (1 + "1") + (1 + 1));

// let yearBD = prompt("Сколько дней осталось до ДР");

// console.log(`Твой ДР будет ${17 + +yearBD} числа`);

// console.log("6" / 3);

// console.log("Hel" + "lo");

// let u = 3;

let a = 5;
let b = 10;
// let c = 3 - (a = b + 1);
// console.log(a, c);

// a = b = c = 2 + 2;
// console.log(a, b, c);

// c = 2+2;
// b = c;
// a = b;

// a = a + 5;
// a += 5; // *, -, /

// a /= 3;

// console.log(a);

// a++; // a = a + 1; Инкремент
// a--; // a -= 1; Декремент

// console.log( ++a );

// a++ - Постфиксный
// ++a - Префиксный

// a = 5, b = 10

// b = b + a++;
// 1. b = b + a = 15
// 2. a = a + 1 = 6
// console.log(b, a); // 15 6
// b = b + ++a;
// 1. a = a + 1 = 6
// 2. b = b + a = 16
// console.log(b, a); // 16 6

// Comparison

// console.log(5 < 4);
// console.log(5 > 4);

// console.log(a <= b);
// console.log(a >= b);

// a = 10;
// console.log(a == b);
// b = 10;
// a = "10";
// console.log(a == b);
// console.log(a === b);

// console.log(a != b); // Не строгое "Не равно"
// console.log(a !== b); // Строгое "Не равно"

// a = Number(a);
// console.log(a === b);

// console.log("Cat" > "Cod");

// console.log("2" > "11");

// console.log("2" > 1); // 2 -> Number
// console.log("02" == 2); // 02 -> Number = 2

// console.log(0000000001);

// 010101010101
// #ffff
// 0123456789ABCDF
// 012345670123.....

// 0000 = 0, 0001 = 1, 0010 = 2, 0011 = 3, 0100 = 4 ....

// 14+16

// console.log(true == 1);
// console.log(false == 0);

// console.log(null == undefined);
// console.log(null === undefined);
