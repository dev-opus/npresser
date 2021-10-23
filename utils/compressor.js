const fs = require('fs');
const { createGzip } = require('zlib');
const { pipeline } = require('stream');
const { promisify } = require('util');

const compressSingle = async filename => {
  const readStream = fs.createReadStream(filename);
  const writeStream = fs.createWriteStream(`${filename}.gz`);

  await promisify(pipeline)(readStream, createGzip(), writeStream);
};

const compressMultiple = async filenames => {
  for (const filename of filenames) {
    const readStream = fs.createReadStream(filename);
    const writeStream = fs.createWriteStream(`${filename}.gz`);

    await promisify(pipeline)(readStream, createGzip(), writeStream);
  }
};

module.exports = { compressSingle, compressMultiple };
