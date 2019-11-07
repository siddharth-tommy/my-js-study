var givenArray=["a","b","c","d","e"]
document.getElementById("arrayPop").innerHTML=givenArray

function popFunc(){
  givenArray.pop()
  document.getElementById("arrayPop").innerHTML=givenArray
}

//removes the last element of an array one by one