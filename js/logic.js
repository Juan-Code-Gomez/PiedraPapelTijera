let selectPlayer = "Esperando Elección";
let selectCpu = "Esperando Elección";


document.getElementById('tuEleccion').innerHTML = selectPlayer
document.getElementById('eleccionCpu').innerHTML = selectCpu


function hand1Funtion(){
    let cpu = "";
    let hand1 = "Papel";
    let num = Math.floor((Math.random()*3));
    if (num == 1) {
        cpu= "Papel";
    }else if(num == 2){
        cpu ="Piedra";
    }else{
        cpu = "Tijera";
    }
    console.log(cpu);
    console.log(hand1);
    if(hand1 ==="Papel" && cpu ==="Piedra"){
        alert("Ganaste contra la maquina");
        document.getElementById('tuEleccion').innerHTML = "Escogiste Papel"
        document.getElementById('eleccionCpu').innerHTML = "La maquina escogio " + cpu;
    }else if(hand1==="Papel" && cpu==="Tijera"){
        alert("Perdiste contra la maquina");
        document.getElementById('tuEleccion').innerHTML = "Escogiste Papel"
        document.getElementById('eleccionCpu').innerHTML = "La maquina escogio " + cpu;
    }else if(hand1==="Papel" && cpu==="Papel"){
        alert("Es un empate");
        document.getElementById('tuEleccion').innerHTML = "Escogiste Papel"
        document.getElementById('eleccionCpu').innerHTML = "La maquina escogio " + cpu;
    }
}

function hand2Funtion(){
    let cpu = "";
    let hand2 = "Piedra";
    let num = Math.floor((Math.random()*3));
    if (num == 1) {
        cpu= "Papel";
    }else if(num == 2){
        cpu ="Piedra";
    }else{
        cpu = "Tijera";
    }
    console.log(cpu);
    console.log(hand2);
    if(hand2==="Piedra" && cpu==="Papel"){
        alert("Perdiste contra la maquina");
    }else if(hand2==="Piedra" && cpu==="Piedra"){
        alert("Es un empate");
    }else if(hand2==="Piedra" && cpu==="Tijera"){
        alert("Ganaste contra la maquina");
    }else if(hand2==="Tijera" && cpu==="Papel"){
        alert("Ganaste contra la maquina");
    }else if(hand2==="Tijera" && cpu==="Piedra"){
        alert("Perdiste contra la maquina");
    }else if(hand2==="Tijera" && cpu==="Tijera"){
        alert("Es un empate");
    }
}

function hand3Funtion(){
    let cpu = "";
    let hand3 = "Tijera";
    let num = Math.floor((Math.random()*3));
    if (num == 1) {
        cpu= "Papel";
    }else if(num == 2){
        cpu ="Piedra";
    }else{
        cpu = "Tijera";
    }
    console.log(cpu);
    console.log(hand3);
    if(hand3==="Tijera" && cpu==="Papel"){
        alert("Ganaste contra la maquina");
    }else if(hand3==="Tijera" && cpu==="Piedra"){
        alert("Perdiste contra la maquina");
    }else if(hand3==="Tijera" && cpu==="Tijera"){
        alert("Es un empate");
    }
}


