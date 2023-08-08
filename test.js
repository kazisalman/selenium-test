const Mocha = require('mocha');
const path = require('path');

// Create a new Mocha instance
const mocha = new Mocha();

// Add your test files to Mocha
mocha.addFile(path.join(__dirname, 'test', 'a.js'));
// Add more test files if needed

// Run the tests
mocha.run((failures) => {
  process.exitCode = failures ? 1 : 0;
});
