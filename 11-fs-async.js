// const fs=require('fs');
//or can be written as
// const { readFileSync , writeFileSync } =require(fs);
//Since it is asynchronous approach so we don't need to write Sync 
const {readFile,writeFile} =require('fs');
console.log('start');

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first=result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
        }
        const second=result;
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            (err,result=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('done with the task');
        }))
    })
})
console.log('starting the another task');