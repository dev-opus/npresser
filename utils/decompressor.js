const fs = require('fs');
const { createGunzip } = require('zlib');
const { pipeline } = require('stream');
const { promisify } = require('util');
const path = require('path');

const decompressSingle = async filename => {
  const readStream = fs.createReadStream(filename);
  const writeStream = fs.createWriteStream(path.parse(filename).name);

  await promisify(pipeline)(readStream, createGunzip(), writeStream);
};

const decompressMultiple = async filenames => {
  for (const filename of filenames) {
    const readsStream = fs.createReadStream(filename);
    const writeStream = fs.createWriteStream(path.parse(filename).name);

    await promisify(pipeline)(readsStream, createGunzip(), writeStream);
  }
};

module.exports = { decompressSingle, decompressMultiple };
