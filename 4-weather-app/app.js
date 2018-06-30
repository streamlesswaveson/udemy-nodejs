const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=5131%20Siesta%20Lane%20Yorba%20Linda',
    json: true
}, (error, response, body) => {

    console.log(JSON.stringify(body, undefined, 2))

})