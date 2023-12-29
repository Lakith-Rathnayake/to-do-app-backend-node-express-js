import {Router} from 'express';
import {Request, Response} from "express-serve-static-core";
import {Pool} from 'pg';
import {TaskTO} from "../to/TaskTO";


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
    const task = <TaskTO> req.body;
    const connection = await pool.connect();
    const insertId = await connection.query("INSERT INTO task (description, status, email) VALUES ($1, false, $2) RETURNING id", [task.description, task.email]);
    connection.release();
    task.id = insertId.rows[0].id;
    task.status = false;
    res.status(201).json(task);
}

async function updateTask(req: Request, res: Response) {
    const taskId = +req.params.id;
    const task = <TaskTO> req.body;
    const connection = await pool.connect();
    const result = await connection.query("SELECT * FROM task WHERE id=$1", [taskId]);
    if(!result.rows.length){
        res.sendStatus(400);
        return;
    } else {
        await connection.query("UPDATE task SET description=$1, status=$2 WHERE id=$3",
            [task.description, task.status, taskId]);
        res.sendStatus(204);
    }
    connection.release();
}

async function deleteTask(req: Request, res: Response) {
    const taskId = +req.params.id;
    const connection = await pool.connect();
    const result = await connection.query("SELECT * FROM task WHERE id=$1", [taskId]);
    if(!result.rows.length) {
        res.sendStatus(400);
        return;
    }
    else {
        await connection.query("DELETE FROM task WHERE id=$1", [taskId]);
        res.sendStatus(204);
    }
    connection.release();
}