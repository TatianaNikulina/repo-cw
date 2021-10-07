const person = {
    fName: "Vanya",
    lName: "Ivaboff",
    age: 25,
    languages: ["ru", "de", "en"],
    isSmoking: false,
  };
//   ​
//   person.lName = "Ivanoff";
//   // console.table(person);
//   ​
//   // console.log(person.languages[0]);
//   // console.log(person.fName);
//   ​
//   // fName || lName
//   // let property;
//   // let rnd = Math.floor(Math.random() * Math.floor(5));
//   // if (rnd % 2) {
//   //   property = "fName";
//   // } else {
//   //   property = "lName";
//   // }
//   ​
//   // console.log(person[property], rnd);
//   ​
//   const child = {};
//   ​
//   child.fName = "Senya";
//   child.lName = person.lName;
//   child.age = 1;
//   ​
//   console.log(child);
//   person.children = [];
//   person.children.push(child);
//   ​
//   delete person.isSmoking;
//   ​
//   const newWife = {
//     fName: "Manya",
//     lName: "Borisova",
//     age: 19,
//     children: [child],
//   };
//   ​
//   person.wife = newWife;
//   ​
//   person.like_cinema = true;
//   ​
  // console.log(person);
  ​
  for (let propertyName in person) {
    console.log(`${propertyName} -> ${person[propertyName]}`);
  }
  ​
  for (let key in person.languages) {
    console.log(`${key} -> ${person.languages[key]}`);
  }
