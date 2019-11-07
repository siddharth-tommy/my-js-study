var dates = new Date();
var monthArray = ["jan", "feb", "mar", "apr", "may", "june", "jul", "aug", "sep", "oct", "nov", "dec"]
document.getElementById("date").innerHTML = "The current Month is " + monthArray[dates.getMonth()]
function date() {
    document.getElementById("date_id").innerHTML = dates.getDate()
}

// The getMonth() method returns the month of a date as a number
//  from 0 to 11. you must add 1 for correct month