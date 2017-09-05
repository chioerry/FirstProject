
// let fs = require('fs'); 
// function ReadAppend(file, appendFile) {
//     // Reading the append file     
// fs.readFile(appendFile, function(err, data) {
//     if (err) {
//        // console.log('File was not Read');             
//        throw err;         
//        }       
//        // console.log('File was Read');         
//        fs.appendFile(file, data, function(err) {
//         //  console.log('File')             
//         if (err) {
//         //   console.log('File was not append ');                
//         throw err;             
//         }             
//         // console.log('The "data to append" was appended to a file');        
//         });     
//         }); 
//         }  

//         file = 'India2011.csv';         
//         appendFile = 'IndiaSC2011.csv';
//         file3 = 'IndiaST2011.csv'; 

//         ReadAppend(file, appendFile);

//         ReadAppend(file, file3);


// module.exports = ReadAppend;


let fs = require('fs');

function ReadAppend(file, file2){
  fs.readFile(file2, function(err,data){
    if (err) {
      throw err;
    }
    fs.appendFile(file, data, function(err){
      if (err) {
        throw err;
      }
    });
  });
console.log("Files Merged Successfully");
}
out = '../inputdata/IndiaMerge.csv';
file = '../inputdata/India2011.csv';
file2 = '../inputdata/IndiaST2011.csv';
file3  = '../inputdata/IndiaSC2011.csv';
ReadAppend(out, file); 
ReadAppend(out, file2);
ReadAppend(out, file3);