function changeCase(){
    var stringName='siddhuashok143@gmail.com';
    var stringName2='SIDDHUASHOK143@GMAIL.COM'
    // var result=stringName.slice(10,1);
    var result=stringName.toUpperCase()
    var result2=stringName2.toLowerCase()
    document.getElementById('Index').innerHTML=result
    document.getElementById('Index2').innerHTML=result2
}

// if single parameter given to slice function it worked like this --> siddhuashok,abcd
// if doubele parameter given --> siddhu