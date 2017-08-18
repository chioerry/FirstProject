//You need to display the difference between two arrays.You see below is conventional method...........


// var a1 = ["a","red","b","green","c","yellow"];
// var array1 = a1.toString().split(","),i,j,k,l;

// var a2 = ["e","red","f","green","g","blue"];
// var array2 = a2.toString().split(",");
// var temp=[];
// var ans = [];	
// function differencearray(){
// 	for( i=0;i<a1.length;i++){

// 		for( j=0;j<a2.length;j++){
// 			if (array1[i] == array2[j]) 
// 			{	
// 				array1[i]="$";
// 				array2[j]="$";				 
// 			}
// 		}
// 	}

// 	i=0;
// 	for(k=0;k<a1.length;k++)
// 	{
// 		if (array1[k]!="$") {
// 			ans[i]=array1[k];
// 			i++;
// 		}
// 	}

// 	l=0;
// 	for(k=0;k<a2.length;k++){
// 		 if (array2[k]!="$") {
// 			temp[l]=array2[k];
// 			l++;
// 		}
		
// 	}

// 	return ans.concat(temp);
// }

// var f  = differencearray();

// console.log(f);

//================================================================================================================
//Scrap the old methods and use new methods to reduce the load........

var a1 = ["a",1,"b",2,"c",3];

var a2 = ["e",1,"f",6,"g",3];

var temp = a1.concat(a2);

var sets = new Set(temp);

var ans = Array.from(sets);

console.log(ans);