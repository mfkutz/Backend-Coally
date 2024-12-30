# Backend Project - API Documentation and Setup

Welcome to the backend repository of this project! This API is built using **Node.js**, **Express**, and **MongoDB**. Below are the steps to set it up locally and explore the API documentation.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Accessing the Documentation](#accessing-the-documentation)
- [API Endpoints](#api-endpoints)
- [Dependencies](#dependencies)
- [License](#license)

---

## Installation

Follow these steps to install the project locally:

1. **Clone the Repository**  
   Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/mfkutz/Backend-Coally.git
   ```

2. **Navigate to the Project Directory**  
   After cloning, navigate into the project directory:

   ```bash
   cd backend-project
   ```

3. **Install Dependencies**  
   Install the project dependencies with the following command:

   ```bash
   npm install
   ```

4. **Create a .env file**  
   Create a .env file based on the provided .env.example file. Make sure to add the necessary environment variables for your application to function properly.

   ```bash
   see the file .env.example
   ```

## Accessing the Documentation

This backend API is fully documented using **Swagger**. You can view the API documentation by navigating to the following URL:

[http://localhost:4000/api/docs](http://localhost:4000/api/docs)

---

## Dependencies

### Main Dependencies

- **[bcrypt](https://www.npmjs.com/package/bcrypt)**: A library for hashing passwords securely.
- **[colors](https://www.npmjs.com/package/colors)**: A library to style console output in different colors.
- **[cors](https://www.npmjs.com/package/cors)**: Middleware for enabling Cross-Origin Resource Sharing.
- **[dotenv](https://www.npmjs.com/package/dotenv)**: Loads environment variables from a `.env` file.
- **[express](https://www.npmjs.com/package/express)**: A fast, unopinionated, and minimalist web framework for Node.js.
- **[express-validator](https://www.npmjs.com/package/express-validator)**: Middleware for validating and sanitizing request data.
- **[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)**: Library for generating and verifying JWT tokens.
- **[mongoose](https://www.npmjs.com/package/mongoose)**: MongoDB object modeling tool for Node.js.
- **[morgan](https://www.npmjs.com/package/morgan)**: HTTP request logger middleware for Node.js.
- **[swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc)**: Swagger JSDoc integration for generating OpenAPI documentation from comments.
- **[swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)**: Middleware for serving Swagger UI in an Express app.
- **[winston](https://www.npmjs.com/package/winston)**: A versatile logging library for Node.js.

### Development Dependencies

- **[nodemon](https://www.npmjs.com/package/nodemon)**: Development tool that automatically restarts the server when file changes are detected.
