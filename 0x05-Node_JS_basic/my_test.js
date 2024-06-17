// handle ctrl-C
process.stdin.resume();
process.on('SIGINT', ()=> console.log('Got a SIGINT interrupt....Press ctrl-D to exit'))

// print env variables
console.log(process.env)

//print the architecture of your device
console.log('The architectureof my machine is: ' + process.arch)