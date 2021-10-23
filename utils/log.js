const alert = require('cli-alerts');
const chalk = require('chalk');

module.exports = (type, msg) => {
  switch (type) {
    case 'error':
      alert({
        type: 'error',
        msg: msg || chalk.red('Operation was unsuccessful!'),
      });
      break;
    case 'success':
      alert({
        type: 'success',
        msg: msg || chalk.green('Operation was successful!'),
      });
      break;
    default:
      break;
  }
};
