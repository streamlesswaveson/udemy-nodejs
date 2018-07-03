const yargs = require('yargs');

const geocode = require('./geocode/geocode.js')

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


geocode.geocodeAddress(argv.address, (errorMessage, results)=> {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, null, 2));
    }
});
