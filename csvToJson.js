
var fs = require("fs");
var file = "India2011.csv";

var out = "Indiacharan.json";
var result = [];
var obj={};


var totalmen = 0;
var totalwomen = 0;

// var maletemp = [];
// var femaletemp = [];

// function CSV2JSON(file,callback)
// {
	
	
	fs.readFile(file, function (err, data)
	{
		if (err) throw err;
		var d = data.toString();
		var lines = d.split("\n");
		var headers = lines[0].split(",");
		var object = {};
		for (var i = 1; i < lines.length; i++) 
		{
			var line1 = lines[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
			var object = {};
			
				totalmen += parseInt(line1[7]);
				totalwomen += parseInt(line1[8]);
				
				//object[headers[j]]=line1[j];
			
		}
		result.push(totalmen);
		result.push(totalwomen);
		
	});
// }


// function parse()
// {
// 	CSV2JSON(file, function (result) 
// 	{
// // console.log(result);
fs.writeFile("data1.json", JSON.stringify(result), function (err) 
{
	if (err) throw err;
	console.log("CSV to JSON completed");
});
// });

// }
// parse();