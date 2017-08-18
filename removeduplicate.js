//js program to remove duplicate from an array

// var array = [ 1, 2, 2, 4, 4];
// var a = array.toString().split(",");
// var len = a.length;
// var ans = [];
// for(var i=0; i<len; i++)
// {
// 	var count = 1;

// 	for (var j = i+1; j < len; j++) {

// 		if (a[i] == a[j]) 
// 		{
// 			a[j]=undefined;
// 		}
// 	}
	
// }

// var i = 0;
// for(var k=0;k<len;k++)
// {
// 	if (a[k]!=undefined) {
// 		ans[i]=a[k];
// 		i++;
// 	}
// }
// console.log(ans);


var array = [1,2,2,3,4,4,6,6,6,3];
var sets = new Set(array);
console.log(Array.from(sets));