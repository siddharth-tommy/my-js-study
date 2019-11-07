function subString(){
    var stringName='siddhuashok143@gmail.com';
    // var result=stringName.slice(10,1);
    var result=stringName.substring(0,11)+' -->substring ok'
    document.getElementById('Index').innerHTML=result
}

// if single parameter given to slice function it worked like this --> siddhuashok,abcd
// if doubele parameter given --> siddhu