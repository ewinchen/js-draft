console.log('sync 1 in root');
setTimeout(() => {

  console.log('timeout 1 in root before process.nextTick')

  process.nextTick(() => {
    console.log('process.nextTick 2 in timeout 1')
  })

  console.log('timeout 1 in root after process.nextTick')

  setTimeout(() => {
    console.log('timeout 2 in timeout 1')
  }, 1);
}, 1);

process.nextTick(() => {
  console.log('process.nextTick 1 in root')
  setTimeout(() => {
    console.log('timeout 3 in process.nextTick 1')
  }, 1);
})

console.log('sync 2 in root')

setImmediate(() => {
  console.log('setImmediate 1 in root')
})

