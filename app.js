'use strict';

const fs = require('fs');

const alterFile = (file) => {
  fs.readFile( file, (err, data) => {
    // if(err) { throw err; } make these event listeners
    let text = data.toString().toUpperCase();
    fs.writeFile( file, Buffer.from(text), (err, data) => {
      // if(err) { throw err; }
      // console.log(`${file} saved`); make this a promise
    });
  });
};

let file = process.argv.slice(2).shift();
alterFile(file);
