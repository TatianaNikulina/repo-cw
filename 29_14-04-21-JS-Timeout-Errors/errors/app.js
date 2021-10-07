//Обработка деления на 0

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log(e);
  let val1 = +document.querySelector("#inp1").value;
  let val2 = +document.querySelector("#inp2").value;
  let res;

  try {
    res = getResult(val1, val2);
  } catch (error) {
    res = error.message;
  }

  document.querySelector("p span").innerText = res;
});

function getResult(a, b) {
  if (b !== 0) {
    return a / b;
  }
  throw new Error("Division by zero!!!"); //вкидываем ошибку
}

//Новый пример - обработка ошибки идентификации, код дальше будет продолжаться

try {
  hello();
} catch (error) {
  console.log(error.message);
}

// пример того, где мы раньше это применяли

try {
  const user = getResult(123);
} catch (e) {
  alert(e.message);
}

function getResult(id) {
  const result = Users.findIndex((user) => user.id === id);
  if (result !== -1) {
    return Users[result];
  }
  throw new Error("No this Id in database");
}
