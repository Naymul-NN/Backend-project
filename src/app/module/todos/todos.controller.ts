import { Request, Response } from "express";
import { todosService } from "./todos.service";

const createTodo = async (req: Request, res: Response) => {
    try {
        const todoData = req.body;
        const result = await todosService.createTodo(todoData);
        await result.save();
        res.status(200).json({
            success: true,
            message: 'todos created successfully',
            data: result
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
}


const getAllTodosFromDb = async (req: Request, res: Response) => {
    try {
        const result = await todosService.getAlltodos()
        res.status(200).json({
            success: true,
            message: 'todos are recive successfully',
            data: result
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
}

export const todosController = {
    getAllTodosFromDb,
    createTodo
}