#!/usr/bin/env node

/**
 * npresser
 * A simple file compressor CLI application built with node.js
 *
 * @author victor orlunda <https://github.com/dev-opus>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear } = flags;

(async () => {
  init({ clear });
  input.includes(`help`) && cli.showHelp(0);

  if (input.includes('press') && input.includes('unpress')) {
    return log('error', 'Invalid Operation!');
  }
})();
