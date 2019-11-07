var arrayName=["a","b","c","d"]
document.getElementById("push").innerHTML=arrayName
function pushFunc(){
  arrayName.push('z');
  document.getElementById("push").innerHTML=arrayName
}