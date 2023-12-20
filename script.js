const equacion = [];
function borrarUno() {
    let borrado = equacion.pop();
    console.log(equacion)
}
function borrarTodo() {
    for(let i = equacion.length; i > 0;i--) {
        let el = equacion.pop();
    }
    console.log(equacion)
}
function getEntries(entrie) {
    equacion.push(entrie);
    console.log(typeof entrie);
    console.log(equacion)
}