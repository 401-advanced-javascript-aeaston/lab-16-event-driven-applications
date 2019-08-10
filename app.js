'use strict';

const files = require('./lib/files/js');

// const alterFile = (file) => {
//   fs.readFile( file, (err, data) => {
//     // if(err) { throw err; } make these event listeners
//     let text = data.toString().toUpperCase();
//     fs.writeFile( file, Buffer.from(text), (err, data) => {
//       // if(err) { throw err; }
//       // console.log(`${file} saved`); make this a promise
//     });
//   });
// };

let file = process.argv.slice(2).shift();
files.alterFile(file);

// code from demo

// const events = require('./events.js');

// require('./logger.js');
// require('./danger.js');

// events.emit('create', {id:17, name: 'Electronics'});
// events.emit('delete', {id: 17});
// events.emit('update', {id: 17, name: 'Food'});
