// Sort the array by title

var library = [
{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];

function titlesort(z){

			return z.sort();
		}

for (let [key, value] of library) {
	
	if (key == "title") 
	{
		
		titlesort(value);

	}
}

for(let i in library)
{
	console.log(i);
}

