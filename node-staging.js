require('dotenv').config({ path: '.env.staging' });
const { exec } = require('child_process');

exec('react-app-rewired start', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${err.message}`);
    return;
  }
  console.log(stdout);
  console.error(stderr);
});
