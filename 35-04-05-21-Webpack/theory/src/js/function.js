export default function sayHello(name) {
  return `Hello, ${name}`;
}

export function sayGoodbye(name) {
  return `Goodbye, ${name}`;
}

export function sayName(name) {
  return `My name is ${name}`;
}

// чтобы передать не default= что-то одно, уникальное, а всё, то пишем
// export { sayHello, sayGoobye, sayName };
