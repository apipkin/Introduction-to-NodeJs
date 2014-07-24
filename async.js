// asynchronous patterns

function insertItem (data, cb) {
    var timeout = Math.ceil(Math.random() * 3000); // random time up to 3 seconds

    // fake db insertion
    setTimeout(function (){
        cb(null, data);
    }, timeout);
};

function insertAll (collection, callback) {
    var remaining = collection.length;

    collection.forEach(function (item){
        insertItem(item, function (err, data) {
            console.log(item + ' inserted', data);
            if (--remaining === 0) {
                callback();
            }
        });
    });
};

function insertInOrder (collection, callback) {
    var queue = collection.slice(0);

    ;(function _insert() {
        if (queue.length) {
            insertItem(queue.shift(), function (err, data) {
                console.log('inserted item: ', data);
                process.nextTick(_insert);
            });
        } else {
            callback();
        }
    }());
}

insertAll([1,2,3,4,5,6,7,8,9,10], function () {
    console.log('insertAll: done');
});

insertInOrder([1,2,3,4,5,6,7,8,9,10], function () {
    console.log('insertInOrder: done');
});




