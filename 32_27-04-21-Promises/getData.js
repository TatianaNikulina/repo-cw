// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((response) => {
//         // console.log(response.text());
//         return response.text();
//     })
//     .then(
//         data => {
//             console.log( data );
//             return JSON.parse(data);
//         }
//     )
//     .then((dataObject) => {
//         console.log(dataObject);
//     });

// const renderTodo = (data) => {
//     document.querySelector('ul').innerHTML += `<li>${data}</li>`;
// }
//
// fetch('https://jsonplaceholder.typicode.com/todas?userId=1')
//     .then(response => response.json())
//     .then(json => {
//         console.log( json );
//         json.forEach( ele => renderTodo(ele.title) )
//         // renderTodo( json.title )
//     })
//     .catch(err => console.log( err.toString() ))
//     .finally(() => console.log('worked'))

// ЗАДАНИЕ 1. UserList -> UL
// 2. По клику на юзера открыть его альбомы
// 3. По клику на альбом открыть его фотографии
// DataSource - https://jsonplaceholder.typicode.com/

const renderUsers = (userList) => {
  userList.forEach((user) => {
    document.querySelector(
      "#userList"
    ).innerHTML += `<li id="user_${user.id}">${user.name}</li>`;
  });
};

const usersListener = () => {
  const list = document.querySelectorAll("#userList li");
  for (let item of list) {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const [, id] = event.target.id.split("_");
      getTodos(id);
      getAlbums(id);
    });
  }
};

const getTodos = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
    .then((response) => response.json())
    .then((data) => renderToDoList(data));
};

const renderToDoList = (todoList) => {
  //   const header = document.createElement("h2");
  //   header.innerText = "ToDo";
  //   document.querySelector("#toDoSection").appendChild(header);
  const todos = document.querySelector("#todoList");
  todos.innerHTML = "";
  todoList.forEach((todo) => {
    document.querySelector("#todoList").innerHTML += `<li>${todo.title}</li>`;
  });
};

const getAlbums = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
    .then((response) => response.json())
    .then((data) => renderAlbumList(data));
};

const renderAlbumList = (albumList) => {
  const albums = document.querySelector("#albumList");
  albums.innerHTML = "";
  albumList.forEach((album) => {
    document.querySelector(
      "#albumList"
    ).innerHTML += `<li id="album_${album.id}">${album.title}</li>`;
  });
};

const albumsListener = () => {
  console.log("hier");
  const albums = document.querySelectorAll("#albumList li");
  for (let item of albums) {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const [, id] = event.target.id.split("_");
      getPhotos(id);
    });
  }
};

const getPhotos = (id) => {
  console.log("getPhotos");
  fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
    .then((response) => response.json())
    .then((data) => renderPhotoList(data));
};

const renderPhotoList = (photoList) => {
  console.log("renderPhotoList");
  const photos = document.querySelector("#photoList");
  photos.innerHTML = "";
  photoList.forEach((photo) => {
    document.querySelector(
      "#photoList"
    ).innerHTML += `<div>${photo.thumbnailUrl}</div>`;
  });
};

// filteredPhotos.forEach((photo) => {
//     const img = document.createElement("img");
//     img.src = photo.thumbnailUrl;
//     img.style.width = "10%";
//     div.appendChild(img);
//   });
//   return div;

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    renderUsers(data);
    usersListener();
    albumsListener();
  });
