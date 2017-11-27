//=========================
//Print a array without any objects in between

var myObj = [5, [22], [[14]], [[4]],[5,6]];

//var temp = myObj.toString().split(",");

var tem = Array.from(myObj);

//var maps = temp.map(function(i){
//	return parseInt(i);
//});

var maps = tem.map(i => parseInt(i));

console.log(maps);
/*
Block Scope
Closure
CallBack


*/
