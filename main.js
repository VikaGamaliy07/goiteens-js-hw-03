"use string"
const result = 5 + 5 + '5';
console.log(result);
console.log(typeof(result));

const email = "vikahamaliy@gmail.com";
console.log(email.includes("@"));
console.log(email.length)

const my = "My";
const name = "name";
const is = "is";
const fullName = `${my} ${name} ${is} 'Viktor'`;
console.log(fullName);

const userName = "Viktoria";
const payment = 300;
alert (`Дякуємо, ${userName}! До сплати ${payment} гривень`);
