// Instance responsible for connecting to and interacting with the database.
const sequelize = require('../config/connection');
// These models represent the structure of the "user" and "post" tables in your database.
const { User, Post } = require('../models');

// Reads data from json file and assigns it to the variables userData and postData.
const userData = require('./userData.json');
const postData = require('./postData.json');

// Async funtion that will be responsible for populating the database with the user and post data.
const seedDatabase = async () => {
  // Synchronize the database by creating or recreating tables.
  // The { force: true } option clears the database before seeding it.
  await sequelize.sync({ force: true });

  // Bulk insert user data into the "user" table.
  const users = await User.bulkCreate(userData, {
    individualHooks: true, // true option triggers any defined Sequelize hooks for each user,
    returning: true, // true instructs Sequelize to return the inserted user data.
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

// Exits the Node.js process with a status code of 0, indicating successful execution of the seeding process.
  process.exit(0);
};

// Initiates the db seeding process
seedDatabase();