const alert = require('cli-alerts');
const chalk = require('chalk');

module.exports = type => {
  switch (type) {
    case type === 'error':
      alert({
        type: 'error',
        msg: chalk.red('Operation was unsuccessful!'),
      });
      break;

    case type === 'success':
      alert({
        type: 'success',
        msg: chalk.green('Operation was successful!'),
      });
      break;

    default:
      break;
  }
};
