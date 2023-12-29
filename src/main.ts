import express from 'express';
import {TaskHttpController} from './controller/task.http.controller.js';

const app = express();

app.use('/api/v1/tasks', TaskHttpController);

app.listen(5050, () => console.log("Server is listening on port 5050"));