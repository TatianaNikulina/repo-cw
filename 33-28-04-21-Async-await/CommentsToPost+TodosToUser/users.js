const URL = "https://jsonplaceholder.typicode.com";

const getUser = (id) => {
  fetch(`${URL}/users/${id}`)
    .then((response) => response.json())
    .then((data) => {
      renderUser(data);
      getToDos(id);
    });
};

const renderUser = (user) => {
  const art = `<article> 
    <h3>${user.name}</h3>
    <p>${user.email}</p>
    <p>${user.phone}</p>
    <div id="userToDos"></div>
    </article>`;
  document.querySelector("#users").innerHTML = art;
};

const getToDos = async (userId) => {
  const response = await fetch(`${URL}/todos?userId=${userId}`);
  const data = await response.json();
  renderToDos(data);
};

const renderToDos = (todos) => {
  todos.forEach((todo) => {
    document.querySelector("#userToDos").innerHTML += `<p>${todo.title}</p>`;
  });
};

getUser(2);
