const request = require('request');
const fs = require('fs');

const googlekey= fs.readFileSync(('geocode/.google'));

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
            // url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${googlekey}`,
            json: true
        }, (error, response, body) => {

            if (error) {
                reject('Unable to connect to Google maps');
                return;
            }

            if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find results');
                return;
            }

            if (response.statusCode === 200 && body.status === 'OK') {
                // console.log(body)
                if (body && body.results && body.results.length) {
                    var result = {
                        address: `${body.results[0].formatted_address}`,
                        lat: `${body.results[0].geometry.location.lat}`,
                        lon: `${body.results[0].geometry.location.lng}`
                    };
                    resolve(result);
                    return;
                }
            }

            reject(JSON.stringify(response, null, 2))
        }); // end request

        }); //end promise
};

geocodeAddress('19146')
    .then((location) => {
            console.log(JSON.stringify(location, undefined, 2))
        },
        (error) => {
            console.log('failed!', error);
        })