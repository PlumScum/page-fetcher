const fs = require('fs');
const request = require('request');

const args = process.argv.slice(2);
const url = args[0];
const filepath = args[1];

request(url, (error, response, body) => {
  if (error) {
    return console.log("Error: ", error.message);
  }
  
  fs.writeFile(filepath, body, (error) => {
    if (error) {
      return console.log("Error: ", error.message);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${filepath}`);
    process.exit();
  });
});