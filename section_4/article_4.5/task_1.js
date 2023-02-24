/*Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.
Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );*/

const Calculator = function () {
    /**
     * 
     * @param {number} a 
     * @param {number} b 
     */
    this.read = function (a, b) {
        this.a = a;
        this.b = b;
    }
    /**
     * 
     * @returns {number}
     */
    this.sum = function () {
        return this.a + this.b;
    }
    /**
     * 
     * @returns {number}
     */
    this.mul = function () {
        return this.a * this.b;
    }
}

const calculator = new Calculator(); 

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