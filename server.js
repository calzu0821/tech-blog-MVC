const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const path = require('path');


const sequelize = require('./config/connection');
// Import the 'SequelizeStore' class for storing session data in a database.
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Create an Express application.
const app = express();
const PORT = process.env.PORT || 3001;

// Create an instance of the Handlebars template engine, using the 'helpers' defined earlier.
const hbs = exphbs.create({ helpers });

// Configure session settings.
const sess = {
  secret: 'Super secret secret',
  cookie: {}, // Configuration for cookies (empty in this case).
  resave: false, // Don't save the session if it hasn't changed.
  saveUninitialized: true, // Save a new but uninitialized session.
  store: new SequelizeStore({
    db: sequelize
  }) // Use SequelizeStore to store session data in the database.
};

// Use the 'express-session' middleware with the defined session settings.
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});