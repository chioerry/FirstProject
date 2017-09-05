
let myJson = {'fruit':'apple', 'day':'sunny', 'year':'2020'};
let ans = [];
let temp = [];
let result = {};

ans = Array.from(Object.keys(myJson));

temp = Array.from(Object.values(myJson));

for(let i in ans)
{
	result[temp[i]] = ans[i];
}

console.log(result);

/*
let myJson = {'fruit':'apple', 'day':'sunny', 'year':'2020'};

let result = {};

for(let key in myJson)
{
	result[myJson[key]] = key;
}

console.log(result);

*/