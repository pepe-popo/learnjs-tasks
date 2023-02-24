/*Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».*/

/**
 * prompts the user a few numbers and sums all the values
 * 
 * @returns {number} 
 */
function sumInput() {
    let array = [];

    while (true) {
        let value = prompt("Введите число", 0);

        if (!isFinite(value) || value === '' || value === null) break;

        array.push(value);
    }

    let count = 0;
    for (let number of array) {
        count += +number;
    }

    return count;
}