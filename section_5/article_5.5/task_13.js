/*
Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.

Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.

Например:

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

/*
// после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

/**
 * gets an array of the user objects and returns one object with an id as key and an user objects as a properties
 * 
 * @param {[]} arr array of objects 
 * @returns {object} returns a single object with a list of users
 */
function groupById(arr) {
    let usersFromArr = {};

    arr.forEach(user => {
        usersFromArr[user.id] = user;
    });

    return usersFromArr;
}