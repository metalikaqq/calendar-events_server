require('dotenv').config();

const fs = require('fs');
const https = require('https');
const app = require('./app');

const port = process.env.PORT || 5000;

const certificate = fs.readFileSync('../certificate.crt');
const privateKey = fs.readFileSync('../private.key');

try {
  https.createServer({
    key: privateKey,
    cert: certificate
  }, app).listen(8443);

  console.log('HTTPS Server running on port 8443');
} catch (error) {
  console.error(error);
}

try {
  app.listen(port, () => console.log(`Server running on port ${port}`));
} catch (error) {
  console.error(error);
}

module.exports = app;