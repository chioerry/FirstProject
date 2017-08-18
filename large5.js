// find Largest of 5 numbers using conditional Loops

var array = [19,20,9,56,89];
console.log(array);
var len=array.length, i=0,max;
for (;i < len - 1;  i++) {
	
	if(array[i]>array[i+1])
	{
		max = array[i];
	}
	else
	{
		max = array[i+1];
	}
}
console.log(max);
console.log('check')

// Check the output in terminal using: node large5.js