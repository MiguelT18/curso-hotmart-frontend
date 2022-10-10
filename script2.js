// let hours = 4;
// let minutes = 10;
// let seconds = 5;

let reloj = {
  hours: 4,
  minutes: 1,
  seconds: 5,
};

//Definimos y ejecutamos los segundos
function cargarSegundos() {
  let txtSeconds;

  if (reloj.seconds < 0) {
    reloj.seconds = 59;
  }

  //Mostrar seconds en pantalla
  if (reloj.seconds < 10) {
    txtSeconds = "0" + reloj.seconds;
  } else {
    txtSeconds = reloj.seconds;
  }
  document.getElementById("seconds").innerHTML = txtSeconds;
  reloj.seconds--;

  cargarMinutos(reloj.seconds);
}

//Definimos y ejecutamos los minutos
function cargarMinutos(seconds) {
  let txtMinutes;

  if (seconds == -1 && reloj.minutes !== 0) {
    setTimeout(() => {
      reloj.minutes--;
    }, 500);
  } else if (seconds == -1 && reloj.minutes == 0) {
    setTimeout(() => {
      reloj.minutes = 59;
    }, 500);
  }

  //Mostrar minutes en pantalla
  if (reloj.minutes < 10) {
    txtMinutes = "0" + reloj.minutes;
  } else {
    txtMinutes = reloj.minutes;
  }
  document.getElementById("minutes").innerHTML = txtMinutes;
  cargarHoras(reloj.seconds, reloj.minutes);
}

function cargarHoras(seconds, minutes) {
  let txtHours;

  if (seconds == -1 && minutes == 0 && reloj.hours !== 0) {
    setTimeout(() => {
      reloj.hours--;
    }, 500);
  } else if (seconds == -1 && minutes == 0 && reloj.hours !== 0) {
    setTimeout(() => {
      reloj.hours = 2;
    }, 500);
  }

  //Mostrar hours en pantalla
  if (reloj.hours < 10) {
    txtHours = "0" + reloj.hours;
  } else {
    txtHours = reloj.hours;
  }
  document.getElementById("hours").innerHTML = txtHours;
}

localStorage.setItem("contador", JSON.stringify(reloj));
//Ejecutamos cada second
setInterval(cargarSegundos, 1000);
