

  //join the first and last name of all elements with map function.
  var nameArray = [{firstName:'siddhu', lastName:'Ashok'},
                   {firstName:'siddhu2', lastName:'Ashok2'},
                   {firstName:'siddhu3', lastName:'Ashok3'}
                  ];
 function button(){
  document.getElementById('mapid').innerHTML=nameArray.map(mainFunc)
 }

function mainFunc(value){
var fullName = [value.firstName, value.lastName].join(" ");
return fullName
}
