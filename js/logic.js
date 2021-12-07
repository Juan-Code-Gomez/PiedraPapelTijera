let selectPlayer = "Esperando Elección";
let selectCpu = "Esperando Elección";

document.getElementById("tuEleccion").innerHTML = selectPlayer;
document.getElementById("eleccionCpu").innerHTML = selectCpu;

function hand1Funtion() {
  let cpu = "";
  let hand1 = "Papel";
  let num = Math.floor(Math.random() * 3);
  if (num == 1) {
    cpu = "Papel";
  } else if (num == 2) {
    cpu = "Piedra";
  } else {
    cpu = "Tijera";
  }
  console.log(cpu);
  console.log(hand1);
  if (hand1 === "Papel" && cpu === "Piedra") {
    document.getElementById("tuEleccion").innerHTML = "Escogiste Papel";
    document.getElementById("eleccionCpu").innerHTML =
      "La maquina escogio " + cpu;
    document.getElementById("resultado").innerHTML = "¡Felicitaciones Ganaste!";
  } else if (hand1 === "Papel" && cpu === "Tijera") {
    document.getElementById("tuEleccion").innerHTML = "Escogiste Papel";
    document.getElementById("eleccionCpu").innerHTML =
      "La maquina escogio " + cpu;
    document.getElementById("resultado").innerHTML =
      "Perdiste, Vuelve a intentarlo";
  } else if (hand1 === "Papel" && cpu === "Papel") {
    document.getElementById("tuEleccion").innerHTML = "Escogiste Papel";
    document.getElementById("eleccionCpu").innerHTML =
      "La maquina escogio " + cpu;
    document.getElementById("resultado").innerHTML =
      "¡Es un empate! Vuelve a intentarlo";
  }
}

function hand2Funtion() {
  let cpu = "";
  let hand2 = "Piedra";
  let num = Math.floor(Math.random() * 3);
  if (num == 1) {
    cpu = "Papel";
  } else if (num == 2) {
    cpu = "Piedra";
  } else {
    cpu = "Tijera";
  }
  console.log(cpu);
  console.log(hand2);
  if (hand2 === "Piedra" && cpu === "Papel") {
    document.getElementById("tuEleccion").innerHTML = "Escogiste Piedra";
    document.getElementById("eleccionCpu").innerHTML =
      "La maquina escogio " + cpu;
    document.getElementById("resultado").innerHTML =
      "Perdiste, Vuelve a intentarlo";
  } else if (hand2 === "Piedra" && cpu === "Piedra") {
    document.getElementById("tuEleccion").innerHTML = "Escogiste Piedra";
    document.getElementById("eleccionCpu").innerHTML =
      "La maquina escogio " + cpu;
    document.getElementById("resultado").innerHTML =
      "¡Es un empate! Vuelve a intentarlo";
  } else if (hand2 === "Piedra" && cpu === "Tijera") {
    document.getElementById("tuEleccion").innerHTML = "Escogiste Piedra";
    document.getElementById("eleccionCpu").innerHTML =
      "La maquina escogio " + cpu;
    document.getElementById("resultado").innerHTML = "¡Felicitaciones Ganaste!";
  }
}

function hand3Funtion() {
  let cpu = "";
  let hand3 = "Tijera";
  let num = Math.floor(Math.random() * 3);
  if (num == 1) {
    cpu = "Papel";
  } else if (num == 2) {
    cpu = "Piedra";
  } else {
    cpu = "Tijera";
  }
  console.log(cpu);
  console.log(hand3);
  if (hand3 === "Tijera" && cpu === "Papel") {
    document.getElementById("tuEleccion").innerHTML = "Escogiste Tijera";
    document.getElementById("eleccionCpu").innerHTML =
      "La maquina escogio " + cpu;
    document.getElementById("resultado").innerHTML =
      "¡Felicitaciones Ganaste!";
  } else if (hand3 === "Tijera" && cpu === "Piedra") {
    document.getElementById("tuEleccion").innerHTML = "Escogiste Tijera";
    document.getElementById("eleccionCpu").innerHTML =
      "La maquina escogio " + cpu;
    document.getElementById("resultado").innerHTML =
      "Perdiste, Vuelve a intentarlo";
  } else if (hand3 === "Tijera" && cpu === "Tijera") {
    document.getElementById("tuEleccion").innerHTML = "Escogiste Tijera";
    document.getElementById("eleccionCpu").innerHTML =
      "La maquina escogio " + cpu;
    document.getElementById("resultado").innerHTML =
      "Perdiste, Vuelve a intentarlo";
  }
}
