var myObj = [5, [22], [[14]], [[4]],[5,6]];
var temp = myObj.toString().split(",");
var maps = temp.map(function(i){
	return parseInt(i);
});
console.log(maps);

/*
	https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from
http://www.tutorialspoint.com/javascript/javascript_arrays_object.htm
http://javascript.info/tutorial/array
*/