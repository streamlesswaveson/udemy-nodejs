const yargs = require('yargs');
const axios = require('axios');
const fs = require('fs');

const darkskykey = fs.readFileSync('weather/.darksky');

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
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`;

axios.get(geocodeUrl)
    .then((response) => {
        if (response.data.status === 'ZERO_RESULTS') {
            throw new Error("unable to find address (zero results)")
        }
        if (response.data.status === 'OK') {
            var addr = response.data.results[0];
            var lat = addr.geometry.location.lat;
            var lon = addr.geometry.location.lng;
            var formatted = addr.formatted_address;
            console.log(formatted);
            var url = `https://api.darksky.net/forecast/${darkskykey}/${lat},${lon}`
            return axios.get(url);
        } else {
            throw new Error(JSON.stringify(response.data, undefined, 2));
        }
    })
    .then((response) => {
        var temp = response.data.currently.temperature;
        var appTemp = response.data.currently.apparentTemperature;
        console.log(`current ${temp}. Feels like ${appTemp}`)
    })
    .catch((e) => {
        console.log('error!', e);
    })