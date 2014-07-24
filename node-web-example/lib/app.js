var Hapi = require('hapi'),
    server = Hapi.createServer(+process.env.PORT || 3000);

server.route({
    method: 'GET',
    path: '/{names*}',
    handler: function (req, reply) {
        var names = (req.params.names && req.params.names.split('/')) || [],
            name;

        switch (names.length) {
            case 0:
                name = 'world';
                break;
            case 1:
                name = names[0];
                break;
            case 2:
                name = names.join(' and ');
                break;
            default:
                names[names.length - 1] = 'and ' + names[names.length -1 ];
                name = names.join(', ');
                break;
        }

        reply('Hello, ' + name + '!');
    }
});

if (!module.parent) {
    server.start(function () {
        console.log('Server started', server.info.uri);
    });
}

module.exports = server;
