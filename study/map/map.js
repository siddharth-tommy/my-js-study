

  // devide by 2 for all the elements of an array
  var number = [2,5,10,15];
  var resultArray =number.map(mainFunc)
function buttonClick(){
  document.getElementById("mapid").innerHTML=resultArray
}
function mainFunc(value){
  return value/2
}
