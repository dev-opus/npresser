const fs = require('fs');
const { createGzip } = require('zlib');
const { pipeline } = require('stream');
const { promisify } = require('util');

const compress = async filenames => {
  for (const filename of filenames) {
    const readStream = fs.createReadStream(filename);
    const writeStream = fs.createWriteStream(`${filename}.gz`);

    await promisify(pipeline)(readStream, createGzip(), writeStream);
  }
};

module.exports = { compress };
