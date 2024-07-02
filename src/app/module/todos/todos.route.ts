import express from "express";
import { todosController } from "./todos.controller";

const router = express.Router()


router.get('/',todosController.getAllTodosFromDb);
router.post('/task',todosController.createTodo);


export const TodosRoutes = router;