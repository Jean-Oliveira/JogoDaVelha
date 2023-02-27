const celula = document.querySelectorAll('.celula');
console.log(celula);

let checaVez = true;

const JOGADOR_X = "X";
const JOGADOR_O = "O";

const COMBINACOES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

document.addEventListener("click", (event) => {
    if (event.target.matches(".celula")) {
        jogar(event.target.id);
    }
});

function jogar(id) {
    const celula = document.getElementById(id);
    turno = checaVez ? JOGADOR_X : JOGADOR_O;
    celula.textContent = turno;
    celula.classList.add(turno);
    checaVencendor(turno);

};

function checaVencendor(turno) {
    const vencedor = COMBINACOES.some((comb) => {
        return comb.every((index) => {
            return celula[index].classList.contains(turno);
        })
    });
    if (vencedor) {
        encerrarJogo(turno);

    } else if (checarEmpate()) {
        encerrarJogo();
    }
    else {
        checaVez = !checaVez;
    }
}

function checarEmpate() {
    let x = 0;
    let o = 0;

    for (index in celula) {
        if (!isNaN(index)) {
            if (celula[index].classList.contains(JOGADOR_X)) {
                x++;
            }
            if (celula[index].classList.contains(JOGADOR_O)) {
                o++;
            }
        }
    }
    return x + o === 9 ? true : false
}

function encerrarJogo(vencedor = null) {
    if (vencedor) {
        alert("vencedor Jogador: " + vencedor);
    } else {
        alert("empatou");
    }
}
