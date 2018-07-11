const yargs = require('yargs');

const converter = require('./currency-converter')

const argv = yargs
    .options({
        f: {
            demand:true,
            alias: 'from',
            describe: 'Source Currency Code',
            string :true
        },
        t: {
            demand: true,
            alias: 'to',
            describe: 'Target Currency Code',
            string: true // always parse as a string
        },
        a: {
            demand: true,
            alias: 'amount',
            describe: 'Amount to be converted',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

converter.convertCurrency(argv.from,argv.to, argv.amount).then((result) => {
    console.log(result);
});
