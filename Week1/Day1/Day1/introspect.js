const os = require('os');
console.log('Os:', os.type());
console.log('Architecture:',os.arch());
console.log('CPU Cores:',os.cpus().length);
console.log('Total memory:',(os.totalmem() / (1024 ** 3)).toFixed(2)+ ' GB');
console.log('System uptime:',(os.uptime() / 3600).toFixed(2) + 'hours');
console.log('Current logged user:',os.userInfo().username);
console.log('Node Path:',process.execPath);





