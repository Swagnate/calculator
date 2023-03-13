
// выделение экрана и кнопок
const board = document.querySelector('.input-screen');
const buttons = document.querySelector('.buttons');

// массивы 
const controllers = ["AC", "+/-", "%", "/", "x", "-", "+", ","]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ","]

// переменные
let operation = '' // знак операции
let num1 = 0 // первое число
let num2 = 0 // второе число
let finish = false

// ф-ия очистки экрана ac
function clearALL() {
    num1 = ''
    num2 = ''
    operation = ''
    finish = false
    board.value = 0
}
clearALL();

const cleaner = document.querySelector('#clear')
cleaner.onclick = function () {
    num1 = ''
    num2 = ''
    operation = ''
    finish = false
    board.value = 0
}

buttons.addEventListener('click', (event) => {

    const contex = event.target.textContent

    if (numbers.includes(contex)) {
        if (operation === '') {
            num1 += +contex;
            board.value = num1;
        }
        if (operation !== '') {
            num2 += +contex;
            board.value = num2;
        }


    }

    // если нажата клавиша + - / x
    if (controllers.includes(contex)) {
        operation = contex;

    }

    if (contex === "=") {

        switch (operation) {
            case "+":
                num1 = (+num1) + (+num2);
                break;
            case "-":
                num1 = num1 - num2;
                break;
            case "x":
                num1 = num1 * num2;
                break;
            case "/":
                num1 = num1 / num2;
                break;
        }
        finish = true;
        num2 = 0
        operation = ''
        board.value = num1;

    }
    console.log(`num1:${num1}`)
    console.log(`num2:${num2}`)
    console.log(`operation:${operation}`)
})


