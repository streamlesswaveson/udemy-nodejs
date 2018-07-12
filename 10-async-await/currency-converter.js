// currency code = USD
// target code CAD
// amount
// list all the countries you can spend the currency

const fs = require('fs');
const axios = require('axios');

const fixerApiKey = fs.readFileSync('.fixerapikey');

const baseUrl = `http://data.fixer.io/api/latest?access_key=${fixerApiKey}&format=1`


// Before - not using async/await
// const getExchangeRate = (from, to) => {
//     return axios.get(baseUrl).then((response) => {
//         const euro = 1/response.data.rates[from];
//         console.log('euros=',euro);
//         const rate = euro * response.data.rates[to];
//         return rate;
//     })
// };

const getExchangeRate = async (from, to) => {
    try {
        const response = await axios.get(baseUrl);
        const euro = 1 / response.data.rates[from];
        const rate = euro * response.data.rates[to];
        return rate;
    }catch (e) {
        const errmessage = `Unable to resolve exchange rate for ${from} and ${to}`;
        // console.log(errmessage, e);
        throw new Error(errmessage);
    }
};

const getCountries = async (currencyCode) => {
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
        return response.data.map((i) => i.name)
    }catch(e) {
        const errmessage = `Unable to resolve currencyCode ${currencyCode}`
        // console.log(errmessage, e);
        throw new Error(errmessage);
    }
};

// getExchangeRate('USD', 'CAD').then((rate) => {
//     console.log('rate=', rate);
// });
//
// getCountries('USD').then((arr) => {
//     console.log(JSON.stringify(arr, undefined, 2));
// });

const convertCurrency = async (from, to, amount) => {
    const rate = await getExchangeRate(from, to);
    const convertedAmount = (amount * rate).toFixed(2)
    const countries = await getCountries(to)

    return `${amount} ${from} is ${convertedAmount} ${to}.  You can spend it in the following countries ${countries.join(', ')}`
};

module.exports.convertCurrency = convertCurrency

