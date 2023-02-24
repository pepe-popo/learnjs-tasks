/*Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

Любое число из интервала min..max должно появляться с одинаковой вероятностью.

Пример работы функции:

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5*/

/**
 * returns a random natural number between min and max, and includes max 
 * 
 * @param {number} min lower range limit
 * @param {number} max higher range limit
 * @returns {number} returns natural number
 */
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// ##########################################################################################
// Проверил тут дополнительно, в итоге числа распределены почти равномерно
// ##########################################################################################
// let countOne = 0, countTwo = 0, countThree = 0, countFour = 0; countFive = 0;

// for (let i = 0; i < 100000000; i++) {
//     switch (randomInteger(1, 5)) {
//         case 1: countOne++;
//             break;
//         case 2: countTwo++;
//             break;
//         case 3: countThree++;
//             break;
//         case 4: countFour++;
//             break;
//         case 5: countFive++;
//     }
// }
// console.log(`1: ${countOne}`);
// console.log(`2: ${countTwo}`);
// console.log(`3: ${countThree}`);
// console.log(`4: ${countFour}`);
// console.log(`5: ${countFive}`);