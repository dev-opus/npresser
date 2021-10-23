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
  try {
    init({ clear });
    input.includes(`help`) && cli.showHelp(0);

    if (input.includes('press') && input.includes('unpress')) {
      return log('error', 'Invalid Operation!');
    }

    if (input.includes('press')) {
      if (input[0] !== 'press') {
        log('error', 'Unsupported argument format!');
      }
    }
  } catch (error) {
    return log('error', error.message);
  }
})();
