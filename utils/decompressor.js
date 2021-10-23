const fs = require('fs');
const { createGunzip } = require('zlib');
const { pipeline } = require('stream');
const { promisify } = require('util');
const path = require('path');

const decompress = async filenames => {
  for (const filename of filenames) {
    const readsStream = fs.createReadStream(filename);
    const writeStream = fs.createWriteStream(path.parse(filename).name);

    await promisify(pipeline)(readsStream, createGunzip(), writeStream);
  }
};

module.exports = { decompress };
