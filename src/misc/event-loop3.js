setTimeout(() => {
  setTimeout(() => {
    console.log('timeout')
  }, 1);
  setImmediate(() => {
    console.log('immediate')
  })
}, 1);