/*Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
Например:

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );*/

/**
 * gets a Date object and returns the time since it was created. If more than an hour has passed, then the time format is "DD.MM.YY HH:mm"
 * 
 * @param {Date} date 
 * @returns {String}
 */
function formatDate(date) {
    let diff = (Date.now() - date) / 1000;

    if (diff < 1) {
        return 'прямо сейчас';
    } else if (diff < 60) {
        return `${diff} сек. назад`;
    } else if (diff < 3600) {
        return `${Math.floor(diff / 60)} мин. назад`;
    }

    let year = (date.getFullYear() + '').slice(2, 4) + ' ';
    let month = (date.getMonth() + 1) > 9 ? date.getMonth() + 1 + '.' : '0' + +(date.getMonth() + 1) + '.';
    let day = date.getDate() > 9 ? date.getDate() + '.' : 0 + '' + date.getDate() + '.';
    let hours = date.getHours() > 9 ? date.getHours() + ':': 0 + '' + date.getHours() + ':';
    let minutes = date.getMinutes() > 9 ? date.getMinutes() : 0 + '' + date.getMinutes();
    return day + month + year + hours + minutes;
    
}
console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

console.log(formatDate(new Date(new Date - 86400 * 1000))) // вчера в это же время