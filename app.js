const numeroSecretoMaximo=10;

let numeroSecreto;
let numeroUsuario;
let intentos=1;
let numerosSecretos=[];

generarCondicionesIniciales();



function generarIntento(){
    numeroUsuario=parseInt(document.querySelector("#inputNumeroUsuario").value);

    if(numeroUsuario===numeroSecreto){
        asignarTextoAElemento("p",`Ganaste en ${intentos} ${intentos===1?"intento":"intentos"}.`);
        document.querySelector("#intentar").disabled=true;
        document.querySelector("#reiniciar").disabled=false;
    }
    else{
        if(numeroUsuario>numeroSecreto){
            asignarTextoAElemento("p","El número secreto es menor.");
        }
        else{
            asignarTextoAElemento("p","El número secreto es mayor.");
        }
        
        document.querySelector("#inputNumeroUsuario").value="";
        intentos++;
    }

}

function iniciarNuevoJuego(){
    document.querySelector("#intentar").disabled=false;
    document.querySelector("#reiniciar").disabled=true;
    document.querySelector("#inputNumeroUsuario").value="";

    intentos=1;
    generarCondicionesIniciales();
}

function generarCondicionesIniciales(){
    asignarTextoAElemento("h1","Juego del número secreto");
    asignarTextoAElemento("p",`Escribe un número del 1 al ${numeroSecretoMaximo}.`);
    generarNumeroSecreto();
}

function asignarTextoAElemento(nombreElemento, texto){
    document.querySelector(nombreElemento).innerHTML=texto;
}

function generarNumeroSecreto(){
    do{
        numeroSecreto=Math.floor(Math.random()*numeroSecretoMaximo)+1;
        if(numerosSecretos.length===10){
            numerosSecretos=[];
        }
    }while(numerosSecretos.includes(numeroSecreto));
    
    numerosSecretos.push(numeroSecreto);
}
