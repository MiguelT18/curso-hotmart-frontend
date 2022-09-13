let hours = 6;
let minutes = 32;
let seconds = 20;

//Definimos y ejecutamos los segundos
function cargarSegundos() {
  let txtSeconds;

  if (seconds < 0) {
    seconds = 59;
  }

  //Mostrar seconds en pantalla
  if (seconds < 10) {
    txtSeconds = "0" + seconds;
  } else {
    txtSeconds = seconds;
  }
  document.getElementById("seconds").innerHTML = txtSeconds;
  seconds--;

  cargarMinutos(seconds);
}

//Definimos y ejecutamos los minutos
function cargarMinutos(seconds) {
  let txtMinutes;

  if (seconds == -1 && minutes !== 0) {
    setTimeout(() => {
      minutes--;
    }, 500);
  } else if (seconds == -1 && minutes == 0) {
    setTimeout(() => {
      minutes = 59;
    }, 500);
  }

  //Mostrar minutes en pantalla
  if (minutes < 10) {
    txtMinutes = "0" + minutes;
  } else {
    txtMinutes = minutes;
  }
  document.getElementById("minutes").innerHTML = txtMinutes;
  cargarHoras(seconds, minutes);
}

function cargarHoras(seconds, minutes) {
  let txtHours;

  if (seconds == -1 && minutes == 0 && hours !== 0) {
    setTimeout(() => {
      hours--;
    }, 500);
  } else if (seconds == -1 && minutes == 0 && hours !== 0) {
    setTimeout(() => {
      hours = 2;
    }, 500);
  }

  //Mostrar hours en pantalla
  if (hours < 10) {
    txtHours = "0" + hours;
  } else {
    txtHours = hours;
  }
  document.getElementById("hours").innerHTML = txtHours;
}

//Ejecutamos cada second
setInterval(cargarSegundos, 1000);
