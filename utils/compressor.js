const fs = require('fs');
const { createGzip, createGunzip } = require('zlib');
const { pipeline } = require('stream');
const { promisify } = require('util');

const compressSingle = async filename => {
  const readStream = fs.createReadStream(filename);
  const writeStream = fs.createWriteStream(`${filename}.gz`);

  await promisify(pipeline)(readStream, createGzip(), writeStream);
};
