var Lab = require('lab'),
    server = require('../app.js');

Lab.experiment('Users', function () {


    Lab.test('main endpoint', function (done) {
        var options = {
            method: 'GET',
            url: '/'
        };

        server.inject(options, function (resp) {
            var result = resp.result;

            Lab.expect(resp.statusCode).to.equal(200);
            Lab.expect(result).to.be.a('string');
            Lab.expect(result).to.equal('Hello, world!');

            done();
        });
    });


    Lab.test('adding a param', function (done) {
        var options = {
            method: 'GET',
            url: '/Node'
        };

        server.inject(options, function (resp) {
            var result = resp.result;

            Lab.expect(resp.statusCode).to.equal(200);
            Lab.expect(result).to.be.a('string');
            Lab.expect(result).to.equal('Hello, Node!');

            done();
        });
    });


});