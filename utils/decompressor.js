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
