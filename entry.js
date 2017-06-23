const glob = require('glob');
const path = require('path');
const content = path.resolve(__dirname, 'src');
const files = glob.sync(content+'/pages/*/index.js');
const newEntries = {};
files.forEach((item) => {
  const name = /.*\/pages\/(.*?)\/index\.js/.exec(item)[1];
   newEntries[name] = item;
})

module.exports = newEntries;
