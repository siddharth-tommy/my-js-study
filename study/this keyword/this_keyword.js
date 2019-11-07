try{
    var a='h'
var man = {
  firstName: "John",
  lastName : "Doe",
  ids    : 123,
  fullName : function() {
    return this.firstName + " " + this.lastName + " - " + this.a;
  }
};

// this keyword is used to access the local variables only (for ex. inside the function or objects).
// Else it will be undefined.
document.getElementById("thiskeyword").innerHTML = man.fullName();
}
catch(errorName){
    alert(errorName)
}