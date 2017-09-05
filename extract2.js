var totalmen = 0;
var totalwomen = 0;

var myJson = JSON.parse(Indiacharan.json);

var maletemp = [];
var femaletemp =[];

for(let i in myJson)
{
	if (myJson[i] === "Total Males") {
		maletemp.push(myJson[i].value);
	}
	else if (myJson[i] === "Total Females")
	{
		femaletemp.push(myJson[i].value);
	}
}