let msg1 = document.getElementById("message1");
let msg2 = document.getElementById("message2");
let textField = document.getElementById("answer");
let randomNumber = Number(Math.floor(Math.random() * 1000)) + 1;
let lives = 10;
var button1 = document.getElementById("myBtn1");
var button2 = document.getElementById("myBtn2");
var interval = setInterval(clock, 1000);

button1.addEventListener("click", function guessNumber() {
  let userNumber = Number(answer.value);

  console.log(userNumber);
  if (userNumber == "0") {
    msg2.textContent = "Ingresa un número";
    return;
  }
  if (userNumber === randomNumber) {
    msg2.textContent = "Wow, felicidades, adivinaste.";
    document.getElementById("myBtn").disabled = true;
    return;
  } else if (userNumber < randomNumber) {
    msg2.textContent = "Pista: El número que ingresaste es menor";
  } else if (userNumber > randomNumber) {
    msg2.textContent = "Pista: El número que ingresaste es mayor";
  }

  lives -= 1;
  msg1.textContent = "No. de intentos: " + lives.toString();

  if (lives === 0) {
    msg2.textContent =
      "No lograste adivinarlo, el número era " + randomNumber.toString();
    document.getElementById("myBtn").disabled = true;
  }
});

button2.addEventListener("click", function restart() {
  lives = 10;
  randomNumber = Number(Math.floor(Math.random() * 1000)) + 1;
  console.log(randomNumber);
  msg2.textContent = "";
  document.getElementById("answer").value = "";
  msg1.textContent = "No. de intentos: 10";
  document.getElementById("myBtn").disabled = false;
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

  h = h < 0 ? "0" + h : h;
  m = m < 0 ? "0" + m : m;
  s = s < 0 ? "0" + s : s;

  hour.innerHTML = h;
  minute.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = am;
}
