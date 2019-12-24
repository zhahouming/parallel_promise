// node --experimental-worker example/test.js

const parallel = require('../src')

let task = {
  func: function (data) {
    function sleep(time){
      for( var temp = Date.now(); Date.now() - temp <= time;);
    }
    console.log('computing something...')
    sleep(5 * 1000)
    console.log('on processing...')
    return data
  },
  args: 'hahahaah'
}

parallel(task).then(data => {
  console.log('success', data)
}).catch(err => {
  console.error('error', err)
})
