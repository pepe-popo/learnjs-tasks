/*Следующая функция возвращает true, если параметр age больше 18.

В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

Сделайте два варианта функции checkAge:

Используя оператор ?
Используя оператор ||*/

// variant with '?'

/** 
   * returns a boolean depending on the argument
   * 
   * @param {number} age age is age
   * @returns {boolean}
   */
function checkAge(age) {
  return age > 18 ? true : confirm('Родители разрешили?');
}

// variant with '||'

function checkAge(age) {
  return age > 18 || confirm('Родители разрешили?');
}


