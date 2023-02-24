/*Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

Должно работать так:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false*/

/**
 * returns true if an object has no properties
 * 
 * @param {object} obj checked object
 * @returns {boolean} will return true if object has no properties, otherwise false
 */
function isEmpty(obj){
    for(let prop in obj) {
        if (prop) return false;
    }

    return true;
}