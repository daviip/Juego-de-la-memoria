let intentos = 0;
let j1 = "";
let j2 = "";
let idj1 = "";
let idj2 = "";
let cidj1 = "";
let cidj2 = "";
let contador = 0;

function empezar() {
    document.getElementById("n1").setAttribute("hidden", "");
    document.getElementById("juego").removeAttribute("hidden");
    let junto = [];
    let dinos = ["1", "2", "3", "4", "5", "6", "1", "2", "3", "4", "5", "6"]
    dinos.sort(function () { return Math.random() - 0.5 });
    for (let i = 0; i < 12; i++) {
        let dino = dinos[i];
        let dato = document.getElementById(i.toString());
        dato.value = dino;
        console.log(dino + "||" + i);
        junto += { id: i, dinosauri: dino };
    }
    let b1 = document.getElementById("emp");
    b1.setAttribute("disabled", "");
};

function reiniciar() {
    for (let i = 0; i < 12; i++) {
        document.getElementById(i + "img").src = "./images/trasera.png";
        document.getElementById(i).setAttribute("onclick", "giro(this)");
    }
    empezar();
    intentos = 0;
    j1 = "";
    j2 = "";
    idj1 = "";
    idj2 = "";
    contador = 0;
    document.getElementById("fin").innerText = "";
    document.getElementById("fin").setAttribute("hidden");
};


function giro(carta) {
    // document.getElementById("fin").removeAttribute("hidden");
    // document.getElementById("fin").innerText += " 10 intentos";
    if (j1 == "" || j2 == "") {
        let n = carta.value + "img";
        let c = carta.id + "img";
        document.getElementById(c).src = "./images/" + n + ".png";
        if (j1 == "") {
            j1 = carta.value;
            idj1 = carta.id + "img";
            cidj1 = String(carta.id);
            document.getElementById(cidj1).removeAttribute("onclick");
        }
        else {
            j2 = carta.value;
            idj2 = carta.id + "img";
            cidj2 = carta.id;
            if (j1 == j2) {
                document.getElementById(cidj2).removeAttribute("onclick");
                j1 = "";
                j2 = "";
                contador++;
                intentos++;
                if (contador == 6) {
                    document.getElementById("fin").removeAttribute("hidden");
                    document.getElementById("fin").innerText += " " + intentos + " intentos.";
                }
                // if (contador == 6) { document.getElementById("fin").innerText = "Has acabado!! y con tan solo " + intentos + " intentos." };
            }
            else {
                document.getElementById(cidj1).setAttribute("onclick", "giro(this)");
                setTimeout(function mal() {
                    document.getElementById(idj1).src = "./images/trasera.png";
                    document.getElementById(idj2).src = "./images/trasera.png";
                    j1 = "";
                    j2 = "";
                }, 1000);
                intentos++;
            }
        }
    }
}