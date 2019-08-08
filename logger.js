'use Strict';

// code from demo

const events = require('./events.js');

events.on('create', payload => doLog('create', payload));
events.on('delete', payload => doLog('delete', payload));
events.on('update', payload => doLog('update', payload));

function doLog(action, payload) {
  console.log(action.toUpperCase(), payload);
}