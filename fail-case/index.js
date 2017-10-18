const glob = require('glob');
const result = glob.sync('node_modules/**/node_modules/**/node_modules/**/node_modules');
console.log(result);
