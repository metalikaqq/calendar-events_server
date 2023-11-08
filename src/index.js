require('dotenv').config();

const app = require('./app');

const port = process.env.PORT || 5000;

try {
  app.listen(port, () => console.log(`Server running on port ${port}`));
} catch (error) {
  console.error(error);
}

module.exports = app;