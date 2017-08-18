//You need to display the difference between two arrays.That is similar to (a-b) in set theory in mathematics.

var a1 = ["a","red","b","green","c","yellow"];
var array1 = a1.toString().split(","),i,j,k;

var a2 = ["e","red","f","green","g","blue"];
var array2 = a2.toString().split(",");

var ans = [];	
function differencearray(){
	for( i=0;i<a1.length;i++){
		
		for( j=0;j<a2.length;j++){
			if (array1[i] == array2[j]) 
			{	
				array1[i]=(`$`);				 
			}
		}
	}
	i=0;
	for(k=0;k<a1.length;k++)
	{
		if (array1[k]!="$") {
			ans[i]=array1[k];
			i++;
		}
		
	}

	return ans;
}

var f  = differencearray();

console.log(f);