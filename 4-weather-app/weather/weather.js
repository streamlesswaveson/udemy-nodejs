
const request = require('request');
const fs = require('fs');

const darkskykey = fs.readFileSync('weather/.darksky');

var weather = (lat, lon, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${darkskykey}/${lat},${lon}`,
        json: true

    }, (error, response, body) => {
        if (error) {
            callback(error);
            return;
        }
        if (response.statusCode == 200 && body && body.currently) {
            callback(null, { temp: body.currently.temperature, apparent: body.currently.apparentTemperature} );
        } else {
            callback("Unable to fetch weather")
        }
    })
};

module.exports.weather = weather;