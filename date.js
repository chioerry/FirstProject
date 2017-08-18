// Display current Date in dd/mm/yyyy format

var d = new Date();
console.log(Date());
var date = d.getDate();

if (date < 10) {
	date = "0"+date;
}

var month = d.getMonth()+1;

if (month < 10) {
	month = "0"+month;
}

var year = d.getFullYear();

console.log(date+"/"+month+"/"+year);