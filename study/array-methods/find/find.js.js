var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age > 9;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.find(checkAdult);
}