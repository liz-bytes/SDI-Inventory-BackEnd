# SDI-Inventory-BackEnd

# Inventory Management Backend

This project is the backend for an Inventory Management App. It uses Express for the API server, Knex as the query builder, and PostgreSQL as the database. The app supports user authentication (signup & login) and CRUD operations for inventory items (video games).

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Database Migrations & Seeds](#database-migrations--seeds)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Features

- **User Authentication:**
  - Create an account (signup)
  - Log in with credentials

- **Inventory Management:**
  - Create new inventory items
  - Read all items or a single item (with truncated description for list view)
  - Update items
  - Delete items
  - View all items for a specific inventory manager

## Tech Stack

- **Node.js & Express:** Server and routing
- **Knex.js:** Query builder and migrations
- **PostgreSQL:** Database
- **bcrypt:** Password hashing
- **CORS:** Cross-origin resource sharing middleware


## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-backend-repo.git
   cd your-backend-repo/server

# Inventory Management API

A Node.js/Express API for managing inventory items with PostgreSQL and Knex.

---

## 🛠️ Install Dependencies

```bash
npm install pg knex express nodemon

🐘 Install PostgreSQL
Make sure PostgreSQL is installed and running. Alternatively, you can use Docker.

Knex Configuration
The knexfile.js reads these values from the .env file and defines development/production settings.

🧱 Database Setup
Run Migrations
Create the necessary tables:
npx knex migrate:latest

Run Seeds
Seed the database with sample data:
npx knex seed:run

🚀 Running the Server
To start the Express server:
npm start 
*Edit the package.json with:
 "scripts": {
    "start": "nodemon ./src/app.js"
  },
*Default port is 8011

📡 API Endpoints
👤 User Authentication
POST /auth/signup
Create a new user.

Request Body:
{
  "first_name": "Alice",
  "last_name": "Anderson",
  "username": "alice_a",
  "password": "yourpassword"
}

POST /auth/login
Log in to an existing account.

Request Body:
{
  "username": "alice_a",
  "password": "yourpassword"
}

📦 Inventory Items
POST /items
Create a new item.

Request Body:

{
  "user_id": 1,
  "item_name": "Super Mario Odyssey",
  "description": "A vibrant adventure game...",
  "quantity": 3
}

GET /items
Retrieve all items with truncated descriptions.
GET /items
Retrieve all items with truncated descriptions.

PUT /items/:id
Update an item.
Request Body:
{
  "item_name": "Updated Name",
  "description": "Updated description...",
  "quantity": 5
}

DELETE /items/:id
Delete an item.

GET /users/:id/items
Get all items created by a specific inventory manager.

🧩 Troubleshooting
🔑 Foreign Key Constraint Errors
Make sure the users table is seeded before the items table.

Check that user_id values in items seed match real users.

🌐 CORS Issues
If using a frontend from another domain/port, ensure CORS is enabled in app.js.# Inventory Management Backend

This project is the backend for an Inventory Management App. It uses Express for the API server, Knex as the query builder, and PostgreSQL as the database. The app supports user authentication (signup & login) and CRUD operations for inventory items (video games).

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Database Migrations & Seeds](#database-migrations--seeds)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Features

- **User Authentication:**
  - Create an account (signup)
  - Log in with credentials

- **Inventory Management:**
  - Create new inventory items
  - Read all items or a single item (with truncated description for list view)
  - Update items
  - Delete items
  - View all items for a specific inventory manager

## Tech Stack

- **Node.js & Express:** Server and routing
- **Knex.js:** Query builder and migrations
- **PostgreSQL:** Database
- **bcrypt:** Password hashing
- **CORS:** Cross-origin resource sharing middleware


## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-backend-repo.git
   cd your-backend-repo/server

# Inventory Management API

A Node.js/Express API for managing inventory items with PostgreSQL and Knex.

---

## 🛠️ Install Dependencies

```bash
npm install pg knex express nodemon

🐘 Install PostgreSQL
Make sure PostgreSQL is installed and running. Alternatively, you can use Docker.

Knex Configuration
The knexfile.js reads these values from the .env file and defines development/production settings.

🧱 Database Setup
Run Migrations
Create the necessary tables:
npx knex migrate:latest

Run Seeds
Seed the database with sample data:
npx knex seed:run

🚀 Running the Server
To start the Express server:
npm start 
*Edit the package.json with:
 "scripts": {
    "start": "nodemon ./src/app.js"
  },
*Default port is 8011

📡 API Endpoints
👤 User Authentication
POST /auth/signup
Create a new user.

Request Body:
{
  "first_name": "Alice",
  "last_name": "Anderson",
  "username": "alice_a",
  "password": "yourpassword"
}

POST /auth/login
Log in to an existing account.

Request Body:
{
  "username": "alice_a",
  "password": "yourpassword"
}

📦 Inventory Items
POST /items
Create a new item.

Request Body:

{
  "user_id": 1,
  "item_name": "Super Mario Odyssey",
  "description": "A vibrant adventure game...",
  "quantity": 3
}

GET /items
Retrieve all items with truncated descriptions.
GET /items
Retrieve all items with truncated descriptions.

PUT /items/:id
Update an item.
Request Body:
{
  "item_name": "Updated Name",
  "description": "Updated description...",
  "quantity": 5
}

DELETE /items/:id
Delete an item.

GET /users/:id/items
Get all items created by a specific inventory manager.

🧩 Troubleshooting
🔑 Foreign Key Constraint Errors
Make sure the users table is seeded before the items table.

Check that user_id values in items seed match real users.

🌐 CORS Issues
If using a frontend from another domain/port, ensure CORS is enabled in app.js.