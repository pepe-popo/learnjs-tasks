/*Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.*/

/**
 * returns the number of seconds that will elapse before the end of today
 * 
 * @returns {number}
 */
function getSecondsToTomorrow() {
    let date = new Date();

    return (new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1) - Date.now()) / 1000; // вроде сходится, как и в предыдущей задаче
}

console.log(getSecondsToTomorrow());