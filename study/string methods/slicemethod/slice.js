function sliceMethod(){
    var stringName='siddharth,siddhuashok,abcd';
    // var result=stringName.slice(10,1);
    var result=stringName.slice(10)
    document.getElementById('Index').innerHTML=result
}

// if single parameter given to slice function it worked like this --> siddhuashok,abcd
// if doubele parameter given --> siddhu