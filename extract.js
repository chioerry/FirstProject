function csvJSON(){ 

var fs = require('fs'); // adding fs module
var readline = require('readline'); // adding readline module
path = 'India2011.csv';
// var read_stream = fs.createReadStream('');
var rl = readline.createInterface({
    input: fs.createReadStream(path)
      });
//console.log("Outside RL");
var temp = [];
rl.on('line', function(line){
  var lines=line.split("\n");
  //lines.toString();
  temp.push(lines);
//console.log("Inside RL " + line.split("\n"));
  var result = [];

  var headers=temp[0].toString().split(",");
  //console.log("Headers : " + headers);

  for(var i = 1 ; i < temp.length ; i++){
//console.log("inside for");
	  var obj = {};
	  var currentline=temp[i].toString().split(",");
	  //console.log("CurrentLine : " + currentline);

	  for(var j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
		  //console.log("Objects : " + (obj[headers[j]]));
		  if(obj['Primary Type'] == "THEFT") {
    		result.push(obj);
	}    
}	  
	  console.log("Result : " + JSON.stringify(result));
	  }
	  
  })
  //console.log(JSON.stringify(result));

.on('close', function(close){
  return 'exit'
});

}

csvJSON();