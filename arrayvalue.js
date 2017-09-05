// Sort the array by title

var library = [
{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];

function valuesort(x,y){


	
		if (x.title<y.title) 
		{		
			return -1;
		}
		else if (x.title>y.title) 
		{		
			return 1;
		}
		else
		{
			return 0;
		}
	
}

var z = library.sort(valuesort);

console.log(z);