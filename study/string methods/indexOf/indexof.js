function indexofFunction(){
    var stringName = 'this is siddhu';
    var stringPosition = stringName.indexOf('iddhu');
    var replacedVariable=stringName.replace("this","He")
    alert(stringPosition)
    document.getElementById("index").innerHTML=stringPosition
    document.getElementById("index").innerHTML=replacedVariable
}