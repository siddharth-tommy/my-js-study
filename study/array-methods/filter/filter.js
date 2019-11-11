var ages = [3, 10, 18, 20,30,26];

function checkAdult(age) {
  return age > 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.filter(checkAdult);
}