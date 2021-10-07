const addressBook = [];

const main = () => {
  document
    .querySelector("#address-form")
    .addEventListener("submit", createCard);
};

const createCard = (event) => {
  event.preventDefault();
  const fields = document.querySelectorAll("#address-form input");
  const addressItem = {
    id: addressBook.length,
  };
  for (field of fields) {
    addressItem[field.id] = field.value;
    field.value = "";
  }
  //   const firstName = document.querySelector("#firstName");
  //   const lastName = document.querySelector("#lastName");
  //   const phone = document.querySelector("#phone");
  //   const email = document.querySelector("#email");
  //   const addressItem = {
  //     id: addressBook.length,
  //     firstName: firstName.value,
  //     lastName: lastName.value,
  //     phone: phone.value,
  //     email: email.value,
  //   };
  addressBook.push(addressItem);
  //   firstName.value = "";
  //   lastName.value = "";
  //   phone.value = "";
  //   email.value = "";
  renderUl();
};

const renderUl = () => {
  const ul = document.createElement("ul");
  let li = '';
  addressBook.forEach((element) => {

    li += `<li>
        <h3>${element.firstName} ${element.lastName}</h3>
        <p>${element.phone}</p>
        <p>${element.email}</p>
    </li>`;
    // const li = document.createElement("li");
    // li.id = `item_${element.id}`;
    // const h3 = document.createElement("h3");
    // h3.innerText = `${element.firstName} ${element.lastName}`;
    // li.appendChild(h3);
    // const phone = document.createElement("p");
    // phone.innerText = element.phone;
    // const email = document.createElement("p");
    // email.innerText = element.email;
    // li.appendChild(phone);
    // li.appendChild(email);
    // ul.appendChild(li);
  });
  ul.innerHTML = li;
  const bookWrapper = document.querySelector("#address-list");
  bookWrapper.innerHTML = "";
  bookWrapper.appendChild(ul);
};

main();
