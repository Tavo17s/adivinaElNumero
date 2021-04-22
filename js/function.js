let msg1 = document.getElementById("message1");
let msg2 = document.getElementById("message2");
let msg3 = document.getElementById("message3");
let textField = document.getElementById("answer");
let randomNumber = Number(Math.floor(Math.random() * 1000)) + 1;
let lives = 10;
var l = localStorage;

var msg = document.getElementById("username");
var button1 = document.getElementById("myBtn1");
var button2 = document.getElementById("myBtn2");
var interval = setInterval(clock, 1000);

var arr = [];

button1.addEventListener("click", function guessNumber() {
  if (msg.value == "") {
    alert("Nombre de usuario no valido");
    return;
  }

  document.getElementById("username").disabled = true;

  let userNumber = Number(textField.value);
  arr.push(userNumber);

  l.setItem("datos", arr);
  console.log(userNumber);

  if (userNumber <= "0" || userNumber > 1000) {
    msg2.textContent = "Ingresa un número valido";
    return;
  }
  if (userNumber === randomNumber) {
    msg2.textContent = "Wow, felicidades, adivinaste.";
    document.getElementById("myBtn1").disabled = true;
    return;
  } else if (userNumber < randomNumber) {
    msg2.textContent = "Pista: El número que ingresaste es menor";
  } else if (userNumber > randomNumber) {
    msg2.textContent = "Pista: El número que ingresaste es mayor";
  }

  lives -= 1;

  msg1.textContent =
    msg.value + " tienes un total de " + lives.toString() + " intentos ";

  msg3.textContent = "Tus intentos -> " + l.getItem("datos");

  if (lives === 0) {
    msg2.textContent =
      "No lograste adivinarlo, el número era " + randomNumber.toString();
    document.getElementById("myBtn1").disabled = true;
  }
});

button2.addEventListener("click", function restart() {
  lives = 10;
  randomNumber = Number(Math.floor(Math.random() * 1000)) + 1;
  console.log(randomNumber);
  msg2.textContent = "";
  document.getElementById("answer").value = "";
  document.getElementById("username").value = "";
  msg1.textContent = "No. de intentos: 10";
  document.getElementById("username").disabled = false;
  document.getElementById("myBtn1").disabled = false;
});

function clock() {
  let hour = document.getElementById("hour");
  let minute = document.getElementById("minute");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  var am = "AM";

  if (h > 12) {
    h -= 12;
    var am = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hour.innerHTML = h;
  minute.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = am;
}
