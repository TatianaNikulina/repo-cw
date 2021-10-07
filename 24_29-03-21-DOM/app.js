document.body.style.background = "lightgray";
setTimeout(() => (document.body.style.background = ""), 10000); //через 10 секунд все вернули как было

/*
document - Object.
document.documentElement - <html>
documnet.head - <head>
document.body - <body>

                            parentNode
                                ^
                                |
        previousSibling <--   <DIV> --> nextSibling
             firstChild <-- childNodes-->lastChild


*/
// const h2 = document.getElementsByTagName('h2'); // array
// console.log(h2);
// const mainHeader = document.getElementById('main-header');
// console.log(mainHeader);
// const docHeader = document.getElementsByClassName('doc-header');
// console.log(docHeader);

////
const newHeader = document.querySelector("#main-header"); /// First element
const newHeadersArray = document.querySelectorAll("h2"); /// NodeList

console.log(newHeader);
console.log(newHeadersArray);

const newClassesHeaders = document.querySelectorAll(".doc-header");
console.log(newClassesHeaders);

newHeader.innerText = "Привет Мир!!!";
newHeader.style.color = "white";
newHeader.style.fontSize = "2em"; // 48 +'px' === '48px'
newHeader.style.backgroundColor = "green";
newHeader.style.padding = 10 + "px";
// newHeader.classList.add('centered');
// newHeader.classList.remove('centered');

// newHeader.classList.toggle('centered');
// newHeader.classList.toggle('centered');

// newClassesHeaders[1].remove();

///

const body = document.querySelector("body");
// const body = document.body;
const div = document.createElement("div");

div.classList.add("header-title");
const h3 = document.createElement("h3");
h3.innerText = "Document Title";
div.appendChild(h3);
const pDetail = document.createElement("p");
pDetail.innerText = "lorem";
pDetail.classList.add("header-detail");
div.appendChild(pDetail);

body.appendChild(div);

console.log(div);
console.log(div.parentNode);
console.log(div.previousElementSibling);
console.log(div.nextElementSibling);
console.log(div.firstChild);
console.log(div.lastChild);
console.log(div.children);

for (let node of div.children) {
  node.classList.add("color-blue");
}
div.previousElementSibling.style.color = "red";

// console.log(newClassesHeaders[1].next)
// console.log( body. );

const pars = document.querySelectorAll("p");
console.log(pars);

for (par of pars) {
  if (par.matches(".doc-header")) {
    par.innerText = "Это текст";
  }
}
// let parent = par.closest('body');

const spans = document.querySelectorAll("span");
console.log(spans);

for (ele of spans) {
  const anyClass = ele.closest(".js-example");
  console.log(anyClass);
}

const anyC = document.querySelector(".js-example .any-class");
console.log(anyC);
