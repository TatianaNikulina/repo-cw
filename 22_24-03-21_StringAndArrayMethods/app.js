// let number = 123456789;

// let sum = 0;
// while (number > 0) {
//   sum += number % 10;
//   number = parseInt(number / 10);
//   //   number = (number - (number % 10)) / 10;
// }

// console.log(sum);

// number = String(number);
// number += "";
// console.log(typeof number);
// console.log(number.length);

// for (let i = 0; i < number.length; i++) {
//   console.log(number[i]);
//   sum += +number[i];
// }

// console.log(sum);

// let str = "hello";
// // console.log(str[3]);

// str = str.split("");
// console.log(str);
// str = str.join("_");
// console.log(str);

// let str1 = "Мама мыла раму";
// str1 = str1.split(" ");
// console.log(str1);
// str1 = str1.join("");
// console.log(str1);

//// Меняем местами первый и последний элемент

// let str2 = "ourE"; // Euro
// str2 = str2.split("");
// let tmp = str2[str2.length - 1];
// str2[str2.length - 1] = str2[0];
// str2[0] = tmp;
// str2 = str2.join("");
// console.log(str2);

// const numbers = [24, 5, 800, 20, 6, 44, -5, 0, 3, -10, 3.5, 37];
// console.log(numbers.length);
// let j = 0;
// while (j !== numbers.length - 2) {
//   j++;
//   for (let i = 0; i < numbers.length - 1; i++) {
//     if (numbers[i] > numbers[i + 1]) {
//       let tmp = numbers[i];
//       numbers[i] = numbers[i + 1];
//       numbers[i + 1] = tmp;
//     }
//   }
// }
// console.log(numbers);

// Метод пузырьковой сортировки

const numbers = [24, 5, 800, 20, 6, 44, -5, 0, 3, -10, 3.5, 37];

for (let j = numbers.length - 1; j > 0; j--) {
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] > numbers[i + 1]) {
      let tmp = numbers[i];
      numbers[i] = numbers[i + 1];
      numbers[i + 1] = tmp;
    }
  }
}
console.log(numbers);

// обратно

// const numbers = [24, 5, 800, 20, 6, 44, -5, 0, 3, -10, 3.5, 37];

for (let j = numbers.length - 1; j > 0; j--) {
  for (let i = numbers.length; i > 0; i--) {
    if (numbers[i] < numbers[i - 1]) {
      let tmp = numbers[i - 1];
      numbers[i - 1] = numbers[i];
      numbers[i] = tmp;
    }
  }
}
console.log(numbers);
