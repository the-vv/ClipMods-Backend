const { spawn } = require('child_process');
const os = require('os');

const platform = os.platform();

let cmd = '';
let args = ['serve'];

if (platform === 'linux') {
    cmd = './pocketbase_l';
} else {
    cmd = './pocketbase';
}

const child = spawn(cmd, args, { stdio: 'inherit' });

child.on('error', (error) => {
    console.error(`Error: ${error.message}`);
});
