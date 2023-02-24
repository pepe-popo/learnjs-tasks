/*Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася";*/

/**
 * returns a new string with the first letter in uppercase
 * 
 * @param {string} str 
 * @returns {string}
 */
function ucFirst(str) {
   return str ? str[0].toUpperCase() + str.slice(1) : str;
}
