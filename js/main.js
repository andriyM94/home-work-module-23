// -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.
const fruts = [
  { id: 0, name: "Apple" },
  { id: 1, name: "Tomat" },
  { id: 2, name: "Cherry" },
  { id: 3, name: "Orange" },
];
console.log('-- 1 --');

let newArr = [];
for (let i = 0; i < fruts.length; i++) {
  newArr.push(fruts[i].name);
}
console.log('origin array - ', fruts);
console.log('result - ', newArr);




// -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.
console.log('-- 2 --');
for (let i = 1; i <= 10; i++) {
  if (i % 2 != 0) continue;
  console.log(i);
}


// -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
// console.lpg( `цифра ${i}!` );
// }
console.log('-- 3 --');
let i = 0;
while (i < 5) {
  console.log( `цифра ${i}!` );
  i++
}


// -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.
console.log('-- 4 --');
let value = null; 
let str = ''; 

while (true) {
  value = parseInt(prompt(str + 'Ввeдіть число більше за 100')); 
  str = `Ви ввели ${value}. `;
  if (isNaN(value) || value > 100) {
    console.log("Ви скасували ввід або ввели порожній рядок. Або ввели '" + value + "' яке відповідає умові 'isNaN(value) || value > 100'");
    break;
  }
  console.log(`Ви ввели ${value}. Потрібно ввести число більше за 100`);
}

// -- 5 --
// Вирахуйте середній вік
const girls = [
{ age: 23, name: "Оля" },
{ age: 29, name: "Аня" },
{ age: 10, name: "Юля" },
{ age: 20, name: "Катя" },
];
console.log('-- 5 --');
let sum = 0;

girls.forEach(element => {
  sum += element.age;
});

let average_age = sum / girls.length;
console.log(`Середній вік = ${average_age}`);
