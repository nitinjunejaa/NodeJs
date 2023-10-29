const { log } = require('console');
const os = require('os')


const user = os.userInfo()
// console.log(user);

// Method that returns the uptime of the sytem

console.log('The system uptims is', os.uptime(), 'seconds');

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);