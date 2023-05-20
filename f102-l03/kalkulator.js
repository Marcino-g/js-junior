let number1 = prompt("Podaj pierwszą liczbę");
let operator = prompt("Podaj operator arytmetyczny (+, -, *, / lub %");
let number2 = prompt("Podaj drugą liczbę");

if (operator == "+") {
  alert(+number1 + +number2);
} else if (operator == "-") {
  alert(number1 - number2);
} else if (operator == "*") {
  alert(number1 * number2);
} else if (operator == "/" && number2 == 0) {
  alert("Nie dziel przez 0");
} else if (operator == "/" && number2 != 0) {
  alert(number1 / number2);
} else if (operator == "%") {
  alert(number1 % number2);
}
