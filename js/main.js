const triki = document.getElementById('triki');
const celdas = document.querySelectorAll('.triki__item');
const ganador = document.getElementById('ganador');
const reiniciar = document.getElementById('reiniciar');
let jugador = 'X';

triki.addEventListener('click', (e) => {
    if (e.target.textContent == ''){
        e.target.textContent = jugador;
        cambiarJugador();
    }
    verificaGanador();
    verificaEmpate();
});

function cambiarJugador() {
    if (jugador == 'X') {
        jugador = 'O';
    } else {
        jugador = 'X';
    }
}

function verificaGanador() {
    const celdasArray = Array.from(celdas);
    const combinacionesGanadoras = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    

    combinacionesGanadoras.forEach((combinacion) => {
        const valor0 = celdasArray[combinacion[0]].textContent;
        const valor1 = celdasArray[combinacion[1]].textContent;
        const valor2 = celdasArray[combinacion[2]].textContent;

        if (valor0 == valor1 && valor1 == valor2 && valor0 != '') {
            ganador.textContent = `Ganador: ${valor0}`;
        }
    }); 

}

function verificaEmpate() {
    const celdasArray = Array.from(celdas);
    const celdasLlenas = celdasArray.filter((celda) => celda.textContent != '');
    if (celdasLlenas.length == 9) {
        ganador.textContent = 'Empate';
    }
}

reiniciar.addEventListener('click', () => { 
    celdas.forEach((celda) => {
        celda.textContent = '';
    });
    ganador.textContent = '';
});
