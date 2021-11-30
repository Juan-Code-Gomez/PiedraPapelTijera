let hand1 = "Papel";
let hand2 = "Piedra";
let hand3 = "Tijera";


function rockPaperScissors(user, cpu){
    console.log(user, cpu);

    if(user ==="Papel" && cpu ==="Piedra"){
        alert("Ganaste contra la maquina");
    }else if(user==="Papel" && cpu==="Tijera"){
        alert("Perdiste contra la maquina");
    }else if(user==="Papel" && cpu==="Papel"){
        console.log("Es un empate");
    }else if(user==="Piedra" && cpu==="Papel"){
        console.log("Perdiste contra la maquina");
    }else if(user==="Piedra" && cpu==="Piedra"){
        console.log("Es un empate");
    }else if(user==="Piedra" && cpu==="Tijera"){
        console.log("Ganaste contra la maquina");
    }else if(user==="Tijera" && cpu==="Papel"){
        console.log("Ganaste contra la maquina");
    }else if(user==="Tijera" && cpu==="Piedra"){
        console.log("Perdiste contra la maquina");
    }else if(user==="Tijera" && cpu==="Tijera"){
        console.log("Es un empate");
    }else{
        console.log("Ingresa un valor correcto");
    }
} 

rockPaperScissors(hand3,hand2);