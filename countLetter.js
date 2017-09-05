//Find the number of occurances of letter in a string

var str = "Alees are the best";
var letter = "e";
var count = 0,len = str.length;
for(var i=0; i<len;i++)
{
	if (letter == str[i]) {
		count++;
	}	
}
console.log(count);