/*Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

Пример вызовов:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1*/

/**
 * calculates lowest number from two arguments
 * 
 * @param {number} a first argument
 * @param {number} b second argument
 * @returns {number} lowest number between 'a' and 'b'
 */
function min(a, b) {
    return a < b ? a : b;
}

