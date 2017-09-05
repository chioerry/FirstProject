//Print a array without any objects in between

var myObj = [5, [22], [[14]], [[4]],[5,6]];
//var temp = myObj.toString().split(",");
var temp = Array.from(myObj);
var maps = temp.map(i => parseInt(i));

//var maps = temp.map(function(i){
//	return parseInt(i);
//});

console.log(maps);