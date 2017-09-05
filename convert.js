// function convert(){
// 	var fs = require('fs');
// 	var readline = require('readline');
// 	var path = 'India2011.csv';

// 	var rl = readline.createInterface({
// 		input : fs.createReadStream(path)
// 	});

// 	var temp = [];

// 	rl.on('line', function(line){
// 		var lines = line.split('\n');
// 		temp.push(lines);

// 		var result = [];
// 		var headers = temp[0].toString().split(',');

// 		for(var i=0;i<temp.length;i++){
// 			var obj = {};
// 			var currentLine = temp[i].toString().split(',');

// 			for(var j=0;j<headers.length;j++){
				
// 			}
// 		}
// 	});
// }


// const readline = require('readline');
// const fs = require('fs');
// var tempdata ={};
// var men = 0;
// var women = 0;


// const rl = readline.createInterface({
// 	input : fs.createReadStream('India2011.csv')
// });

// rl.on('line', function(line){
// 	var line1 = line.split(',');
// 	if(!isNaN(line1[7]) || !isNaN(line1[8]))
// 	{
// 		men += parseInt(line1[7]);
// 		women += parseInt(line1[8]);
// 	}
// 	//console.log(men);
// 	tempdata["States"] = "All";
// 	tempdata["Men"] = men;
// 	tempdata["Women"] = women;
// });

// var jsonData = JSON.stringify(tempdata);

// rl.on('close', function(line){
// 	fs.writeFileSync('hi.json',jsonData,encoding = "utf-8"); 
// });
// console.log("Json Created!!!");

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

var jsonData=JSON.stringify(tempData);

rl.on('close', function(line) {
	fs.writeFileSync("data.json",jsonData,encoding="utf8");
});


console.log("CSV to Json Converted");