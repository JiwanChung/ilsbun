process.env.MONGO_URL = 'mongodb://jiwan:beetle27@ds031597.mlab.com:31597/ils';
process.env.PORT = 8002;
console.log(process.env.PORT);
console.log("WTF");
process.env.ROOT_URL = 'http://localhost:8002';
process.argv.splice(2, 0, './program.json');
process.chdir(require('path').join(__dirname, 'yslaw2_ystemp'));
require('./boot.js');
