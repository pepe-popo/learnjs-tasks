/*Перепишите код, заменив цикл for на while, без изменения поведения цикла.*/

/*for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}*/

let i = 0;

while (i < 3) {
  console.log(`number ${i}!`); // Поменял alert на console.log, т.к. написание кода происходит в среде Node.js 
  i++;
}