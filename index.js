var os = require('os');

console.log('CPU architecture: ' + os.arch())

console.log('CPU info:')
console.log(os.cpus())

console.log('Endianness:')
console.log(os.endianness())

console.log('Free Memory:')
console.log(os.freemem())

console.log("Current user's home directory:")
console.log(os.homedir())

console.log('Computer Name:')
console.log(os.hostname())

console.log('Load Average (Windows incompatible)')
console.log(os.loadavg())

console.log('Network Interfaces')
console.log(os.networkInterfaces())

console.log('OS Platform:')
console.log(os.platform())

console.log('OS version:')
console.log(os.release())

console.log('Default directory for temporary files:')
console.log(os.tmpdir())

console.log('Total amount of System Memory:')
console.log(os.totalmem())

console.log('OS type:')
console.log(os.type())

console.log('Uptime:')
console.log(os.uptime())