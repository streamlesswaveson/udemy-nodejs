const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=5131%20Siesta%20Lane%20Yorba%20Linda',
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