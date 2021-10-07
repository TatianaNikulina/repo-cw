const person = {
  firstName: "Ivan",
  lastName: "Ivanov",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.table(person);
console.log(person.getFullName());
