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

const { compress } = require('./utils/compressor');

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
        return log('error', 'Unsupported argument format!');
      }

      const files = input.filter(items => items !== 'press');
      await compress(files);
      log(
        'success',
        `${
          files.length > 1
            ? 'Files were successfully compressed!'
            : 'File was successfully compressed!'
        }`
      );
    }
  } catch (error) {
    return log('error', error.message);
  }
})();
