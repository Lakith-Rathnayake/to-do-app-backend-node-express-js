import {Router} from 'express';
import {Request, Response} from "express-serve-static-core";


const controller = Router();

controller.get("/", getAllTasks);
controller.post('/', postTask);
controller.patch('/:id', updateTask);
controller.delete('/:id', deleteTask);

export {controller as TaskHttpController};

function getAllTasks(req: Request, res: Response) {

}

function postTask(req: Request, res: Response) {

}

function updateTask(req: Request, res: Response) {

}

function deleteTask(req: Request, res: Response) {

}