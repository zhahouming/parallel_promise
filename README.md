# parallel_promise

Running cpu-intensive task in parallel

## Installing

``` bash
$ npm install parallel-promise
```

## Example

``` javascript
const parallel = require('parallel-promise')

const cpuIntensiveTask = {
  func: function (data) { // data <=> cpuIntensiveTask.args
    console.log('do something...')
    return data.msg
  },
  args: {
    msg: 'task complete!'
  }
}

parallel(cpuIntensiveTask).then(data => {
  console.log('success', data)
}).catch(err => {
  console.error('error', err.message)
})
```

## Params

### func

Definetion of cpu-intensive task

### args

Params for cpu-intensive task
