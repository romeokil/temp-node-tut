const os=require('os');
console.log(os.userInfo());

const time=os.uptime();
console.log(time);

const currentos={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}
console.log(currentos);