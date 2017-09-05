var student  =new Map([['David',80],['Vinoth',77],['Divya',88],['Ishitha',95],['Thomas',68]]);

var names = Array.from(student.keys());

var marks = Array.from(student.values());

console.log(names);

console.log(marks);

for(let i in marks)
{
	if(i>0 && i<60)
	{
		student.set(names[i],'F');
	}
	else if(i>60 && i<70)
	{
		student.set(names[i],'D');
	}
	else if(i>70 && i<80)
	{
		student.set(names[i],'C');
	}
	else if(i>80 && i<90)
	{
		student.set(names[i],'B');
	}
	else 
	{
		student.set(names[i],'A');
	}
}

console.log(student);

