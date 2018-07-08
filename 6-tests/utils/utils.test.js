const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => {
    var result = utils.add(33, 11);
    expect(result)
        .toBe(44)
        .toBeA('number');
});

it('should async add two numbers', (done) => {
    utils.asyncAdd(4,3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    })
});

it('should square two numbers', () => {
    var result = utils.square(3)
    expect(result)
        .toBe(9)
        .toBeA('number');
});

it('should async square two numbers', (done) => {
    utils.asyncSquare(4, (s) => {
        expect(s).toBe(16).toBeA('number');
        done();
    })
});

it('should verify first and last names', ()=>{
    var user = {};
    var name = 'Andrew Mead';
    utils.setName(user, name);
    expect(user).toInclude({
        firstName: 'Andrew',
        lastName: 'Mead'
    })
});

// it('should expect some values', () => {
    // expect(12).toNotBe(2);
    // same object assertion
    // expect({'name':"Andrew"}).toBe({'name':"Andrew"})

    // looks at object properties
    // expect({'name':"Andrew"}).toEqual({'name':"Andrew"})

    // expect([2,3,4]).toInclude(5)
    //  expect([2,3,4]).toExclude(5)

    // expect({
    //     name: 'Andrew',
    //     age: 25,
    //     location: 'Philadelphia'
    // }).toInclude({
    //     age: 25
    // })
// });
