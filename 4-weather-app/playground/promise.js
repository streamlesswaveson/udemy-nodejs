var asyncAdd = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a+b)
            } else {
                reject('args must be numbers');
            }
        }, 1500);
    })
};

asyncAdd(4,1)
    .then((result) => {
        console.log(result)
        return asyncAdd(result, '234');
    })
    .then((result) => console.log(result))
    .catch((err) => {
        console.log('failed!', err);
    })

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('it worked');
//         reject('unable to fulfill')
//     }, 2500);
// });
//
// somePromise.then((message) => {
//     console.log('Success', message);
// }, (error) => {
//     console.log('Error!', error)
// })