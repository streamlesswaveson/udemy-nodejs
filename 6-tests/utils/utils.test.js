const utils = require('./utils');

it('should add two numbers', () => {
    var result = utils.add(33, 11);
    if (result !== 44) {
        throw new Error(`Expected 44 got ${result}`);
    }
});

it('should square two numbers', () => {
    var result = utils.square(3)
    if (result !== 9) {
        throw new Error(`Expected 9 got ${result}`);
    }
});
