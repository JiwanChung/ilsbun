process.argv.splice(2, 0, 'program.json');
process.chdir(require('path'));
require('./boot.js');
