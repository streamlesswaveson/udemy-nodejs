console.log('starting app')

setTimeout(() => {
    console.log('inside of callback')
}, 2000)

setTimeout(() => {
    console.log('zero')
}, 0)
console.log('ending app')
