const { parentPort, workerData } = require('worker_threads')
let { func, args } = JSON.parse(workerData)
fn = new Function('return ' + func)()
let results = fn(args)
parentPort.postMessage(JSON.stringify(results))
