//program to list the properties of a JavaScript object

var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
var ans=[];
var len = student.length;
for(let [key,value] of student)
{
	for(let i of key)
	{
		ans[i] = key;
	}
}

console.log(ans);

