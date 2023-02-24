/*Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.*/

/**
 * returns the number of seconds that have passed since the beginning of the day
 * 
 * @returns {number}
 */
function getSecondsToday() {
    let date = new Date();

    return (Date.now() - new Date(date.getFullYear(), date.getMonth(), date.getDate())) / 1000; // вроде сходится
}

console.log(getSecondsToday());