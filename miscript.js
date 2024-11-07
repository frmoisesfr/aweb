/*
    Mi Script de JavaScript
*/

var pulsado=true;

function miBoton(){
    if(pulsado){
        alert(6+7);
        document.getElementById("boton1").innerText="BOTON PULSADO";
        document.getElementById("boton1").style="background-color:blue;";
        pulsado=false;
    }else{
        document.getElementById("boton1").innerText="BOTON YEAH";
        document.getElementById("boton1").style="background-color:red;";
        pulsado=true;
    }
}