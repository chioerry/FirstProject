var obj = {
"One":"1",
"Two":"2",
"Three":"3",
"Four":"4"
};
var ans =[];
var z = 0
for(let i in obj)
{
	ans[z]= obj[i];
	z++; 
}
console.log(ans);