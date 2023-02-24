/*Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.*/

const calculator = {
    a: null,
    b: null,
    /**
     * 
     * @param {number} a 
     * @param {number} b 
     */
    read: function (a, b) {
        this.a = a;
        this.b = b;
    },
    /**
     * 
     * @returns {number}
     */
    sum: function () {
        return this.a + this.b;
    },
    /**
     * 
     * @returns {number}
     */
    mul: function () {
        return this.a * this.b;
    }
}

//надоели alert'ы, сделал кнопки и поля для ввода значений

const a = document.querySelector('.a');
const b = document.querySelector('.b');

const sumButton = document.querySelector('.sum');
const mulButton = document.querySelector('.mul');

sumButton.addEventListener("click", () => {
    calculator.read(+a.value, +b.value);
    document.querySelector('.result').value = 'Результат: ' + calculator.sum();
})

mulButton.addEventListener("click", () => {
    calculator.read(+a.value, +b.value);
    document.querySelector('.result').value = 'Результат: ' + calculator.mul();
})