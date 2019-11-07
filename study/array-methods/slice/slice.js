//The slice() method returns the selected elements in an array, as a new array object. And 
// the original array will not changed
var ArrayName=["a","b","c","d"]
document.getElementById("slice").innerHTML=ArrayName

function sliceFunc(){
  try{
var slicedArray=ArrayName.slice(1,3)
document.getElementById("slice").innerHTML=slicedArray
}
catch(e){alert(e)}
}
function normalArray(){
  document.getElementById("slice").innerHTML=ArrayName
}