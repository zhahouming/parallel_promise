const path = require('path')
const { Worker } = require('worker_threads')

module.exports = function (params) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(path.resolve(__dirname, 'worker.js'), {
      workerData: JSON.stringify({
        func: params.func.toString(),
        args: JSON.stringify(params.args)
      })
    })
    worker.on('message', data => {
      resolve(JSON.parse(data))
    })
    worker.on('error', reject)
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`))
    })
  })
}