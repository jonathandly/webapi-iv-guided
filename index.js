require('dotenv').config();

const server = require('./api/server.js');

// Read the port from the server environment if it is there
// heroku will have the PORT environment variable set
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`);
});
