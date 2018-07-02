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

    if (response.statusCode === 200) {
        // console.log(body)
        if (body && body.results && body.results.length) {
            console.log(`${body.results[0].formatted_address}`)
            console.log(`${body.results[0].geometry.location.lat}`)
            console.log(`${body.results[0].geometry.location.lng}`)
        } else {
            console.log(body)
        }
    } else {
        console.log(error)
        console.log(response)
    }

})