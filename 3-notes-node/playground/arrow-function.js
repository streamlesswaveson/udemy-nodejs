// nodemon playground/arrow-function.js

// if only one arg, no need for parens
var square = x => x * x

console.log(square(9))

// arrow functions don not bind the 'this' keyword
var user = {
    name: 'Andrew',
    sayHi: () => {
        // this will print the global arguments variable
        console.log(arguments)
        console.log(`Hi ${this.name}`)
    },

    // alternative syntax - this does work; use this syntax instead
    sayHiAlt () {
        console.log(arguments)
        console.log(`Hi. I'm ${this.name}`)
    }
}

user.sayHi(1,2,3)

user.sayHiAlt(1,2,3)
