// just skip and continue the code after the If-block triggered value, with the key word "continue"

function continueFunc(){
var text = '';
var i;
alert("skips when 7 comes and continue as usual") 
for (i = 0; i < 10; i++) {
    if(i===7){continue}
  text += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;
}
function continueFuncOnmouseleave(){
   document.getElementById("break").innerHTML = ''
}