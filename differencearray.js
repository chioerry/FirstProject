//You need to display the difference between two arrays.


var a1 = [1,2,3];
var array1 = Array.from(a1),i,j,k,l;

var a2 = [1,1,2,3];
var array2 = Array.from(a2);
var temp=[];
var ans = [];

function differencearray(){
	for( i=0;i<a1.length;i++){

		for( j=0;j<a2.length;j++){
			if (array1[i] == array2[j]) 
			{	
				array1[i]="$";
				array2[j]="$";				 
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

	l=0;
	for(k=0;k<a2.length;k++){
		 if (array2[k]!="$") {
			temp[l]=array2[k];
			l++;
		}
		
	}

	return ans.concat(temp);
}

var f  = differencearray();

console.log(f);
