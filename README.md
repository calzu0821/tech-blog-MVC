# tech-blog-MVC

## Description
The Tech Blog CMS is a Content Management System focused on tech content, following the MVC pattern with technologies like Express.js and Sequelize. It serves as a user-friendly platform for tech enthusiasts to publish articles, share knowledge, and engage in discussions. The motivation behind its creation was to provide a space for developers to improve both coding and technical writing skills, fostering a sense of community within the tech industry. The project simplifies blog post management, encourages interactions through comments, and offers an intuitive navigation experience. Developing it enhanced my full-stack web app skills, including authentication, session management, MySQL database interactions with Sequelize, and user interface design with Handlebars.js.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To install and run the application, follow these steps:

1. Clone the repository to your local machine: `git clone https://github.com/calzu0821/tech-blog-MVC.git`
2. Navigate to the project directory using the terminal.
3. Run `npm install` to install the required dependencies.
4. Create a .env file in the root directory of the project and add the following variables (Replace with your MYSQL database credentials.): 
    - DB_HOST= local server name
    - DB_PORT= port number
    - DB_NAME= database name
    - DB_USER= database username
    - DB_PASSWORD= database password
5. Run the application: `npm start` 
6. Open your web browser and navigate to the provided local URL.

## Usage

1. Homepage
- When you first land on the site, you'll see the homepage with existing blog posts (if any) and links to get around.
- You can either log in or make a new account.
2. Sign Up
- To create a new account, just click on "Sign Up" in the menu.
- Fill in your chosen username and password, and then hit the "Sign Up" button.
- Your login info gets saved, and you'll be logged in right away.
3. Sign In
- If you already have an account, just click on "Sign In" in the menu.
- Put in your username and password, and you'll be in.
- Once you're signed in, you'll see links for the homepage, dashboard, and a way to log out.
4. Dashboard
- To check out your personal dashboard, click on "Dashboard" in the menu.
- Here, you can see your blog posts and create new ones.
- Plus, you can click on any of your old posts to change or delete them.
5. Create a Blog Post
- To write a new blog post, click "Add a New Blog Post" on your dashboard.
- Write a title and your post, and then click "Create."
- Your new blog post is saved, and you'll go back to your updated dashboard.
6. View Blog Post
- To read more about an old blog post, click on it from the homepage or your dashboard.
- You'll see the post's title, content, who wrote it, and when it was written.
- You can also leave a comment if you want.
7. Comment on Blog Post
- If you're signed in and want to leave a comment, type your comment and click "Submit."
- Your comment will be saved, and the post will show your comment, your username as the commenter, and when it was posted.
8. Logout
- To safely log out of the site, just click "Logout" in the menu.

To explore the app more, visit the live Heroku website: https://tech-blog-calzu0821-433d6a698a1e.herokuapp.com/

## Credits

Third-Party Assets:
- https://www.npmjs.com/package/express-session- 
- https://expressjs.com/en/guide/using-middleware.html
- https://sequelize.org/docs/v6/core-concepts/model-basics/
- https://www.npmjs.com/package/connect-session-sequelize
- https://developer.mozilla.org/en-US/docs/Glossary/MVC
- https://www.npmjs.com/package/express-handlebars

## License

N/A