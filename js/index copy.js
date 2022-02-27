var dinos = [
    { nombre: '1', selec: false },
    { nombre: '2', selec: false },
    { nombre: '3', selec: false },
    { nombre: '4', selec: false },
    { nombre: '5', selec: false },
    { nombre: '6', selec: false },
    { nombre: '7', selec: false },
    { nombre: '8', selec: false },
    { nombre: '9', selec: false },
    { nombre: '10', selec: false },
    { nombre: '11', selec: false },
    { nombre: '12', selec: false },
]

var intentos = 0;
var j1 = "";
var j2 = "";
var idj1 = "";
var idj2 = "";

function empezar()
{
    var junto = [];
    dinos.sort(function () { return Math.random() - 0.5 });
    for (var i = 0; i < 12; i++)
    {
        var dino = dinos[i].nombre;
        var dato = document.getElementById(i.toString());
        dato.value = dino;
        console.log(dino+"||"+i);
        junto += {id:i, dinosauri:dino};
    }
};

function giro(carta){
    console.log(carta.value);
    console.log(carta.id);
    // for(var i = 0; i < 12; i++){
    //     if()
    // }
    // var carta = document.getElementById();
    carta = "<img src=\"../images/1.png\" alt=\"trasera\">";
}