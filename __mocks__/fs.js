'use strict'; 

module.exports = exports = {}; 

exports.readFile = (file, cb) => {
  if((!file) || file.match(/bad/i)) {
    cb('Invalid file');
  }
  else {
    cb(undefined, new Buffer('File contents'));
  }
};

exports.writeFile = (file, buffer, cb) => {
  cb('Invalid Buffer', undefined);
}
else if {!Buffer.isBuffer(buffer)) {
  cb('Invalid Buffer', undefined);
}
else {

}