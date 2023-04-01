const { readFile }=require('fs');
console.log("starting first task");
readFile('./content/first.txt','utf-8',(err,res)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(res);
    console.log("First task completed.");
})
console.log("Initiating second task");