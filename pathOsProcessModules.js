const path = require('path');
const os = require('os');
const process = require('process');

// Print out the current working directory
const currentWorkingDirectory = process.cwd();
console.log('Current Working Directory:', currentWorkingDirectory);

// Print out the separator of a given file path
const separator = path.sep;
console.log('Separator:', separator);

// Print out the extension name of a file path
const extensionName = path.extname('C:\Users\DELL\Desktop\Full Stack Development\ALT School Africa\ASSIGNMENTS\NodeJS Assignment\Core Modules\package.json');
console.log('Extension Name:', extensionName);

// Print out the process id of the current running process
const processId = process.pid;
console.log('Process Id:', processId);

// Print out the user information of the os
const userInfo = os.userInfo();
console.log('User Information:', userInfo);

// Print out the platform of an operating system
const platform = os.platform();
console.log('Platform:', platform);
