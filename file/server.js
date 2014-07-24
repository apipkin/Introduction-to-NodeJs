var cluster = require('cluster'),
    numCPUs = require('os').cpus().length,
    i;

if (cluster.isMaster) {
    for (i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', function (worker, code, signal) {
        console.log('worker', worker.process.pid, 'died');
    });
} else {
    var server = require('./lib/app');

    server.start(function () {
       console.log('Server started', server.info.uri);
    });
}
