const equacion = [];
const pantalla = document.querySelector('#pantalla');
let numeros = [];
let letras = '';
function borrarUno() {
    let borrado = equacion.pop();
    letras = equacion.join('');
    pantalla.innerText = letras;
    if (letras.length === 0) {
        pantalla.innerText = '000000000';
    }
}
function borrarTodo() {
    for(let i = equacion.length; i > 0;i--) {
        let el = equacion.pop();
        pantalla.innerText = '000000000';
    }
}
function getEntries(entrie) {
    let expresionRegular = /\..*?\./;
    if (expresionRegular.test(letras)) {
        return pantalla.innerText = 'No Valido!';
    }
        equacion.push(entrie);
        letras = equacion.join('');
        pantalla.innerText = letras;
}
function realizarOperacion(operacion) {
let numeros = operacion.match(/\d+(\.\d+)?/g);
let operadores = operacion.match(/[\%\+\-\*\/]/g);
let resultado = parseFloat(numeros[0]);
for (let i = 0; i < operadores.length; i++) {
let num = parseFloat(numeros[i + 1]);
let operador = operadores[i];
if (operador === "+") {
    resultado += num;
} else if (operador === "-") {
    resultado -= num;
} else if (operador === "*") {
    resultado *= num;
} else if (operador === "/") {
    resultado /= num;
} else if (operador === "%") {
    resultado **= num;
}
}
return resultado;
}

function invalido() {
    pantalla.innerText = 'No Valido!';
}

function total() {
    pantalla.innerText = realizarOperacion(letras);
    letras = pantalla.innerText;
}