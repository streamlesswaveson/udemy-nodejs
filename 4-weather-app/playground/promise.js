var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('it worked');
        reject('unable to fulfill')
    }, 2500);
});

somePromise.then((message) => {
    console.log('Success', message);
}, (error) => {
    console.log('Error!', error)
})