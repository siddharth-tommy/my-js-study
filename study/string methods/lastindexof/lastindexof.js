function lastindexofFunction(){
    try{
    var tobeCheckstring='siddharth siddharth will be called as';
    var resultString=tobeCheckstring.lastIndexOf('siddharth');
    document.getElementById('index').innerHTML=resultString
}
catch(error){
    alert(error.message)
}
}