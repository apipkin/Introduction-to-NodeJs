#! /usr/local/bin/node

var args = process.argv.slice(2),
    name;

switch (args.length) {
    case 0:
        name = 'world';
        break;
    case 1:
        name = args[0];
        break;
    case 2:
        name = args.join(' and ');
        break;
    default:
        args[args.length - 1] = 'and ' + args[args.length -1 ];
        name = args.join(', ');
        break;
}

console.log('Hello, ' + name + '!');
