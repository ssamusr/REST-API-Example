# REST-API-Example

# Index

[Getting Started](#getting-started)

[Dependencies Used](#dependencies-used)

[Created Database](#create-database)

[Connect and synchronise the database](#connect-and-synchronise-the-database)

[Define the models](#define-the-models)

# Getting started

1. Clone or fork the repository:

```bash
https://github.com/ssamusr/REST-API-Example.git
```

2. Install dependencies with your favorite package manager:

```bash
# with npm:
npm install

# with pnpm:
pnpm install

# with yarn:
yarn install

# with ultra:
ultra install
```
3. Run in your terminal:

```bash
node --watch index.js
```

# Dependencies used

1. Express

Express.js is a minimalist web framework for Node.js used to build web applications and APIs with simplicity and flexibility.

[Express Docs](https://expressjs.com/)

```bash
npm install express --save
```

2. Axios

A promise-based HTTP client for making asynchronous requests in JavaScript environments like browsers and Node.js.

[Axios Docs](https://axios-http.com/)

```bash
npm install axios
```

3. mysql2

A Node.js driver for MySQL databases that provides improved performance and support for features like prepared statements and multiple result sets.

[mysql2 Docs](https://www.npmjs.com/package/mysql2)

```bash
npm install mysql2
```

4. Sequelize

An ORM (Object-Relational Mapping) library for Node.js that simplifies database management by providing a powerful set of features for interacting with SQL databases using JavaScript.

[Sequelize Docs](https://sequelize.org/)

```bash
npm install --save sequelize
```

5. Morgan

A logging middleware for Node.js HTTP servers, used to log requests and responses, making it easier to monitor and debug web applications.

[Morgan Docs](https://www.npmjs.com/package/morgan)

```bash
npm install morgan
```

6. dotenv

A library for Node.js that loads environment variables from a .env file into process.env, simplifying configuration management in development environments.

[dotenv Docs](https://www.npmjs.com/package/dotenv)

```bash
npm install dotenv
```

7. Cors

Cross-Origin Resource Sharing: A mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served, enhancing security and enabling cross-origin communication in web applications.

[Cors Docs](https://www.npmjs.com/package/cors)

```bash
npm install cors
```

# Create database

In your terminal:

```bash
mysql -u <user> -p
```
```bash
CREATE DATABASE <name_database>;
```

```bash
USE <name_database>;
```

Opening and connecting to TablePlus

# Connect and synchronise the database

1. Create the db folder
2. With sequelize, we connect the database. 

    [Sequelize Connecting to a Database](https://sequelize.org/docs/v6/getting-started/#connecting-to-a-database)

3. Import the functions into index.js

# Define the models

1. In the folder api/models, we define the models

    Example of a User Model

```bash
const { DataTypes } = require('sequelize')
const { connection } = require('../../databse/index')


const User = connection.define('user', {
  name: {
    type: DataTypes.STRING
  }
},
  {
    timestamps: false
  })


module.exports = User
```








