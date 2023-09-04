// Configuring a database connection using the Sequelize library in a node.js application.

// Import the Sequelize library.
const Sequelize = require('sequelize');
require('dotenv').config();

// Declare a variable. This variable will be used to hold the Sequelize database connection object.
let sequelize;

// Checks whether an environment variable called JAWSDB_URL exists.
// Usually this variable is set in hosting environments like Heroku and contains the URL needed to connect to a cloud-based database service.
if (process.env.JAWSDB_URL) {
    // If the JAWSDB_URL environment variable exists, this line creates a new Sequelize instance using the URL provided in process.env.JAWSDB_URL. 
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

// Export the object for use in other parts of the application.
module.exports = sequelize;