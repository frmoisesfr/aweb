/*
    Ejemplo de fichero con Javascript
*/
function Pulsar1(){
    document.getElementById('boton1').innerHTML="Muy bien, lo has pulsado :)";
    document.getElementById('boton1').style.fontSize = "30px";
    document.getElementById('boton1').style.backgroundColor = "red";
    document.getElementById('boton1').style.padding = "20px";
}

function Pulsar2(){
    var boton = document.getElementById('boton2')
    boton.innerHTML="Muy bien, lo has pulsado :)";
    boton.style.fontSize = "30px";
    boton.style.backgroundColor = "red";
    boton.style.padding = "20px";
}