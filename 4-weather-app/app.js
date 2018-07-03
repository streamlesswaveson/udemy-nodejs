const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'The address',
            string: true // always parse as a string
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var address = encodeURIComponent(argv.address);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
    json: true
}, (error, response, body) => {

    if (error) {
        console.log('Unable to connect to Google maps');
        return;
    }

    if (body.status === 'ZERO_RESULTS') {
        console.log('Unable to find results');
        return;
    }

    if (response.statusCode === 200 && body.status === 'OK') {
        // console.log(body)
        if (body && body.results && body.results.length) {
            console.log(`${body.results[0].formatted_address}`)
            console.log(`${body.results[0].geometry.location.lat}`)
            console.log(`${body.results[0].geometry.location.lng}`)
        } else {
            console.log(body)
        }
    }

})