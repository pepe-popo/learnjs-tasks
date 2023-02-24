/*Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.*/



let x = +prompt('x?');
let n = +prompt('n?');
n = Math.floor(n);

try {
    alert(pow(x, n));
} catch (error) {
    alert(error.message);
}

/**
 * Raises 'x' to the power of 'n'
 * 
 * @param {number} x 
 * @param {number} n must be a natural number
 * @returns {number} returns x^n
 */
function pow(x, n) {

    if (isNaN(x) || isNaN(n) || n < 1) {
        throw new Error('Неправильные значения');
    } else {
        return x ** n;
    }
}