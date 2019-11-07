// just break the code after the If-block triggered value, with the key word "break"

function breakFunc(){
var text = '';
var i;
alert("stops when 7 comes and show till 6")
for (i = 0; i < 10; i++) {
    if(i===7){break}
  text += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;
}
function breakFuncCut(){
   document.getElementById("break").innerHTML = ''
}