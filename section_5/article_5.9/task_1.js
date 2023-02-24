/*Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.

Например:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650*/

/**
 * gets an object and returns the sum of the all numeric values of its properties
 * 
 * @param {object} obj 
 * @returns {number} returns the sum or 0 if the object is empty
 */
function sumSalaries(obj) {
    return Object.values(obj).reduce((sum, value) => sum + value)
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(sumSalaries(salaries)); // 650*/