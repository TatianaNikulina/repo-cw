const connection = {
  isOk: true,
};
const getPerson = () => {
  return new Promise((resolve, reject) => {
    if (!connection.isOk) {
      reject(new Error("Connection error")); // обработка внешней какой-то ошибки
    }
    setTimeout(() => {
      const person = {
        firstName: "Ivan",
        lastName: "Ivanov",
        age: 30,
        isReady: true,
      };
      resolve(JSON.stringify(person));
    }, 3000);
  });
};
let person = {};

getPerson()
  .then((p) => {
    console.log(p);
    return JSON.parse(p);
  })
  .then((ivan) => {
    if (ivan.isReady) {
      throw new Error("Ivan is Ready"); //обработка ошибки при resolve
    }
    console.log("ivan", ivan);
    person = ivan;
    console.log("person", person);
  })
  .catch((err) => {
    console.log(err.toString()); //обработка всех ошибок и с reject и с
  })
  .finally(() => {
    console.log("Finally");
  });

//   вспомнили, как работает try-catch:
// function division(a,b) {
//     if (b===0) {
//         throw new Error('Division by zero');
//     }
//     return a/b;
// }
//
// try {
//     console.log( division(5,0) );
// } catch (e) {
//     console.log( e.toString() );
// }
