const fs=require('fs');
//or can be written as
// const { readFileSync , writeFileSync } =require(fs);
console.log('start the program');
const first=fs.readFileSync('./content/first.txt','utf-8');
const second =fs.readFileSync('./content/second.txt','utf-8');

// console.log(first);
// console.log(second);

fs.writeFileSync(
    './content/result-sync.txt'
    ,`Here is the result : ${first},${second}`
)
console.log("done with the task");
console.log("starting with another one");
