import users from "./users"; //в переменную users помещается то что выгрузили
import todos from "./todos";
import User from "./UserClass";
import Todo from "./TodoClass";

import newSayHello, { sayName as newSayName, sayGoodbye } from "./function"; //переименовываем функцию  по умолчанию. Она без {}, и другие функции, которые пишутся в {}.

function sayName(abra) {
  //sayName - внутренняя функция с таким же именем sayName
  console.log(abra);
}

const userList = [];
users.forEach((user) =>
  userList.push(new User(user.name, user.username, user.email))
);
console.log(userList);

console.log(newSayHello("Ivan"));
sayName("Ivan");
console.log(newSayName("Ivan"));
console.log(sayGoodbye("Ivan"));
