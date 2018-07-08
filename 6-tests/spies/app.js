var db = require('./db');

module.exports.handleSignup = (email, password) => {
    // check email, save user, send welcome
    db.saveUser({
        email,
        password
    })
}