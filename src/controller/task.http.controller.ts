import {Router} from 'express';
import {Request, Response} from "express-serve-static-core";
import {Pool} from 'pg';


const controller = Router();

controller.get("/", getAllTasks);
controller.post('/', postTask);
controller.patch('/:id', updateTask);
controller.delete('/:id', deleteTask);

export {controller as TaskHttpController};

const pool = new Pool({
    database: "dep11_todo_app",
    host: "localhost",
    user: 'postgres',
    port: 5432,
    password: "postgres",
    max: 10
})

async function getAllTasks(req: Request, res: Response) {
    if(!req.query.email) res.sendStatus(400);
    const connection = await pool.connect();
    const taskList = await connection.query("SELECT * FROM task WHERE email=$1 ORDER BY id", [req.query.email]);
    res.json(taskList.rows);
    connection.release();
}

async function postTask(req: Request, res: Response) {
    const connection = await pool.connect();

    connection.release();
}

function updateTask(req: Request, res: Response) {

}

function deleteTask(req: Request, res: Response) {

}