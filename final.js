const readline = require('readline');
const fs = require('fs');
//var header =[];

var tempData={};
//var isHeader=true;
var totalmen =0;
var totalwomen =0;
const rl = readline.createInterface({
	input: fs.createReadStream('India2011.csv')
});
rl.on('line', function(line) {

	var line1= line.trim().split(',');

	if(!isNaN(line1[7])&& !isNaN(line1[8]))
	{
		totalmen+=parseInt(line1[7]);
		totalwomen+=parseInt(line1[8]);
	}

	//console.log(totalmen);
	tempData["States"] = "All";
	tempData["Total men"] = totalmen;
	tempData["Total women"] = totalwomen;
});
console.log(tempData);


rl.on('close', function(line) {
	var jsonData=JSON.stringify(tempData);
	fs.writeFileSync("hi.json",jsonData,encoding="utf8");
});


console.log("CSV to Json Converted");