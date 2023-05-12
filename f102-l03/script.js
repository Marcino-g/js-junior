if (confirm("Czy chcesz zostać junior frontend developerem")) {
  alert("Ucz się regularnie!");
  let pass = prompt("Ile czasu tygodniowo poświęcasz na naukę?");
  if (pass >= 8) {
    alert("Wooow, wymiatasz! Tak trzymaj! 🚀");
  } else if (pass >= 8) {
    alert("Dobrze Ci idzie byczku!💪🏻");
  } else if (pass >= 4) {
    alert("Nie jest źle, ale moze byc lepiej!");
  } else {
    alert("Czas wziąć się do roboty!");
  }
} else {
  alert("W takim razie co tu robisz?");
}
