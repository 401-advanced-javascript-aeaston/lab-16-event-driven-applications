'use strict';

const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);

const events = require('./events.js');
// require('./logger.js');

const loadFile = (file) => readFile(file);
const saveFile = (file, buffer) => writeFile(file, buffer);
const convertBuffer = buffer => buffer.from(buffer.toString().trim().toUpperCase());

const alterFile = (file) => {
  return loadFile(file)
    .then(buffer => convertBuffer(buffer))
    .then(buffer => saveFile(file, buffer))
    .then(success => events.emit('file-save', {status: 1, file: file, text: 'saved properly'}))
    .catch(error => events.emit('file-error', {status: 0, file: file, text: error.message}));
}

module.exports = {loadFile, saveFile, convertBuffer, alterFile};