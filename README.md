# To-do App Backend Using NodeJS & ExpressJS

This repository contains the backend code for a TODO application built with Node.js and Express.js. 
The backend server manages task data and communicates with a PostgreSQL database to handle CRUD operations for tasks.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web application framework for Node.js used to build RESTful APIs.
- **PostgreSQL**: Relational database management system used to store task data.
- **dotenv**: Zero-dependency module for loading environment variables from a `.env` file.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing.

## Frontend

The frontend of this TODO app can be found in the following repository:
[TODO App Frontend Repository](https://github.com/Lakith-Rathnayake/to-do-app/tree/main/frontend-react)

The deployed frontend of the TODO app is available at:
[TODO App Frontend Deployed Link](https://to-do-app-f4fa0.web.app/)

## Getting Started

### Installation

1. Clone this repository:
   ```bash
   git clone <backend_repository_url>
   cd todo-app-backend

2. Install dependencies:
   ````bash
   npm install

3. Set up environment variables:
- Create a .env file in the root directory.
- Define the following environment variables:
    ````bash
    DB_HOST=your_database_host
    DB_NAME=your_database_name
    DB_USER=your_database_user
    DB_PASSWORD=your_database_password
  
# Running the Backend

Start the server:

    npm start

The backend server will start running at `http://localhost:PORT`, where `PORT` is the specified port number.

## API Endpoints

- **GET /tasks**: Retrieve all tasks.
- **POST /tasks**: Create a new task.
- **PATCH /tasks/:id**: Update a task by ID.
- **DELETE /tasks/:id**: Delete a task by ID.

The API endpoints handle CRUD operations for managing tasks in the TODO app.

## Database Schema

The application uses a PostgreSQL database with the following schema:

- **task**:
    - id (primary key, auto-increment)
    - description (text)
    - status (boolean)
    - email (text)

Feel free to explore the API endpoints and database schema for managing tasks.

## Contributing
If you'd like to contribute to this project, please fork the repository, create a new branch, and submit a pull request.

## Version

1.0.0

## License

Copyright &copy; 2023 Lakith Rathnayake. All Rights Reserved.<br>
This project is licensed under the [MIT License](LICENSE.txt)
