process.env.MONGO_URL = 'mongodb://jiwan:beetle27@ds031597.mlab.com:31597/ils';
process.env.PORT = 8001;
console.log(process.env.PORT);
process.env.ROOT_URL = 'http://localhost:8001';
process.argv.splice(2, 0, 'program.json');
process.chdir(require('path').join(__dirname, 'programs', 'server'));
require('./boot.js');
