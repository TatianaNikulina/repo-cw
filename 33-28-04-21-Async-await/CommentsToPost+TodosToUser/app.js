const URL = "https://jsonplaceholder.typicode.com";

const getPost = (id) => {
  fetch(`${URL}/posts/${id}`)
    .then((response) => response.json())
    .then((data) => {
      renderPost(data);
      getComments(id);
    });
};

const renderPost = (post) => {
  const art = `<article> 
  <h2>${post.title}</h2>
  <p>${post.body}</p>
  <div id="comments"> <h3>Comments:</h3> </div>
  </article>`;
  document.querySelector("#posts").innerHTML = art;
};

const getComments = async (postId) => {
  const response = await fetch(`${URL}/comments?postId=${postId}`);
  const data = await response.json();
  renderComments(data);
};

const renderComments = (comments) => {
  let output = "";
  comments.forEach((element) => {
    output += `<div>
    <h4>${element.email} <span>left comment:</span></h4>
    <p>${element.body}</p>
    </div>`;
  });
  document.querySelector("#comments").innerHTML += output;
};

getPost(8);
