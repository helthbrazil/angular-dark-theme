const fs = require('fs');

const apiKey = process.argv[2];

// Replace placeholder in environment files
['src/environments/environment.ts', 'src/environments/environment.prod.ts'].forEach(filePath => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const result = data.replace(/{{apiKey}}/g, apiKey);

    fs.writeFile(filePath, result, 'utf8', err => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`API key replaced in ${filePath}`);
    });
  });
});
