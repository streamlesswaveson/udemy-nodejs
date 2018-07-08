const request = require('supertest')
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {


    describe('GET /', () => {

        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect('hello world')
                .end(done)
        });
    });

    it('should return 404 response', (done) => {
        request(app)
            .get('/404')
            .expect(404)
            .expect({
                error: 'page not found'
            })
            .end(done)
    });

    it('should return custom response', (done) => {
        request(app)
            .get('/custom')
            .expect((res) => {
                expect(res.body).toInclude({name: 'foo bar'})
            })
            .end(done)
    });

    describe('GET /users', () => {
        it('should return your user', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({name: 'Streamless', age: 42})
                })
                .end(done)
        });
    });
});
