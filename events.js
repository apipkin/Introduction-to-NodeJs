var util = require('util'),
    EventEmitter = require('events').EventEmitter;

function Animal (name) {
    this.noise = 'OOGAboogaBOoo!';
    this.aware = 0;

    this.on('alerted', this.makeSound.bind(this));
}

util.inherits(Animal, EventEmitter)

Animal.prototype.raiseAwareness = function () {
    if (++this.aware > 10) {
        this.emit('alerted');
    }
};

Animal.prototype.makeSound = function () {
    console.log(this.noise);
};

var cat = new Animal();

var pokeCat = setInterval(function () {
    console.log('poke: ' + cat.aware);
    cat.raiseAwareness();
}, 1000);

cat.on('alerted', function () {
    if (pokeCat) {
        clearInterval(pokeCat);
    }
});