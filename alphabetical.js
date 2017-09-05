// Sort the string in alphabetical order

var str = "Hippopotamus";
var tem = Array.from(str.toLowerCase());
console.log(tem);
var req = tem.sort();
var ans="";
for(let i in req)
{
	ans+=req[i];
}
console.log(ans);