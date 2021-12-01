
let hand2 = "Piedra";
let hand3 = "Tijera";





function hand1Funtion(){
    let hand1 = "Papel";
    let num = Math.floor((Math.random()*3));
    console.log(num); 
    arrayHandUser = ["Papel", "Piedra", "Tijera"];
    console.log(hand1);
    // if(hand1 ==="Papel" && cpu ==="Piedra"){
    //     alert("Ganaste contra la maquina");
    // }else if(hand1==="Papel" && cpu==="Tijera"){
    //     alert("Perdiste contra la maquina");
    // }else if(hand1==="Papel" && cpu==="Papel"){
    //     console.log("Es un empate");
    // }else{
    //     console.log("ingrese un valor correcto");
    // }
        
    // }else if(user==="Piedra" && cpu==="Papel"){
    //     console.log("Perdiste contra la maquina");
    // }else if(user==="Piedra" && cpu==="Piedra"){
    //     console.log("Es un empate");
    // }else if(user==="Piedra" && cpu==="Tijera"){
    //     console.log("Ganaste contra la maquina");
    // }else if(user==="Tijera" && cpu==="Papel"){
    //     console.log("Ganaste contra la maquina");
    // }else if(user==="Tijera" && cpu==="Piedra"){
    //     console.log("Perdiste contra la maquina");
    // }else if(user==="Tijera" && cpu==="Tijera"){
    //     console.log("Es un empate");
    // }else{
    //     console.log("Ingresa un valor correcto");
    // }
}

function rockPaperScissors(){

    // console.log(user, cpu);

    if(hand1 ==="Papel" && cpu ==="Piedra"){
        alert("Ganaste contra la maquina");
    }else if(hand1==="Papel" && cpu==="Tijera"){
        alert("Perdiste contra la maquina");
    }else if(hand1==="Papel" && cpu==="Papel"){
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

// rockPaperScissors(hand1,hand2);