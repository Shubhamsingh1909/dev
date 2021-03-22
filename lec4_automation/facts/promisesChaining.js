let fs=require("fs");

let f1kapromise=fs.promises.readFile("./f1.txt");
//then bhi pending promises deta hai 


f1kapromise.then(function(data)){
    console.log("content="+")
}